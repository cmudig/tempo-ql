"""
Query definitions for performance evaluation.
Contains TempoQL and SQL queries for various operations.
"""

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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [SQL_PREFIX + """
            SELECT stays.stay_id AS stay_id, EXTRACT(YEAR FROM stays.intime) - pat.anchor_year + pat.anchor_age AS age
            FROM stays
            INNER JOIN `physionet-data.mimiciv_3_1_hosp.patients` pat
            ON pat.subject_id = stays.subject_id
            ORDER BY stay_id ASC
        """],
        "prompt": "Extract each patient's age at the time of their ICU admission."
    },
    {
        "name": "Events",
        "tempoql": "{Respiratory Rate; scope = chartevents}",
        "sql": SQL_PREFIX + """
            , matching_eventids AS (
                SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
                WHERE d.label = 'Respiratory Rate'
            )
            SELECT ce.stay_id AS stay_id, 
                            ce.charttime AS time, 
                            ce.itemid AS eventtype,
                            ce.value AS value
                        FROM `physionet-data.mimiciv_3_1_icu.chartevents` ce
                        INNER JOIN stays
                        ON ce.stay_id = stays.stay_id
                        INNER JOIN matching_eventids 
                        ON ce.itemid = matching_eventids.itemid
                        ORDER BY stay_id, time ASC
        """,
        "alternative_tempoql": [
            "{scope = chartevents; name contains /respiratory rate/i}",
            "{scope = chartevents; id in (220210, 224689, 224690)}",
            "{scope = chartevents; id in (220210, 224689, 224688, 224690)}"
        ],
        "alternative_sql": [SQL_PREFIX + """
        SELECT
            ce.stay_id,
            ce.charttime,
            ce.value
            FROM
            `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            WHERE
            ce.itemid IN (
                220210, -- Respiratory Rate
                224689, -- Respiratory Rate (spontaneous)
                224690 -- Respiratory Rate (Total)
            )
        """],
        "prompt": "Extract all respiratory rate measurements from the chartevents table."
    },
    {
        "name": "String Operations",
        "tempoql": "{Diagnosis; scope = Diagnosis} contains /\\b(?:40[1-5]|I1[01235])/i",
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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Extract a boolean value for each diagnosis indicating whether it is related to diabetes. "
        "ICD-9/10 codes related to diabetes start with the following possible prefixes: 401, 402, "
        "403, 404, 405, I10, I11, I12, I13, I15. Use the ICU discharge time as the timestamp for "
        "the diagnosis if applicable.",
        "evaluate_by": "mean"
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
            `stays` AS s
            ON le.hadm_id = s.hadm_id AND le.subject_id = s.subject_id
        INNER JOIN
            `matching_eventids` AS mei
            ON le.itemid = mei.itemid
        ORDER BY
            s.stay_id,
            le.charttime
        """,
        "alternative_tempoql": [],
        "alternative_sql": [SQL_PREFIX + """, platelet_events AS (
            SELECT
                le.hadm_id,
                le.charttime,
                le.valuenum
            FROM `physionet-data.mimiciv_3_1_hosp.labevents` AS le
            INNER JOIN `physionet-data.mimiciv_3_1_hosp.d_labitems` AS dli
                ON le.itemid = dli.itemid
            WHERE
                dli.label = 'Platelet Count'
            )
            SELECT
            icu.stay_id,
            pe.charttime,
            CASE
                WHEN pe.valuenum < 130 THEN 'Low'
                WHEN pe.valuenum >= 400 THEN 'High'
                WHEN pe.valuenum IS NOT NULL THEN 'Normal'
                ELSE NULL
            END AS value
            FROM stays AS icu
            INNER JOIN platelet_events AS pe
            ON icu.hadm_id = pe.hadm_id
            WHERE
            pe.charttime >= icu.intime AND pe.charttime < icu.outtime"""],
        "prompt": "Extract all Platelet Count observations from the lab results table, "
        "without excluding those with missing values. While preserving missingness, discretize the values "
        "so that if value < 130, the output value is 'Low', and if value >= 400 the output is 'High', "
        "otherwise it should be 'Normal'.",
        "evaluate_by": "counts"
    },
    {
        "name": "Patient-Level Aggregation",
        "tempoql": "min {Non Invasive Blood Pressure mean; scope = chartevents} from #mintime to #maxtime",
        "sql": SQL_PREFIX + """, matching_eventids AS (
            SELECT DISTINCT d.itemid AS itemid FROM `physionet-data.mimiciv_3_1_icu.d_items` d
            WHERE d.label = 'Non Invasive Blood Pressure mean'
        ),
        matching_events AS (
            SELECT DISTINCT ce.stay_id AS stay_id,
                ce.charttime AS charttime,
                ce.value AS value
            FROM `physionet-data.mimiciv_3_1_icu.chartevents` ce
            INNER JOIN matching_eventids 
            ON ce.itemid = matching_eventids.itemid
        )
        SELECT DISTINCT stays.stay_id AS stay_id, 
                        MIN(matching_events.value) AS value
                    FROM stays 
                    LEFT JOIN matching_events
                    ON matching_events.stay_id = stays.stay_id
                    GROUP BY stays.stay_id
                    ORDER BY stay_id ASC
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Provide the minimum value for the 'Non Invasive Blood Pressure mean' event from chartevents over each patient's entire record."
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
            SELECT
                le.hadm_id,
                le.charttime,
                le.valuenum
            FROM
                `physionet-data.mimiciv_3_1_hosp.labevents` AS le
            INNER JOIN
                matching_eventids AS li
                ON le.itemid = li.itemid
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
            AND CAST(lm.charttime AS TIMESTAMP) >= TIMESTAMP_SUB(dtp.time_point_end_window, INTERVAL 24 HOUR)
            AND CAST(lm.charttime AS TIMESTAMP) < dtp.time_point_end_window
        GROUP BY
            dtp.stay_id,
            dtp.time_point_end_window
        ORDER BY
            dtp.stay_id,
            dtp.time_point_end_window
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row for every day in the patient's "
        "admission starting from the ICU admission time to the discharge time. Each row's "
        "value should contain the average lactate value in the preceding 24 hours.",
    },
    {
        "name": "Aggregation in Overlapping Intervals",
        "tempoql": "min {Non Invasive Blood Pressure mean; scope = chartevents} from #now - 8 h to #now every 4 h from {Admit Time} to {Discharge Time}",
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
            AND CAST(mbp.charttime AS TIMESTAMP) >= TIMESTAMP_SUB(gtp.time_point_end_window, INTERVAL 8 HOUR)
            AND CAST(mbp.charttime AS TIMESTAMP) < gtp.time_point_end_window
        GROUP BY
            gtp.stay_id,
            gtp.time_point_end_window
        ORDER BY
            gtp.stay_id,
            gtp.time_point_end_window
        """,
        "alternative_tempoql": [
            "min {ART BP Mean; scope = chartevents; value = valuenum} from #now - 8 h to #now every 4 h from {Admit Time} to {Discharge Time}",
            'min {name in ("Non Invasive Blood Pressure mean", "Arterial Blood Pressure mean"); scope = chartevents; value = valuenum} from #now - 8 h to #now every 4 h from {Admit Time} to {Discharge Time}',
            'min {Arterial Blood Pressure mean; scope = chartevents; value = valuenum} from #now - 8 h to #now every 4 h from {Admit Time} to {Discharge Time}'
        ],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row for every 4 hours "
        "in the patient's admission starting from the ICU admission time to the ICU discharge "
        "time. Each row's value should contain the minimum value of the mean blood pressure in "
        "the preceding 8 hours."
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
                    `stays`
                    ON ce.stay_id = stays.stay_id
                INNER JOIN
                    `matching_eventids` AS mei
                    ON ce.itemid = mei.itemid
            )
            SELECT
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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row at every "
        "start of an invasive ventilation event from the procedures table. Use the specific event called "
        "'Invasive Ventilation'. Each row's value should contain a boolean "
        "value indicating if there was a previous invasive ventilation event for this ICU stay.",
        "evaluate_by": "mean"
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
                ce.charttime,
                ce.value
            FROM
                `physionet-data.mimiciv_3_1_icu.chartevents` AS ce
            INNER JOIN
                stays AS s
                ON ce.stay_id = s.stay_id
            INNER JOIN
                HeartRhythmItemIDs AS hri
                ON ce.itemid = hri.itemid
        ),
        CardioDefibProcedures AS (
            SELECT
                ce.stay_id,
                ce.starttime AS procedure_charttime
            FROM
                `physionet-data.mimiciv_3_1_icu.procedureevents` AS ce
            INNER JOIN
                stays AS s
                ON ce.stay_id = s.stay_id
            INNER JOIN
                CardioDefibItemIDs AS cdi
                ON ce.itemid = cdi.itemid
        )
        SELECT
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
            hre.charttime,
            hre.value -- this is needed because we want a row for EVERY event instance
        ORDER BY
            hre.stay_id,
            hre.charttime
        """,
        "alternative_tempoql": ["count {name contains /cardioversion|defibrillation/i; scope = procedureevents} from #now to #now + 24 h at every {Heart Rhythm; scope = chartevents}"],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row for every "
        "occurrence of a Heart Rhythm chart event. Each row's value should contain the "
        "count of all Cardioversion/Defibrillation procedure events that start within "
        "the 24 hours after the heart rhythm observation."
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
                `stays` AS s
                ON ce.stay_id = s.stay_id
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row for every occurrence "
        "of a Temperature Fahrenheit chart event. Each row's value should contain the difference "
        "between this temperature and the average of the temperature chart events "
        "for this patient in the last 8 hours."
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
                `stays` AS s
                ON ce.stay_id = s.stay_id
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row every 4 hours "
        "starting from the ICU admission time to the ICU discharge time. Each row's "
        "value should contain the average Temperature Fahrenheit chart value in the preceding 4 hours, and "
        "if the value is missing then it should be the mean temperature value over "
        "all patients."
    },
    {
        "name": "Carrying Values Forward",
        "tempoql": "first {O2 Delivery Device(s); scope = chartevents} from #now - 1 day to #now carry 2 days every 1 day from {Admit Time} to {Discharge Time}",
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
                `stays` AS s
                ON ce.stay_id = s.stay_id
            INNER JOIN
                `matching_eventids` AS mei
                ON ce.itemid = mei.itemid
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
        """,
        "alternative_tempoql": [],
        "alternative_sql": [],
        "prompt": "Write a query that returns a row for every 24 hours "
        "starting from the ICU admission time to the ICU discharge time. Each row's "
        "value should contain the EARLIEST observed value for the O2 delivery device "
        "(the chart event is called 'O2 Delivery Device(s)') in the preceding 24 hours. "
        "Values should be carried forward by up to 2 days if subsequent values are missing."
    }
]
