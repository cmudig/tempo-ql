from sqlalchemy import create_engine, MetaData, Table, Column, select, or_, case, union, func, distinct, literal, insert, delete, Sequence
from sqlalchemy.types import String, Integer
from sqlalchemy.exc import NoSuchTableError
import pandas as pd
import numpy as np
import re
import datetime
from copy import deepcopy
from ..data_types import *

class VariableStore:
    """
    Class that handles storing and retrieving variables from a database. This is
    kept separate from the dataset logic so that variables can be stored using
    a different database architecture or connection if needed (e.g. a local
    DuckDB database).
    """
    def __init__(self, connection_string, schema_name=None, table_prefix=None, metadata_table_name='variable_meta'):
        self.engine = create_engine(connection_string, 
                                    **({"execution_options": {"schema_translate_map": {None: schema_name}}} if schema_name is not None else {}))
        self.metadata = MetaData(schema=schema_name)
        self.scratch_schema_name = schema_name
        self.metadata.reflect(bind=self.engine)
        self.table_prefix = table_prefix
        try:
            self.metadata_table = Table(metadata_table_name, self.metadata, autoload_with=self.engine)
        except NoSuchTableError:
            print("Creating table")
            id_seq = Sequence('id_seq', metadata=self.metadata)
            self.metadata_table = Table(metadata_table_name, 
                                        self.metadata,
                                        Column('id', Integer, id_seq, server_default=id_seq.next_value(), primary_key=True),
                                        Column('variable_name', String, nullable=False),
                                        Column('type', String, nullable=False),
                                        Column('id_field', String, nullable=False),
                                        Column('value_field', String, nullable=True, default=None),
                                        Column('time_field', String, nullable=True, default=None),
                                        Column('start_time_field', String, nullable=True, default=None),
                                        Column('end_time_field', String, nullable=True, default=None),
                                        Column('type_field', String, nullable=True, default=None))
            self.metadata.create_all(bind=self.engine, tables=[self.metadata_table])
    
    def __contains__(self, variable_name):
        """
        Check if the variable store contains the given variable.
        """
        try:
            _ = self.metadata.tables[self.table_prefix + variable_name]
        except KeyError:
            try:
                _ = Table(self.table_prefix + variable_name,
                            self.metadata,
                            autoload_with=self.engine)
            except NoSuchTableError:
                # Definitely doesn't exist
                return False
        return True
        
    def __getitem__(self, variable_name):
        """
        Retrieve a variable by the given name, or raise a KeyError if the variable
        does not exist.
        """
        if variable_name not in self: raise KeyError(variable_name)
        
        # we know it'll be present because when we run __contains__ the table will
        # be loaded into self.metadata if it exists
        var_table = self.metadata.tables[self.table_prefix + variable_name]
        
        # check the metadata we've stored for this variable
        with self.engine.connect() as conn:
            var_meta = conn.execute(
                select('*')
                .select_from(self.metadata_table)
                .where(self.metadata_table.c.variable_name == variable_name)
            ).fetchone()
            if not var_meta:
                raise KeyError(f"Variable {variable_name} has a table but no metadata row")

            if var_meta.type == 'attribute':
                var_df = pd.read_sql(select(
                    var_table.c[var_meta.id_field],
                    var_table.c[var_meta.value_field]
                ), conn)
                var_df = var_df.set_index(var_meta.id_field)[var_meta.value_field]
                return Attributes(var_df)
            elif var_meta.type == 'event':
                var_df = pd.read_sql(select(
                    var_table.c[var_meta.id_field],
                    var_table.c[var_meta.time_field],
                    var_table.c[var_meta.type_field],
                    var_table.c[var_meta.value_field] if var_meta.value_field is not None else literal(None).label('value'),
                ), conn) 
                return Events(var_df,
                              id_field=var_meta.id_field,
                              time_field=var_meta.time_field,
                              type_field=var_meta.type_field,
                              value_field=var_meta.value_field)
            elif var_meta.type == 'interval':
                var_df = pd.read_sql(select(
                    var_table.c[var_meta.id_field],
                    var_table.c[var_meta.start_time_field],
                    var_table.c[var_meta.end_time_field],
                    var_table.c[var_meta.type_field],
                    var_table.c[var_meta.value_field] if var_meta.value_field is not None else literal(None).label('value'),
                ), conn)
                return Intervals(var_df,
                                 id_field=var_meta.id_field,
                                 start_time_field=var_meta.start_time_field,
                                 end_time_field=var_meta.end_time_field,
                                 type_field=var_meta.type_field,
                                 value_field=var_meta.value_field)
            elif var_meta.type == 'timeindex':
                var_df = pd.read_sql(select(
                    var_table.c[var_meta.id_field],
                    var_table.c[var_meta.time_field]
                ), conn)
                return TimeIndex(var_df[[var_meta.id_field, var_meta.time_field]])
            elif var_meta.type == 'timeseries':
                var_df = pd.read_sql(select(
                    var_table.c[var_meta.id_field],
                    var_table.c[var_meta.time_field],
                    var_table.c[var_meta.value_field],
                ), conn)
                return TimeSeries(TimeIndex(var_df[[var_meta.id_field, var_meta.time_field]],
                                            id_field=var_meta.id_field,
                                            time_field=var_meta.time_field),
                                  var_df[var_meta.value_field])
            raise ValueError(f"Unknown variable type '{var_meta.type}'")
        
    def get(self, variable_name, fallback=None):
        """Retrieve a variable by the given name or return fallback if it doesn't
        exist. If fallback is a function, runs the function."""
        try:
            return self[variable_name]
        except KeyError:
            if callable(fallback):
                return fallback()
            return fallback
        
    def __setitem__(self, variable_name, data_item):
        """
        Saves the given variable (Attributes, Events, Intervals, TimeIndex, or 
        TimeSeries) to the database under the given name.
        """
        if variable_name in self:
            with self.engine.connect() as conn:
                conn.execute(delete(self.metadata_table).where(self.metadata_table.c.variable_name == variable_name))
            
        if isinstance(data_item, Attributes):
            df = data_item.series.reset_index()
            meta_info = {
                'type': 'attribute',
                'id_field': data_item.series.index.name,
                'value_field': data_item.series.name
            }
        elif isinstance(data_item, Events):
            df = data_item.df
            meta_info = {
                'type': 'event',
                'id_field': data_item.id_field,
                'time_field': data_item.time_field,
                'type_field': data_item.type_field,
                'value_field': data_item.value_field
            }
        elif isinstance(data_item, Intervals):
            df = data_item.df
            meta_info = {
                'type': 'event',
                'id_field': data_item.id_field,
                'start_time_field': data_item.start_time_field,
                'end_time_field': data_item.end_time_field,
                'type_field': data_item.type_field,
                'value_field': data_item.value_field
            }
        elif isinstance(data_item, TimeIndex):
            df = data_item.timesteps
            meta_info = {
                'type': 'timeindex',
                'id_field': data_item.id_field,
                'time_field': data_item.time_field
            }
        elif isinstance(data_item, TimeSeries):
            df = pd.concat([data_item.index.timesteps.reset_index(drop=True),
                        pd.DataFrame(data_item.series).reset_index(drop=True)], axis=1)
            meta_info = {
                'type': 'timeseries',
                'id_field': data_item.index.id_field,
                'time_field': data_item.index.time_field,
                'value_field': data_item.series.name
            }
        
            
        df.to_sql(self.table_prefix + variable_name, self.engine, index=False, if_exists='replace')
        meta_info['variable_name'] = variable_name
        # Insert into metadata table
        with self.engine.connect() as conn:
            conn.execute(insert(self.metadata_table).values(meta_info))
            conn.commit()