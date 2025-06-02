import duckdb
import os
import pandas as pd
from pathlib import Path

class LocalOMOPDatabase:
    def __init__(self, csv_directory, database_path=None):
        """
        Initialize a DuckDB database from OMOP CDM CSV files.
        
        Args:
            csv_directory (str): Path to directory containing CSV files
            database_path (str, optional): Path for persistent database file. 
                                         If None, creates in-memory database.
        """
        self.csv_directory = Path(csv_directory)
        self.database_path = database_path
        
        # Create DuckDB connection
        if database_path:
            self.conn = duckdb.connect(database_path)
        else:
            self.conn = duckdb.connect()
            
        self.tables_created = []
        
    def setup_database(self):
        """
        Automatically create tables from all CSV files in the directory.
        Each CSV file becomes a table with the same name (without .csv extension).
        """
        if not self.csv_directory.exists():
            raise FileNotFoundError(f"Directory {self.csv_directory} does not exist")
            
        csv_files = list(self.csv_directory.glob("*.csv"))
        
        if not csv_files:
            raise ValueError(f"No CSV files found in {self.csv_directory}")
            
        print(f"Found {len(csv_files)} CSV files. Creating tables...")
        
        for csv_file in csv_files:
            table_name = csv_file.stem  # filename without extension
            self._create_table_from_csv(csv_file, table_name)
            
        print(f"Successfully created {len(self.tables_created)} tables: {', '.join(self.tables_created)}")
        
    def _create_table_from_csv(self, csv_file, table_name):
        """
        Create a table from a CSV file.
        
        Args:
            csv_file (Path): Path to the CSV file
            table_name (str): Name for the table
        """
        try:
            if table_name == "measurement":
                query = f"""
                CREATE TABLE {table_name} AS 
                SELECT * FROM read_csv_auto('{csv_file}', header=true, types={{'measurement_source_value': 'VARCHAR'}})
                """
            else:
                # Use DuckDB's native CSV reading capability for better performance
                query = f"""
                CREATE TABLE {table_name} AS 
                SELECT * FROM read_csv_auto('{csv_file}', header=true)
                """
            
            self.conn.execute(query)
            self.tables_created.append(table_name)
            print(f"Created table '{table_name}' from {csv_file.name}")
            
        except Exception as e:
            print(f"Error creating table '{table_name}' from {csv_file.name}: {str(e)}")
            
    def get_table_names(self):
        """
        Get list of all tables in the database.
        
        Returns:
            list: List of table names
        """
        result = self.conn.execute("SHOW TABLES").fetchall()
        return [row[0] for row in result]
    
    def get_column_names(self, table_name):
        """
        Get column names for a specific table.
        
        Args:
            table_name (str): Name of the table

        Returns:
            list: List of column names
        """
        try:
            result = self.conn.execute(f"DESCRIBE {table_name}").fetchall()
            return [row[0] for row in result]
        except Exception as e:
            print(f"Error getting column names for table '{table_name}': {str(e)}")
            return []
    
    def get_column_values(self, table_name, column_name):
        """
        Get all values from a specific column in a table.
        
        Args:
            table_name (str): Name of the table
            column_name (str): Name of the column

        Returns:
            list: List of all values in the column
        """
        try:
            result = self.conn.execute(f"SELECT {column_name} FROM {table_name}").fetchall()
            return list(set(row[0] for row in result))
        except Exception as e:
            print(f"Error getting values from column '{column_name}' in table '{table_name}': {str(e)}")
            return []
        
    def get_table_info(self, table_name):
        """
        Get column information for a specific table.
        
        Args:
            table_name (str): Name of the table
            
        Returns:
            list: List of tuples containing column information
        """
        try:
            result = self.conn.execute(f"DESCRIBE {table_name}").fetchall()
            return result
        except Exception as e:
            print(f"Error getting info for table '{table_name}': {str(e)}")
            return []
            
    def query(self, sql_query):
        """
        Execute a SQL query and return results.
        
        Args:
            sql_query (str): SQL query to execute
            
        Returns:
            list: Query results
        """
        try:
            return self.conn.execute(sql_query).fetchall()
        except Exception as e:
            print(f"Error executing query: {str(e)}")
            return []
            
    def query_to_dataframe(self, sql_query):
        """
        Execute a SQL query and return results as a pandas DataFrame.
        
        Args:
            sql_query (str): SQL query to execute
            
        Returns:
            pd.DataFrame: Query results as DataFrame
        """
        try:
            return self.conn.execute(sql_query).df()
        except Exception as e:
            print(f"Error executing query: {str(e)}")
            return pd.DataFrame()
            
    def get_connection_string(self):
        """
        Get a connection string that can be used with SQLAlchemy.
        Note: This creates a new DuckDB connection for SQLAlchemy compatibility.
        
        Returns:
            str: SQLAlchemy-compatible connection string
        """
        if self.database_path:
            return f"duckdb:///{self.database_path}"
        else:
            # For in-memory databases, we need to use a file-based approach
            # since SQLAlchemy can't share the same in-memory connection
            temp_db_path = "temp_omop.db"
            return f"duckdb:///{temp_db_path}"
            
    def close(self):
        """
        Close the database connection.
        """
        if self.conn:
            self.conn.close()
            
    def __enter__(self):
        """Context manager entry."""
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager exit."""
        self.close()

if __name__ == "__main__":
    # Example usage
    csv_dir = "mimic-iv-demo-data-in-the-omop-common-data-model-0.9/1_omop_data_csv"
    db_path = "omop_database.db"

    local_db = LocalOMOPDatabase(csv_dir, db_path)
    local_db.setup_database()

    # Get table names
    table_names = local_db.get_table_names()
    print(table_names)

    # Get table info
    table_info = local_db.get_table_info("person")
    print(table_info)

