# Tempo-QL: Standardized Temporal Queries for ML in Healthcare

## Installation

You may first want to create a conda environment or other virtual environment to install packages in. Clone the repo, cd into it and run `pip install -r requirements.txt`.

For the Jupyter widget, cd into the `client` directory and run `npm install`.

## Getting Started with the Query Language

To try the query language, you can run `python query_language/evaluator.py`. The code at the bottom of this script shows an example of how to load a sample dataset and run basic queries on it.

## Running the Widget

Open a terminal and start the dev server by cd'ing into `client` and running `vite`. Then, in your jupyter notebook, create a widget instance with the argument `dev=True` to tell it to listen for updates on the dev server.