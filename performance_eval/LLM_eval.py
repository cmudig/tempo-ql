from tempo_ql import GenericDataset, formats, QueryEngine, AIAssistant
import os
import numpy as np
import pandas as pd
import time
import pandas_gbq
from pathlib import Path
from queries import QUERIES, PROMPTS

# Get comparison metrics between two DataFrames
def compare_results(df, reference_df):
    df_len = len(df)
    reference_len = len(reference_df)
    diff_with_reference = df_len - reference_len

    len_equal = diff_with_reference == 0

    if len_equal:
        piecewise_comparison = (df == reference_df).tolist()
        equal_num = sum(piecewise_comparison)
        overall_equal = equal_num == df_len
    else:
        piecewise_comparison = None
        equal_num = None
        overall_equal = None
    return len_equal, piecewise_comparison, equal_num, overall_equal

# Compare TempoQL results
def loop_compare_tempoql_results(df, tempoql_list, query_engine):
    max_equal_num = -1
    best_result = None
    for reference_df in tempoql_list:
        try:
            reference_tempoql_result = query_engine.query(reference_df)
            reference_tempoql_df = reference_tempoql_result.df[reference_tempoql_result.df.columns[-1]]
        except Exception as e:
            continue

        len_equal, piecewise_comparison, equal_num, overall_equal = compare_results(df, reference_tempoql_df) 
        if len_equal:
            return len_equal, piecewise_comparison, equal_num, overall_equal
        if equal_num is not None and equal_num > max_equal_num:
            max_equal_num = equal_num
            best_result = (len_equal, piecewise_comparison, equal_num, overall_equal)
    return best_result if best_result is not None else (False, None, None, None)

# Compare SQL results
def loop_compare_sql_results(df, sql_list, project_id):
    max_equal_num = -1
    best_result = None
    for reference_df in sql_list:
        try:
            reference_sql_result = pandas_gbq.read_gbq(reference_df, project_id=project_id)
        except Exception as e:
            continue
        reference_sql_df = reference_sql_result[reference_sql_result.columns[-1]]
        len_equal, piecewise_comparison, equal_num, overall_equal = compare_results(df, reference_sql_df)
        if len_equal:
            return len_equal, piecewise_comparison, equal_num, overall_equal
        if equal_num is not None and equal_num > max_equal_num:
            max_equal_num = equal_num
            best_result = (len_equal, piecewise_comparison, equal_num, overall_equal)
    return best_result if best_result is not None else (False, None, None, None)

# GCP project in which to run queries - make sure it has access to MIMIC-IV through physionet.org
project_id = "ai-clinician"
# name of a dataset within your project to store temporary results. Required if you plan to subset the data to run queries
scratch_dataset = "ai-clinician.tempo_ql_scratch_mimic"

# Initialize query engine and variable store
dataset = GenericDataset(f'bigquery://{project_id}', formats.mimiciv(), 
                        scratch_schema_name=scratch_dataset)
dataset.reset_trajectory_ids()

query_engine = QueryEngine(dataset)

all_patient_ids = query_engine.get_ids()

gemini_api_key = None
ai_assistant = AIAssistant(gemini_api_key=gemini_api_key)

# Create results directory if it doesn't exist
results_dir = Path("LLM_results")
results_dir.mkdir(exist_ok=True)

if os.path.exists("LLM_performance_results.csv"):
    results = pd.read_csv("LLM_performance_results.csv", index_col=0).to_dict(orient='record')
else:
    results = []

llm_comparison_metrics = []

seeds = [123, 456, 789]

for id_size in [1000, 5000, 10000, 50000]:
    for i, seed in enumerate(seeds):
        # sample trajectory IDs
        print("Seed", seed)
        np.random.seed(seed)
        dataset.set_trajectory_ids(list(np.random.choice(all_patient_ids, size=id_size, replace=False)))
        
        for query in QUERIES:
            # Create query-specific directory
            query_dir = results_dir / query["name"]
            query_dir.mkdir(exist_ok=True)
            
            # Time TempoQL query with error handling
            start_tempoql = time.time()
            tempoql_error = None
            tempoql_df = pd.DataFrame()
            tempoql_query = None
            
            try:
                tempoql_query = ai_assistant.process_question(question=query["prompt"])['extracted_query']
                tempoql_result = query_engine.query(tempoql_query)
                tempoql_df = tempoql_result.df[tempoql_result.df.columns[-1]]
                tempoql_time = time.time() - start_tempoql
                    
            except Exception as e:
                tempoql_time = time.time() - start_tempoql
                tempoql_error = str(e)
                # Create error DataFrame
                tempoql_df = pd.DataFrame({
                    'error': [tempoql_error],
                    'query': [tempoql_query if tempoql_query else "Failed to generate query"],
                    'timestamp': [pd.Timestamp.now()]
                })
            
            # Time SQL query with error handling
            start_sql = time.time()
            sql_error = None
            sql_df = pd.DataFrame()
            sql_query = None
            
            try:
                sql_query = ai_assistant.process_sql_question(question=query["prompt"]).get('extracted_query')
                df = pandas_gbq.read_gbq(sql_query, project_id=project_id)
                sql_df = df[df.columns[-1]]  # This is already a Series
                sql_time = time.time() - start_sql
                
            except Exception as e:
                sql_time = time.time() - start_sql
                sql_error = str(e)
                # Create error DataFrame
                sql_df = pd.DataFrame({
                    'error': [sql_error],
                    'query': [sql_query if sql_query else "Failed to generate query"],
                    'timestamp': [pd.Timestamp.now()]
                })
            
            tempoql_list = [query["tempoql"]] + query["alternative_tempoql"]
            sql_list = [query["sql"]] + query["alternative_sql"]
            tempoql_len_equal, tempoql_piecewise_comparison, tempoql_equal_num, tempoql_overall_equal = loop_compare_tempoql_results(tempoql_df, tempoql_list, query_engine)
            sql_len_equal, sql_piecewise_comparison, sql_equal_num, sql_overall_equal = loop_compare_sql_results(sql_df, sql_list, project_id)

            # Add comparison metrics to results
            llm_comparison_metrics.append({
                "query_name": query["name"],
                "iteration": i + 1,
                "tempoql_len_equal": tempoql_len_equal,
                "sql_len_equal": sql_len_equal,
                "tempoql_piecewise_comparison": tempoql_piecewise_comparison,
                "sql_piecewise_comparison": sql_piecewise_comparison,
                "tempoql_equal_num": tempoql_equal_num,
                "sql_equal_num": sql_equal_num,
                "tempoql_overall_equal": tempoql_overall_equal,
                "sql_overall_equal": sql_overall_equal
            })

            # Save results to files
            tempoql_filename = query_dir / f"tempoql_seed{seed}_size{id_size}.csv"
            sql_filename = query_dir / f"sql_seed{seed}_size{id_size}.csv"
            
            tempoql_df.to_csv(tempoql_filename, index=False)
            sql_df.to_csv(sql_filename, index=False)

            # Add performance metrics to results
            results.append({
                "query_name": query["name"],
                "iteration": i + 1,
                "tempoql_time": tempoql_time,
                "sql_time": sql_time,
                "tempoql_n_rows": len(tempoql_df),
                "sql_n_rows": len(sql_df),
                "tempoql_length": len(tempoql_df),
                "sql_length": len(sql_df),
                "id_size": id_size,
                "seed": seed,
                "tempoql_filename": str(tempoql_filename),
                "sql_filename": str(sql_filename),
                "tempoql_error": tempoql_error,
                "sql_error": sql_error,
                "tempoql_success": tempoql_error is None,
                "sql_success": sql_error is None
            })
            
    # Save results after all iterations
    pd.DataFrame(results).to_csv("LLM_performance_results.csv", index=False)
    pd.DataFrame(llm_comparison_metrics).to_csv("LLM_comparison_metrics.csv", index=False)

# Print summary
print(f"\n✅ Results saved to: {results_dir.absolute()}")
print(f"📊 Performance metrics saved to: LLM_performance_results.csv")