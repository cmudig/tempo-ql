import os
import pandas as pd
import json
import glob
from datetime import timedelta
from sqlalchemy import select
from sqlalchemy.types import Integer, String
from ..data_types import *
from ..generic.dataset import GenericDataset, TRAJECTORY_ID_TABLE_ID_FIELD
from ..generic.formats import DatasetFormat

ID_FIELD = 'subject_id'
TIME_FIELD = 'time'
CODE_FIELD = 'code'
VALUE_FIELDS = ['text_value', 'numeric_value']

CONCEPT_ID_FIELD = 'code'
CONCEPT_NAME_FIELD = 'description'
SCOPE_FIELD = 'scope'

class MEDSDataset(GenericDataset):
    def __init__(self, 
                 path_glob, 
                 concepts_path_glob, 
                 id_field=ID_FIELD, 
                 time_field=TIME_FIELD, 
                 code_field=CODE_FIELD,
                 value_fields=VALUE_FIELDS, 
                 concept_id_field=CONCEPT_ID_FIELD,
                 concept_name_field=CONCEPT_NAME_FIELD,
                 scope_field=None,
                 connection_string="duckdb:///:memory:", **kwargs):
        """
        path_glob: path to one or more parquet files containing MEDS-formatted data
        """
        super().__init__(connection_string, DatasetFormat([{}], [], None), **kwargs)
        self.path_glob = path_glob
        self.id_field = id_field
        self.time_field = time_field
        self.code_field = code_field
        self.value_fields = value_fields
        self.concept_id_field = concept_id_field
        self.concept_name_field = concept_name_field
        self.scope_field = scope_field or SCOPE_FIELD
        
        self.concepts = pd.read_parquet(glob.glob(concepts_path_glob))
        if scope_field is None:
            self.concepts[SCOPE_FIELD] = self.concepts[self.concept_id_field].str.split('/', n=1).str[0]
        self.data = pd.read_parquet(glob.glob(self.path_glob))
        self._filter_trajectories()
        
        self._table_context = None
        self._scopes = None
    
    def _get_table(self, table_info, limit_columns=None):
        raise NotImplementedError(f"_get_table unsupported for {type(self).__name__}")
    
    def _filter_trajectories(self):
        if self._trajectory_id_table is not None:
            if self.verbose:
                print("\tFiltering dataset to trajectory IDs")
            with self.engine.connect() as conn:
                result = conn.execute(select(self._trajectory_id_table.c[TRAJECTORY_ID_TABLE_ID_FIELD]))
                ids = pd.DataFrame(result.fetchall(), columns=result.keys())
            self.data = self.data[self.id_field_transform(self.data[self.id_field]).isin(ids[TRAJECTORY_ID_TABLE_ID_FIELD])]
        self._scopes = None
    
    def set_trajectory_ids(self, trajectory_id_list, batch_size=5000):
        super().set_trajectory_ids(trajectory_id_list, batch_size)
        self._filter_trajectories()
    
    def reset_trajectory_ids(self):
        super().reset_trajectory_ids()
        self.data = pd.read_parquet(glob.glob(self.path_glob))
        self._scopes = None
    
    def get_ids(self):
        return self.data[self.id_field].unique()
    
    def get_scopes(self):
        if self._scopes is None:
            self._scopes = self.concepts[SCOPE_FIELD].unique().tolist()
        return self._scopes
    
    def get_table_context(self):
        """
        Generates a JSON description of the various scopes available in the dataset.
        """
        if self._table_context is None:
            self._table_context = []
            for scope in self.get_scopes():
                data_type = "event" if not pd.isna(self.data.loc[self.data[self.code_field].str.startswith(scope + '/'), self.time_field]).all() else "attribute"
                if data_type == "event":
                    self._table_context.append({
                        "scope": scope,
                        "type": data_type,
                        "id_field": self.id_field,
                        "time_field": self.time_field,
                        "type_field": self.code_field,
                        "default_value_field": self.value_fields[0],
                    })
                else:
                    names = self.list_data_elements(scope=scope)["name"]
                    self._table_context.append({
                        "scope": scope,
                        "attributes": {
                            name: {} for name in names
                        }
                    })
        return json.dumps(self._table_context)
        
    def get_min_times(self):
        data_with_times = self.data[~pd.isna(self.data[self.time_field])]
        return Attributes(data_with_times[self.time_field].groupby(data_with_times[self.id_field]).agg('min'))

    def get_max_times(self):
        data_with_times = self.data[~pd.isna(self.data[self.time_field])]
        max_times = data_with_times[self.time_field].groupby(data_with_times[self.id_field]).agg('max')
        if pd.api.types.is_datetime64_any_dtype(max_times.dtype):
            max_times = max_times + timedelta(seconds=1)
        else:
            max_times = max_times + 1
        return Attributes(max_times)
    
    def attempt_attribute_extract(self, concept_name_query):
        if self.verbose:
            print("Attempting attribute extract for", concept_name_query)
        matching_rows = self.data[self.data[self.code_field].isin(self.concepts[concept_name_query.filter_series(self.concepts[self.concept_name_field])][self.concept_id_field]) &
                                  pd.isna(self.data[self.time_field])]
        if len(matching_rows):
            if matching_rows[self.id_field].nunique() != len(matching_rows):
                print("Warning: data queried as attribute has multiple values per trajectory, de-duplicating")
                matching_rows = matching_rows.sort_values([self.id_field, self.time_field]).drop_duplicates(subset=[self.id_field])
            matching_rows = matching_rows.set_index(self.id_field)
            
            attrs = matching_rows[self.value_fields[0]].copy()
            for val_field in self.value_fields[1:]:
                attrs = attrs.astype(str).where(~pd.isna(attrs), matching_rows[val_field].astype(str))
            return Attributes(attrs.reindex(self.get_ids()).rename(', '.join(matching_rows[self.code_field].unique())))
    
    def attempt_nonconcept_extract(self, name_query, scope=None, return_type=None, value_field=None):
        return {}
    
    def search_concept_id(self, concept_id_query=None, concept_name_query=None, scope=None):
        results = {}
        if scope is not None:
            relevant_concepts = self.concepts[self.concepts[SCOPE_FIELD] == scope]
        else:
            relevant_concepts = self.concepts
        
        if concept_id_query is not None:
            matched_concepts = relevant_concepts[concept_id_query.filter_series(relevant_concepts[self.concept_id_field])]
        else:
            matched_concepts = relevant_concepts[concept_name_query.filter_series(relevant_concepts[self.concept_name_field])]
        
        for scope, group in matched_concepts.groupby(SCOPE_FIELD):
            results.setdefault(scope, []).extend(list(group[[self.concept_id_field, self.concept_name_field]].itertuples(index=False)))
        return results
    
    def extract_data_for_concepts(self, scope, concepts, value_field=None):
        df = self.data[self.data[self.code_field].isin([c[0] for c in concepts])]
        value_field_name = value_field or self.value_fields[0]
        sub_df = df[[self.id_field, self.time_field, self.code_field, value_field_name]].copy()
        if value_field is None:
            # iterate through fallback values
            for val_field in self.value_fields[1:]:
                sub_df[value_field_name] = sub_df[value_field_name].astype(str).where(~pd.isna(sub_df[value_field_name]), df[val_field].astype(str))
                
        # add concept names
        sub_df = pd.merge(sub_df,
                          pd.DataFrame(concepts, columns=[self.code_field, self.concept_name_field]),
                          how='left',
                          on=self.code_field)
        sub_df = sub_df.assign(**{self.code_field: sub_df[self.code_field] + (" " + sub_df[self.concept_name_field]).fillna("")})
        return Events(sub_df,
                      type_field=self.code_field,
                      time_field=self.time_field,
                      id_field=self.id_field,
                      value_field=value_field_name)
    
    def get_id_field_type(self):
        return Integer if pd.api.types.is_integer_dtype(self.data[self.id_field].dtype) else String
    
    def get_data_for_scope(self, scope, value_field=None):
        df = self.data[self.data[self.code_field].str.startswith(scope + '/')]
        value_field_name = value_field or self.value_fields[0]
        sub_df = df[[self.id_field, self.time_field, self.code_field, value_field_name]].copy()
        if value_field is None:
            # iterate through fallback values
            for val_field in self.value_fields[1:]:
                sub_df[value_field_name] = sub_df[value_field_name].astype(str).where(~pd.isna(sub_df[value_field_name]), df[val_field].astype(str))
                
        # add concept names
        sub_df = pd.merge(sub_df,
                          self.concepts,
                          how='left',
                          left_on=self.code_field,
                          right_on=self.concept_id_field)
        sub_df = sub_df.assign(**{self.code_field: sub_df[self.code_field] + (" " + sub_df[self.concept_name_field]).fillna("")})
        return Events(sub_df,
                      type_field=self.code_field,
                      time_field=self.time_field,
                      id_field=self.id_field,
                      value_field=value_field_name)
        

    def list_data_elements(self, scope=None, return_counts=False, cache_only=False):
        if (scope, return_counts) in self._name_list_cache:
            return self._name_list_cache[(scope, return_counts)]
        if cache_only: return pd.DataFrame({'name': [], 'scope': [], 'type': [], **({'count': []} if return_counts else {})})
        
        if scope is None:
            data = self.data
        else:
            data = self.data[self.data[self.code_field].str.startswith(scope + '/')]
            
        has_nonnull_times = data[self.time_field].groupby(data[self.code_field]).agg(lambda g: (~pd.isna(g)).any()).replace({False: 'attribute', True: 'event'}).rename('type').reset_index()
        if return_counts:
            counts = data[self.id_field].groupby(data[self.code_field]).agg('size').rename('count').reset_index()
            concept_codes = pd.merge(counts, has_nonnull_times,
                                    on=self.code_field,
                                    how='inner')
        else:
            concept_codes = has_nonnull_times
            
        result = pd.merge(concept_codes,
                        self.concepts[[self.concept_id_field, self.concept_name_field]],
                        left_on=self.code_field,
                        right_on=self.concept_id_field,
                        how='left').rename(columns={
                            self.code_field: 'id',
                            self.concept_name_field: 'name'
                        })
        split_codes = result['id'].str.split('/', n=1)
        result.loc[pd.isna(result['name']), 'name'] = split_codes.str[1]
        result = result.assign(scope=split_codes.str[0])
        if return_counts: result = result.sort_values('count', ascending=False)
        
        self._name_list_cache[(scope, return_counts)] = result
        return result