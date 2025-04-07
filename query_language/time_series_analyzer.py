import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
from typing import Optional, Dict, Any
import numpy as np
from datetime import datetime
from evaluator import QueryEngine, get_all_trajectory_ids
from data_types import AttributeSet, EventSet, IntervalSet

class TimeSeriesAnalyzer:
    """A class for analyzing time series data from Arrow/Parquet files."""
    
    def __init__(self, file_path: str, time_column: str, trajectory_column: str):
        #determine file type and load accordingly
        if file_path.lower().endswith('.parquet'):
            table = pq.read_table(file_path)
            self.data = table.to_pandas()
        else:
            #assume Feather by default
            self.data = pd.read_feather(file_path)
        
        self.time_column = time_column
        self.trajectory_column = trajectory_column
        
        #ensure timestamp column is datetime
        """
        if not pd.api.types.is_datetime64_any_dtype(self.data[time_column]):
            self.data[time_column] = pd.to_datetime(self.data[time_column], unit='s')
        """
        
        
        #prepare data structures for Tempo query engine
        self.prepare_tempo_data_structures()
    
    def prepare_tempo_data_structures(self):
        #create an EventSet 
        events_df = self.data.copy()
        events_df.columns = [
            'id' if col == self.trajectory_column else 
            'time' if col == self.time_column else 
            'eventtype' if col == 'eventtype' else 
            'value' if col == 'value' else 
            col 
            for col in events_df.columns
        ]
        
        #if no eventtype column exists, create a default one
        if 'eventtype' not in events_df.columns:
            events_df['eventtype'] = 'default_event'
        
        #if no value column exists, use default
        if 'value' not in events_df.columns:
            events_df['value'] = 1.0
        
        #create query engine
        self.events = [EventSet(events_df)]
        
        #create attributes from other numerical columns
        attr_columns = self.data.select_dtypes(include=[np.number]).columns.tolist()
        attr_columns = [col for col in attr_columns if col not in [self.time_column, self.trajectory_column, 'value']]
        
        attributes_data = {}
        for col in attr_columns:
            attributes_data[col] = self.data.set_index(self.trajectory_column)[col]
        
        self.attributes = [AttributeSet(pd.DataFrame(attributes_data))]
        
        #create empty IntervalSet (can be expanded later if needed)
        self.intervals = [IntervalSet(pd.DataFrame({
            'id': [],
            'starttime': [],
            'endtime': [],
            'intervaltype': [],
            'value': []
        }))]
        
        #create query engine
        self.query_engine = QueryEngine(
            attributes=self.attributes, 
            events=self.events, 
            intervals=self.intervals
        )
        
    def query(self, query_string: str):
        return self.query_engine.query(query_string)
    
    def get_total_events(self) -> int:
            """Return the total number of events in the dataset."""
            return len(self.data)

    def get_unique_trajectories(self) -> int:
        """Return the number of unique trajectories in the dataset."""
        return self.data[self.trajectory_column].nunique()
    
    def get_total_events(self) -> int:
        """Return the total number of events in the dataset."""
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
        return len(self.data)
    
    def get_time_range(self) -> tuple:
        """Return the time range of the dataset."""
        return (self.data[self.time_column].min(), 
                self.data[self.time_column].max())
    
    def get_unique_trajectories(self) -> int:
        """Return the number of unique trajectories in the dataset."""
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
        return self.data[self.trajectory_column].nunique()
    
    def get_time_range(self) -> tuple:
        """Return the time range of the dataset."""
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
        return (self.data[self.time_column].min(), 
                self.data[self.time_column].max())
    
    def get_summary_statistics(self) -> Dict[str, Any]:
        """Return summary statistics about the dataset."""
        #calculate events per trajectory
        events_per_traj = self.data.groupby(self.trajectory_column).size()
            
        stats = {
            "total_events": self.get_total_events(),
            "unique_trajectories": self.get_unique_trajectories(),
            "time_range": self.get_time_range(),
            "avg_events_per_trajectory": self.get_total_events() / self.get_unique_trajectories(),
            "min_events_per_trajectory": events_per_traj.min(),
            "max_events_per_trajectory": events_per_traj.max(),
            "median_events_per_trajectory": events_per_traj.median(),
            "columns": list(self.data.columns),
            "memory_usage_mb": self.data.memory_usage(deep=True).sum() / 1024**2,  # MB
            "sample_data": self.data.head().to_dict('records')
        }
        
        return stats
    
    def query_time_range(self, 
                        start_time: datetime, 
                        end_time: datetime) -> pd.DataFrame:
        """
        Query data within a specific time range.
        
        Args:
            start_time: Start of the time range
            end_time: End of the time range
            
        Returns:
            DataFrame containing data within the specified time range
        """
        mask = (self.data[self.time_column] >= start_time) & \
               (self.data[self.time_column] <= end_time)
        return self.data[mask]
    
    def get_trajectory_data(self, trajectory_id: Any) -> pd.DataFrame:
        """
        Get all data for a specific trajectory.
        
        Args:
            trajectory_id: ID of the trajectory to query
            
        Returns:
            DataFrame containing data for the specified trajectory
        """
        trajectory_data = self.data[self.data[self.trajectory_column] == trajectory_id]
        return trajectory_data.sort_values(by=self.time_column)
    
    def get_trajectory_statistics(self, trajectory_id: Any) -> Dict[str, Any]:
        """
        Get detailed statistics for a specific trajectory.
        
        Args:
            trajectory_id: ID of the trajectory to analyze
            
        Returns:
            Dictionary containing trajectory statistics
        """
        trajectory_data = self.get_trajectory_data(trajectory_id)
        
        if len(trajectory_data) == 0:
            return {"error": f"No data found for trajectory_id: {trajectory_id}"}
            
        stats = {
            "total_events": len(trajectory_data),
            "time_range": (
                trajectory_data[self.time_column].min(),
                trajectory_data[self.time_column].max()
            ),
            "duration": trajectory_data[self.time_column].max() - 
                       trajectory_data[self.time_column].min(),
            "event_types": trajectory_data['eventtype'].value_counts().to_dict() 
                         if 'eventtype' in trajectory_data.columns else None,
            "first_event": trajectory_data.iloc[0].to_dict(),
            "last_event": trajectory_data.iloc[-1].to_dict()
        }
        
        return stats
    
    def get_event_counts_over_time(self, 
                                 freq: str = 'D') -> pd.Series:
        """
        Get event counts aggregated over time.
        
        Args:
            freq: Frequency for resampling ('D' for daily, 'H' for hourly, etc.)
            
        Returns:
            Series containing event counts over time
        """
        return self.data.groupby(
            pd.Grouper(key=self.time_column, freq=freq)
        ).size()

    def get_trajectory_counts_over_time(self, 
                                      freq: str = 'D') -> pd.Series:
        """
        Get unique trajectory counts aggregated over time.
        
        Args:
            freq: Frequency for resampling ('D' for daily, 'H' for hourly, etc.)
            
        Returns:
            Series containing trajectory counts over time
        """
        return self.data.groupby(
            pd.Grouper(key=self.time_column, freq=freq)
        )[self.trajectory_column].nunique()

    def split(self, **splits: Dict[str, float]) -> Dict[str, 'TimeSeriesAnalyzer']:
        """
        Split the dataset into multiple subsets based on trajectory IDs.
        
        Args:
            **splits: Dictionary of split names and their proportions (e.g., train=0.7, val=0.15, test=0.15)
                    The proportions should sum to 1.0
        
        Returns:
            Dictionary mapping split names to TimeSeriesAnalyzer instances
        """
        #validate splits
        total = sum(splits.values())
        if not np.isclose(total, 1.0):
            raise ValueError(f"Split proportions must sum to 1.0, got {total}")
        
        #get unique trajectory IDs
        trajectory_ids = self.data[self.trajectory_column].unique()
        
        #shuffle the trajectory IDs for randomization
        np.random.shuffle(trajectory_ids)
        
        #calculate split sizes
        n_trajectories = len(trajectory_ids)
        split_sizes = {name: int(np.round(proportion * n_trajectories)) 
                    for name, proportion in splits.items()}
        
        #adjust the last split size to ensure all trajectories are assigned
        names = list(splits.keys())
        split_sizes[names[-1]] = n_trajectories - sum(split_sizes[name] for name in names[:-1])
        
        #create split trajectory ID sets
        start_idx = 0
        split_trajectory_ids = {}
        for name in names:
            end_idx = start_idx + split_sizes[name]
            split_trajectory_ids[name] = trajectory_ids[start_idx:end_idx]
            start_idx = end_idx
        
        #create a TimeSeriesAnalyzer for each split
        result = {}
        for name, ids in split_trajectory_ids.items():
            #filter data for this split
            split_data = self.data[self.data[self.trajectory_column].isin(ids)].copy()
            
            #create a temporary file for the split data
            import tempfile
            import os
            
            #create a temporary file with a unique name
            temp_dir = tempfile.gettempdir()
            random_suffix = np.random.randint(1000000)
            temp_file = os.path.join(temp_dir, f"split_{name}_{random_suffix}.arrow")
            
            #save the split data to the temporary file
            split_data.reset_index(drop=True).to_feather(temp_file)
            
            #create a new analyzer from the temporary file
            result[name] = TimeSeriesAnalyzer(
                file_path=temp_file,
                time_column=self.time_column,
                trajectory_column=self.trajectory_column
            )
            
        return result