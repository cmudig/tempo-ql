import os
import pandas as pd
import json
import glob
from query_language.data_types import *

ID_FIELD = 'subject_id'
ATTRIBUTE = {
    "Gender": ["GENDER//F","GENDER//M"],
    "Birth Date": ["MEDS_BIRTH"],
    "Death Date": ["MEDS_DEATH"],
}

class MEDSDataExtractor:
    def __init__(self, base_dir,attributes = ATTRIBUTE):
        """
        base_dir: path to the root directory containing 'data' and 'metadata' subdirectories
        """
        self.base_dir = base_dir
        self.data_dir = os.path.join(base_dir, "data")
        self.metadata_dir = os.path.join(base_dir, "metadata")
        # Load metadata files
        self.subject_splits = pd.read_parquet(os.path.join(self.metadata_dir, "subject_splits.parquet"))
        self.codes = pd.read_parquet(os.path.join(self.metadata_dir, "codes.parquet"))
        with open(os.path.join(self.metadata_dir, "dataset.json"), "r") as f:
            self.dataset_info = json.load(f)
        self.attributes = attributes
        # treat all files in data with glob
        self.data_files = glob.glob(os.path.join(self.data_dir, "**", "*.parquet"), recursive=True)
        self.data = pd.concat([pd.read_parquet(file) for file in self.data_files])
    
    def extract_codes_from_data(self,data):
        """
        Extract the 'code' column from the loaded data.
        Returns a pandas Series containing all codes.
        """
        if 'code' not in data.columns:
            raise ValueError("'code' column not found in the data")
        
        return data['code']
    
    def extract_scope(self, str_list):
        """
        Extract codes from self.codes where the 'code' column contains any of the given strings.
        
        Args:
            str_list (list): A list of strings to search for in the 'code' column.
        
        Returns:
            pd.DataFrame: Filtered DataFrame with codes containing any of the given strings.
        """
        if self.codes.empty or 'code' not in self.codes.columns:
            return pd.DataFrame()
        
        if not str_list:
            return pd.DataFrame()
        
        # Create a pattern that matches any of the strings in the list
        pattern = '|'.join(str_list)
        
        # Filter codes where the 'code' column contains any of the given strings (case-insensitive)
        filtered_codes = self.codes[
            self.codes['code'].str.contains(pattern, case=False, na=False)
        ]
        
        return filtered_codes

    
    def extract_scope_from_code(self,single = None):
        """
        Extract the scope from the code.
        Args:
            single (bool, optional): If True, extract the scope without any children from the code.
            If False, extract the scope with children from the code.
            If None, extract all scopes from the code.
        Returns:
            list: A list of scopes.
        """
        elements_before_slash = []
        for c in self.codes["code"]:
            if pd.notna(c):  # Check if the code is not NaN
                str_code = str(c)
                element = str_code.split("//")[0]
                if single:
                    if "//" not in str_code:
                        elements_before_slash.append(element)
                elif single is False:
                    if "//" in str_code:
                        elements_before_slash.append(element)
                else:
                    elements_before_slash.append(element)
                    
        
        unique_elements = list(set(elements_before_slash))
        return unique_elements

    def fix_codes(self):
        """
        Check if there are codes in self.data that are not in self.codes,
        and add missing codes to self.codes.
        
        Args:
            codes: pandas Series or DataFrame containing codes to check/fix
        
        Returns:
            Updated codes DataFrame
        """
        # Extract codes from self.data
        data_codes = self.extract_codes_from_data(self.data)
        unique_data_codes = set(data_codes.dropna().unique())
        
        # Get existing codes from self.codes
        if 'code' in self.codes.columns:
            existing_codes = set(self.codes['code'].dropna().unique())
        else:
            existing_codes = set()
        
        # Find codes that are in data but not in codes metadata
        missing_codes = unique_data_codes - existing_codes
        
        if missing_codes:
            print(f"Found {len(missing_codes)} codes in data that are missing from codes metadata")
            
            # Create new rows for missing codes
            new_rows = []
            # Get the column order from self.codes to maintain consistency
            columns_order = list(self.codes.columns)

            for code in missing_codes:
                # Create a dictionary with all columns from columns_order
                new_row = {col: code if col in ['code', 'description'] else None for col in columns_order}
                print(new_row)
                new_rows.append(new_row)
            
            # Create DataFrame from new rows and concatenate
            new_codes_df = pd.DataFrame(new_rows)
            self.codes = pd.concat([self.codes, new_codes_df], ignore_index=True)
            
            print(f"Added {len(missing_codes)} missing codes to codes metadata")
        else:
            print("All codes in data are already present in codes metadata")
        
        return self.codes


    def _get_subjects_by_split(self, splits):
        """
        splits: list of split names, e.g., ['train', 'tuning', 'held_out']
        Returns a set of subject_ids belonging to the specified splits.
        """
        filtered = self.subject_splits[self.subject_splits['split'].isin(splits)]
        return set(filtered['subject_id'])

    def _load_data_for_subjects(self, subject_ids):
        """
        Loads all parquet files in the data directory and filters rows by subject_ids.
        Returns a concatenated DataFrame.
        """
        dfs = []
        for fname in os.listdir(self.data_dir):
            if fname.endswith('.parquet'):
                df = pd.read_parquet(os.path.join(self.data_dir, fname))
                if 'subject_id' in df.columns:
                    df = df[df['subject_id'].isin(subject_ids)]
                    dfs.append(df)
        if dfs:
            return pd.concat(dfs, ignore_index=True)
        else:
            return pd.DataFrame()


    def search_data_for_given_code(self, codes):
        """
        Searches for rows in the data where the 'code' column matches any of the given codes.
        
        Args:
            codes (list): A list of codes to search for in the 'code' column.
        
        Returns:
            pd.DataFrame: Filtered DataFrame with rows matching any of the given codes.
        """
        # Load all data from all subjects
        data_df = self.data
        
        if data_df.empty or 'code' not in data_df.columns:
            return pd.DataFrame()
        
        if not codes:
            return pd.DataFrame()
        
        # Filter by any of the given codes
        result = data_df[data_df['code'].isin(codes)]
        return result
    
    def search_codes_by_word_and_scope(self, word, scope=None):
        """
        Searches for codes in self.codes based on a word and optional scope.
        
        Args:
            word (str): The word to search for in the 'description' column.
            scope (str, optional): If provided, filters codes where the 'code' column 
                                 starts with this scope (before the first "//").
        
        Returns:
            pd.DataFrame: Filtered DataFrame with matching codes and descriptions.
        """
        if self.codes.empty:
            return pd.DataFrame()
        
        # Start with all codes
        filtered_codes = self.codes.copy()
        
        # Apply scope filter if provided
        if scope is not None:
            # Filter codes where the part before "//" matches the scope
            if 'code' in filtered_codes.columns:
                # Extract the part before "//" and compare with scope
                code_prefixes = filtered_codes['code'].str.split('//').str[0]
                filtered_codes = filtered_codes[code_prefixes == scope]
        
        # Search for the word in the description column (case-insensitive)
        if 'description' in filtered_codes.columns and not filtered_codes.empty:
            filtered_codes = filtered_codes[
                filtered_codes['description'].str.contains(word, case=False, na=False)
            ]
        
        return filtered_codes
    
    def attempt_attribute_extract(self, concept_name_query):
        """
        Attempts to extract an attribute from the concept name query.
        """
        query_type, query_data = concept_name_query
        if query_type != "equals":
            return
        
        if query_data in self.attributes:
            codes = self.attributes[query_data]
        else:
            codes = self.search_codes_by_word_and_scope(query_data)
        result_df = self.search_data_for_given_code(codes)
        return Attributes(result_df.set_index(ID_FIELD)["numeric_value"])

    def get_data_element(
        self,
        scope = None,
        data_type = None,
        concept_code_query = None,
        concept_name_query = None):
        """
        :param scope: The scope in the dataset in which to search for 
            matching concepts, or None to search all scopes. Returned data
            is only allowed to match one scope.
        :param data_type: The type of the data that should be returned, or
            None to search all data types. Returned data is only allowed to
            be of one type.
        :param concept_name_query: A query over the concept names in the data,
            expressed as a tuple (query_type, query_data). The following query
            types are supported:
            - "equals": query_data should be an exact string
            - "in": query_data should be a list of names
            - "contains", "matches", "startswith", "endswith": query_data should
                be a string or regex object
            
        :return: A Tempo core data type representing the matching data from
            the dataset, in Attributes, Events, or Intervals format. An error
            will be thrown if the query matches multiple scopes or data types 
            and the scope or data type is not specified. An error will be
            thrown if the query does not match any concepts in the data and the
            data type is not specified (meaning that the return type is
            indeterminate).
        """
        if (concept_name_query is None) == (concept_code_query is None):
            raise ValueError("Exactly one of id and name must be specified")

        
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

        matching_codes = self.search_codes_by_word_and_scope(concept_name_query,scope)
        if concept_code_query is not None:
            matching_codes = self.search_data_for_given_code(concept_code_query)
        if matching_codes.empty:
            raise ValueError("No matching codes found")
        return matching_codes
            
    def extract_data_from_interval(self, df, start_time, end_time):
        """
        Extract rows from the DataFrame where the 'time' column is within the given interval [start_time, end_time].

        Args:
            df (pd.DataFrame): The DataFrame containing a 'time' column.
            start_time: The start of the interval (can be string, datetime, or numeric).
            end_time: The end of the interval (can be string, datetime, or numeric).

        Returns:
            pd.DataFrame: Filtered DataFrame with rows within the specified time interval.
        """
        if 'time' not in df.columns:
            return pd.DataFrame()
        # Try to convert 'time' column to datetime if not already
        if not pd.api.types.is_datetime64_any_dtype(df['time']):
            try:
                df = df.copy()
                df['time'] = pd.to_datetime(df['time'])
            except Exception:
                pass  # If conversion fails, assume it's already in comparable format

        # Convert start_time and end_time to datetime if possible
        try:
            start_time = pd.to_datetime(start_time)
            end_time = pd.to_datetime(end_time)
        except Exception:
            pass  # If conversion fails, assume they're already in comparable format

        mask = (df['time'] >= start_time) & (df['time'] <= end_time)
        return df[mask]
    
    def extract_data_from_interval_by_code(self, code, start_time, end_time):
        """
        Extract rows from the DataFrame where the 'time' column is within the given interval [start_time, end_time] and the 'code' column matches the given code.
        """
        df = self.extract_data_element(code, splits=['train', 'tuning', 'held_out'], precise=True)
        return self.extract_data_from_interval(df, start_time, end_time)



if __name__ == "__main__":
    extractor = MEDSDataExtractor("./mimiciv_demo_meds-1")
    # print(extractor.data)
    # print(extractor.data.columns)
    # print(extractor.extract_codes_from_data(extractor.data))
    # print(list(extractor.codes.columns))
    codes = extractor.fix_codes()
    print(extractor.extract_scope_from_code(single=False))

    combined_scope = extractor.extract_scope_from_code(single=None)
    print(combined_scope)
    single_scope = extractor.extract_scope_from_code(single=True)
    print(single_scope)
    non_single_scope = extractor.extract_scope_from_code(single=False)
    print(non_single_scope)
    print(extractor.extract_scope(["INFUSION_START//221986"]))
    print(extractor.search_data_for_given_code(["INFUSION_START//221986"]))\
    
    # Test the MEDSDataExtractor class functionality
    print("\n=== Testing MEDSDataExtractor ===")
    
    # Test basic data loading
    print(f"Data shape: {extractor.data.shape}")
    print(f"Available columns: {list(extractor.data.columns)}")
    print(f"Number of unique subjects: {extractor.data['subject_id'].nunique()}")
    
    # Test code extraction
    print("\n--- Testing code extraction ---")
    all_codes = extractor.extract_codes_from_data(extractor.data)
    print(f"Total number of codes in data: {len(all_codes)}")
    print(f"Unique codes: {all_codes.nunique()}")
    print(f"Sample codes: {all_codes.head().tolist()}")
    
    # Test scope extraction
    print("\n--- Testing scope extraction ---")
    test_scopes = ["INFUSION", "LAB", "MEDICATION"]
    for scope in test_scopes:
        scope_results = extractor.extract_scope([scope])
        print(f"Codes containing '{scope}': {len(scope_results)}")
    
    # Test search by word and scope
    print("\n--- Testing search by word and scope ---")
    search_results = extractor.search_codes_by_word_and_scope("blood", scope="LAB")
    print(f"Lab codes containing 'blood': {len(search_results)}")
    if not search_results.empty:
        print(f"Sample results: {search_results.head(3)[['code', 'description']].to_dict('records')}")
    
    # Test time interval extraction
    print("\n--- Testing time interval extraction ---")
    sample_data = extractor.data.head(1000)  # Use subset for testing
    if 'time' in sample_data.columns:
        # Get time range from data
        min_time = sample_data['time'].min()
        max_time = sample_data['time'].max()
        mid_time = min_time + (max_time - min_time) / 2
        
        interval_data = extractor.extract_data_from_interval(sample_data, min_time, mid_time)
        print(f"Original data points: {len(sample_data)}")
        print(f"Data points in first half of time range: {len(interval_data)}")
    
    # Test specific code search
    print("\n--- Testing specific code search ---")
    if not all_codes.empty:
        test_code = all_codes.iloc[0]  # Get first available code
        code_data = extractor.search_data_for_given_code([test_code])
        print(f"Data points for code '{test_code}': {len(code_data)}")
    
    print("\n=== Testing Complete ===")

