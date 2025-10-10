from tempo_ql import GenericDataset, formats, QueryEngine
import os
import numpy as np
import pandas as pd
import time
import pandas_gbq
from queries import QUERIES

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

results = []
seeds = [123, 456, 789]

for id_size in [1000, 5000, 10000, 50000]:
    for i, seed in enumerate(seeds):
        # sample trajectory IDs
        print("Seed", seed)
        np.random.seed(seed)
        dataset.set_trajectory_ids(list(np.random.choice(all_patient_ids, size=id_size, replace=False)))
        
        for query in QUERIES:
            print(query["name"])
            # Time TempoQL query
            start_tempoql = time.time()
            result = query_engine.query(query["tempoql"])
            tempoql_time = time.time() - start_tempoql

            results.append({
                "query_name": query["name"],
                "method": "TempoQL",
                "iteration": i + 1,
                "time": tempoql_time,
                "n_rows": len(result) if hasattr(result, "__len__") else None,
                "id_size": id_size
            })
            
            # Time SQL query
            start_sql = time.time()
            result = pandas_gbq.read_gbq(query["sql"], project_id=project_id)
            sql_time = time.time() - start_sql

            results.append({
                "query_name": query["name"],
                "method": "SQL",
                "iteration": i + 1,
                "time": sql_time,
                "n_rows": len(result) if hasattr(result, "__len__") else None,
                "id_size": id_size
            })
            
            time.sleep(5)
            pd.DataFrame(results).to_csv("time_eval/performance_results.csv", index=False)