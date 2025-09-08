import numpy as np
import pandas as pd
import tqdm

import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from torch.cuda.amp import GradScaler
import torch.nn.functional as F

from sklearn.preprocessing import StandardScaler

class DataNormalization:
    """
    Handles all normalization of MIMIC and eICU state and demographics data.
    """
    
    def __init__(self, training_data, scaler=None, as_is_columns=[], binary_columns=[], norm_columns=[], log_norm_columns=[], clamp_magnitude=None):
        self.as_is_columns = as_is_columns
        self.binary_columns = binary_columns
        self.norm_columns = norm_columns
        self.log_norm_columns = log_norm_columns
        self.clamp_magnitude = clamp_magnitude
        if scaler is not None:
            self.scaler = scaler
        else:
            self.scaler = StandardScaler()
            scores_to_norm = np.hstack([training_data[self.norm_columns].values.astype(np.float64),
                                        self._clip_and_log_transform(training_data[self.log_norm_columns].fillna(np.nan).values.astype(np.float64))])
            self.scaler.fit(scores_to_norm)

    def _preprocess_normalized_data(self, MIMICzs):
        """Performs ad-hoc normalization on the normalized variables."""
        
        # MIMICzs[pd.isna(MIMICzs)] = 0
        # MIMICzs[C_MAX_DOSE_VASO] = np.log(MIMICzs[C_MAX_DOSE_VASO] + 6)   # MAX DOSE NORAD 
        # MIMICzs[C_INPUT_STEP] = 2 * MIMICzs[C_INPUT_STEP]   # increase weight of this variable
        if self.clamp_magnitude is not None:
            MIMICzs = MIMICzs.where(np.abs(MIMICzs) < self.clamp_magnitude, pd.NA)
        return MIMICzs

    def _clip_and_log_transform(self, data, log_gamma=0.1):
        """Performs a log transform log(gamma + x), and clips x values less than zero to zero."""
        return np.log(log_gamma + np.clip(data, 0, None))
    
    def _inverse_log_transform(self, data, log_gamma=0.1):
        """Performs the inverse of the _clip_and_log_transform function (without the clipping)."""
        return np.exp(data) - log_gamma

    def transform(self, data):
        as_is_cols = data[self.as_is_columns].astype(np.float64).values
        no_norm_scores = data[self.binary_columns].astype(np.float64).values - 0.5
        scores_to_norm = np.hstack([data[self.norm_columns].values.astype(np.float64),
                                    self._clip_and_log_transform(data[self.log_norm_columns].fillna(np.nan).values.astype(np.float64))])
        normed = self.scaler.transform(scores_to_norm)
        
        MIMICzs = pd.DataFrame(np.hstack([as_is_cols, no_norm_scores, normed]), columns=self.as_is_columns + self.binary_columns + self.norm_columns + self.log_norm_columns)
        return self._preprocess_normalized_data(MIMICzs)
    
    def inverse_transform(self, data):
        as_is_scores = data[:,:len(self.as_is_columns)]
        no_norm_scores = data[:,len(self.as_is_columns):len(self.as_is_columns) + len(self.binary_columns)] + 0.5
        unnormed = self.scaler.inverse_transform(data[:,len(self.as_is_columns) + len(self.binary_columns):])
        unnormed[:,len(self.norm_columns):] = self._inverse_log_transform(unnormed[:,len(self.norm_columns):])
        return pd.DataFrame(np.hstack([as_is_scores, no_norm_scores, unnormed]), columns=self.as_is_columns + self.binary_columns + self.norm_columns + self.log_norm_columns)
        

class TemporalDataset(torch.utils.data.Dataset):
    """
    A dataset that creates sequence-level items containing inputs and outputs.
    """
    def __init__(self, 
                 stay_ids, 
                 observations, 
                 outputs,
                 mask_prob=0.0,
                 noise_factor=0.0,
                 replacement_values=0.0,
                 weights=None):
        """
        stay_ids, observations, and outputs should all be the same length.
        mask_prob = probability of zeroing any value when returned.
        noise_factor = factor for Gaussian noise to add to inputs
        weights = list with each element corresponding to an input row, and containing a tuple
            (bin_cutoffs, weights). To create the weights, the input values will be digitized
            according to the bin cutoffs and then assigned from the weights array. The bin_cutoffs
            are assumed to have one LESS value than weights, so that the smallest bin cutoff is
            left-open and the largest bin cutoff is right-open.
        """
        assert len(stay_ids) == len(observations)
        self.observations = observations
        self.outputs = outputs
        self.stay_ids = stay_ids
        self.weights = weights
        
        self.stay_id_pos = []
        last_stay_id = None
        for i, stay_id in enumerate(self.stay_ids):
            if last_stay_id != stay_id:
                if self.stay_id_pos:
                    self.stay_id_pos[-1] = (self.stay_id_pos[-1][0], i)
                    assert i - 1 > self.stay_id_pos[-1][0], last_stay_id
                self.stay_id_pos.append((i, 0))
                last_stay_id = stay_id
        self.stay_id_pos[-1] = (self.stay_id_pos[-1][0], len(self.stay_ids))
        
        self.noise_factor = noise_factor
        self.mask_prob = mask_prob
        self.replacement_values = replacement_values
   
    def __len__(self):
        return len(self.stay_id_pos)
            
    def __getitem__(self, index):
        """
        Returns:
            observation sequence (N, L, S)
            outputs (N, L, 1)
            sequence lengths (N,)
        """
        trajectory_indexes = np.arange(*self.stay_id_pos[index])
        assert len(trajectory_indexes) > 0
        observations = self.observations[trajectory_indexes]
        if self.outputs is not None:
            outputs = self.outputs[trajectory_indexes]
        else:
            outputs = np.zeros(len(trajectory_indexes))
        if self.weights is not None:
            weights = np.hstack([
                feature_weights[np.digitize(observations[:,i], bin_cutoffs)].reshape(-1, 1)
                for i, (bin_cutoffs, feature_weights) in enumerate(self.weights)
            ])
            # weights = self.weights[trajectory_indexes]
        else:
            weights = np.ones((len(trajectory_indexes), observations.shape[1]))
        weights /= weights.sum(axis=1, keepdims=True)
        
        # Mask if needed
        input_obs = observations.copy()
        if self.noise_factor > 0.0:
            input_obs = input_obs + np.random.normal(size=input_obs.shape) * self.noise_factor
        if self.mask_prob > 0.0:
            # Randomly replace observation values with the median
            should_mask = np.random.uniform(0.0, 1.0, size=input_obs.shape) < self.mask_prob
            input_obs = np.where(should_mask, self.replacement_values, input_obs)
               
        return (
            torch.from_numpy(input_obs).float(), 
            torch.from_numpy(outputs).float(),
            torch.from_numpy(weights).float()
        )

