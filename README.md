# Tempo-QL: Standardized Temporal Queries for ML in Healthcare

## Installation

You may first want to create a conda environment or other virtual environment to install packages in. Clone the repo, cd into it and run `pip install -e .`.

## Quickstart

You will need a dataset and a dataset specification to start using TempoQL. In `demo.ipynb`, we show how to use the query language using MIMIC-IV in OMOP format.

Once you have a dataset and specification, running TempoQL looks like this:

```python
from tempo_ql import QueryEngine, GenericDataset, formats

db_specification = formats.omop() # also available: mimiciv(), eicu()
dataset = GenericDataset(sql_connection_string, db_specification)

query_engine = QueryEngine(dataset)
# see demo.ipynb for further options, such as configuring a variable store

query_engine.list_data_elements(scope="Measurement") # returns a dataframe of Measurement concepts

query_engine.query("{Temperature Celsius; scope = Measurement}") # retrieves temperature measurements
```

You can access the interactive query authoring environment like so:

```python
query_engine.interactive(file_path=..., api_key=...)
```

Both `file_path` and `api_key` are optional. `file_path` allows you to read and
write queries from a local JSON file, enabling you to persist the queries that you
create in the interactive session. `api_key` can be a Gemini API key allowing you
to use LLMs to author, update, explain, and debug queries.

## Dev Notes

**Running the dev server:** Make sure you have NodeJS version 20 or later. `cd` into the `client` directory, run `npm install`, then `npm run dev`. Then in your call to `QueryEngine.interactive`, set `dev=True`. Now when you change the frontend source code, the widget will automatically update.

If the Vite dev server stops working after you make some changes (it may show a JavaScript error like 'failed to load model'), check that any imports of TypeScript types are prefixed with the word `type`.