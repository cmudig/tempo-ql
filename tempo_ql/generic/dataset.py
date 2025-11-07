from sqlalchemy import create_engine, MetaData, Table, Column, select, or_, case, union, func, distinct, literal, insert, cast, String, null, text
from sqlalchemy.types import Interval, Integer, DateTime, Date
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.exc import NoSuchTableError
import pandas as pd
import numpy as np
import re
import json
import datetime
from copy import deepcopy
from ..data_types import *
from ..utils import convert_to_native_types, DataFrameCache

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
            filters = concept_col.astype(str).str.contains(self.pattern)
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
    def __init__(self, 
                 connection_string, 
                 dataset_format, 
                 schema_name=None, 
                 scratch_schema_name='auto', 
                 data_elements_cache_dir=None,
                 table_row_limit=None,
                 verbose=False,
                 id_field_transform=None,
                 time_field_transform=None):
        """
        Args:
        * connection_string: A SQLAlchemy connection string for the database.
        * dataset_format: A DatasetFormat tuple containing (tables, vocabularies, joins).
            The format should be as follows:
            * tables: A list of dictionaries describing the tables that can be
                accessed in the database and the types of data they contain.
            * vocabularies: A list of dictionaries describing the concept mapping 
                tables that are available.
            * id_field_joins: If provided, a dictionary specifying how to join tables
                with alternative id fields to other tables to achieve a table with the
                desired id field. The dictionary's keys should be table source names (specified
                in the tables list) and the values should be dictionaries with the 
                following keys:
                * dest_table: A table to join to the source table
                * join_key: Field that should be joined on in both source and 
                    destination tables (will be used as both src_join_key and dest_join_key)
                * src_join_key: Field that should be joined on in the source table 
                * dest_join_key: Field that should be joined on in the destination
                    table
                * keep_fields: Additional fields to keep from the destination table.
                * join_type: The type of join that should be used ('left', 'inner',
                    'right', where the left table is the source table). Defaults to
                    'inner'
                * where_clause: A lambda function that takes both tables as SQLAlchemy
                    Table objects and returns a SQLAlchemy expression that will be
                    used to filter the results. If not provided, no filtering is done.
                The table that results from the join should contain a field corresponding
                to the id_field specified in the tables list.
        * schema_name: A schema prefix for the source names in the tables list.
        * scratch_schema_name: Schema to use for tables written by this object
            in the database. If not provided or 'auto', uses the schema_name
            parameter.
        * data_element_cache_dir: Directory in which to persist data element
            information; if not provided, this information is computed when
            list_data_elements is called and cached in memory.
        * table_row_limit: A limit to apply on results. This
            is only for debugging purposes - use GenericDataset.set_trajectory_ids()
            to control which trajectories are returned.
        * verbose: Whether to log the database operations as they are performed.
        * id_field_transform: A SQLAlchemy-compatible function to apply on the
            ID fields. **This will be computed in the database.**
        * time_field_transform: A SQLAlchemy-compatible function to apply on the
            time fields. **This will be computed in the database.**
        """
        self.engine = create_engine(connection_string, 
                                    **({"execution_options": {"schema_translate_map": {None: schema_name}}} if schema_name is not None else {}))
        self.metadata = MetaData(schema=schema_name)
        self.scratch_schema_name = schema_name if scratch_schema_name == 'auto' else scratch_schema_name
        self.connection = self.engine.connect()
        # self.metadata.reflect(bind=self.connection)
        self.tables = deepcopy(dataset_format.tables)
        self.vocabularies = deepcopy(dataset_format.vocabularies)
        self._trajectory_id_table = None # if set, join against this table to limit the trajectory IDs
        self._load_trajectory_id_table()
        self._local_variables = {} # in the future we could have variables stored as temp tables as well
        if not self.tables: raise ValueError("No tables specified")
        self.verbose = verbose
        self.id_field_transform = id_field_transform or (lambda x: x)
        self.time_field_transform = time_field_transform or (lambda x: x)
        self.id_field_joins = dataset_format.joins or {}
        self.table_row_limit = table_row_limit
        self._captured_queries = []
        self._name_list_cache = DataFrameCache(data_elements_cache_dir) if data_elements_cache_dir is not None else {}
        self._cte_cache = {}
        self._id_cache = None
        
    def get_table_context(self):
        """
        Returns a string representation of the table context suitable for passing
        to an LLM.
        """
        def sanitize(o):
            # recursively remove any keys whose values are not numbers, strings, lists, or dicts
            if isinstance(o, dict):
                return {k: sanitize(v) for k, v in o.items() if isinstance(v, (str, int, float, list, dict, bool, type(None)))}
            elif isinstance(o, list):
                return [sanitize(v) for v in o if isinstance(v, (str, int, float, list, dict, bool, type(None)))]
            return o
            
        return json.dumps([
            sanitize({
                **table,
                **({"join": self.id_field_joins[table['source']]} if 'source' in table and table['source'] in self.id_field_joins else {})
            })
            for table in self.tables
        ], indent=2)
        
    def get_scopes(self):
        return sorted(set([table_info['scope'] for table_info in self.tables
                      if 'scope' in table_info]))
        
    def __del__(self):
        if hasattr(self, "connection") and self.connection is not None: self.connection.close()
        
    def _get_table(self, table_info, limit_columns=None):
        """Attempt to get the SQLAlchemy Table reference from the existing metadata,
        or autoload it. Also join the table as needed to get the relevant ID fields."""
        try:
            table = self.metadata.tables[table_info["source"]]
        except KeyError:
            table = Table(table_info["source"], self.metadata, autoload_with=self.engine)
            
        limit_columns = tuple(sorted(set(limit_columns))) if limit_columns else None
        
        if table_info["source"] in self.id_field_joins:
            if (table_info["source"], limit_columns) not in self._cte_cache:
                join_info = self.id_field_joins[table_info["source"]]
                if "dest_table" not in join_info:
                    raise ValueError(f"ID field join information for table {table_info['source']} needs a 'dest_table' key")
                if "src_join_key" not in join_info and "join_key" not in join_info:
                    raise ValueError(f"ID field join information for table {table_info['source']} needs 'src_join_key' or 'join_key'")
                try:
                    dest_table = self.metadata.tables[join_info["dest_table"]]
                except KeyError:
                    dest_table = Table(join_info["dest_table"], self.metadata, autoload_with=self.engine)
                    
                join_type = join_info.get("join_type", "inner")
                src_join_key = join_info.get("src_join_key", join_info.get("join_key"))
                dest_join_key = join_info.get("dest_join_key", join_info.get("join_key"))
                final_limit_columns = set([*limit_columns, src_join_key]) if limit_columns is not None else None
                if join_type in ("left", "inner"):
                    join_clause = table.join(
                        dest_table, 
                        table.c[src_join_key] == dest_table.c[dest_join_key],
                        isouter=join_type == "left"
                    )
                elif join_type == "right":
                    join_clause = dest_table.join(
                        table, 
                        table.c[src_join_key] == dest_table.c[dest_join_key],
                        isouter=True
                    )
                else:
                    raise ValueError(f"ID field join type for table {table_info['source']} should be 'left', 'inner', or 'right', not '{join_type}'")
                
                stmt = select(
                    *(table.c if final_limit_columns is None else [table.c[c] for c in final_limit_columns if c in table.c]),
                    dest_table.c[table_info["id_field"]],
                    *(dest_table.c[f] for f in join_info.get("keep_fields", []) if f != table_info["id_field"])
                ).select_from(join_clause)
                if "where_clause" in join_info:
                    stmt = stmt.where(join_info["where_clause"](table, dest_table))
                    
                self._cte_cache[(table_info["source"], limit_columns)] = stmt.cte(f"{table_info['source']}_id_joined")
            return self._cte_cache[(table_info["source"], limit_columns)]
        return table
        
    def _limit_trajectory_ids(self, base_table, id_field):
        """
        Applies a join to the trajectory table if one is set.
        """
        if self._trajectory_id_table is not None:
            if self.verbose:
                print("\tJoining to trajectory ID table")
            result = base_table.join(self._trajectory_id_table,
                                   self.id_field_transform(base_table.c[id_field]) == self._trajectory_id_table.c[TRAJECTORY_ID_TABLE_ID_FIELD])
            return result
        return base_table
    
    def get_ids(self):
        """
        Returns a list of all IDs in the dataset (by querying all known tables 
        for their ID column).
        """
        if self._id_cache is None:
            primary_id_table = next((t for t in self.tables if t.get('primary_id_table')), None)
            if primary_id_table is not None and "source" in primary_id_table and "id_field" in primary_id_table:
                with self.engine.connect() as conn:
                    id_table = select(
                        distinct(self.id_field_transform(
                                self._get_table(primary_id_table, limit_columns=[primary_id_table["id_field"]]).c[primary_id_table["id_field"]])).label("id")
                    ).cte('all_ids')
                    stmt = select(id_table.c["id"]).distinct().select_from(self._limit_trajectory_ids(id_table, "id"))
                    if self.verbose:
                        print(f"Querying primary ID table ({primary_id_table['source']}) to get the list of trajectory IDs")
                    result = self._fetch_rows(self._execute_query(conn, stmt))
                    self._id_cache = pd.DataFrame(result, columns=["id"])["id"]
            else:
                with self.engine.connect() as conn:
                    unioned_tables = union(*(
                        select(
                            # distinct(self.id_field_transform(self._get_table(table).c[table["id_field"]])).label("id")
                            distinct(self.id_field_transform(
                                    self._get_table(table, limit_columns=[table["id_field"]]).c[table["id_field"]])).label("id")
                        ) for table in self.tables
                        if "source" in table and "id_field" in table
                    )).cte('all_ids')
                    stmt = select(unioned_tables.c["id"]).distinct().select_from(self._limit_trajectory_ids(unioned_tables, "id"))
                    if self.verbose:
                        print(f"Querying all known tables to get the list of trajectory IDs")
                    result = self._fetch_rows(self._execute_query(conn, stmt))
                    self._id_cache = pd.DataFrame(result, columns=["id"])["id"]
        return self._id_cache
    
    def _capture_sql_query(self, stmt):
        """Capture the SQL query string from a SQLAlchemy statement"""
        try:
            # Compile the statement with literal binds to get the actual SQL
            compiled = stmt.compile(compile_kwargs={"literal_binds": True})
            self.last_sql_query = str(compiled)
            self._captured_queries.append(self.last_sql_query)
        except Exception as e:
            # Fallback to string representation if compilation fails
            self.last_sql_query = str(stmt)
            self._captured_queries.append(self.last_sql_query)
        
    def _execute_query(self, conn, stmt):
        """
        Execute the given query and capture the string version of it for
        inspection purposes.
        """
        self._capture_sql_query(stmt)
        return conn.execute(stmt)
        
    def _fetch_rows(self, result):
        if self.table_row_limit is not None:
            return result.fetchmany(self.table_row_limit)
        return result.fetchall()

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
                if scope is not None and not (scope in vocabulary.get("scopes", []) or scope == vocabulary.get("scope")):
                    continue
                
                concept_id_field = vocabulary.get('concept_id_field', 'concept_id')
                concept_name_field = vocabulary.get('concept_name_field', 'concept_name')
                if "source" not in vocabulary: raise ValueError("Vocabulary must have a source")
                
                if concept_id_query is not None:
                    filters = concept_id_query.filter_db(self._get_table(vocabulary).c[concept_id_field])
                if concept_name_query is not None:
                    filters = concept_name_query.filter_db(self._get_table(vocabulary).c[concept_name_field])
                
                if self.verbose:
                    print(f"Searching vocabulary {vocabulary['source']} for id {concept_id_query} and name {concept_name_query}")
                stmt = select(
                    self._get_table(vocabulary).c[concept_id_field],
                    self._get_table(vocabulary).c[concept_name_field],
                    (self._get_table(vocabulary).c[vocabulary.get('scope_field', 'scope')]
                     if 'scope' not in vocabulary else literal(vocabulary['scope']))
                ).where(or_(*filters))
                result = self._execute_query(conn, stmt).fetchall()
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
            
            value_transform = attr_info.get('value_transform', lambda x: x)
            
            with self.engine.connect() as conn:
                if attr_info.get('convert_concept', False):
                    # Join the attribute table with the concept table to get the 
                    # concept names for each concept ID stored in the value field
                    matching_vocabs = [vocab for vocab in self.vocabularies
                                       if "scope" not in attr_info or attr_info["scope"] in vocab.get("scopes", []) or attr_info["scope"] == vocab.get("scope")]
                    if not matching_vocabs:
                        raise ValueError(f"No vocabularies match scope '{attr_info.get('scope')}' specified for attribute '{concept_name_query.query_data}'")
                    unioned_vocabs = union(*(
                        select(
                            self._get_table(vocab).c[vocab.get("concept_id_field", "concept_id")].label("concept_id"),
                            self._get_table(vocab).c[vocab.get("concept_name_field", "concept_name")].label("concept_name"),
                            (self._get_table(vocab).c[vocab.get("scope_field", "scope")]
                             if "scope" not in vocab else literal(vocab["scope"])).label("scope"),
                        ) for vocab in matching_vocabs
                    ))
                    stmt = select(
                        self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]),
                        value_transform(case(
                            (unioned_vocabs.c.concept_name != None,
                            unioned_vocabs.c.concept_name),
                            else_=cast(
                                self._get_table(table_info).c[attr_info['value_field']],
                                String
                            )
                        )).label(attr_info['value_field'])
                    ).distinct().select_from(
                        self._limit_trajectory_ids(
                            self._get_table(table_info), 
                            table_info['id_field']
                        ).join(
                            unioned_vocabs, 
                            self._get_table(table_info).c[attr_info['value_field']] == unioned_vocabs.c.concept_id,
                            isouter=True
                        ))
                    if self.verbose:
                        print(f"Querying table {table_name} for attribute {concept_name_query.query_data} while joining to {len(matching_vocabs)} vocabulary(ies)")
                else:
                    stmt = select(
                        self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]),
                        value_transform(self._get_table(table_info).c[attr_info['value_field']]).label(attr_info['value_field'])
                    ).distinct().select_from(self._limit_trajectory_ids(
                        self._get_table(table_info), 
                        table_info['id_field']
                    ))
                    if self.verbose:
                        print(f"Querying table {table_name} for attribute {concept_name_query.query_data}")
                result = self._execute_query(conn, stmt)
                result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
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
        candidates = {} # indexed by scope
        for table_info in self.tables:
            if scope is not None and ("scope" not in table_info or scope != table_info["scope"]): continue
            if 'type' not in table_info: continue
            
            table_name = table_info['source']
            table_scope = table_info.get('scope', np.random.randint(0, 1e9)) # if no scope provided, make it unique
            if return_type is not None and return_type != table_info['type']: 
                continue
            
            if (('event_type' in table_info or 'event_type_field' in table_info or 'events' in table_info) and
                not (return_type is not None and return_type != 'event')):
                if 'events' in table_info:
                    for matching_key in table_info['events'].keys():
                        if not name_query.matches_value(matching_key): continue

                        matching_event = table_info['events'][matching_key]
                        vf = matching_event.get('value_field')
                        value_transform = matching_event.get('value_transform', lambda x: x)
                        with self.engine.connect() as conn:
                            # Extract the rows matching query
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['time_field']]).label('time'),
                                literal(matching_key).label('eventtype'),
                                *([value_transform(self._get_table(table_info).c[vf]).label('value')] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            ))
                            if matching_event.get('filter_nulls', False) and vf is not None:
                                stmt = stmt.where(self._get_table(table_info).c[vf] != None)
                            if self.verbose:
                                print(f"Searching table {table_name} for event named {matching_key}")
                            result = self._execute_query(conn, stmt)
                            result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
                        candidates.setdefault(table_scope, []).append(result_df)
                else:      
                    if 'event_type' in table_info and not name_query.matches_value(table_info['event_type']):
                        continue
                    
                    vf = table_info.get('default_value_field', None) if value_field is None else value_field
                    with self.engine.connect() as conn:
                        if 'event_type' in table_info:
                            # Extract the entire table
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['time_field']]).label('time'),
                                literal(table_info['event_type']).label('eventtype'),
                                *([self._get_table(table_info).c[vf].label('value')] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            ))
                            if self.verbose:
                                print(f"Retrieving table {table_name} as event named {table_info['event_type']}")
                        else:
                            # Extract the rows matching query
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['time_field']]).label('time'),
                                self._get_table(table_info).c[table_info['event_type_field']].label('eventtype'),
                                *([self._get_table(table_info).c[vf].label('value')] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            )).where(
                                or_(*name_query.filter_db(self._get_table(table_info).c[table_info['event_type_field']]))
                            )
                            if self.verbose:
                                print(f"Searching table {table_name} for rows where event type field matches {name_query}")
                        if table_info.get('filter_nulls', False) and vf is not None:
                            stmt = stmt.where(self._get_table(table_info).c[vf] != None)
                        result = self._execute_query(conn, stmt)
                        result_df = pd.DataFrame(self._fetch_rows(result), columns=list(result.keys()))
                        candidates.setdefault(table_scope, []).append(result_df)
            if (('interval_type' in table_info or 'interval_type_field' in table_info or 'intervals' in table_info) and
                not (return_type is not None and return_type != 'interval')):
                if 'intervals' in table_info:
                    for matching_key in table_info['intervals'].keys():
                        if not name_query.matches_value(matching_key): continue

                        matching_event = table_info['intervals'][matching_key]
                        vf = matching_event.get('value_field')
                        value_transform = matching_event.get('value_transform', lambda x: x)
                        with self.engine.connect() as conn:
                            # Extract the rows matching query
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['start_time_field']]).label('starttime'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['end_time_field']]).label('endtime'),
                                literal(matching_key).label('intervaltype'),
                                *([value_transform(self._get_table(table_info).c[vf]).label('value')] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            ))
                            if matching_event.get('filter_nulls', False) and vf is not None:
                                stmt = stmt.where(self._get_table(table_info).c[vf] != None)
                            if self.verbose:
                                print(f"Searching table {table_name} for interval named {matching_key}")
                            result = self._execute_query(conn, stmt)
                            result_df = pd.DataFrame(self._fetch_rows(result), columns=list(result.keys()))
                            candidates.setdefault(table_scope, []).append(result_df)
                else:
                    if 'interval_type' in table_info and not name_query.matches_value(table_info['interval_type']):
                        continue
                    
                    vf = table_info.get('default_value_field', None) if value_field is None else value_field
                    with self.engine.connect() as conn:
                        if 'interval_type' in table_info:
                            # Extract the entire table
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['start_time_field']]).label('starttime'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['end_time_field']]).label('endtime'),
                                literal(table_info['interval_type']).label('intervaltype'),
                                *([self._get_table(table_info).c[vf]] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            ))
                            if self.verbose:
                                print(f"Retrieving table {table_name} as interval named {table_info['interval_type']}")
                        else:
                            # Extract the rows matching query
                            stmt = select(
                                self.id_field_transform(self._get_table(table_info).c[table_info['id_field']]).label('id'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['start_time_field']]).label('starttime'),
                                self.time_field_transform(self._get_table(table_info).c[table_info['end_time_field']]).label('endtime'),
                                self._get_table(table_info).c[table_info['interval_type_field']].label('intervaltype'),
                                *([self._get_table(table_info).c[vf]] if vf is not None else [null().label('value')])
                            ).select_from(self._limit_trajectory_ids(
                                self._get_table(table_info), 
                                table_info['id_field']
                            )).where(
                                or_(*name_query.filter_db(self._get_table(table_info).c[table_info['interval_type_field']]))
                            )
                            if self.verbose:
                                print(f"Searching table {table_name} for rows where interval type field matches {name_query}")
                        if table_info.get('filter_nulls', False) and vf is not None:
                            stmt = stmt.where(self._get_table(table_info).c[vf] != None)
                        result = self._execute_query(conn, stmt)
                        result_df = pd.DataFrame(self._fetch_rows(result), columns=list(result.keys()))
                        candidates.setdefault(table_scope, []).append(result_df)
                        
            if candidates and return_type is None: return_type = table_info['type']
        
        final_candidates = {}
        for s, scope_cand in candidates.items():
            if sum(len(r) > 0 for r in scope_cand) == 0: continue
            if return_type == 'event':
                final_candidates[s] = Events(pd.concat([r for r in scope_cand if len(r)], ignore_index=True), 
                                                id_field='id',
                                                type_field='eventtype',
                                                time_field='time',
                                                value_field='value')
            elif return_type == 'interval':
                final_candidates[s] = Intervals(pd.concat([r for r in scope_cand if len(r)], ignore_index=True), 
                                                id_field='id',
                                                type_field='intervaltype',
                                                start_time_field='starttime',
                                                end_time_field='endtime',
                                                value_field='value' if vf is None else vf)
        return final_candidates
        
    def _base_query_for_table(self, table_info, value_field=None, constant_type=None):
        """
        Return a basic SQLAlchemy query to extract the full (applicable) table
        from the given table info.
        """
        if 'events' in table_info and value_field is None:
            # join all value fields into one big table
            return union(*(self._base_query_for_table(table_info, value_field=v['value_field'], constant_type=k)
                           for k, v in table_info['events']))
        if 'intervals' in table_info and value_field is None:
            return union(*(self._base_query_for_table(table_info, value_field=v['value_field'], constant_type=k)
                           for k, v in table_info['intervals']))
            
        table = self._get_table(table_info)
        if table_info['type'] == 'event':
            table_fields = [self.id_field_transform(table.c[table_info['id_field']]).label('id'), 
                            self.time_field_transform(table.c[table_info['time_field']]).label('time')]
            type_field_name = 'eventtype'
            
        elif table_info['type'] == 'interval':
            table_fields = [self.id_field_transform(table.c[table_info['id_field']]).label('id'),
                            self.time_field_transform(table.c[table_info['start_time_field']]).label('starttime'), 
                            case((table.c[table_info['end_time_field']] == None, 
                                  table.c[table_info['start_time_field']]),
                                 else_=self.time_field_transform(table.c[table_info['end_time_field']])).label('endtime')]
            type_field_name = 'intervaltype'
        
        if constant_type is not None:
            table_fields.append(literal(constant_type).label(type_field_name))
        elif 'concept_id_field' in table_info:
            table_fields.append(table.c[table_info['concept_id_field']].label(type_field_name))
        elif 'event_type_field' in table_info:    
            table_fields.append(table.c[table_info['event_type_field']].label(type_field_name))
        elif 'interval_type_field' in table_info:    
            table_fields.append(table.c[table_info['interval_type_field']].label(type_field_name))
        elif 'event_type' in table_info:    
            table_fields.append(literal(table_info['event_type']).label(type_field_name))
        elif 'interval_type' in table_info:    
            table_fields.append(literal(table_info['interval_type']).label(type_field_name))
        
        if value_field is not None:
            table_fields.append(table.c[value_field].label('value'))
        elif table_info.get('default_value_field') is not None:
            table_fields.append(table.c[table_info.get('default_value_field')].label('value'))
        else:
            table_fields.append(null().label('value'))
            
        stmt = select(
            *table_fields
        ).distinct().select_from(self._limit_trajectory_ids(
            table, 
            table_info['id_field']
        ))
        return stmt
        
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
        # create a mapping to label events and intervals
        concept_name_dict = {cid: f"{cid}: {cname}" for cid, cname in concepts}
        
        for table_info in self.tables:
            if "scope" not in table_info or scope != table_info["scope"]: continue
            if "type" not in table_info: continue
            
            if "source" not in table_info: continue
            if "concept_id_field" not in table_info: continue
            
            if return_type is None:
                return_type = table_info["type"]
            elif table_info["type"] != return_type:
                raise ValueError(f"Tables matching scope '{scope}' have multiple types, must all be either Events or Intervals")
            
            table = self._get_table(table_info)
            if value_field is not None:
                if value_field not in table.c:
                    raise AttributeError(f"Value field '{value_field}' not present in scope {scope}")
                
            with self.engine.connect() as conn:
                base_query = self._base_query_for_table(table_info, value_field=value_field)
                stmt = base_query.where(
                    table.c[table_info['concept_id_field']].in_([c[0] for c in concepts]))
                result = self._execute_query(conn, stmt)
                result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
                results.append(result_df)
            
        if not any(len(r) for r in results):
            if return_type == 'event':
                return Events(pd.DataFrame({
                    'id': [],
                    'eventtype': [],
                    'time': [],
                    'value': []
                }))
            elif return_type == 'interval':
                return Intervals(pd.DataFrame({
                    'id': [],
                    'eventtype': [],
                    'starttime': [],
                    'endtime': [],
                    'value': []
                }))
            else:
                raise ValueError(f"No matching table for scope '{scope}'")
        concat_df = pd.concat([r for r in results if len(r)], axis=0, ignore_index=True)    
        if return_type == 'event':
            concat_df['eventtype'] = concat_df['eventtype'].replace(concept_name_dict).astype('category')
            return Events(concat_df, 
                        id_field='id',
                        type_field='eventtype',
                        time_field='time',
                        value_field='value')
        elif return_type == 'interval':
            concat_df['intervaltype'] = concat_df['intervaltype'].replace(concept_name_dict).astype('category')
            return Intervals(concat_df, 
                            id_field='id',
                            type_field='intervaltype',
                            start_time_field='starttime',
                            end_time_field='endtime',
                            value_field='value')
        raise ValueError(f"No matching table for scope '{scope}'")

    def get_min_times(self):
        """
        Returns an Attributes where the value for each ID is the earliest timestamp
        for that trajectory ID in the dataset.
        """
        primary_time_table = next((t for t in self.tables if t.get('primary_time_table')), None)
        def convert_time_value(time_col):
            if issubclass(type(time_col.type), Date):
                time_col = cast(time_col, DateTime)
            return time_col
            
        with self.engine.connect() as conn:
            if primary_time_table is not None and "source" in primary_time_table and "id_field" in primary_time_table:
                if self.verbose:
                    print(f"Querying primary ID table ({primary_time_table['source']}) to get min times")
                time_table = self._get_table(primary_time_table)
                combined_times = []
                if "start_time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['start_time_field']])).label('time')
                    ))
                if "end_time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['end_time_field']])).label('time')
                    ))
                if "time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['time_field']])).label('time')
                    ))
                all_times = union(*combined_times).cte('all_times')
            else:
                if self.verbose:
                    print(f"Querying ALL tables with times to get min times")
                all_times = union(
                    *(select(
                        self.id_field_transform(self._get_table(scope_info).c[scope_info['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(self._get_table(scope_info).c[scope_info['start_time_field']])).label('time')
                    ).select_from(self._limit_trajectory_ids(
                        self._get_table(scope_info), 
                        scope_info['id_field']
                    )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'interval'),
                    *(select(
                        self.id_field_transform(self._get_table(scope_info).c[scope_info['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(self._get_table(scope_info).c[scope_info['time_field']])).label('time')
                    ).select_from(self._limit_trajectory_ids(
                        self._get_table(scope_info), 
                        scope_info['id_field']
                    )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'event')
                ).cte('all_times')
            
            stmt = select(all_times.c.id, func.min(all_times.c.time).label('mintime')).group_by(all_times.c.id)
            result = self._execute_query(conn, stmt)
            result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
            return Attributes(result_df.set_index('id')['mintime'])
        
    def get_max_times(self):
        """
        Returns an Attributes where the value for each ID is the latest timestamp
        for that trajectory ID in the dataset.
        """
        primary_time_table = next((t for t in self.tables if t.get('primary_time_table')), None)
        def convert_time_value(time_col):
            if issubclass(type(time_col.type), Date):
                time_col = cast(time_col, DateTime)
            return time_col
        
        with self.engine.connect() as conn:
            if primary_time_table is not None and "source" in primary_time_table and "id_field" in primary_time_table:
                if self.verbose:
                    print(f"Querying primary ID table ({primary_time_table['source']}) to get max times")
                time_table = self._get_table(primary_time_table)
                combined_times = []
                if "start_time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['start_time_field']])).label('time')
                    ))
                if "end_time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['end_time_field']])).label('time')
                    ))
                if "time_field" in primary_time_table:
                    combined_times.append(select(
                        self.id_field_transform(time_table.c[primary_time_table['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(time_table.c[primary_time_table['time_field']])).label('time')
                    ))
                all_times = union(*combined_times).cte('all_times')
            else:
                if self.verbose:
                    print(f"Querying ALL tables with times to get max times")
                all_times = union(
                    *(select(
                        self.id_field_transform(self._get_table(scope_info).c[scope_info['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(self._get_table(scope_info).c[scope_info['end_time_field']])).label('time')
                    ).select_from(self._limit_trajectory_ids(
                        self._get_table(scope_info), 
                        scope_info['id_field']
                    )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'interval'),
                    *(select(
                        self.id_field_transform(self._get_table(scope_info).c[scope_info['id_field']]).label('id'),
                        convert_time_value(self.time_field_transform(self._get_table(scope_info).c[scope_info['time_field']])).label('time')
                    ).select_from(self._limit_trajectory_ids(
                        self._get_table(scope_info), 
                        scope_info['id_field']
                    )) for scope_info in self.tables if 'source' in scope_info and scope_info.get('type') == 'event')
                ).cte('all_times')
            try:
                increment = cast(datetime.timedelta(seconds=1), Interval) if issubclass(type(all_times.c.time.type), DateTime) else 1
                stmt = select(all_times.c.id, (func.max(all_times.c.time) + increment).label('maxtime')).group_by(all_times.c.id)
                result = self._execute_query(conn, stmt)
            except Exception as e:
                stmt = select(all_times.c.id, func.datetime_add(func.max(all_times.c.time), text('interval 1 second')).label('maxtime')).group_by(all_times.c.id)
                result = self._execute_query(conn, stmt)
            result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
            return Attributes(result_df.set_index('id')['maxtime'])
        
    def get_data_for_scope(self, scope, value_field=None):
        """
        Returns all data for a given scope as an Events or Intervals.
        """
        with self.engine.connect() as conn:
            tables = []
            return_type = None
            for table_info in self.tables:
                if table_info.get('scope') != scope: continue
                if 'type' not in table_info:
                    raise ValueError(f"A table in scope '{scope}' does not have an associated type. It must be set to 'event' or 'interval' to allow querying all data within a scope.")
                if return_type is None: return_type = table_info['type']
                if return_type != table_info['type']:
                    raise ValueError(f"Data elements with scope '{scope}' must have same type, got {return_type} and {table_info['type']}")                    
                tables.append(self._base_query_for_table(table_info, value_field=value_field))
                    
            result = self._execute_query(conn, union(*tables))
            result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
            
        if return_type == 'event':
            result = Events(result_df,
                        id_field='id',
                        type_field='eventtype',
                        time_field='time',
                        value_field='value')
        elif return_type == 'interval':
            result = Intervals(result_df, 
                            id_field='id',
                            type_field='intervaltype',
                            start_time_field='starttime',
                            end_time_field='endtime',
                            value_field='value')
        else:
            assert False, f'Unknown return type {return_type}'
        
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
        :param return_queries: If True, additionally return the SQL queries that
            were executed to complete the data element request.
            
        :return: A Tempo core data type representing the matching data from
            the dataset, in Attributes, Events, or Intervals format. An error
            will be thrown if the query matches multiple scopes or data types 
            and the scope or data type is not specified. An error will be
            thrown if the query does not match any concepts in the data and the
            data type is not specified (meaning that the return type is
            indeterminate).
        """
        self._captured_queries = []
        
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
                return (attr, self._captured_queries) if return_queries else attr
            
        candidates = {}
        if concept_name_query is not None:
            candidate_nonconcept = self.attempt_nonconcept_extract(concept_name_query, 
                                                                   scope=scope, 
                                                                   return_type=data_type, 
                                                                   value_field=value_field)
            candidates.update(candidate_nonconcept)
            
        num_existing = sum(len(c) > 0 for c in candidates.values())
        if num_existing > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query or concept_id_query}. Try specifying a data type or scope.")
        first_candidate = next((c for c in candidates.values() if len(c) > 0), None)
        if first_candidate is not None: return (first_candidate, self._captured_queries) if return_queries else first_candidate

        if concept_id_query is None and concept_name_query is None:
            if scope is None:
                raise ValueError("Scope must be provided if neither id nor name query are given")
            
            result = self.get_data_for_scope(scope, value_field=value_field)
            return (result, self._captured_queries) if return_queries else result
            
        matching_concepts = self.search_concept_id(concept_id_query=concept_id_query,
                                                   concept_name_query=concept_name_query,
                                                   scope=scope)
        if scope is not None:
            if scope not in matching_concepts:
                if not candidates:
                    raise ValueError(f"No concepts match query for scope {scope}")
            else:
                matching_concepts = {scope: matching_concepts[scope]}
                    
        for scope, concepts in matching_concepts.items():
            scope_results = self.extract_data_for_concepts(scope, concepts, value_field=value_field)
            if len(scope_results) > 0:
                if scope in candidates:
                    # append the new dataframe to the existing one
                    candidates[scope] = union_data(candidates[scope],
                                                   scope_results)
                else:
                    candidates[scope] = scope_results

        num_existing = sum(len(c) > 0 for c in candidates.values())
        if num_existing > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query or concept_id_query}. Try specifying a data type or scope.")
        elif num_existing == 0:
            raise KeyError(f"No data element found matching query {concept_name_query or concept_id_query}")

        result = next(c for c in candidates.values() if len(c) > 0)
        if return_queries: return result, self._captured_queries
        return result

    def _load_trajectory_id_table(self):
        """Attempt to load the trajectory ID table from the scratch location if it exists."""
        try:
            self._trajectory_id_table = Table(TRAJECTORY_ID_TABLE_NAME,
                                              self.metadata,
                                              schema=self.scratch_schema_name,
                                              autoload_with=self.engine)
        except NoSuchTableError:
            pass
        
    def reset_trajectory_ids(self):
        """
        Remove any filter on the trajectory IDs returned by queries on the dataset.
        """
        self._load_trajectory_id_table()
        if self._trajectory_id_table is not None:
            print("Trajectory ID table exists - dropping...")
            self.metadata.drop_all(bind=self.engine, tables=[self._trajectory_id_table])
            self.metadata.remove(self._trajectory_id_table)
            self._trajectory_id_table = None
        self._id_cache = None
        
    def get_id_field_type(self):
        """
        Return the SQLAlchemy type for the ID field.
        """
        # get the ID field type from a random table entry
        arbitrary_table_info = next((t for t in self.tables if "source" in t and "id_field" in t), None)
        if not arbitrary_table_info:
            raise ValueError("No tables have a source and an ID field, cannot infer ID field type")
        id_field_type = self.id_field_transform(self._get_table(arbitrary_table_info).c[arbitrary_table_info['id_field']]).type
        return id_field_type
    
    def set_trajectory_ids(self, trajectory_id_list, sample_size=None, random_state=None, batch_size=5000):
        """
        Sets the dataset to only return results for the given set of trajectory
        IDs.
        
        This method will upload a table to the scratch dataset. Ensure that you
        have specified a scratch_schema_name when initializing the dataset if
        you don't have write access to your dataset schema.

        sample_size: If not None, randomly subsample the resulting set to this
            size (if integer) or proportion (if less than one) of the dataset.
        random_state: Random seed for sampling.
        batch_size: Number of rows to upload at a time.
        """
        self.reset_trajectory_ids()
        
        if sample_size is not None:
            rng = np.random.RandomState(random_state)
            trajectory_id_list = rng.choice(trajectory_id_list, size=int(sample_size * len(trajectory_id_list)) if sample_size < 1 else sample_size)
        
        id_field_type = self.get_id_field_type()
        self._trajectory_id_table = Table(TRAJECTORY_ID_TABLE_NAME, 
                                          self.metadata,
                                          Column(TRAJECTORY_ID_TABLE_ID_FIELD, id_field_type),
                                          schema=self.scratch_schema_name)
        self.metadata.create_all(bind=self.engine, tables=[self._trajectory_id_table])
        with self.engine.connect() as conn:
            for start_idx in range(0, len(trajectory_id_list), batch_size):
                self._execute_query(conn, insert(self._trajectory_id_table).values([
                    {TRAJECTORY_ID_TABLE_ID_FIELD: convert_to_native_types(id_val)}
                    for id_val in trajectory_id_list[start_idx:start_idx + batch_size]
                ]))
            conn.commit()
            
        self._id_cache = None
        self._cte_cache = {}
        self._name_list_cache.clear()
            
    def set_trajectory_ids_where(self, boolean_mask, sample_size=None, random_state=None, batch_size=5000):
        """
        Sets the dataset to only return results for trajectory IDs that have a
        positive value in the given boolean mask (which can be a pandas Series
        indexed by trajectory IDs or a TempoQL data type with boolean values).
        
        This method will upload a table to the scratch dataset. Ensure that you
        have specified a scratch_schema_name when initializing the dataset if
        you don't have write access to your dataset schema.
        
        sample_size: If not None, randomly subsample the resulting set to this
            size (if integer) or proportion (if less than one) of the dataset.
        random_state: Random seed for sampling.
        batch_size: Number of rows to upload at a time.
        """
        if isinstance(boolean_mask, pd.Series):
            ids = boolean_mask[boolean_mask].index.tolist()
        elif hasattr(boolean_mask, "get_ids") and hasattr(boolean_mask, "get_values"):
            ids = boolean_mask.get_ids()[boolean_mask.get_values().astype(bool)]
        else:
            raise ValueError(f"Unknown format for boolean mask: {type(boolean_mask).__name__}. Expected pandas Series, Attributes, Events, Intervals, or TimeSeries")
        
        self.set_trajectory_ids(ids,
                                sample_size=sample_size,
                                random_state=random_state,
                                batch_size=batch_size)
            
    def list_data_elements(self, scope=None, return_counts=False, cache_only=False):
        """
        Retrieve a dataframe containing the applicable names for attributes, events 
        or intervals within the given scope (or if None, then all scopes). If True, 
        then return  a dataframe with a 'count' column containing the number of 
        matching attributes, events, or intervals with that name. If False, then 
        return a dataframe with name and scope.
        """
        type_names = []
        for table_info in self.tables:
            if scope is not None and ('scope' not in table_info or scope != table_info.get('scope')):
                continue
            
            cache_key = (table_info['source'], return_counts)
            if cache_key in self._name_list_cache:
                type_names.append(self._name_list_cache[cache_key])
                continue
            
            if cache_only: continue
                
            table = self._get_table(table_info)
            if self.verbose:
                print(f"Retrieving concepts for table '{table_info['source']}'")
                
            try:
                scope_names = []
                if 'attributes' in table_info:
                    if return_counts:
                        with self.engine.connect() as conn:
                            table_count = select(
                                func.count()
                            ).select_from(self._limit_trajectory_ids(
                                table, table_info['id_field']
                            ))
                            table_count = self._execute_query(conn, table_count).fetchone()[0]
                    else:
                        table_count = None
                    scope_names.append(pd.DataFrame([{
                        'name': attr,
                        'id': attr,
                        'type': 'attribute',
                        'scope': table_info.get('scope'),
                        **({'count': table_count} if table_count is not None else {})
                    } for attr in table_info['attributes']]))
                    
                if 'type' in table_info:
                    if 'event_type' in table_info or 'interval_type' in table_info:
                        type_field = 'event_type' if 'event_type' in table_info else 'interval_type'
                        if return_counts:
                            with self.engine.connect() as conn:
                                table_count = select(
                                    func.count()
                                ).select_from(self._limit_trajectory_ids(
                                    table, table_info['id_field']
                                ))
                                result = self._execute_query(conn, table_count).fetchone()[0]
                                scope_names.append(pd.DataFrame([{'name': table_info[type_field], 
                                                                'id': table_info[type_field],
                                                                'type': table_info['type'],
                                                                'scope': table_info.get('scope'), 
                                                                'count': result}]))
                        else:
                            scope_names.append(pd.DataFrame([{'name': table_info[type_field], 
                                                            'id': table_info[type_field], 
                                                            'scope': table_info.get('scope'),
                                                            'type': table_info['type']}]))
                    elif 'event_type_field' in table_info or 'interval_type_field' in table_info:
                        type_field = 'event_type_field' if 'event_type_field' in table_info else 'interval_type_field'
                        with self.engine.connect() as conn:
                            if return_counts:
                                stmt = select(
                                    table.c[table_info[type_field]].label('name'),
                                    func.count().label('count')
                                ).select_from(self._limit_trajectory_ids(
                                    table, table_info['id_field']
                                )).group_by(
                                    table.c[table_info[type_field]]
                                )
                            else:
                                stmt = select(distinct(table.c[table_info[type_field]].label('name')))
                            result = self._execute_query(conn, stmt)
                            result_df = pd.DataFrame(self._fetch_rows(result), columns=result.keys())
                            result_df = result_df.assign(
                                id=result_df['name'],
                                scope=table_info.get('scope'), 
                                type=table_info['type'])
                            scope_names.append(result_df)
                    elif 'events' in table_info or 'intervals' in table_info:
                        type_field = 'events' if 'events' in table_info else 'intervals'
                        with self.engine.connect() as conn:
                            for event, event_info in table_info[type_field].items():
                                if return_counts:
                                    stmt = select(
                                        func.count()
                                    ).select_from(self._limit_trajectory_ids(
                                        table, table_info['id_field']
                                    ))
                                    if event_info.get('filter_nulls', False) and 'value_field' in event_info:
                                        stmt = stmt.where(table.c[event_info['value_field']] != None)
                                        
                                    print("Getting count for", stmt)
                                    result = self._execute_query(conn, stmt).fetchone()[0]
                                    scope_names.append(pd.DataFrame([{'name': event, 
                                                                    'id': event,
                                                                    'scope': table_info.get('scope'), 
                                                                    'count': result, 
                                                                    'type': table_info['type']}]))
                                else:
                                    scope_names.append(pd.DataFrame([{'name': table_info['event_type'], 
                                                                    'id': event,
                                                                    'scope': table_info.get('scope'),
                                                                    'type': table_info['type']}]))
                    elif 'concept_id_field' in table_info:
                        # join against the vocabulary
                        vocabulary_tables = []
                        for vocabulary in self.vocabularies:
                            if scope is not None and "scopes" in vocabulary and scope not in vocabulary["scopes"]:
                                continue
                            
                            concept_id_field = vocabulary.get('concept_id_field', 'concept_id')
                            concept_name_field = vocabulary.get('concept_name_field', 'concept_name')
                            if "source" not in vocabulary: raise ValueError("Vocabulary must have a source")
                            
                            vocab_table = self._get_table(vocabulary)
                            vocab_stmt = select(
                                vocab_table.c[concept_id_field].label("id"),
                                vocab_table.c[concept_name_field].label("name")
                            )
                            if vocabulary.get('scope_field', 'scope') in vocab_table.c and 'scope' in table_info:
                                vocab_stmt = vocab_stmt.where(vocab_table.c[vocabulary.get('scope_field', 'scope')] == table_info['scope'])
                            vocabulary_tables.append(vocab_stmt)
                        vocabulary_tables = union(*vocabulary_tables).cte('vocab')
                        with self.engine.connect() as conn:
                            stmt = select(
                                vocabulary_tables.c['id'],
                                vocabulary_tables.c['name'],
                                *([func.count().label('count')] if return_counts else [])
                            ).distinct().select_from(
                                table.join(vocabulary_tables,
                                        table.c[table_info['concept_id_field']] == vocabulary_tables.c['id'])
                            ).group_by(vocabulary_tables.c['name'], vocabulary_tables.c['id'])
                            result = self._execute_query(conn, stmt)
                            result_df = pd.DataFrame(self._fetch_rows(result), columns=list(result.keys())).assign(
                                scope=table_info.get('scope'),
                                type=table_info['type']
                            )
                            scope_names.append(result_df)
                self._name_list_cache[cache_key] = pd.concat(scope_names)
                type_names += scope_names
            except Exception as e:
                raise type(e)(f"Error listing data elements for scope '{table_info['scope']}': {e}")
        
        if not type_names:
            return pd.DataFrame({'name': [], 'scope': [], 'type': [], **({'count': []} if return_counts else {})})
        result = pd.concat(type_names, axis=0, ignore_index=True)
        if return_counts: result = result.sort_values('count', ascending=False)
        return result