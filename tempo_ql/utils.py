import pandas as pd
import numpy as np
import sys
from .data_types import *
import os
import json
import uuid
from collections.abc import MutableMapping


def select_time_unit(seconds_range):
    if seconds_range >= 365 * 24 * 3600:
        freq = 'Y'
        unit = 'yr'
        format = '%Y'
        seconds_amount = 365 * 24 * 3600
    elif seconds_range >= 24 * 3600:
        freq = 'D'
        unit = 'd'
        format = '%Y-%m-%d'
        seconds_amount = 24 * 3600
    elif seconds_range >= 3600:
        freq = 'H'
        unit = 'hr'
        format = '%Y-%m-%d %H:%M'
        seconds_amount = 3600
    elif seconds_range >= 60:
        freq = 'T'
        unit = 'min'
        format = '%Y-%m-%d %H:%M'
        seconds_amount = 60
    else:
        freq = 'S'
        unit = 'sec'
        format = '%Y-%m-%d %H:%M:%S'
        seconds_amount = 1
    return freq, format, unit, seconds_amount

def compute_histogram(values):
    # Handle empty or invalid input
    if len(values) == 0:
        return {}
    
    min_val = values.min()
    max_val = values.max()
    
    if pd.api.types.is_datetime64_dtype(values.dtype):
        # Choose appropriate bin unit based on range
        total_seconds = (max_val - min_val).total_seconds()
        freq, format, _, _ = select_time_unit(total_seconds)
        # Create bins using pandas date_range
        hist_bins = pd.date_range(start=min_val, end=max_val, freq=freq)
        if len(hist_bins) < 2:
            hist_bins = pd.date_range(start=min_val, end=max_val, periods=2)
        bin_counts = pd.cut(values, bins=hist_bins).value_counts(sort=False)
        return {f"{index.left.strftime(format)} - {index.right.strftime(format)}": count for index, count in bin_counts.items()}
    
    elif min_val == max_val:
        # Handle case where all values are the same
        if min_val == 0:
            hist_bins = np.arange(0, 5)
        else:
            hist_bins = np.arange(min_val - 2, max_val + 3)
    else:
        data_range = max_val - min_val
        if data_range <= 0:
            return {}
        
        bin_scale = np.floor(np.log10(data_range))
        if bin_scale < -10 or bin_scale > 10:  # Prevent extreme values
            return {}
        
        if data_range / (10 ** bin_scale) < 2.5:
            bin_scale -= 1 # Make sure there aren't only 2-3 bins
        
        upper_tol = 2 if (np.ceil(max_val / (10 ** bin_scale))) * (10 ** bin_scale) == max_val else 1
        subdivide = 2 if data_range / (10 ** bin_scale) < 5 else 1
        
        start_bin = np.floor(min_val / (10 ** bin_scale)) * (10 ** bin_scale)
        end_bin = (np.ceil(max_val / (10 ** bin_scale)) + upper_tol) * (10 ** bin_scale)
        step = 10 ** bin_scale / subdivide
        
        # Prevent invalid arange parameters
        if step <= 0 or end_bin <= start_bin:
            return {}
        
        hist_bins = np.arange(start_bin, end_bin, step)
    
    # Ensure we have valid bins
    if len(hist_bins) < 2:
        return {}
    
    try:
        histogram_result = np.histogram(values, bins=hist_bins)
        return dict(zip(hist_bins.astype(float).tolist(), histogram_result[0].astype(int).tolist()))
    except Exception:
        return {} 

def make_series_summary(values, value_type=None):

    summary = {}
    if len(values) == 0: return summary
    summary["length"] = len(values)
    summary["num_unique_values"] = values.nunique()
    
    if pd.isna(values).sum() > 0:
        summary["missingness"] = pd.isna(values).mean()
        summary["num_missing_values"] = pd.isna(values).sum()
        values = values[~pd.isna(values)]
        
    if value_type is None:
        num_unique = len(np.unique(values))
        try:
            is_binary = num_unique == 2 and set(np.unique(values).astype(int).tolist()) == set([0, 1])
        except:
            is_binary = False
        try:
            values.astype(float)
            is_quantitative = True
        except:
            is_quantitative = False
        if is_binary: value_type = "binary"
        elif is_datetime_or_timedelta(values.dtype): value_type = "continuous"
        elif not is_quantitative or (isinstance(values.dtype, pd.CategoricalDtype) or 
                pd.api.types.is_object_dtype(values.dtype) or 
                pd.api.types.is_string_dtype(values.dtype)) or ((values.astype(int) == values).all() and num_unique <= 10): value_type = "categorical"
        else: value_type = "continuous"
    
    summary["type"] = value_type
    if value_type == "binary":
        summary["mean"] = values.astype(int).mean().astype(float)
    elif value_type == "categorical":
        uniques, counts = np.unique(values, return_counts=True)
        uniques_to_show = np.argsort(uniques)
        summary["counts"] = {str(uniques[i]): int(counts[i]) for i in uniques_to_show}
    else:
        if pd.api.types.is_timedelta64_dtype(values.dtype):
            _, _, unit, seconds = select_time_unit(values.max().total_seconds() - values.min().total_seconds())
            summary["unit"] = unit
            values = values.dt.total_seconds() / seconds
        if not is_datetime_or_timedelta(values.dtype):
            summary["mean"] = np.mean(values.astype(float))
            summary["std"] = np.std(values.astype(float))
        summary["hist"] = compute_histogram(values)
    return summary

def make_query_result_summary(query_result, all_ids):
    """
    Supports describing Attributes, Events, Intervals, TimeSeries, and TimeSeriesSet.
    """
    base = {}
    if hasattr(query_result, "name"): base["name"] = query_result.name
    base["type"] = type(query_result).__name__
    
    ids = None
    if hasattr(query_result, "get_ids"):
        ids = pd.Series(query_result.get_ids(), name='id')
        base["ids"] = {
            "count": {
                "type": "count",
                "count": ids.nunique(),
                "total": len(np.unique(all_ids))
            },
            "count_per_trajectory": make_series_summary(ids.value_counts(), value_type='continuous')
        }
        
    if hasattr(query_result, "get_types"):
        types = query_result.get_types()
        base["types"] = make_series_summary(types, value_type='categorical')
        
    if isinstance(query_result, Intervals):
        base["durations"] = make_series_summary(query_result.get_end_times() - query_result.get_start_times(), value_type="continuous")
    
    if hasattr(query_result, "get_values"):
        vals = query_result.get_values()
        if (~pd.isna(vals)).sum() > 0:
            base["missingness"] = {
                "rate": {
                    "type": "count",
                    "count": pd.isna(vals).sum(),
                    "total": len(vals)
                },
                **({"rate_per_trajectory": make_series_summary(pd.isna(vals).groupby(ids).agg('mean'), value_type='continuous')}
                if ids is not None else {})
            }
            
            base["values"] = make_series_summary(vals)
        else:
            base["values"] = {"length": len(vals)}
        
    return base

def convert_to_native_types(o):
    if isinstance(o, dict):
        return {convert_to_native_types(k): convert_to_native_types(v) for k, v in o.items()}
    elif isinstance(o, (list, tuple, np.ndarray)):
        return [convert_to_native_types(v) for v in o]
    elif isinstance(o, (float, int)) and np.isnan(o):
        return None
    elif isinstance(o, float):
        return round(o, 6)
    elif isinstance(o, np.generic):
        v = o.item()
        if isinstance(v, float): return round(v, 6)
        return v
    return o

def flatten_dict(nested_dict, base_key=None):
    """
    Converts the nested dictionary to a single flat dictionary with keys that are
    tuples of the original keys.
    """
    result = {}
    for k, v in nested_dict.items():
        child_key = (*base_key, k) if base_key is not None else (k,)
        if isinstance(v, dict):
            result.update(flatten_dict(v, base_key=child_key))
        else:
            result[child_key] = v
    return result

def unflatten_dict(flat_dict):
    """
    Reverses flatten_dict.
    """
    result = {}
    def place(d, k, v):
        if isinstance(k, tuple) and len(k) > 1:
            d.setdefault(k, {})
            place(d[k], k[1:], v)
        elif isinstance(k, tuple):
            d[k[0]] = v
        else:
            d[k] = v
    for k, v in flat_dict.items():
        place(result, k, v)
    return result

class DataFrameCache(MutableMapping):
    """
    Caches pandas dataframes in a local directory. (Implemented by GPT-5)
    """
    def __init__(self, directory, file_format="parquet"):
        if file_format not in {"csv", "parquet", "arrow", "pickle"}:
            raise ValueError("file_format must be one of: csv, parquet, arrow, pickle")

        self.directory = directory
        if not os.path.exists(self.directory):
            os.mkdir(self.directory)

        self.file_format = file_format
        self.meta_path = os.path.join(self.directory, "metadata.json")

        # Load or initialize metadata
        if os.path.exists(self.meta_path):
            with open(self.meta_path, "r") as f:
                self.metadata = json.load(f)
        else:
            self.metadata = {}
            self._save_metadata()

    def _encode_key(self, key):
        """Convert Python object -> JSON string for storage."""
        return json.dumps(key, sort_keys=True)

    def _decode_key(self, key_json):
        """Convert JSON string -> Python object."""
        return json.loads(key_json)
    
    def _save_metadata(self):
        with open(self.meta_path, "w") as f:
            json.dump(self.metadata, f, indent=2)

    def _save_dataframe(self, df, path):
        if self.file_format == "csv":
            df.to_csv(path, index=False)
        elif self.file_format == "parquet":
            df.to_parquet(path, index=False)
        elif self.file_format == "arrow":
            df.to_feather(path)
        elif self.file_format == "pickle":
            df.to_pickle(path)

    def _load_dataframe(self, path):
        if self.file_format == "csv":
            return pd.read_csv(path)
        elif self.file_format == "parquet":
            return pd.read_parquet(path)
        elif self.file_format == "arrow":
            return pd.read_feather(path)
        elif self.file_format == "pickle":
            return pd.read_pickle(path)

    # --- MutableMapping API ---
    def __getitem__(self, key):
        encoded_key = self._encode_key(key)
        if encoded_key not in self.metadata:
            raise KeyError(key)
        return self._load_dataframe(os.path.join(self.directory, self.metadata[encoded_key]["path"]))

    def __setitem__(self, key, value):
        if not isinstance(value, pd.DataFrame):
            raise TypeError("Value must be a pandas DataFrame")

        encoded_key = self._encode_key(key)
        if encoded_key not in self.metadata:
            # New entry
            path = f"{uuid.uuid4().hex}.{self.file_format}"
            self.metadata[encoded_key] = {"path": path}
        else:
            # Overwrite existing
            path = self.metadata[encoded_key]["path"]

        full_path = os.path.join(self.directory, path)
        self._save_dataframe(value, full_path)
        self._save_metadata()

    def __delitem__(self, key):
        encoded_key = self._encode_key(key)
        if encoded_key not in self.metadata:
            raise KeyError(key)

        # Remove file if exists
        filepath = os.path.join(self.directory, self.metadata[encoded_key]["path"])
        if os.path.exists(filepath):
            os.remove(filepath)

        # Remove metadata
        del self.metadata[encoded_key]
        self._save_metadata()

    def __iter__(self):
        return (self._decode_key(entry) for entry in self.metadata)

    def __len__(self):
        return len(self.metadata)

    def __contains__(self, key):
        return self._encode_key(key) in self.metadata

    def keys(self):
        return [self._decode_key(entry["key"]) for entry in self.metadata]

    def values(self):
        return [self[k] for k in self.keys()]

    def items(self):
        return [(self._decode_key(entry["key"]), self[self._decode_key(entry["key"])]) for entry in self.metadata]

    def clear(self):
        """Remove all cached data and metadata."""
        for entry in self.metadata:
            path = os.path.join(self.directory, entry["path"])
            if os.path.exists(path):
                os.remove(path)
        self.metadata = {}
        self._save_metadata()
