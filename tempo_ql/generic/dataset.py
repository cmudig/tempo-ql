from sqlalchemy import create_engine, MetaData, Table, Column, select, or_, case, union, func, distinct, literal, insert
from sqlalchemy.types import Interval, Integer
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.exc import NoSuchTableError
import pandas as pd
import numpy as np
import re
import datetime
from copy import deepcopy
from ..data_types import *
from ..utils import convert_to_native_types

class ConceptFilter:
    def __init__(self, query_type, query_data):
        self.query_type = query_type
        self.query_data = query_data
        if query_type in ("contains", "matches", "startswith", "endswith"):
            if isinstance(self.query_data, re.Pattern):
                flags = self.query_data.flags
                self.pattern_string = self.query_data.pattern.lower() if flags & re.I else self.query_data.pattern
            else:
                self.pattern_string = re.escape(self.query_data)
                flags = re.NOFLAG
            if self.query_type == "matches": 
                self.pattern_string = "^" + self.pattern_string + "$"
            elif self.query_type == "startswith":
                self.pattern_string = "^" + self.pattern_string + ".*"
            elif self.query_type == "endswith":
                self.pattern_string = ".*" + self.pattern_string + "$"
            else:
                self.pattern_string = ".*" + self.pattern_string + ".*"
            self.pattern = re.compile(self.pattern_string, flags=flags)
            self.flags = flags
        else:
            self.pattern_string = None
            self.pattern = None
            self.flags = None
        
    def __repr__(self):
        return f"<{self.query_type} {self.query_data}>"
        
    def filter_db(self, column):
        if self.query_type == "equals":
            filters = [column == self.query_data]
        elif self.query_type == "in":
            filters = [column.in_(self.query_data)]
        elif self.query_type in ("contains", "matches", "startswith", "endswith"):
            if self.flags & re.I:    
                filters = [func.lower(column).regexp_match(self.pattern_string)]
            else:
                filters = [column.regexp_match(self.pattern_string)]
        return filters
    
    def filter_series(self, concept_col):
        if self.query_type == "equals":
            filters = concept_col == self.query_data
        elif self.query_type == "in":
            filters = concept_col.isin(self.query_data)
        elif self.query_type in ("contains", "matches", "startswith", "endswith"):
            filters = concept_col.astype(str).contains(self.pattern)
        return filters
    
    def matches_value(self, value):
        if self.query_type == "equals":
            return value == self.query_data
        elif self.query_type == "in":
            return value in self.query_data
        elif self.query_type in ("contains", "matches", "startswith", "endswith"):
            return self.pattern.search(value) is not None
        return False

TRAJECTORY_ID_TABLE_ID_FIELD = "trajectory_id"
TRAJECTORY_ID_TABLE_NAME = "tempo_trajectory_ids"


class GenericDataset:
    def __init__(self, connection_string, tables, vocabularies, schema_name=None, scratch_schema_name='auto'):
        self.engine = create_engine(connection_string, 
                                    **({"execution_options": {"schema_translate_map": {None: schema_name}}} if schema_name is not None else {}))
        self.metadata = MetaData(schema=schema_name)
        self.scratch_schema_name = schema_name if scratch_schema_name == 'auto' else scratch_schema_name
        self.connection = self.engine.connect()
        self.metadata.reflect(bind=self.connection)
        self.tables = deepcopy(tables)
        self.vocabularies = deepcopy(vocabularies)
        self._trajectory_id_table = None # if set, join against this table to limit the trajectory IDs
        self._local_variables = {} # in the future we could have variables stored as temp tables as well
        if not self.tables: raise ValueError("No tables specified")
        
    def __del__(self):
        if self.connection is not None: self.connection.close()
        
    def _get_table(self, table_name):
        """Attempt to get the SQLAlchemy Table reference from the existing metadata,
        or autoload it."""
        try:
            return self.metadata.tables[table_name]
        except KeyError:
            return Table(table_name, self.metadata, autoload_with=self.engine)
        
    def _limit_trajectory_ids(self, base_table, id_field):
        """
        Applies a join to the trajectory table if one is set.
        """
        if self._trajectory_id_table is not None:
            return base_table.join(self._trajectory_id_table,
                                   base_table.c[id_field] == self._trajectory_id_table.c[TRAJECTORY_ID_TABLE_ID_FIELD])
        return base_table
        
    def search_concept_id(self, concept_id_query=None, concept_name_query=None, scope=None):
        """
        Search for concept IDs for a given name using the available vocabularies.
        
        Args:
            concept_id_query: Constraints on which concept IDs to retrieve,
                provided as a ConceptFilter object.
            concept_name_query: Constraints on which concept IDs to retrieve based
                on the concept name, provided as a Concept Filter object.
            scope: The scope in which the concept appears, if available. If None,
                search in all scopes.
            
        Returns:
            result_list: Matching concepts as dictionaries of {scope: (concept 
            ID, concept name), ...}
        """
        if (concept_id_query is None) == (concept_name_query is None):
            raise ValueError("Exactly one of id or name must be provided to search for OMOP concepts")
        
        with self.engine.connect() as conn:
            scopes = {}
            for vocabulary in self.vocabularies:
                if scope is not None and "scopes" in vocabulary and scope not in vocabulary["scopes"]:
                    continue
                
                concept_id_field = vocabulary.get('concept_id_field', 'concept_id')
                concept_name_field = vocabulary.get('concept_name_field', 'concept_name')
                if "source" not in vocabulary: raise ValueError("Vocabulary must have a source")
                
                if concept_id_query is not None:
                    filters = concept_id_query.filter_db(self._get_table(vocabulary['source']).c[concept_id_field])
                if concept_name_query is not None:
                    filters = concept_name_query.filter_db(self._get_table(vocabulary['source']).c[concept_name_field])
                
                stmt = select(
                    self._get_table(vocabulary['source']).c[concept_id_field],
                    self._get_table(vocabulary['source']).c[concept_name_field],
                    self._get_table(vocabulary['source']).c[vocabulary.get('scope_field', 'scope')]
                ).where(or_(*filters))
                result = conn.execute(stmt).fetchall()
                for row in result:
                    scopes.setdefault(row[-1], []).append(tuple(row[:2]))

            return scopes
        
    def attempt_attribute_extract(self, concept_name_query):
        """
        Extract an attribute from the dataset based on a concept name query.
        The query must specify a single attribute name.
        """
        if concept_name_query.query_type != "equals":
            return
        
        candidates = []        
        for table_info in self.tables:
            table_name = table_info['source']
            if 'attributes' not in table_info: continue
            if concept_name_query.query_data not in table_info['attributes']: continue
            attr_info = table_info['attributes'][concept_name_query.query_data]
            
            with self.engine.connect() as conn:
                if attr_info.get('convert_concept', False):
                    # Join the attribute table with the concept table to get the 
                    # concept names for each concept ID stored in the value field
                    matching_vocabs = [vocab for vocab in self.vocabularies
                                       if "scope" not in attr_info or attr_info["scope"] in vocab["scopes"]]
                    if not matching_vocabs:
                        raise ValueError(f"No vocabularies match scope '{attr_info.get('scope')}' specified for attribute '{concept_name_query.query_data}'")
                    unioned_vocabs = union(*(
                        select(
                            self._get_table(vocab["source"]).c[vocab.get("concept_id_field", "concept_id")].label("concept_id"),
                            self._get_table(vocab["source"]).c[vocab.get("concept_name_field", "concept_name")].label("concept_name"),
                            self._get_table(vocab["source"]).c[vocab.get("scope_field", "scope")].label("scope"),
                        ) for vocab in matching_vocabs
                    ))
                    stmt = select(
                        self._get_table(table_name).c[table_info['id_field']],
                        case(
                            (unioned_vocabs.c.concept_name != None,
                            unioned_vocabs.c.concept_name),
                            else_=self._get_table(table_name).c[attr_info['value_field']]
                        ).label(attr_info['value_field'])
                    ).distinct().select_from(
                        self._limit_trajectory_ids(
                            self._get_table(table_name), 
                            table_info['id_field']
                        ).join(
                            unioned_vocabs, 
                            self._get_table(table_name).c[attr_info['value_field']] == unioned_vocabs.c.concept_id,
                            isouter=True
                        ))
                else:
                    stmt = select(
                        self._get_table(table_name).c[table_info['id_field']],
                        self._get_table(table_name).c[attr_info['value_field']]
                    ).distinct().select_from(self._limit_trajectory_ids(
                        self._get_table(table_name), 
                        table_info['id_field']
                    ))
                print("attribute stmt:", stmt)
                result = conn.execute(stmt)
                result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                candidates.append(Attributes(result_df.set_index(table_info['id_field'])[attr_info['value_field']]))
                
        if len(candidates) == 0: return
        if len(candidates) > 1:
            raise ValueError(f"Multiple candidates for attribute '{concept_name_query.query_data}'")
        return candidates[0]
    
    def attempt_nonconcept_extract(self, name_query, scope=None, return_type=None, value_field=None):
        """
        Attempt to extract an Events or Intervals from a table without using
        concept IDs. The event and interval names are defined in the tables
        specification under event_type, event_type_field, interval_type, or
        interval_type_field.
        
        Returns all candidates that were found.
        """
        candidates = [] 
        for table_info in self.tables:
            if scope is not None and ("scope" not in table_info or scope != table_info["scope"]): continue
            table_name = table_info['source']
            if (('event_type' in table_info or 'event_type_field' in table_info or 'events' in table_info) and
                not (return_type is not None and return_type != 'event')):
                if 'events' in table_info:
                    matching_key = next((k for k in table_info['events'].keys() if name_query.matches_value(k)), None)
                    if matching_key is None: continue

                    matching_event = table_info['events'][matching_key]
                    vf = matching_event.get('value_field')
                    with self.engine.connect() as conn:
                        # Extract the rows matching query
                        stmt = select(
                            self._get_table(table_name).c[table_info['id_field']],
                            self._get_table(table_name).c[table_info['time_field']],
                            literal(matching_key).label('eventtype'),
                            *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                        ).select_from(self._limit_trajectory_ids(
                            self._get_table(table_name), 
                            table_info['id_field']
                        ))
                        if matching_event.get('filter_nulls', False) and vf is not None:
                            stmt = stmt.where(self._get_table(table_name).c[vf] is not None)
                        result = conn.execute(stmt)
                        result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                else:      
                    if 'event_type' in table_info and not name_query.matches_value(table_info['event_type']):
                        continue
                    
                    vf = table_info.get('default_value_field', None) if value_field is None else value_field
                    with self.engine.connect() as conn:
                        if 'event_type' in table_info:
                            # Extract the entire table
                            stmt = select(
                                self._get_table(table_name).c[table_info['id_field']],
                                self._get_table(table_name).c[table_info['time_field']],
                                literal(table_info['event_type']).label('eventtype'),
                                *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_name), 
                                table_info['id_field']
                            ))
                        else:
                            # Extract the rows matching query
                            stmt = select(
                                self._get_table(table_name).c[table_info['id_field']],
                                self._get_table(table_name).c[table_info['time_field']],
                                self._get_table(table_name).c[table_info['event_type_field']],
                                *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_name), 
                                table_info['id_field']
                            )).where(
                                or_(*name_query.filter_db(self._get_table(table_name).c[table_info['event_type_field']]))
                            )
                        result = conn.execute(stmt)
                        result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                if result_df is not None:
                    candidates.append(Events(result_df, 
                                            id_field=table_info['id_field'],
                                            type_field=table_info.get('event_type_field', 'eventtype'),
                                            time_field=table_info['time_field'],
                                            value_field='value' if vf is None else vf))
            if (('interval_type' in table_info or 'interval_type_field' in table_info or 'intervals' in table_info) and
                not (return_type is not None and return_type != 'interval')):
                if 'intervals' in table_info:
                    matching_key = next((k for k in table_info['intervals'].keys() if name_query.matches_value(k)), None)
                    if matching_key is None: continue

                    matching_event = table_info['intervals'][matching_key]
                    vf = matching_event.get('value_field')
                    with self.engine.connect() as conn:
                        # Extract the rows matching query
                        stmt = select(
                            self._get_table(table_name).c[table_info['id_field']],
                            self._get_table(table_name).c[table_info['start_time_field']],
                            self._get_table(table_name).c[table_info['end_time_field']],
                            literal(matching_key).label('intervaltype'),
                            *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                        ).select_from(self._limit_trajectory_ids(
                            self._get_table(table_name), 
                            table_info['id_field']
                        ))
                        if matching_event.get('filter_nulls', False) and vf is not None:
                            stmt = stmt.where(self._get_table(table_name).c[vf] is not None)
                        result = conn.execute(stmt)
                        result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                else:
                    if 'interval_type' in table_info and not name_query.matches_value(table_info['interval_type']):
                        continue
                    
                    vf = table_info.get('default_value_field', None) if value_field is None else value_field
                    with self.engine.connect() as conn:
                        if 'interval_type' in table_info:
                            # Extract the entire table
                            stmt = select(
                                self._get_table(table_name).c[table_info['id_field']],
                                self._get_table(table_name).c[table_info['start_time_field']],
                                self._get_table(table_name).c[table_info['end_time_field']],
                                literal(table_info['interval_type']).label('intervaltype'),
                                *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_name), 
                                table_info['id_field']
                            ))
                        else:
                            # Extract the rows matching query
                            stmt = select(
                                self._get_table(table_name).c[table_info['id_field']],
                                self._get_table(table_name).c[table_info['start_time_field']],
                                self._get_table(table_name).c[table_info['end_time_field']],
                                self._get_table(table_name).c[table_info['interval_type_field']],
                                *([self._get_table(table_name).c[vf]] if vf is not None else [literal(None).label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_name), 
                                table_info['id_field']
                            )).where(
                                or_(*name_query.filter_db(self._get_table(table_name).c[table_info['interval_type_field']]))
                            )
                        result = conn.execute(stmt)
                        result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                    if result_df is not None:
                        candidates.append(Intervals(result_df, 
                                                id_field=table_info['id_field'],
                                                type_field=table_info.get('interval_type_field', 'intervaltype'),
                                                start_time_field=table_info['start_time_field'],
                                                end_time_field=table_info['end_time_field'],
                                                value_field='value' if vf is None else vf))
        return candidates
        
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
        # Enumerate all tables that could contain data with this scope. We will
        # require that all data with a scope should have the same type, e.g. events
        # or intervals.
        return_type = None
        results = []
        for table_info in self.tables:
            if "scope" not in table_info or scope != table_info["scope"]: continue
            if "type" not in table_info: continue
            
            if return_type is None:
                return_type = table_info["type"]
            elif table_info["type"] != return_type:
                raise ValueError(f"Tables matching scope '{scope}' have multiple types, must all be either Events or Intervals")
            
            if "source" not in table_info: continue
            if "concept_id_field" not in table_info: continue
            
            table = self._get_table(table_info['source'])
            if value_field is not None:
                if value_field not in table.c:
                    raise AttributeError(f"Value field '{value_field}' not present in scope {scope}")
                
            with self.engine.connect() as conn:
                if table_info['type'] == 'event':
                    table_fields = [table.c[table_info['id_field']].label('id'), 
                                    table.c[table_info['time_field']].label('time'),
                                    table.c[table_info['concept_id_field']].label('concept_id')]
                    if value_field is not None:
                        table_fields.append(table.c[value_field].label('value'))
                        vf = 'value'
                    elif table_info.get('default_value_field') is not None:
                        table_fields.append(table.c[table_info.get('default_value_field')].label('value'))
                        vf = 'value'
                    else:
                        vf = None
                elif table_info['type'] == 'interval':
                    table_fields = [table.c[table_info['id_field']].label('id'), 
                                    table.c[table_info['concept_id_field']].label('concept_id'),
                                    table.c[table_info['start_time_field']].label('start_time'), 
                                    table.c[table_info['end_time_field']].label('end_time')]
                    if value_field is not None:
                        table_fields.append(table.c[value_field].label('value'))
                        vf = 'value'
                    elif table_info.get('default_value_field') is not None:
                        table_fields.append(table.c[table_info.get('default_value_field')].label('value'))
                        vf = 'value'
                    else:
                        vf = None
                        
                stmt = select(
                    *table_fields
                ).select_from(self._limit_trajectory_ids(
                    table, 
                    table_info['id_field']
                )).where(
                    table.c[table_info['concept_id_field']].in_([c[0] for c in concepts]))
                result = conn.execute(stmt)
                result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
                if vf is None:
                    result_df["value"] = pd.NA
                results.append(result_df)
                
        if return_type == 'event':
            return Events(pd.concat(results, axis=0), 
                        id_field='id',
                        type_field='concept_id',
                        time_field='time',
                        value_field='value')
        elif return_type == 'interval':
            return Intervals(pd.concat(results, axis=0), 
                            id_field='id',
                            type_field='concept_id',
                            start_time_field='starttime',
                            end_time_field='endtime',
                            value_field='value')
        raise ValueError(f"No matching table for scope '{scope}'")

    def get_min_times(self):
        """
        Returns an Attributes where the value for each ID is the earliest timestamp
        for that trajectory ID in the dataset.
        """
        with self.engine.connect() as conn:
            all_times = union(
                *(select(
                    self._get_table(scope_info['source']).c[scope_info['id_field']].label('id'),
                    self._get_table(scope_info['source']).c[scope_info['start_time_field']].label('mintime')
                ).select_from(self._limit_trajectory_ids(
                    self._get_table(scope_info['source']), 
                    scope_info['id_field']
                )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'interval'),
                *(select(
                    self._get_table(scope_info['source']).c[scope_info['id_field']].label('id'),
                    self._get_table(scope_info['source']).c[scope_info['time_field']].label('mintime')
                ).select_from(self._limit_trajectory_ids(
                    self._get_table(scope_info['source']), 
                    scope_info['id_field']
                )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'event')
            ).cte('all_times')
            stmt = select(all_times.c.id, func.min(all_times.c.mintime).label('mintime')).group_by(all_times.c.id)
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            return Attributes(result_df.set_index('id')['mintime'])
        
    def get_max_times(self):
        """
        Returns an Attributes where the value for each ID is the latest timestamp
        for that trajectory ID in the dataset.
        """
        with self.engine.connect() as conn:
            all_times = union(
                *(select(
                    self._get_table(scope_info['source']).c[scope_info['id_field']].label('id'),
                    self._get_table(scope_info['source']).c[scope_info['end_time_field']].label('maxtime')
                ).select_from(self._limit_trajectory_ids(
                    self._get_table(scope_info['source']), 
                    scope_info['id_field']
                )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'interval'),
                *(select(
                    self._get_table(scope_info['source']).c[scope_info['id_field']].label('id'),
                    self._get_table(scope_info['source']).c[scope_info['time_field']].label('maxtime')
                ).select_from(self._limit_trajectory_ids(
                    self._get_table(scope_info['source']), 
                    scope_info['id_field']
                )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'event')
            ).cte('all_times')
            stmt = select(all_times.c.id, (func.max(all_times.c.maxtime) + datetime.timedelta(seconds=1)).label('maxtime')).group_by(all_times.c.id)
            # print(stmt.compile(compile_kwargs={"literal_binds": True}))
            result = conn.execute(stmt)
            result_df = pd.DataFrame(result.fetchall(), columns=result.keys())
            return Attributes(result_df.set_index('id')['maxtime'])
        
    def get_data_element(
        self,
        scope=None,
        data_type=None,
        concept_id_query=None,
        concept_name_query=None,
        value_field=None):
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
        if concept_id_query is not None and not isinstance(concept_id_query, ConceptFilter):
            concept_id_query = ConceptFilter(*concept_id_query)
        if concept_name_query is not None and not isinstance(concept_name_query, ConceptFilter):
            concept_name_query = ConceptFilter(*concept_name_query)
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
            
        candidates = []
        if concept_name_query is not None:
            candidate_nonconcept = self.attempt_nonconcept_extract(concept_name_query, 
                                                                   scope=scope, 
                                                                   return_type=data_type, 
                                                                   value_field=value_field)
            candidates += candidate_nonconcept
            
        matching_concepts = self.search_concept_id(concept_id_query=concept_id_query,
                                                   concept_name_query=concept_name_query,
                                                   scope=scope)
        if scope is not None:
            if scope not in matching_concepts:
                if not candidates:
                    raise ValueError(f"No concepts match query for scope {scope}")
            else:
                matching_concepts = {scope: matching_concepts[scope]}
            
        print("Matching concepts:", matching_concepts)
        
        candidates += [self.extract_data_for_concepts(scope, concepts, value_field=value_field)
                      for scope, concepts in matching_concepts.items()]
        num_existing = sum(len(c) > 0 for c in candidates)
        if num_existing > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query or concept_id_query}. Try specifying a data type or scope.")
        elif num_existing == 0:
            raise KeyError(f"No data element found matching query {concept_name_query or concept_id_query}")

        return next(c for c in candidates if len(c) > 0)

    def set_trajectory_ids(self, trajectory_id_list):
        """
        Sets the dataset to only return results for the given set of trajectory
        IDs.
        """
        try:
            self._trajectory_id_table = Table(TRAJECTORY_ID_TABLE_NAME,
                                              self.metadata,
                                              schema=self.scratch_schema_name,
                                              autoload_with=self.engine)
        except NoSuchTableError:
            pass
        finally:
            if self._trajectory_id_table is not None:
                print("Trajectory ID table exists - dropping...")
                self.metadata.drop_all(bind=self.engine, tables=[self._trajectory_id_table])
        
        # get the ID field type from a random table entry
        arbitrary_table_info = next((t for t in self.tables if "source" in t and "id_field" in t), None)
        if not arbitrary_table_info:
            raise ValueError("No tables have a source and an ID field, cannot infer ID field type")
        id_field_type = self._get_table(arbitrary_table_info['source']).c[arbitrary_table_info['id_field']].type
        self._trajectory_id_table = Table(TRAJECTORY_ID_TABLE_NAME, 
                                          self.metadata,
                                          Column(TRAJECTORY_ID_TABLE_ID_FIELD, id_field_type, primary_key=True),
                                          schema=self.scratch_schema_name)
        self.metadata.create_all(bind=self.engine, tables=[self._trajectory_id_table])
        with self.engine.connect() as conn:
            conn.execute(insert(self._trajectory_id_table).values([
                {TRAJECTORY_ID_TABLE_ID_FIELD: convert_to_native_types(id_val)}
                for id_val in trajectory_id_list
            ]))