from collections import namedtuple
from sqlalchemy import cast
from sqlalchemy.types import String, DateTime

DatasetFormat = namedtuple('DatasetFormat', ['tables', 'vocabularies', 'joins'])

def eicu():
    tables = [
        {
            'source': 'physionet-data.eicu_crd.infusiondrug',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'event_type_field': 'drugname',
            'time_field': 'infusionoffset',
            'default_value_field': 'drugamount',
            'scope': 'Drug'
        },
        {
            'source': 'physionet-data.eicu_crd.intakeoutput',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'intakeoutputoffset',
            'events': {
                'Cumulative Intake': { 'value_field': 'intaketotal'},
                'Cumulative Output': { 'value_field': 'outputtotal'},
                'Cumulative Dialysis': { 'value_field': 'dialysistotal'},
                'Cumulative Net Fluid': { 'value_field': 'nettotal'},
            },
            'scope': 'Fluids'
        },
        {
            'source': 'physionet-data.eicu_crd.lab',
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
            'source': 'physionet-data.eicu_crd.medication',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'drugstartoffset',
            'event_type_field': 'drugname',
            'default_value_field': 'dosage',
            'scope': 'Medication'
        },
        {
            'source': 'physionet-data.eicu_crd.infusiondrug',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'infusionoffset',
            'event_type_field': 'drugname',
            'default_value_field': 'drugrate',
            'scope': 'Infusion'
        },
        {
            'source': 'physionet-data.eicu_crd.diagnosis',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'diagnosisoffset',
            'event_type': 'Diagnosis',
            'default_value_field': 'icd9code',
            'scope': 'Diagnosis'
        },
        {
            'source': 'physionet-data.eicu_crd.microlab',
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
            'source': 'physionet-data.eicu_crd.pasthistory',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'pasthistoryenteredoffset',
            'event_type': 'Past History',
            'default_value_field': 'pasthistoryvalue',
            'scope': 'History'
        },
        {
            'source': 'physionet-data.eicu_crd.patient',
            'id_field': 'patientunitstayid',
            'attributes': {
                k: { 'value_field': k.lower().replace(' ', '') }
                for k in [
                    'Gender', 'Age', 'Ethnicity',
                    'Admission Height', 'Admission Weight', 'Discharge Weight',
                    'Admission Weight', 'Unit Type', 'Unit Visit Number',
                    'Unit Admit Source', 'Unit Discharge Offset',
                    'Unit Discharge Location', 'Unit Discharge Status',
                    'Hospital Discharge Status'
                ]
            },
            'scope': 'Patient'
        },
        {
            'source': 'physionet-data.eicu_crd.respiratorycare',
            'type': 'interval',
            'id_field': 'patientunitstayid',
            'start_time_field': 'ventstartoffset',
            'end_time_field': 'ventendoffset',
            'interval_type': 'Mechanical Ventilation',
            'default_value_field': 'airwaytype',
            'scope': 'Respiratory'
        },
        {
            'source': 'physionet-data.eicu_crd.respiratorycharting',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'respchartentryoffset',
            'event_type_field': 'respchartvaluelabel',
            'default_value_field': 'respchartvalue',
            'scope': 'Respiratory'
        },
        {
            'source': 'physionet-data.eicu_crd.treatment',
            'type': 'event',
            'id_field': 'patientunitstayid',
            'time_field': 'treatmentoffset',
            'event_type_field': 'treatmentstring',
            'scope': 'Treatment'
        },
        {
            'source': 'physionet-data.eicu_crd.vitalaperiodic',
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
            'source': 'physionet-data.eicu_crd.vitalperiodic',
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
            'source': 'physionet-data.eicu_crd.nursecharting',
            'id_field': 'patientunitstayid',
            'time_field': 'nursingchartentryoffset',
            'type': 'event',
            'event_type_field': 'nursingchartcelltypevallabel',
            'default_value_field': 'nursingchartvalue',
            'scope': 'Nursing'
        }
    ]
    
    return DatasetFormat(tables, [], [])

def mimiciv():
    tables = [
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.admissions',
            'id_field': 'stay_id',
            'attributes': {
                'Marital Status': { 'value_field': 'marital_status' },
                'Race': { 'value_field': 'race' },
                'Hospital Mortality': { 'value_field': 'hospital_expire_flag' }
            }
        },
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.diagnoses_icd',
            'id_field': 'stay_id',
            'time_field': 'outtime',
            'type': 'event',
            # all icu stay IDs will have diagnoses from all prior hospital admissions!
            'event_type': 'Diagnosis',
            'default_value_field': 'icd_code',
            'scope': 'Diagnosis'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.labevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'Lab'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.microbiologyevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'event_type': 'Culture',
            'default_value_field': 'spec_type_desc',
            'scope': 'Culture'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.patients',
            'id_field': 'stay_id',
            'attributes': {
                'Gender': { 'value_field': 'gender' },
                'Anchor Age': { 'value_field': 'anchor_age' },
                'Anchor Year': { 'value_field': 'anchor_year', 'value_transform': lambda x: cast(cast(x, String) + '-01-01', DateTime) },
                'Date of Death': { 'value_field': 'dod' },
            }
        },
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.prescriptions',
            'type': 'interval',
            'id_field': 'stay_id',
            'interval_type_field': 'drug',
            'start_time_field': 'starttime',
            'end_time_field': 'stoptime',
            'default_value_field': 'dose_val_rx',
            'scope': 'Medication'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.chartevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'chartevents'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.icustays',
            'id_field': 'stay_id',
            'attributes': {
                'Admit Time': { 'value_field': 'intime' },
                'Discharge Time': { 'value_field': 'outtime' },
            }
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.inputevents',
            'type': 'interval',
            'id_field': 'stay_id',
            'start_time_field': 'starttime',
            'end_time_field': 'endtime',
            'concept_id_field': 'itemid',
            'default_value_field': 'amount',
            'scope': 'inputevents'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.outputevents',
            'type': 'event',
            'id_field': 'stay_id',
            'time_field': 'charttime',
            'concept_id_field': 'itemid',
            'default_value_field': 'value',
            'scope': 'outputevents'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.procedureevents',
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
            'dest_table': 'physionet-data.mimiciv_3_1_icu.icustays',
            'join_key': 'hadm_id'
        } for k in [
            'physionet-data.mimiciv_3_1_hosp.admissions',
            'physionet-data.mimiciv_3_1_hosp.labevents',
            'physionet-data.mimiciv_3_1_hosp.prescriptions',
            'physionet-data.mimiciv_3_1_hosp.microbiologyevents'
        ]}),
        'physionet-data.mimiciv_3_1_hosp.patients': {
            'dest_table': 'physionet-data.mimiciv_3_1_icu.icustays',
            'join_key': 'subject_id'
        },
        'physionet-data.mimiciv_3_1_hosp.diagnoses_icd': {
            'dest_table': 'physionet-data.mimiciv_3_1_icu.icustays',
            'join_key': 'hadm_id',
            'keep_fields': ['outtime']
        }
    }

    vocabularies = [
        {
            'source': 'physionet-data.mimiciv_3_1_hosp.d_labitems',
            'concept_id_field': 'itemid',
            'concept_name_field': 'label',
            'scope': 'Lab'
        },
        {
            'source': 'physionet-data.mimiciv_3_1_icu.d_items',
            'concept_id_field': 'itemid',
            'concept_name_field': 'label',
            'scope_field': 'linksto',
            'scopes': ['chartevents', 'inputevents', 'outputevents', 'procedureevents']
        }
    ]
    
    return DatasetFormat(tables, vocabularies, joins)

def omop():
    tables = [
        {
            'source': 'drug_exposure',
            'type': 'interval',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'drug_source_concept_id',
            'start_time_field': 'drug_exposure_start_datetime',
            'end_time_field': 'drug_exposure_end_datetime',
            'default_value_field': 'quantity',
            'scope': 'Drug'
        },
        {
            'source': 'condition_occurrence',
            'type': 'interval',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'condition_source_concept_id',
            'start_time_field': 'condition_start_datetime',
            'end_time_field': 'condition_end_datetime',
            'scope': 'Condition'
        },
        {
            'source': 'procedure_occurrence',
            'type': 'event',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'procedure_source_concept_id',
            'time_field': 'procedure_datetime',
            'scope': 'Procedure'
        },
        {
            'source': 'observation',
            'type': 'event',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'observation_source_concept_id',
            'time_field': 'observation_datetime',
            'default_value_field': 'value_as_string',
            'scope': 'Observation'
        },
        {
            'source': 'measurement',
            'type': 'event',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'measurement_source_concept_id',
            'time_field': 'measurement_datetime',
            'default_value_field': 'value_as_number',
            'scope': 'Measurement'
        },
        {
            'source': 'device_exposure',
            'type': 'interval',
            'id_field': 'visit_occurrence_id',
            'concept_id_field': 'device_source_concept_id',
            'start_time_field': 'device_exposure_start_datetime',
            'end_time_field': 'device_exposure_end_datetime',
            'scope': 'Device'
        },
        {
            'source': 'visit_occurrence',
            'type': 'interval',
            'id_field': 'visit_occurrence_id',
            'start_time_field': 'visit_start_datetime',
            'end_time_field': 'visit_end_datetime',
            'interval_type': 'Visit',
            'scope': 'Visit',
            'attributes': {
                'Admit Time': {
                    'value_field': 'visit_start_datetime'
                },
                'Discharge Time': {
                    'value_field': 'visit_end_datetime'
                }
            }
        },
        {
            'source': 'person',
            'id_field': 'visit_occurrence_id',
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
        }
    ]

    # define one or more vocabulary tables. Each should have a concept id, concept name,
    # and scope field and contain the concept mappings for one or more scopes
    vocabularies = [
        {
            'source': 'concept',
            'concept_id_field': 'concept_id',
            'concept_name_field': 'concept_name',
            'scope_field': 'domain_id',
            'scopes': ['Drug', 'Condition', 'Procedure', 'Observation', 'Measurement', 'Device']
        }
    ]
    
    return DatasetFormat(tables, vocabularies, [])