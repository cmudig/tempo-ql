from collections import namedtuple
from sqlalchemy import cast
from sqlalchemy.types import String, DateTime

DatasetFormat = namedtuple('DatasetFormat', ['tables', 'vocabularies', 'joins'])

def eicu(table_prefix='physionet-data.eicu_crd.'):
    tables = [
        {
            'source': table_prefix + 'infusiondrug',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'event_type_field': 'drugname',
            'time_field': 'infusionoffset',
            'default_value_field': 'drugamount',
            'scope': 'Drug'
        },
        {
            'source': table_prefix + 'intakeoutput',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'intakeoutputoffset',
            'events': {
                'Cumulative Intake': { 'value_field': 'intaketotal'},
                'Cumulative Output': { 'value_field': 'outputtotal'},
                'Cumulative Dialysis': { 'value_field': 'dialysistotal'},
                'Cumulative Net Fluid': { 'value_field': 'nettotal'},
            },
            'scope': 'Fluids',
            'comment': "The cumulative events here are denoted as such because they sum all previous intake, output, etc. over the admission. To get the incremental values, subtract each value from its last observation."
        },
        {
            'source': table_prefix + 'lab',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'labresultoffset',
            'event_type_field': 'labname',
            'default_value_field': 'labresult',
            'filter_nulls': True,
            'scope': 'Lab'
        },
        {
            # using events because stop offset can be missing
            'source': table_prefix + 'medication',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'drugstartoffset',
            'event_type_field': 'drugname',
            'default_value_field': 'dosage',
            'scope': 'Medication'
        },
        {
            'source': table_prefix + 'infusiondrug',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'infusionoffset',
            'event_type_field': 'drugname',
            'default_value_field': 'drugrate',
            'scope': 'Infusion'
        },
        {
            'source': table_prefix + 'diagnosis',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'diagnosisoffset',
            'event_type': 'Diagnosis',
            'default_value_field': 'icd9code',
            'scope': 'Diagnosis'
        },
        {
            'source': table_prefix + 'microlab',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'culturetakenoffset',
            'event_type': 'Culture',
            'default_value_field': 'organism',
            'scope': 'Culture'
        },
        {
            'source': 'physionet-data.eicu_crd_derived.pivoted_gcs',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'chartoffset',
            'events': {
                'GCS': { 'value_field': 'gcs', 'filter_nulls': True },
                'GCS Motor': { 'value_field': 'gcsmotor', 'filter_nulls': True },
                'GCS Verbal': { 'value_field': 'gcsverbal', 'filter_nulls': True },
                'GCS Eyes': { 'value_field': 'gcseyes', 'filter_nulls': True },
            },
            'scope': 'GCS'
        },
        {
            'source': table_prefix + 'pasthistory',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'pasthistoryenteredoffset',
            'event_type': 'Past History',
            'default_value_field': 'pasthistoryvalue',
            'scope': 'History'
        },
        {
            'source': table_prefix + 'patient',
            'primary_id_table': True,
            'id_field': 'patientunitstayid',
            'attributes': {
                k: { 'value_field': k.lower().replace(' ', ''), 
                     **({'value_transform': lambda x: x * 60} if k.endswith('Offset') else {})
                }
                for k in [
                    'Gender', 'Age', 'Ethnicity',
                    'Admission Height', 'Admission Weight', 'Discharge Weight',
                    'Admission Weight', 'Unit Type', 'Unit Visit Number',
                    'Unit Admit Source', 'Unit Discharge Offset',
                    'Unit Discharge Location', 'Unit Discharge Status',
                    'Hospital Discharge Status'
                ]
            },
            'scope': 'Patient',
            'comment': 'The admit offset for this dataset is always the time 0. All times are relative to the admission time.'
        },
        {
            'source': table_prefix + 'respiratorycare',
            'type': 'interval',
            'id_field': 'patientunitstayid',
            'start_time_field': 'ventstartoffset',
            'end_time_field': 'ventendoffset',
            'interval_type': 'Mechanical Ventilation',
            'default_value_field': 'airwaytype',
            'scope': 'Respiratory'
        },
        {
            'source': table_prefix + 'respiratorycharting',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'respchartentryoffset',
            'event_type_field': 'respchartvaluelabel',
            'default_value_field': 'respchartvalue',
            'scope': 'Respiratory'
        },
        {
            'source': table_prefix + 'treatment',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'treatmentoffset',
            'event_type_field': 'treatmentstring',
            'scope': 'Treatment'
        },
        {
            'source': table_prefix + 'vitalaperiodic',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'observationoffset',
            'events': {
                'SysBP': { 'value_field': 'noninvasivesystolic', 'filter_nulls': True },
                'DiaBP': { 'value_field': 'noninvasivediastolic', 'filter_nulls': True },
                'MeanBP': { 'value_field': 'noninvasivemean', 'filter_nulls': True }
            },
            'scope': 'Vitals'
        },
        {
            'source': table_prefix + 'vitalperiodic',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'observationoffset',
            'events': {
                'Temperature': { 'value_field': 'temperature', 'filter_nulls': True },
                'SpO2': { 'value_field': 'sao2', 'filter_nulls': True },
                'Heart Rate': { 'value_field': 'heartrate', 'filter_nulls': True },
                'Respiratory Rate': { 'value_field': 'respiration', 'filter_nulls': True },
                'CVP': { 'value_field': 'cvp', 'filter_nulls': True },
                'EtCO2': { 'value_field': 'etco2', 'filter_nulls': True },
                'SysBP Systemic': { 'value_field': 'systemicsystolic', 'filter_nulls': True },
                'DiaBP Systemic': { 'value_field': 'systemicdiastolic', 'filter_nulls': True },
                'MeanBP Systemic': { 'value_field': 'systemicmean', 'filter_nulls': True },
                'SysPAP': { 'value_field': 'pasystolic', 'filter_nulls': True },
                'DiaPAP': { 'value_field': 'padiastolic', 'filter_nulls': True },
                'MeanPAP': { 'value_field': 'pamean', 'filter_nulls': True }
            },
            'scope': 'Vitals'
        },
        {
            'source': table_prefix + 'nursecharting',
            'id_field': 'patientunitstayid',
            'time_field': 'nursingchartentryoffset',
            'type': 'event',
            'event_type_field': 'nursingchartcelltypevallabel',
            'default_value_field': 'nursingchartvalue',
            'scope': 'Nursing'
        }
    ]
    
    return DatasetFormat(tables, [], {})

def mimiciv(hosp_prefix='physionet-data.mimiciv_3_1_hosp.', icu_prefix='physionet-data.mimiciv_3_1_icu.'):
    tables = [
        {
            'source': hosp_prefix + 'admissions',
            'id_field': 'stay_id',
            'scope': 'Patient',
            'attributes': {
                'Marital Status': { 'value_field': 'marital_status' },
                'Race': { 'value_field': 'race' },
                'Hospital Mortality': { 'value_field': 'hospital_expire_flag' }
            }
        },
        {
            'source': hosp_prefix + 'diagnoses_icd',
            'id_field': 'stay_id',
            'time_field': 'outtime',
            'type': 'event',
            # all icu stay IDs will have diagnoses from all prior hospital admissions!
            'event_type': 'Diagnosis',
            'default_value_field': 'icd_code',
            'scope': 'Diagnosis',
            'comment': "The name of the event is always 'Diagnosis' and the value contains either an ICD-9 or ICD-10 code."
        },
        {
            'source': hosp_prefix + 'labevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'valuenum',
            'scope': 'Lab',
            'comment': "If a lab test has string values, use value field 'value' to return the strings. By default only numeric values are returned."
        },
        {
            'source': hosp_prefix + 'microbiologyevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'event_type': 'Culture',
            'default_value_field': 'spec_type_desc',
            'scope': 'Culture'
        },
        {
            'source': hosp_prefix + 'patients',
            'id_field': 'stay_id',
            'scope': 'Patient',
            'attributes': {
                'Gender': { 'value_field': 'gender' },
                'Anchor Age': { 'value_field': 'anchor_age' },
                'Anchor Year': { 'value_field': 'anchor_year', 'value_transform': lambda x: cast(cast(x, String) + '-01-01', DateTime) },
                'Date of Death': { 'value_field': 'dod' },
            },
            'comment': "All dates in the database have been shifted to protect patient confidentiality. Dates will be internally consistent for the same patient, but randomly distributed in the future. Dates of birth which occur in the present time are not true dates of birth. We can assume that the patient's age at the attribute value Anchor Year is the Anchor Age."
        },
        {
            'source': hosp_prefix + 'prescriptions',
            'type': 'interval',
            'id_field': 'stay_id',
            'interval_type_field': 'drug',
            'start_time_field': 'starttime',
            'end_time_field': 'stoptime',
            'default_value_field': 'dose_val_rx',
            'scope': 'Medication',
            'comment': "The interval type is the name of the drug. Value field 'dose_unit_rx' represents the unit of the dose value; 'route' represents the way the drug is administered."
        },
        {
            'source': icu_prefix + 'chartevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'chartevents',
            'comment': "If a chart event sometimes has string values returned, use value field 'valuenum' to specify that only numeric results should be returned."
        },
        {
            'source': icu_prefix + 'icustays',
            'primary_id_table': True,
            'id_field': 'stay_id',
            'scope': 'Patient',
            'attributes': {
                'Admit Time': { 'value_field': 'intime' },
                'Discharge Time': { 'value_field': 'outtime' },
            }
        },
        {
            'source': icu_prefix + 'inputevents',
            'type': 'interval',
            'id_field': 'stay_id',
            'start_time_field': 'starttime',
            'end_time_field': 'endtime',
            'concept_id_field': 'itemid',
            'default_value_field': 'amount',
            'scope': 'inputevents'
        },
        {
            'source': icu_prefix + 'outputevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'outputevents'
        },
        {
            'source': icu_prefix + 'procedureevents',
            'type': 'interval',
            'id_field': 'stay_id',
            'start_time_field': 'starttime',
            'end_time_field': 'endtime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'procedureevents'
        },
    ]

    joins = {
        **({k: {
            'dest_table': icu_prefix + 'icustays',
            'join_key': 'hadm_id'
        } for k in [
            hosp_prefix + 'admissions',
            hosp_prefix + 'labevents',
            hosp_prefix + 'prescriptions',
            hosp_prefix + 'microbiologyevents'
        ]}),
        hosp_prefix + 'patients': {
            'dest_table': icu_prefix + 'icustays',
            'join_key': 'subject_id'
        },
        hosp_prefix + 'diagnoses_icd': {
            'dest_table': icu_prefix + 'icustays',
            'join_key': 'hadm_id',
            'keep_fields': ['outtime']
        }
    }

    vocabularies = [
        {
            'source': hosp_prefix + 'd_labitems',
            'concept_id_field': 'itemid',
            'concept_name_field': 'label',
            'scope': 'Lab'
        },
        {
            'source': icu_prefix + 'd_items',
            'concept_id_field': 'itemid',
            'concept_name_field': 'label',
            'scope_field': 'linksto',
            'scopes': ['chartevents', 'inputevents', 'outputevents', 'procedureevents']
        }
    ]
    
    return DatasetFormat(tables, vocabularies, joins)

def omop(table_prefix='', id_field='visit_occurrence_id', use_source_concept_ids=False, concept_id_field=None):
    assert id_field in ('visit_occurrence_id', 'person_id'), f"Don't know how to set up OMOP dataset specification for ID field '{id_field}'"
    tables = [
        {
            'source': table_prefix + 'drug_exposure',
            'type': 'interval',
            'id_field': id_field,
            'concept_id_field': 'drug_source_concept_id' if use_source_concept_ids else 'drug_concept_id',
            'start_time_field': 'drug_exposure_start_datetime',
            'end_time_field': 'drug_exposure_end_datetime',
            'default_value_field': 'quantity',
            'scope': 'Drug'
        },
        {
            'source': table_prefix + 'condition_occurrence',
            'type': 'interval',
            'id_field': id_field,
            'concept_id_field': 'condition_source_concept_id' if use_source_concept_ids else 'condition_concept_id',
            'start_time_field': 'condition_start_datetime',
            'end_time_field': 'condition_end_datetime',
            'scope': 'Condition'
        },
        {
            'source': table_prefix + 'procedure_occurrence',
            'type': 'event',
            'id_field': id_field,
            'concept_id_field': 'procedure_source_concept_id' if use_source_concept_ids else 'procedure_concept_id',
            'time_field': 'procedure_datetime',
            'scope': 'Procedure'
        },
        {
            'source': table_prefix + 'observation',
            'type': 'event',
            'id_field': id_field,
            'concept_id_field': 'observation_source_concept_id' if use_source_concept_ids else 'observation_concept_id',
            'time_field': 'observation_datetime',
            'default_value_field': 'value_as_string',
            'scope': 'Observation'
        },
        {
            'source': table_prefix + 'measurement',
            'type': 'event',
            'id_field': id_field,
            'concept_id_field': 'measurement_source_concept_id' if use_source_concept_ids else 'measurement_concept_id',
            'time_field': 'measurement_datetime',
            'default_value_field': 'value_as_number',
            'scope': 'Measurement'
        },
        {
            'source': table_prefix + 'device_exposure',
            'type': 'interval',
            'id_field': id_field,
            'concept_id_field': 'device_source_concept_id' if use_source_concept_ids else 'device_concept_id',
            'start_time_field': 'device_exposure_start_datetime',
            'end_time_field': 'device_exposure_end_datetime',
            'scope': 'Device'
        },
        {
            'source': table_prefix + 'visit_occurrence',
            'type': 'interval',
            'primary_id_table': id_field == 'visit_occurrence_id',
            'id_field': 'visit_occurrence_id',
            'start_time_field': 'visit_start_datetime',
            'end_time_field': 'visit_end_datetime',
            'interval_type': 'Visit',
            'scope': 'Visit',
            **({'attributes': {
                'Admit Time': {
                    'value_field': 'visit_start_datetime'
                },
                'Discharge Time': {
                    'value_field': 'visit_end_datetime'
                }
            }} if id_field == 'visit_occurrence_id' else {})
        },
        {
            'source': table_prefix + 'person',
            'id_field': id_field,
            'scope': 'Person',
            'primary_id_table': id_field == 'person_id',
            'attributes': {
                'Gender': {
                    'value_field': 'gender_concept_id',
                    'convert_concept': False,
                    'scope': 'Gender'
                },
                'Birth Date': {
                    'value_field': 'birth_datetime',
                    'convert_concept': False
                },
                'Race': {
                    'value_field': 'race_concept_id',
                    'convert_concept': False,
                    'scope': 'Race'
                },
                'Ethnicity': {
                    'value_field': 'ethnicity_concept_id',
                    'convert_concept': False,
                    'scope': 'Ethnicity'
                }
            }
        },
        {
            'source': table_prefix + 'observation_period',
            'id_field': id_field,
            'type': 'interval',
            'primary_time_table': True,
            'start_time_field': 'observation_period_start_date',
            'end_time_field': 'observation_period_end_date',
            'interval_type': 'Observation Period',
            'scope': 'Observation Period'
        }
    ]

    # define one or more vocabulary tables. Each should have a concept id, concept name,
    # and scope field and contain the concept mappings for one or more scopes
    vocabularies = [
        {
            'source': table_prefix + 'concept',
            'concept_id_field': concept_id_field or ('concept_code' if use_source_concept_ids else 'concept_id'),
            'concept_name_field': 'concept_name',
            'scope_field': 'domain_id',
            'scopes': ['Drug', 'Condition', 'Procedure', 'Observation', 'Measurement', 'Device']
        }
    ]
    
    if id_field == 'visit_occurrence_id':
        joins = {
            table_prefix + 'person': {
                'dest_table': table_prefix + 'visit_occurrence',
                'join_key': 'person_id'
            },
            table_prefix + 'observation_period': {
                'dest_table': table_prefix + 'visit_occurrence',
                'join_key': 'person_id'
            }
        }
    else:
        joins = {}
    
    return DatasetFormat(tables, vocabularies, joins)