from tempo_ql import GenericDataset, formats, QueryEngine
import os
import numpy as np
import pandas as pd
import time
import pandas_gbq

SQL_PREFIX = """
WITH stays AS (
    SELECT * FROM `physionet-data.mimiciv_3_1_icu.icustays` s
    INNER JOIN `ai-clinician.tempo_ql_scratch_mimic.tempo_trajectory_ids` t
    ON s.stay_id = t.trajectory_id
)
"""

QUERIES = [
    {
        "name": "Attributes",
        "tempoql": "({Admit Time} - {Anchor Year}) as years + {Anchor Age}",
        "sql": SQL_PREFIX + """
            SELECT stays.stay_id AS stay_id, EXTRACT(YEAR FROM (stays.intime - DATETIME(CONCAT(CAST(pat.anchor_year AS STRING), "-01-01")))) + pat.anchor_age AS age
            FROM stays
            INNER JOIN `physionet-data.mimiciv_3_1_hosp.patients` pat
            ON pat.subject_id = stays.subject_id
            ORDER BY stay_id ASC
        """
    },
    {
        "name": "Events",
        "tempoql": "{Respiratory Rate; scope = chartevents}",
        "sql": SQL_PREFIX + """
            , matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'Respiratory Rate'
            )
            SELECT DISTINCT ce.stay_id AS stay_id, 
                            ce.charttime AS time, 
                            ce.itemid AS eventtype,
                            ce.value AS value
                        FROM `physionet-data.mimiciv_3_1_icu.chartevents` ce
                        INNER JOIN matching_eventids 
                        ON ce.itemid = matching_eventids.itemid
                        INNER JOIN stays
                        ON ce.stay_id = stays.stay_id
                        ORDER BY stay_id, time ASC
        """
    },
    {
        "name": "String Operations",
        "tempoql": "{Diagnosis; scope = Diagnosis} contains /\\b(?:40[1-5]|I1[01235]')/i",
        "sql": SQL_PREFIX + """
        SELECT
            vas.stay_id,
            vas.outtime AS time,
            'Diagnosis' AS type,
            CAST(REGEXP_CONTAINS(dia.icd_code, r"(?i)\b(?:40[1-5]|I1[01235])") AS INT64) AS value
        FROM
            `physionet-data.mimiciv_3_1_hosp.diagnoses_icd` AS dia
        INNER JOIN
            stays AS vas
            ON dia.hadm_id = vas.hadm_id
        ORDER BY
            stay_id ASC,
            time ASC
        """
    },
    {
        "name": "Discretizing Observations",
        "tempoql": "{Platelet Count; scope = Lab; value = valuenum} cut bins [-inf, 130, 400, inf] named ['Low', 'Normal', 'High']",
        "sql": SQL_PREFIX + """,
        matching_eventids AS (
            SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_hosp.d_labitems` d
            WHERE d.label = 'Platelet Count'
        )
        SELECT
            s.stay_id,
            le.charttime AS time,
            'Platelet Count' AS eventtype,
            CASE
                WHEN le.valuenum < 130 THEN 'Low'
                WHEN le.valuenum BETWEEN 130 AND 400 THEN 'Normal'
                ELSE 'High'
            END AS value
        FROM
            `physionet-data.mimiciv_3_1_hosp.labevents` AS le
        INNER JOIN
            `matching_eventids` AS mei
            ON le.itemid = mei.itemid
        INNER JOIN
            `stays` AS s
            ON le.hadm_id = s.hadm_id AND le.subject_id = s.subject_id
        ORDER BY
            s.stay_id,
            le.charttime
        """
    },
    {
        "name": "Patient-Level Aggregation",
        "tempoql": "min {Non Invasive Blood Pressure mean; scope = chartevents} from #mintime to #maxtime",
        "sql": SQL_PREFIX + """, matching_eventids AS (
            SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
            WHERE d.label = 'Non Invasive Blood Pressure mean'
        )
        SELECT DISTINCT ce.stay_id AS stay_id, 
                        MIN(ce.value) AS value
                    FROM `physionet-data.mimiciv_3_1_icu.chartevents` ce
                    INNER JOIN matching_eventids 
                    ON ce.itemid = matching_eventids.itemid
                    INNER JOIN stays
                    ON ce.stay_id = stays.stay_id
                    GROUP BY ce.stay_id
                    ORDER BY stay_id ASC
        """,
    },
    {
        "name": "Daily Aggregation",
        "tempoql": "mean {Lactate; scope = Lab; value = valuenum} from #now - 1 day to #now every 1 day from {Admit Time} to {Discharge Time}",
        "sql": SQL_PREFIX + """, matching_eventids AS (
            SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_hosp.d_labitems` d
            WHERE d.label = 'Lactate'
        )
        ,
        DailyTimePoints AS (
            SELECT
                swh.hadm_id,
                swh.stay_id,
                generated_time AS time_point_end_window
            FROM
                stays AS swh,
                UNNEST(GENERATE_TIMESTAMP_ARRAY(
                    CAST(swh.intime AS TIMESTAMP),
                    CAST(swh.outtime AS TIMESTAMP),
                    INTERVAL 24 HOUR
                )) AS generated_time
        ),
        LactateMeasurements AS (
            -- Retrieve all valid lactate measurements from labevents.
            SELECT
                le.hadm_id,
                le.charttime,
                le.valuenum
            FROM
                `physionet-data.mimiciv_3_1_hosp.labevents` AS le
            INNER JOIN
                matching_eventids AS li
                ON le.itemid = li.itemid
            WHERE
                le.valuenum IS NOT NULL
                AND le.valuenum >= 0 -- Ensure numerical and non-negative values for averaging
        )
        SELECT DISTINCT
            dtp.stay_id,
            dtp.time_point_end_window AS time,
            AVG(lm.valuenum) AS value
        FROM
            DailyTimePoints AS dtp
        LEFT JOIN
            LactateMeasurements AS lm
            ON dtp.hadm_id = lm.hadm_id
            -- Filter lactate measurements to fall within the specific 24-hour window
            -- ending at 'time_point_end_window'.
            AND CAST(lm.charttime AS TIMESTAMP) > TIMESTAMP_SUB(dtp.time_point_end_window, INTERVAL 24 HOUR)
            AND CAST(lm.charttime AS TIMESTAMP) <= dtp.time_point_end_window
        GROUP BY
            dtp.stay_id,
            dtp.time_point_end_window
        ORDER BY
            dtp.stay_id,
            dtp.time_point_end_window
        """
    },
    {
        "name": "Aggregation in Overlapping Intervals",
        "tempoql": "min {Non Invasive Blood Pressure mean; scope = chartevents} from #now - 8 h to #now every 4 h",
        "sql": SQL_PREFIX + """, matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'Non Invasive Blood Pressure mean'
            ), GeneratedTimePoints AS (
            SELECT
                s.stay_id,
                generated_time AS time_point_end_window
            FROM
                `stays` AS s,
                UNNEST(GENERATE_TIMESTAMP_ARRAY(
                    CAST(s.intime AS TIMESTAMP),
                    CAST(s.outtime AS TIMESTAMP) ,
                    INTERVAL 4 HOUR
                )) AS generated_time
        ),
        MBP_Measurements AS (
            SELECT
                ce.stay_id,
                ce.charttime,
                ce.valuenum
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
            WHERE
                ce.valuenum IS NOT NULL
                AND ce.valuenum >= 0
        )
        SELECT DISTINCT
            gtp.stay_id,
            gtp.time_point_end_window AS time,
            MIN(mbp.valuenum) AS value
        FROM
            GeneratedTimePoints AS gtp
        LEFT JOIN
            MBP_Measurements AS mbp
            ON gtp.stay_id = mbp.stay_id
            AND CAST(mbp.charttime AS TIMESTAMP) > TIMESTAMP_SUB(gtp.time_point_end_window, INTERVAL 8 HOUR)
            AND CAST(mbp.charttime AS TIMESTAMP) <= gtp.time_point_end_window
        GROUP BY
            gtp.stay_id,
            gtp.time_point_end_window
        ORDER BY
            gtp.stay_id,
            gtp.time_point_end_window
        """
    },
    {
        "name": "Aggregating Existence at Event Times",
        "tempoql": "exists {Invasive Ventilation; scope = procedureevents} before #now at every start({Invasive Ventilation; scope = procedureevents})",
        "sql": SQL_PREFIX + """, matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'Invasive Ventilation'
            ),
            VentilationEvents AS (
                SELECT
                    ce.stay_id,
                    ce.starttime
                FROM
                    `physionet-data.mimiciv_3_1_icu.procedureevents` AS ce
                INNER JOIN
                    `matching_eventids` AS mei
                    ON ce.itemid = mei.itemid
                WHERE
                    ce.stay_id IN (SELECT stay_id FROM `stays`)
            )
            SELECT DISTINCT
                ve.stay_id,
                ve.starttime AS time,
                CASE
                    WHEN LAG(ve.starttime) OVER (PARTITION BY ve.stay_id ORDER BY ve.starttime) IS NOT NULL THEN 1
                    ELSE 0
                END AS value
            FROM
                VentilationEvents AS ve
            ORDER BY
                ve.stay_id,
                ve.starttime
        """
    },
    {
        "name": "Aggregating Counts at Event Times",
        "tempoql": "count {Cardioversion/Defibrillation; scope = procedureevents} from #now to #now + 24 h at every {Heart Rhythm; scope = chartevents}",
        "sql": SQL_PREFIX + """,
        HeartRhythmItemIDs AS (
            SELECT itemid FROM `physionet-data.mimiciv_3_1_icu.d_items`
            WHERE label = 'Heart Rhythm'
        ),
        CardioDefibItemIDs AS (
            SELECT itemid FROM `physionet-data.mimiciv_3_1_icu.d_items`
            WHERE label = 'Cardioversion/Defibrillation'
        ),
        HeartRhythmEvents AS (
            SELECT
                ce.stay_id,
                ce.charttime
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                HeartRhythmItemIDs AS hri
                ON ce.itemid = hri.itemid
            INNER JOIN
                stays AS s
                ON ce.stay_id = s.stay_id
        ),
        CardioDefibProcedures AS (
            SELECT
                ce.stay_id,
                ce.starttime AS procedure_charttime
            FROM
                `physionet-data.mimiciv_3_1_icu.procedureevents` AS ce
            INNER JOIN
                CardioDefibItemIDs AS cdi
                ON ce.itemid = cdi.itemid
            INNER JOIN
                stays AS s
                ON ce.stay_id = s.stay_id
        )
        SELECT DISTINCT
            hre.stay_id,
            hre.charttime AS time,
            COUNT(cdp.procedure_charttime) AS value
        FROM
            HeartRhythmEvents AS hre
        LEFT JOIN
            CardioDefibProcedures AS cdp
            ON hre.stay_id = cdp.stay_id
            AND CAST(cdp.procedure_charttime AS TIMESTAMP) BETWEEN CAST(hre.charttime AS TIMESTAMP)
                                        AND TIMESTAMP_ADD(CAST(hre.charttime AS TIMESTAMP), INTERVAL 24 HOUR)
        GROUP BY
            hre.stay_id,
            hre.charttime
        ORDER BY
            hre.stay_id,
            hre.charttime
        """
    },
    {
        "name": "Rolling Difference",
        "tempoql": "temp - (mean temp from #now - 8 h to #now at every temp) with temp as {Temperature Fahrenheit; scope = chartevents}",
        "sql": SQL_PREFIX + """, 
        matching_eventids AS (
            SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
            WHERE d.label = 'Temperature Fahrenheit'
        ),
        TemperatureEvents AS (
            SELECT
                ce.stay_id,
                ce.charttime,
                ce.valuenum
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
            INNER JOIN
                `stays` AS s
                ON ce.stay_id = s.stay_id
            WHERE
                ce.valuenum IS NOT NULL
        )
        SELECT
            te.stay_id,
            te.charttime AS time,
            'Temperature' AS eventtype,
            te.valuenum - AVG(te.valuenum) OVER (
                PARTITION BY te.stay_id
                ORDER BY UNIX_SECONDS(CAST(te.charttime AS TIMESTAMP))
                RANGE BETWEEN 28800 PRECEDING AND 1 PRECEDING
            ) AS value
        FROM
            TemperatureEvents AS te
        ORDER BY
            te.stay_id,
            te.charttime
        """
    },
    {
        "name": "Imputing Missing Values",
        "tempoql": "mean {Temperature Fahrenheit; scope = chartevents} from #now - 4 h to #now impute mean every 4 h from {Admit Time} to {Discharge Time}",
        "sql": SQL_PREFIX + """, 
        matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'Temperature Fahrenheit'
            ),
        OverallMeanTemperature AS (
            SELECT
                AVG(ce.valuenum) AS global_avg_temp
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
            WHERE
                ce.valuenum IS NOT NULL
        ),
        GeneratedTimePoints AS (
            SELECT
                s.stay_id,
                generated_time AS time_point_end_window
            FROM
                `stays` AS s, -- Assumed user-provided table, a subset of `physionet-data.mimiciv_3_1_icu.icustays`
                UNNEST(GENERATE_TIMESTAMP_ARRAY(
                    CAST(s.intime AS TIMESTAMP),
                    CAST(s.outtime AS TIMESTAMP),
                    INTERVAL 4 HOUR
                )) AS generated_time
        ),
        FilteredTemperatureEvents AS (
            SELECT
                ce.stay_id,
                ce.charttime,
                ce.valuenum
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
            INNER JOIN
                `stays` AS s
                ON ce.stay_id = s.stay_id
            WHERE
                ce.valuenum IS NOT NULL
        )
        SELECT
            gtp.stay_id,
            gtp.time_point_end_window AS time,
            COALESCE(
                AVG(fte.valuenum),
                (SELECT global_avg_temp FROM OverallMeanTemperature)
            ) AS value
        FROM
            GeneratedTimePoints AS gtp
        LEFT JOIN
            FilteredTemperatureEvents AS fte
            ON gtp.stay_id = fte.stay_id
            AND CAST(fte.charttime AS TIMESTAMP) > TIMESTAMP_SUB(gtp.time_point_end_window, INTERVAL 4 HOUR)
            AND CAST(fte.charttime AS TIMESTAMP) <= gtp.time_point_end_window
        GROUP BY
            gtp.stay_id,
            gtp.time_point_end_window
        ORDER BY
            gtp.stay_id,
            gtp.time_point_end_window
        """
    },
    {
        "name": "Carrying Values Forward",
        "tempoql": "last {O2 Delivery Device(s); scope = chartevents} from #now - 1 day to #now carry 2 days every 1 day from {Admit Time} to {Discharge Time}",
        "sql": SQL_PREFIX + """, 
        matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'O2 Delivery Device(s)'
            ),
        GeneratedTimePoints AS (
            SELECT
                s.stay_id,
                generated_time AS time_point_end_window
            FROM
                `stays` AS s,
                UNNEST(GENERATE_TIMESTAMP_ARRAY(
                    CAST(s.intime AS TIMESTAMP),
                    CAST(s.outtime AS TIMESTAMP),                                 
                    INTERVAL 24 HOUR                          
                )) AS generated_time
        ),
        O2Events AS (
            SELECT
                ce.stay_id,
                ce.charttime,
                ce.value
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
            INNER JOIN
                `stays` AS s
                ON ce.stay_id = s.stay_id
            WHERE
                ce.value IS NOT NULL
        ),
        WindowsWithEarliestValue AS (
            SELECT
                gtp.stay_id,
                gtp.time_point_end_window,
                ARRAY_AGG(o2e.value ORDER BY o2e.charttime ASC LIMIT 1)[OFFSET(0)] AS current_window_value
            FROM
                GeneratedTimePoints AS gtp
            LEFT JOIN
                O2Events AS o2e
                ON gtp.stay_id = o2e.stay_id
                AND CAST(o2e.charttime AS TIMESTAMP) > TIMESTAMP_SUB(gtp.time_point_end_window, INTERVAL 24 HOUR)
                AND CAST(o2e.charttime AS TIMESTAMP) <= gtp.time_point_end_window
            GROUP BY
                gtp.stay_id,
                gtp.time_point_end_window
        )
        SELECT
            wwev.stay_id,
            wwev.time_point_end_window AS time,
            LAST_VALUE(wwev.current_window_value IGNORE NULLS) OVER (
                PARTITION BY wwev.stay_id
                ORDER BY UNIX_SECONDS(wwev.time_point_end_window)
                RANGE BETWEEN 172800 PRECEDING AND 1 PRECEDING
            ) AS value
        FROM
            WindowsWithEarliestValue AS wwev
        ORDER BY
            wwev.stay_id,
            wwev.time_point_end_window
        """
    }
]

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

if os.path.exists("performance_results.csv"):
    results = pd.read_csv("performance_results.csv", index_col=0).to_dict(orient='record')
else:
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
            pd.DataFrame(results).to_csv("performance_results.csv", index=False)