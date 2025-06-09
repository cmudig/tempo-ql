from sqlalchemy import create_engine, MetaData, Table, select, or_
from sqlalchemy.orm import sessionmaker, Session
import pandas as pd
import numpy as np
import re

class OMOPDataset:
    def __init__(self, connection_string):
        self.engine = create_engine(connection_string)
        self.metadata = MetaData()
        self.connection = self.engine.connect()
        self.metadata.reflect(bind=self.connection)
        self.candidate_names = ['Heart Rate', 'Respiratory Rate', 'Breath Rate', 'Oxygen Saturation', 'Blood Pressure']

    def search_omop_id(self, name_dict):
        """
        Search for OMOP IDs for a given name.
        
        Args:
            name_dict (dict): A dictionary containing name information
        
        Returns:
            result_list: A list of OMOP IDs
        """
        result_list = []
        names = None if 'name' not in name_dict else name_dict['name']
        ids = None if 'id' not in name_dict else name_dict['id']

        if ids is not None:
            for id_value in ids:
                with self.engine.connect() as conn:
                    stmt = select(
                        self.metadata.tables['concept'].c.concept_id,
                        self.metadata.tables['concept'].c.concept_name,
                        self.metadata.tables['concept'].c.domain_id
                    ).where(self.metadata.tables['concept'].c.concept_id == id_value)
                    result = conn.execute(stmt).fetchall()
                    for row in result:
                        result_list.append(row)
        if names is not None:
            filters = [self.metadata.tables['concept'].c.concept_name.ilike(f'%{name}%') for name in names]
            print("names: ", names)
            
            for filter in filters:
                print("filter: ", str(filter))
            with self.engine.connect() as conn:
                stmt = select(self.metadata.tables['concept'].c.concept_id, self.metadata.tables['concept'].c.concept_name, self.metadata.tables['concept'].c.domain_id).where(or_(*filters))
                result = conn.execute(stmt).fetchall()
                for row in result:
                    result_list.append(row)
        return result_list
    
    def process_omop_id(self, omop_ids):
        """
        Process a list of OMOP IDs and organize them by domain.
        
        Args:
            omop_ids (list): A list of tuples (concept_id, concept_name, domain_id)
        
        Returns:
            dict: A dictionary where keys are domain_ids and values are lists of (concept_id, concept_name) tuples
        """
        domain_dict = {}

        for concept_id, concept_name, domain_id in omop_ids:
            if domain_id not in domain_dict:
                domain_dict[domain_id] = []
            
            # Check if this (concept_id, concept_name) pair already exists in this domain
            concept_pair = (concept_id, concept_name)
            if concept_pair not in domain_dict[domain_id]:
                domain_dict[domain_id].append(concept_pair)
        
        return domain_dict
    
    def domain_id_to_table(self, domain_id):
        if domain_id == 'Drug':
            return 'drug_exposure', 'drug_source_concept_id'
        elif domain_id == 'Condition':
            return 'condition_occurrence', 'condition_source_concept_id'
        elif domain_id == 'Procedure':
            return 'procedure_occurrence', 'procedure_source_concept_id'
        elif domain_id == 'Observation':
            return 'observation', 'observation_source_concept_id'
        elif domain_id == 'Measurement':
            return 'measurement', 'measurement_source_concept_id'
        elif domain_id == 'Device':
            return 'device_exposure', 'device_source_concept_id'
            
    
    def extract_data_from_one_data_element(self, data_element):
        """
        Extract data from a single data element.
        
        Args:
            data_element (dict): A dictionary containing data element information

        Returns:
            result_df: A pandas DataFrame containing the data
        """
        result = {}
        omop_ids = self.search_omop_id(data_element)
        domain_dict = self.process_omop_id(omop_ids)
        scope = None if 'scope' not in data_element else data_element['scope']
        # check for scope first
        if scope is not None:
            domain = scope
            concept_ids = [concept_id for concept_id, concept_name in domain_dict[domain]]
            table_name, source_concept_id = self.domain_id_to_table(domain)
            table = self.metadata.tables[table_name]
            with self.engine.connect() as conn:
                stmt = select(table).where(getattr(table.c, source_concept_id).in_(concept_ids))
                domain_result = conn.execute(stmt).fetchall()
                if domain_result:
                    domain_df = pd.DataFrame(domain_result, columns=table.columns.keys())
                    result[table_name] = domain_df
            
        # Only handle name 
        else:
            
            # Process each domain and extract data from corresponding tables
            for domain_id, concept_pairs in domain_dict.items():
                concept_ids = [concept_id for concept_id, concept_name in concept_pairs]
                print("concept_ids: ", concept_ids, concept_pairs)
                # Map domain to table name
                table_name, source_concept_id = self.domain_id_to_table(domain_id)
                if table_name:
                    # Query drug_exposure table
                    table = self.metadata.tables[table_name]
                    with self.engine.connect() as conn:
                        stmt = select(table).where(getattr(table.c, source_concept_id).in_(concept_ids))
                        domain_result = conn.execute(stmt).fetchall()
                        if domain_result:
                            domain_df = pd.DataFrame(domain_result, columns=table.columns.keys())
                            result[table_name] = domain_df
            
        return result
    
    def extract_data(self, query):
        data_elements = self.read_from_tempo(query)
        data_formats = self.extract_data_format(data_elements)
        result = []
        for data_format in data_formats:
            result.append(self.extract_data_from_one_data_element(data_format))
        return result
    
    # TODO UPDATE
    
                
    def get_min_times(self):
        """
        Returns an Attributes where the value for each ID is the earliest timestamp
        for that trajectory ID in the dataset.
        """
        event_times = np.concatenate([event_set.get_times() for event_set in self.events] if self.events else [np.array([])])
        event_ids = np.concatenate([event_set.get_ids() for event_set in self.events] if self.events else [np.array([])])
        event_mins = pd.Series(event_times, name='times').groupby(event_ids).agg("min")
        
        interval_times = np.concatenate([interval_set.get_start_times() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_ids = np.concatenate([interval_set.get_ids() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_mins = pd.Series(interval_times, name='times').groupby(interval_ids).agg("min")

        ids = self.get_ids()
        all_mins = pd.merge(pd.Series(ids, name="id"), pd.merge(event_mins, interval_mins, how='outer', left_index=True, right_index=True), left_on="id", right_index=True).set_index("id").min(axis=1)
        return Attributes(all_mins.rename("mintime"))

    def get_max_times(self):
        """
        Returns an Attributes where the value for each ID is the latest timestamp
        for that trajectory ID in the dataset. The max time should be exclusive,
        i.e. slightly greater than the latest timestamp.
        """
        event_times = np.concatenate([event_set.get_times() for event_set in self.events] if self.events else [np.array([])])
        event_ids = np.concatenate([event_set.get_ids() for event_set in self.events] if self.events else [np.array([])])
        event_maxes = pd.Series(event_times, name='times').groupby(event_ids).agg("max")
        
        interval_times = np.concatenate([interval_set.get_end_times() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_ids = np.concatenate([interval_set.get_ids() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_maxes = pd.Series(interval_times, name='times').groupby(interval_ids).agg("max")

        ids = self.get_ids()
        all_maxes = pd.merge(pd.Series(ids, name="id"), pd.merge(event_maxes, interval_maxes, how='outer', left_index=True, right_index=True), left_on="id", right_index=True).set_index("id").max(axis=1)
        # Offset the time by 1 so that it includes all events and intervals
        if pd.api.types.is_datetime64_any_dtype(all_maxes.dtype):
            all_maxes += datetime.timedelta(seconds=1)
        else:
            all_maxes += 1
        self._maxtimes = Attributes(all_maxes.rename("maxtime"))
        
    def get_data_element(
        self,
        scope=None,
        data_type=None,
        concept_id_query=None,
        concept_name_query=None,
        value_field=None):
        """
        :param scope: Scope is not supported for original Tempo datasets.
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
        
        if data_type is not None:
            if data_type == "attribute" and isinstance(concept_name_query, list): raise ValueError(f"Cannot jointly retrieve multiple data elements from Attributes")
            if data_type not in ("attribute", "event", "interval"): raise ValueError(f"Unknown data type '{data_type}'")
        else:
            data_type = None
            
        candidates = []
        if (data_type is None or data_type == "attribute") and not isinstance(concept_name_query, list):
            for attr_set in self.attributes:
                matching_names = self._matching_concept_names(concept_name_query, attr_set.get_names())
                if matching_names: candidates.append(attr_set.get(matching_names[0]))
        if data_type is None or data_type == "event":
            for event_set in self.events:
                matching_names = self._matching_concept_names(concept_name_query, event_set.get_unique_types())
                if matching_names: candidates.append(event_set.get(matching_names))
        if data_type is None or data_type == "interval":
            for interval_set in self.intervals:
                matching_names = self._matching_concept_names(concept_name_query, interval_set.get_unique_types())
                if matching_names: candidates.append(interval_set.get(matching_names))

        candidates = [c for c in candidates if len(c) > 0]
        if len(candidates) > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query}. Try specifying a data type.")
        elif len(candidates) == 0:
            raise KeyError(f"No data element found matching query {concept_name_query}")
        return candidates[0]

 
