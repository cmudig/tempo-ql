from ..data_types import AttributeSet, Attributes, EventSet, IntervalSet, get_all_trajectory_ids
import pandas as pd
import re
import numpy as np
import datetime

class TempoCSVDataset:
    def __init__(self, attributes, events, intervals, eventtype_macros=None, cache_fs=None):
        self.attributes = attributes if attributes is not None else [AttributeSet(pd.DataFrame([]))]
        self.events = events if events is not None else [EventSet(pd.DataFrame({
            "id": [],
            "eventtype": [],
            "time": [],
            "value": [],
        }))]
        self.intervals = intervals if intervals is not None else [IntervalSet(pd.DataFrame({
            "id": [],
            "starttime": [],
            "endtime": [],
            "intervaltype": [],
            "value": []
        }))]
        
    def get_ids(self):
        return get_all_trajectory_ids(self.attributes, self.events, self.intervals)

    def _matching_concept_names(self, concept_name_query, all_names):
        """Returns a list of matching concept names out of the list all_names."""
        query_type, query_data = concept_name_query
        if query_type == "equals":
            if query_data in all_names: return [query_data]
            return []
        elif query_type == "in":
            return list(set(query_data) & set(all_names))
        elif query_type in ("contains", "matches", "startswith", "endswith"):
            if isinstance(query_data, re.Pattern):
                pattern_string = query_data.pattern
                flags = query_data.flags
            else:
                pattern_string = re.escape(query_data)
                flags = re.NOFLAG
            if query_type == "matches": 
                pattern_string = "^" + pattern_string + "$"
            elif query_type == "startswith":
                pattern_string = "^" + pattern_string
            elif query_type == "endswith":
                pattern_string = pattern_string + "$"
            pat = re.compile(pattern_string, flags=flags)
            return [n for n in all_names if pat.search(n)]
        raise ValueError(f"Unknown query type '{query_type}'")
    
    def get_min_times(self):
        """
        Returns an Attributes where the value for each ID is the earliest timestamp
        for that trajectory ID in the dataset.
        """
        event_times = np.concatenate([event_set.get_times() for event_set in self.events] if self.events else [np.array([])])
        event_ids = np.concatenate([event_set.get_ids() for event_set in self.events] if self.events else [np.array([])])
        event_mins = pd.Series(event_times, name='times').groupby(event_ids).agg("min")
        
        interval_times = np.concatenate([interval_set.get_start_times() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_ids = np.concatenate([interval_set.get_ids() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_mins = pd.Series(interval_times, name='times').groupby(interval_ids).agg("min")

        ids = self.get_ids()
        all_mins = pd.merge(pd.Series(ids, name="id"), pd.merge(event_mins, interval_mins, how='outer', left_index=True, right_index=True), left_on="id", right_index=True).set_index("id").min(axis=1)
        return Attributes(all_mins.rename("mintime"))

    def get_max_times(self):
        """
        Returns an Attributes where the value for each ID is the latest timestamp
        for that trajectory ID in the dataset. The max time should be exclusive,
        i.e. slightly greater than the latest timestamp.
        """
        event_times = np.concatenate([event_set.get_times() for event_set in self.events] if self.events else [np.array([])])
        event_ids = np.concatenate([event_set.get_ids() for event_set in self.events] if self.events else [np.array([])])
        event_maxes = pd.Series(event_times, name='times').groupby(event_ids).agg("max")
        
        interval_times = np.concatenate([interval_set.get_end_times() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_ids = np.concatenate([interval_set.get_ids() for interval_set in self.intervals] if self.intervals else [np.array([])])
        interval_maxes = pd.Series(interval_times, name='times').groupby(interval_ids).agg("max")

        ids = self.get_ids()
        all_maxes = pd.merge(pd.Series(ids, name="id"), pd.merge(event_maxes, interval_maxes, how='outer', left_index=True, right_index=True), left_on="id", right_index=True).set_index("id").max(axis=1)
        # Offset the time by 1 so that it includes all events and intervals
        if pd.api.types.is_datetime64_any_dtype(all_maxes.dtype):
            all_maxes += datetime.timedelta(seconds=1)
        else:
            all_maxes += 1
        self._maxtimes = Attributes(all_maxes.rename("maxtime"))
        
    def get_data_element(
        self,
        scope=None,
        data_type=None,
        concept_id_query=None,
        concept_name_query=None,
        value_field=None):
        """
        :param scope: Scope is not supported for original Tempo datasets.
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
        if concept_id_query is not None:
            raise ValueError("Concept IDs are not supported in original Tempo format")
        if concept_name_query is None:
            raise ValueError("Concept name query is required in original Tempo format")
        if scope is not None:
            raise ValueError("Scope is not supported in original Tempo format")
        
        if data_type is not None:
            if data_type == "attribute" and isinstance(concept_name_query, list): raise ValueError(f"Cannot jointly retrieve multiple data elements from Attributes")
            if data_type not in ("attribute", "event", "interval"): raise ValueError(f"Unknown data type '{data_type}'")
        else:
            data_type = None
            
        candidates = []
        if (data_type is None or data_type == "attribute") and not isinstance(concept_name_query, list):
            for attr_set in self.attributes:
                matching_names = self._matching_concept_names(concept_name_query, attr_set.get_names())
                if matching_names: candidates.append(attr_set.get(matching_names[0]))
        if data_type is None or data_type == "event":
            for event_set in self.events:
                matching_names = self._matching_concept_names(concept_name_query, event_set.get_unique_types())
                if matching_names: candidates.append(event_set.get(matching_names))
        if data_type is None or data_type == "interval":
            for interval_set in self.intervals:
                matching_names = self._matching_concept_names(concept_name_query, interval_set.get_unique_types())
                if matching_names: candidates.append(interval_set.get(matching_names))

        candidates = [c for c in candidates if len(c) > 0]
        if len(candidates) > 1:
            raise ValueError(f"Multiple data elements found matching query {concept_name_query}. Try specifying a data type.")
        elif len(candidates) == 0:
            raise KeyError(f"No data element found matching query {concept_name_query}")
        return candidates[0]

 
