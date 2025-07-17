import pandas as pd
import numpy as np
import sys
from .data_types import *

def compute_histogram(values):
        # Handle empty or invalid input
        if len(values) == 0:
            return {}
        
        min_val = values.min()
        max_val = values.max()
        
        # Handle case where all values are the same
        if min_val == max_val:
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

def make_series_summary(values,ids = None, value_type=None):

    summary = {}
    if len(values) == 0: return summary
    summary["length"] = len(values)
    summary["num_unique_values"] = values.nunique()
    if ids is not None:
        summary["num_unique_ids"] = ids.nunique()
        summary["ids_hist"] = compute_histogram(ids.value_counts())
        summary["ids_hist_mean"] = np.mean(ids.value_counts())
    
    if pd.isna(values).sum() > 0:
        summary["missingness"] = pd.isna(values).mean()
        summary["num_missing_values"] = pd.isna(values).sum()
        # Store missing IDs before filtering values
        if ids is not None:
            mask = values.isna()
            missing_ids = ids[mask]
            if len(missing_ids) > 0:
                missing_counts = missing_ids.value_counts()
                summary["missing_ids_hist"] = compute_histogram(missing_counts)
                summary["missing_ids_hist_mean"] = np.mean(missing_counts)
            else:
                summary["missing_ids_hist"] = {}
                summary["missing_ids_hist_mean"] = 0
        # Filter out missing values for further processing
        values = values[~pd.isna(values)]
    else:
        summary["missingness"] = 0
        summary["num_missing_values"] = 0
        if ids is not None:
            summary["missing_ids_hist"] = {}
            summary["missing_ids_hist_mean"] = 0
    
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
        summary["mean"] = np.mean(values.astype(float))
        summary["std"] = np.std(values.astype(float))
        summary["hist"] = compute_histogram(values)
    return summary

def make_query_result_summary(query_result):
    """
    Supports describing Attributes, Events, Intervals, TimeSeries, and TimeSeriesSet.
    """
    base = {}
    if hasattr(query_result, "name"): base["name"] = query_result.name
    
    ids = None
    if hasattr(query_result, "get_ids"):
        ids = pd.Series(query_result.get_ids(), name='id')
    if isinstance(query_result, (Events, Intervals)):
        ids = pd.Series(query_result.get_ids(), name='id')
        sizes = query_result.get_values().groupby(query_result.get_ids()).size().rename("size")
        base["occurrences"] = make_series_summary(pd.merge(ids, sizes, left_on='id', right_index=True, how='left')["size"].fillna(0), value_type="continuous")
    if isinstance(query_result, Intervals):
        base["durations"] = make_series_summary(query_result.get_end_times() - query_result.get_start_times(), value_type="continuous")
    
    if hasattr(query_result, "get_values") and (~pd.isna(query_result.get_values())).sum() > 0:
        base["values"] = make_series_summary(query_result.get_values(),ids)
        
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
