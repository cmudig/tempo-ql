from sqlalchemy import create_engine, MetaData, Table, select, or_, case, union, func, cast, String
from sqlalchemy.types import Interval
from sqlalchemy.orm import sessionmaker, Session
import pandas as pd
import numpy as np
import re
import datetime
from copy import deepcopy
from ..data_types import *

ID_FIELD = 'person_id'

SCOPE_INFO = {
    'drug': {
        'table_name': 'drug_exposure', 
        'concept_id_field': 'drug_source_concept_id',
        'type': 'interval',
        'start_time_field': 'drug_exposure_start_datetime',
        'end_time_field': 'drug_exposure_end_datetime',
        'default_value_field': 'quantity'
    },
    'condition': {
        'table_name': 'condition_occurrence', 
        'concept_id_field': 'condition_source_concept_id',
        'start_time_field': 'condition_start_datetime',
        'end_time_field': 'condition_end_datetime',
        'type': 'interval',
    },
    'procedure': {
        'table_name': 'procedure_occurrence', 
        'concept_id_field': 'procedure_source_concept_id',
        'time_field': 'procedure_datetime',
        'type': 'event'
    },
    'observation': {
        'table_name': 'observation', 
        'concept_id_field': 'observation_source_concept_id',
        'type': 'event',
        'default_value_field': 'value_as_string',
        'time_field': 'observation_datetime',
    },
    'measurement': {
        'table_name': 'measurement', 
        'concept_id_field': 'measurement_source_concept_id',
        'type': 'event',
        'default_value_field': 'value_as_number',
        'time_field': 'measurement_datetime',
    },
    'device': {
        'table_name': 'device_exposure', 
        'concept_id_field': 'device_source_concept_id',
        'type': 'interval',
        'start_time_field': 'device_exposure_start_datetime',
        'end_time_field': 'device_exposure_end_datetime',
        'default_value_field': 'quantity'
    }
}

ATTRIBUTES = {
    'Gender': {
        'table_name': 'person',
        'value_field': 'gender_concept_id',
        'convert_concept': True
    },
    'Birth Date': {
        'table_name': 'person',
        'value_field': 'birth_datetime',
        'convert_concept': False
    },
    'Race': {
        'table_name': 'person',
        'value_field': 'race_concept_id',
        'convert_concept': True
    },
    'Ethnicity': {
        'table_name': 'person',
        'value_field': 'ethnicity_concept_id',
        'convert_concept': True
    }
}

class OMOPDataset:
    def __init__(self, connection_string, id_field=ID_FIELD, scopes=SCOPE_INFO, attributes=ATTRIBUTES):
        self.engine = create_engine(connection_string)
        self.metadata = MetaData()
        self.connection = self.engine.connect()
        self.metadata.reflect(bind=self.connection)
        self.id_field = id_field
        self.scopes = {k.lower(): deepcopy(v) for k, v in scopes.items()}
        self.attributes = deepcopy(attributes)

    def _make_concept_filters(self, column, query):
        query_type, query_data = query
        if query_type == "equals":
            filters = [column == query_data]
        elif query_type == "in":
            filters = [column.in_(query_data)]
        elif query_type in ("contains", "matches", "startswith", "endswith"):
            if isinstance(query_data, re.Pattern):
                flags = query_data.flags
                pattern_string = query_data.pattern.lower() if flags & re.I else query_data.pattern
            else:
                pattern_string = re.escape(query_data)
                flags = re.NOFLAG
            if query_type == "matches": 
                pattern_string = "^" + pattern_string + "$"
            elif query_type == "startswith":
                pattern_string = "^" + pattern_string + ".*"
            elif query_type == "endswith":
                pattern_string = ".*" + pattern_string + "$"
            else:
                pattern_string = ".*" + pattern_string + ".*"
            if flags & re.I:    
                filters = [func.lower(column).regexp_match(pattern_string)]
            else:
                filters = [column.regexp_match(pattern_string)]
        return filters
        
    def search_omop_concept_id(self, concept_id_query=None, concept_name_query=None):
        """
        Search for OMOP IDs for a given name using the concept table.
        
        Args:
            concept_id_query: Constraints on which concept IDs to retrieve,
                provided as a tuple (search_type, search_data).
            concept_name_query: Constraints on which concept IDs to retrieve based
                on the concept name, provided as a tuple (search_type, search_data).
            
        Returns:
            result_list: Matching OMOP IDs as dictionaries of {scope: (concept 
            ID, concept name), ...}
        """
        if (concept_id_query is None) == (concept_name_query is None):
            raise ValueError("Exactly one of id or name must be provided to search for OMOP concepts")
        
        if concept_id_query is not None:
            filters = self._make_concept_filters(self.metadata.tables['concept'].c.concept_id, concept_id_query)
        if concept_name_query is not None:
            filters = self._make_concept_filters(self.metadata.tables['concept'].c.concept_name, concept_name_query)
        
        with self.engine.connect() as conn:
            stmt = select(
                self.metadata.tables['concept'].c.concept_id,
                self.metadata.tables['concept'].c.concept_name,
                self.metadata.tables['concept'].c.domain_id
            ).where(or_(*filters))
            result = conn.execute(stmt).fetchall()
            scopes = {}
            for row in result:
                scopes.setdefault(row[-1].lower(), []).append(tuple(row[:2]))
            return scopes
        
    def attempt_attribute_extract(self, concept_name_query):
        """
        Extract an attribute from the dataset based on a concept name query.
        The query must specify a single attribute name.
        """
        query_type, query_data = concept_name_query
        if query_type != "equals":
            return
        
        if query_data not in self.attributes:
            return
        
        attr_info = self.attributes[query_data]
        table = attr_info['table_name']
        with self.engine.connect() as conn:
            if attr_info.get('convert_concept', False):
                # Join the attribute table with the concept table to get the 
                # concept names for each concept ID stored in the value field
                stmt = select(
                    self.metadata.tables[table].c[ID_FIELD],
                    case(
                        (self.metadata.tables['concept'].c.concept_name != None,
                         self.metadata.tables['concept'].c.concept_name),
                        else_=cast(
                            self.metadata.tables[table].c[attr_info['value_field']],
                            String
                        )
                    ).label(attr_info['value_field'])
                ).select_from(self.metadata.tables[table].join(
                    self.metadata.tables['concept'], 
                    self.metadata.tables[table].c[attr_info['value_field']] == self.metadata.tables['concept'].c.concept_id,
                    isouter=True
                ))
            else:
                stmt = select(
                    self.metadata.tables[table].c[ID_FIELD],
                    self.metadata.tables[table].c[attr_info['value_field']]
                )
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            return Attributes(result_df.set_index(ID_FIELD)[attr_info['value_field']])
        
    def extract_data_for_concepts(self, scope, concepts, value_field=None):
        """
        Extract data from a given scope that matches the given concepts.
        
        Args:
            scope (str): The name of the scope in which to retrieve data
            concepts (List[Tuple[str, str]]): Set of concepts to match against,
                where each tuple contains (concept ID, concept name)
            value_field (str | None): the field to extract as the value, or None
                to use the default value field for the scope

        Returns: an Attributes, Events, or Intervals object representing the 
            data for the given set of concepts.
        """
        scope_info = self.scopes[scope]
        table = self.metadata.tables[scope_info['table_name']]
        if value_field is not None:
            if value_field not in table.c:
                raise AttributeError(f"Value field '{value_field}' not present in scope {scope}")
        with self.engine.connect() as conn:
            if scope_info['type'] == 'attribute':
                # TODO make this more flexible with defaults
                table_fields = [table.c[ID_FIELD], table.c[value_field]]
            elif scope_info['type'] == 'event':
                table_fields = [table.c[ID_FIELD], 
                                table.c[scope_info['time_field']].label('time'),
                                table.c[scope_info['concept_id_field']].label('concept_id')]
                if value_field is not None:
                    table_fields.append(table.c[value_field])
                elif scope_info.get('default_value_field') is not None:
                    table_fields.append(table.c[scope_info.get('default_value_field')].label('value'))
                    value_field = 'value'
            elif scope_info['type'] == 'interval':
                table_fields = [table.c[ID_FIELD], 
                                table.c[scope_info['concept_id_field']].label('concept_id'),
                                table.c[scope_info['start_time_field']].label('starttime'), 
                                table.c[scope_info['end_time_field']].label('endtime')]
                if value_field is not None:
                    table_fields.append(table.c[value_field])
                elif scope_info.get('default_value_field') is not None:
                    table_fields.append(table.c[scope_info.get('default_value_field')].label('value'))
                    value_field = 'value'
                    
            stmt = select(*table_fields).where(table.c[scope_info['concept_id_field']].in_([c[0] for c in concepts]))
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            if value_field is None:
                result_df["value"] = pd.NA
                value_field = "value"
            
            if scope_info['type'] == 'attribute':
                return Attributes(result_df.set_index(ID_FIELD)[value_field])
            elif scope_info['type'] == 'event':
                return Events(result_df, 
                              id_field=ID_FIELD,
                              type_field='concept_id',
                              time_field='time',
                              value_field=value_field)
            elif scope_info['type'] == 'interval':
                return Intervals(result_df, 
                                 id_field=ID_FIELD,
                                type_field='concept_id',
                                start_time_field='starttime',
                                end_time_field='endtime',
                                value_field=value_field)
    
    def get_min_times(self):
        """
        Returns an Attributes where the value for each ID is the earliest timestamp
        for that trajectory ID in the dataset.
        """
        with self.engine.connect() as conn:
            all_times = union(
                *(select(
                    self.metadata.tables[scope_info['table_name']].c[ID_FIELD],
                    self.metadata.tables[scope_info['table_name']].c[scope_info['start_time_field']].label('mintime')
                ) for scope_info in self.scopes.values() if scope_info['type'] == 'interval'),
                *(select(
                    self.metadata.tables[scope_info['table_name']].c[ID_FIELD],
                    self.metadata.tables[scope_info['table_name']].c[scope_info['time_field']].label('mintime')
                ) for scope_info in self.scopes.values() if scope_info['type'] == 'event')
            ).cte('all_times')
            stmt = select(all_times.c[ID_FIELD], func.min(all_times.c.mintime).label('mintime')).group_by(all_times.c[ID_FIELD])
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            return Attributes(result_df.set_index(ID_FIELD)['mintime'])
        
    def get_max_times(self):
        """
        Returns an Attributes where the value for each ID is the latest timestamp
        for that trajectory ID in the dataset.
        """
        with self.engine.connect() as conn:
            all_times = union(
                *(select(
                    self.metadata.tables[scope_info['table_name']].c[ID_FIELD],
                    self.metadata.tables[scope_info['table_name']].c[scope_info['end_time_field']].label('maxtime')
                ) for scope_info in self.scopes.values() if scope_info['type'] == 'interval'),
                *(select(
                    self.metadata.tables[scope_info['table_name']].c[ID_FIELD],
                    self.metadata.tables[scope_info['table_name']].c[scope_info['time_field']].label('maxtime')
                ) for scope_info in self.scopes.values() if scope_info['type'] == 'event')
            ).cte('all_times')
            stmt = select(all_times.c[ID_FIELD], (func.max(all_times.c.maxtime) + datetime.timedelta(seconds=1)).label('maxtime')).group_by(all_times.c[ID_FIELD])
            # print(stmt.compile(compile_kwargs={"literal_binds": True}))
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            return Attributes(result_df.set_index(ID_FIELD)['maxtime'])
        
    def get_data_element(
        self,
        scope=None,
        data_type=None,
        concept_id_query=None,
        concept_name_query=None,
        value_field=None,
        return_queries=False):
        """
        :param scope: The scope in the dataset in which to search for 
            matching concepts, or None to search all scopes. Returned data
            is only allowed to match one scope.
        :param data_type: The type of the data that should be returned, or
            None to search all data types. Returned data is only allowed to
            be of one type.
        :param concept_id_query: Not supported for original Tempo datasets.
        :param concept_name_query: A query over the concept names in the data,
            expressed as a tuple (query_type, query_data). The following query
            types are supported:
            - "equals": query_data should be an exact string
            - "in": query_data should be a list of names
            - "contains", "matches", "startswith", "endswith": query_data should
                be a string or regex object
        :param value_field: The field in the data to represent as the values
            of the events or intervals. Ignored if the result is an Attributes.
            If None, the default value field for the given scope should be used.
            
        :return: A Tempo core data type representing the matching data from
            the dataset, in Attributes, Events, or Intervals format. An error
            will be thrown if the query matches multiple scopes or data types 
            and the scope or data type is not specified. An error will be
            thrown if the query does not match any concepts in the data and the
            data type is not specified (meaning that the return type is
            indeterminate).
        """
        if (concept_name_query is None) == (concept_id_query is None):
            raise ValueError("Exactly one of id and name must be specified")
        if value_field is not None and scope is None:
            raise ValueError("Specifying value field requires scope to also be provided")
        
        if data_type is not None:
            if data_type == "attribute" and isinstance(concept_name_query, list): raise ValueError(f"Cannot jointly retrieve multiple data elements from Attributes")
            if data_type not in ("attribute", "event", "interval"): raise ValueError(f"Unknown data type '{data_type}'")
        else:
            data_type = None
            
        if (data_type is None or data_type == "attribute") and concept_name_query is not None:
            # Check if the concept name query matches a predefined attribute
            attr = self.attempt_attribute_extract(concept_name_query)
            if attr:
                return attr
            
        matching_concepts = self.search_omop_concept_id(concept_id_query=concept_id_query,
                                                        concept_name_query=concept_name_query)
        if scope is not None:
            scope = scope.lower()
            if scope not in matching_concepts:
                raise ValueError(f"No concepts match query for scope {scope}")
            matching_concepts = {scope: matching_concepts[scope]}
            
        print("Matching concepts:", matching_concepts)
        
        candidates = [self.extract_data_for_concepts(scope, concepts, value_field=value_field)
                      for scope, concepts in matching_concepts.items()]
        num_existing = sum(len(c) > 0 for c in candidates)
        if num_existing > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query or concept_id_query}. Try specifying a data type or scope.")
        elif num_existing == 0:
            raise KeyError(f"No data element found matching query {concept_name_query or concept_id_query}")

        return next(c for c in candidates if len(c) > 0)
