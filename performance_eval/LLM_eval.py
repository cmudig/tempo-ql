from tempo_ql import GenericDataset, formats, QueryEngine
from tempo_ql.ai_assistant import AIAssistant
import os
import numpy as np
import pandas as pd
import time
import pandas_gbq
from pathlib import Path
from queries import QUERIES
import traceback

# GCP project in which to run queries - make sure it has access to MIMIC-IV through physionet.org
project_id = "ai-clinician"
# name of a dataset within your project to store temporary results. Required if you plan to subset the data to run queries
scratch_dataset = "ai-clinician.tempo_ql_scratch_mimic"
# your Gemini API key for running LLM queries
gemini_api_key = open('../gemini_key.txt').read().strip()


# Get comparison metrics between two DataFrames
def compare_results(df, reference_df, evaluate_by=None):
    if len(df) != len(reference_df):
        print("Lengths don't match")
        return False   
    if evaluate_by == "mean":
        if np.abs(np.mean(df) - np.mean(reference_df)) >= 1e-3:
            print("Means don't match", np.mean(df), "vs", np.mean(reference_df))
            return False
        print("Match!")
        return True
    elif evaluate_by == "counts":
        if df.value_counts().to_dict() != reference_df.value_counts().to_dict():
            print("Counts don't match")
            return False
        print("Match!")
        return True
    elif pd.api.types.is_numeric_dtype(reference_df.dtype) and (np.abs(df.values - reference_df.values) > 0.01).mean() > 0.1:
        print((np.abs(df.values - reference_df.values) > 0.01).sum(), "values don't match")
        return False
    elif not pd.api.types.is_numeric_dtype(reference_df.dtype):
        str_df = df.astype('string').fillna('')
        str_reference_df = reference_df.astype('string').fillna('')
        if (
            not (str_df == str_reference_df).all()
        ):
            print("Values don't match", str_df.head(10), str_reference_df.head(10))
            return False
        print("Match!")
        return True
    print("Match!")
    return True

# Compare results to reference dataframes
def loop_compare_results(df, allowed_results, evaluate_by=None):
    return any(compare_results(df, reference, evaluate_by=evaluate_by) for reference in allowed_results)

def get_sql_result_values(df, subset_ids):
    print("getting result from", df)
    sort_columns = [df.columns[0], df.columns[1]] if len(df.columns) > 2 and 'time' in df.columns[1].lower() else [df.columns[0]]
    df = df.sort_values(sort_columns)
    ids = df.iloc[:,0]
    return df[ids.isin(subset_ids)].iloc[:,-1].reset_index(drop=True)

def get_tempoql_result_values(result, subset_ids):
    print("getting result from", result)
    ids = result.get_ids()
    return result.get_values()[ids.isin(subset_ids)].reset_index(drop=True)

# Initialize query engine and variable store
dataset = GenericDataset(f'bigquery://{project_id}', formats.mimiciv(), 
                        scratch_schema_name=scratch_dataset)
dataset.reset_trajectory_ids()

query_engine = QueryEngine(dataset)

ai_assistant = AIAssistant(query_engine, api_key=gemini_api_key)

# Create results directory if it doesn't exist
results_dir = Path("LLM_eval/results")
results_dir.mkdir(exist_ok=True)

results = []

n_iterations = 10

# this is needed so that the ground-truth SQL queries still have a trajectory table to lookup
all_ids = dataset.get_ids()

# subset the trajectories for quicker evaluation (the queries will still be run over the entire dataset)
np.random.seed(123)
sample_ids = np.random.choice(all_ids, size=1000, replace=False)
dataset.set_trajectory_ids(sample_ids)

for i in range(n_iterations):       
    print("Iteration", i) 

    for query in QUERIES:
        # if query["name"] not in  ("Aggregating Counts at Event Times", "Carrying Values Forward"): continue
        print(query["name"])
        
        try:
            query_dir = results_dir / query["name"]
            query_dir.mkdir(exist_ok=True)

            valid_tempoql = set([s.strip() for s in [query["tempoql"], *query["alternative_tempoql"]]])
            valid_sql = set([query["sql"], *query["alternative_sql"]])
            ground_truth_dir = query_dir / "ground_truth"
            ground_truth_dir.mkdir(exist_ok=True)

            allowed_results_files = list(ground_truth_dir.glob(f"allowed_result_*.csv"))
            allowed_results = []

            if allowed_results_files:
                # Load allowed_results from ground_truth directory
                for file in allowed_results_files:
                    allowed_results.append(pd.read_csv(file, keep_default_na=False, na_values=['', " ", "#N/A", "#N/A N/A", "#NA", "-1.#IND", "-1.#QNAN", "-NaN", "-nan", "1.#IND", "1.#QNAN", "<NA>", "N/A", "NA", "NULL", "NaN", "n/a", "nan", "null "]).iloc[:,0])
            else:
                # Compute allowed_results and save to ground_truth directory
                allowed_results = [
                    *[get_tempoql_result_values(query_engine.query(q), sample_ids)
                        for q in valid_tempoql],
                    *[get_sql_result_values(pandas_gbq.read_gbq(q, project_id=project_id), sample_ids)
                        for q in valid_sql],
                ]
                for idx, result in enumerate(allowed_results):
                    result.to_csv(ground_truth_dir / f"allowed_result_{idx}.csv", index=False)

            tempoql_error = None
            tempoql_values = None
            tempoql_query = None
            tempoql_is_valid = False
            tempoql_result = None
            
            try:
                answer = ai_assistant.process_question(question=query["prompt"])
                tempoql_query = answer['extracted_query']
                while not tempoql_query or not tempoql_query.strip():
                    answer = ai_assistant.process_question(question=query["prompt"])
                    tempoql_query = answer['extracted_query']
                print("TEMPOQL:", tempoql_query)
                if tempoql_query.strip() in valid_tempoql:
                    # the query is identical to one that already exists
                    tempoql_is_valid = True
                else:
                    tempoql_result = query_engine.query(tempoql_query)
                    tempoql_values = get_tempoql_result_values(tempoql_result, sample_ids)
                    tempoql_is_valid = tempoql_values is not None and loop_compare_results(tempoql_values, allowed_results, evaluate_by=query.get("evaluate_by"))
            except Exception as e:
                traceback.print_exc()
                tempoql_error = str(e)
            
            # Add comparison metrics to results
            results.append({
                "query_name": query["name"],
                "iteration": i + 1,
                "method": "TempoQL",
                "result": "valid" if tempoql_is_valid else ("error" if tempoql_error is not None else "invalid"),
                "error": tempoql_error,
                "query": tempoql_query
            })
            if tempoql_is_valid:
                valid_tempoql.add(tempoql_query.strip())

            sql_error = None
            sql_values = None
            sql_query = None
            sql_is_valid = False
            sql_result = None
            
            try:
                sql_query = ai_assistant.process_sql_question(question=query["prompt"]).get('extracted_query')
                while not sql_query or not sql_query.strip():
                    sql_query = ai_assistant.process_sql_question(question=query["prompt"]).get('extracted_query')
                print("SQL:", sql_query)
                if sql_query.strip() in valid_sql:
                    # the query is identical to one that already exists
                    sql_is_valid = True
                else:
                    sql_query = sql_query.replace("`physionet-data.mimiciv_3_1_icu.icustays`", "`ai-clinician.tempo_ql_scratch_mimic.icustays`")
                    sql_result = pandas_gbq.read_gbq(sql_query, project_id=project_id)
                    sql_values = get_sql_result_values(sql_result, sample_ids)
                    sql_is_valid = sql_values is not None and loop_compare_results(sql_values, allowed_results, evaluate_by=query.get("evaluate_by"))
            except Exception as e:
                traceback.print_exc()
                sql_error = str(e)
            
            # Add comparison metrics to results
            results.append({
                "query_name": query["name"],
                "iteration": i + 1,
                "method": "SQL",
                "result": "valid" if sql_is_valid else ("error" if sql_error is not None else "invalid"),
                "error": sql_error,
                "query": sql_query
            })
            if sql_is_valid:
                valid_sql.add(sql_query.strip())

            # Save results to files
            if tempoql_values is not None:
                tempoql_filename = query_dir / f"tempoql_iteration{i}.csv"
                tempoql_values.to_csv(tempoql_filename, index=False)
                
            if sql_values is not None:
                sql_filename = query_dir / f"sql_iteration{i}.csv"
                sql_values.to_csv(sql_filename, index=False)
                
            # Save results after all iterations
            pd.DataFrame(results).to_csv("LLM_eval/LLM_performance_results.csv", index=False)
        except Exception as e:
            with open("crash_log.txt", "a") as file:
                file.write(f'skipped {query["name"]}, iteration {i}\n')
                file.write(traceback.format_exc() + '\n\n')
# Print summary
print(f"\nResults saved to: {results_dir.absolute()}")