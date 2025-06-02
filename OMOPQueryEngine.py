from sqlalchemy import create_engine, MetaData, Table, select, or_
from sqlalchemy.orm import sessionmaker, Session

import pandas as pd
import re
class OMOPTempoQueryEngine:
    def __init__(self, connection_string):
        self.engine = create_engine(connection_string)
        self.metadata = MetaData()
        self.connection = self.engine.connect()
        self.metadata.reflect(bind=self.connection)
        self.candidate_names = ['Heart Rate', 'Respiratory Rate', 'Breath Rate', 'Oxygen Saturation', 'Blood Pressure']

    def read_from_tempo(self, query):
        """
        Extract data elements from a tempo query string.
        Data elements are enclosed in curly braces {}.
        
        Args:
            query (str): The tempo query string
            
        Returns:
            list: A list of data elements found in the query
        """
        
        # Use regex to find all text enclosed in curly braces
        pattern = r'\{([^}]+)\}'
        matches = re.findall(pattern, query)
        
        return matches
    
    def get_pattern_matches(self, pattern):
        regex = re.compile(pattern.replace('*', '.*'), re.I)
        return [c for c in self.candidate_names if regex.search(c)]
    
    def extract_data_format(self, data_elements):
        """
        Extract data format from a tempo query string.
        Data format is enclosed in parentheses ().
        
        Args:
            data_elements (list): A list of data elements found in the query
            
        Returns:
            list: A list of data formats found in the query
        """
        result = []
        for q in data_elements:
            entry = {'name': [], 'scope': [], 'id': []}
            fields = q.split(';')
            
            if len(fields) == 1:
                entry['name'] = fields
            else:
                for f in fields:
                    f = f.strip()
                    in_match = re.match(r'(\w+)\s+in\s*\(([^)]+)\)', f)
                    eq_match = re.match(r'(\w+)\s*=\s*(.+)', f)
                    contains_match = re.match(r'(\w+)\s+contains\s+(.+)', f)   
                    if in_match:
                        key = in_match.group(1)
                        values = [v.strip() for v in in_match.group(2).split(',')]
                        if key in entry:
                            entry[key].extend(values)
                        else:
                            entry[key] = values
                    elif eq_match:
                        key = eq_match.group(1)
                        value = eq_match.group(2).strip()
                        if key in entry:
                            entry[key].append(value)
                        else:
                            entry[key] = [value]
                    elif contains_match:
                        key = contains_match.group(1)
                        pattern = contains_match.group(2).strip()
                        matches = self.get_pattern_matches(pattern)
                        if key in entry:
                            entry[key].extend(matches)
                        else:
                            entry[key] = matches
                    else:
                        # Fallback: treat as name
                        if 'name' in entry:
                            entry['name'].append(f)
                        else:
                            entry['name'] = [f]

            # Remove empty lists for id/name/scope
            entry = {k: v for k, v in entry.items() if v}
            result.append(entry)

        return result
    
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
                print("concept_ids: ", concept_ids)
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
                