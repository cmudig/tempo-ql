# Sepsis Prediction Model Generalizability Evaluation

This folder contains code for the sepsis autoencoder use case described in the paper:

* `extract_data.ipynb`: Shows how to perform data extraction on all three datasets using JSON files to manage the dataset-specific queries.
* `train_autoencoder.ipynb`: Performs hyperparameter search and training for dense and transformer-based autoencoders.
* `explore_results.ipynb`: Produces the plots shown in the paper.
* `queries/`: Contains the JSON files with queries for each dataset and stage of analysis.

**NOTE:** This code requires access to the full MIMIC-IV and eICU datasets (stored in BigQuery), and EHRSHOT (stored locally in Parquet files). You may need to change some variable values to match your GCP setup.