import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
from typing import Optional, Dict, Any
import numpy as np
from datetime import datetime

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
        if not pd.api.types.is_datetime64_any_dtype(self.data[time_column]):
            self.data[time_column] = pd.to_datetime(self.data[time_column], unit='s')
        
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
    
    def load_data(self, file_path: str, time_column: str, trajectory_column: str) -> None:
        """
        Load data from an Arrow file.
        
        Args:
            file_path: Path to the Arrow file
            time_column: Name of the column containing timestamps
            trajectory_column: Name of the column containing trajectory IDs
        """
        try:
            self.data = pd.read_feather(file_path)
            self.time_column = time_column
            self.trajectory_column = trajectory_column
            
            # Ensure timestamp column is datetime
            if not pd.api.types.is_datetime64_any_dtype(self.data[time_column]):
                self.data[time_column] = pd.to_datetime(self.data[time_column], unit='s')
                
        except Exception as e:
            raise Exception(f"Error loading data: {str(e)}")
    
    def get_total_events(self) -> int:
        """Return the total number of events in the dataset."""
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
        return len(self.data)
    
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
        # Calculate events per trajectory
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
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
        if self.data is None:
            raise Exception("No data loaded. Please load data first.")
            
        return self.data.groupby(
            pd.Grouper(key=self.time_column, freq=freq)
        )[self.trajectory_column].nunique()