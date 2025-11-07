# TempoQL: Standardized Temporal Queries for ML in Healthcare

## Quickstart

You may first want to create a conda environment to install packages in. *Use a Python version between 3.10 and 3.14 for compatibility with TempoQL's dependencies.* Then run:

```bash
pip install tempo-ql
```

*We have had issues in the past running the JupyterLab widget with virtualenv - therefore we recommend using conda.*

## Online Examples

There are two examples on Google Colab to show you how TempoQL can be used, both involving the MIMIC-IV dataset but in different data formats:

* [MIMIC-IV Demo Data in OMOP Common Data Model](https://colab.research.google.com/drive/1ttyFJuPUn37b4zXq0PzDxRbL1QBf3x0p?usp=sharing) - uses only non-credentialed data
* [MIMIC-IV Full Dataset on BigQuery](https://colab.research.google.com/drive/1t2lRa0A0ojBjWhTSY7m7RKiXAZDTOCAp?usp=sharing) - requires credentialed PhysioNet access and a Google Cloud Platform account. Follow the instructions on [this page](https://physionet.org/content/mimiciv/3.1/) to get access.

## Example Usage

The `demo.ipynb` and `demo_mimiciv_full.ipynb` notebooks in the repo (or the Colab examples above) shows how to use the query language using MIMIC-IV in OMOP format. You can run these to explore how TempoQL enables simple, readable and precise queries on EHR data.

You will need a dataset and a dataset specification to start using TempoQL. Then, you can import TempoQL and use it in your Python code like this:

```python
from tempo_ql import QueryEngine, GenericDataset, formats

db_specification = formats.omop() # also available: mimiciv(), eicu()
sql_connection_string = "bigquery://my-project" # or "duckdb://my_local_db", etc.
dataset = GenericDataset(sql_connection_string, db_specification)

query_engine = QueryEngine(dataset)
# see demo.ipynb for further options, such as configuring a variable store

query_engine.list_data_elements(scope="Measurement") # returns a dataframe of Measurement concepts

query_engine.query("{Temperature Celsius; scope = Measurement}") # retrieves temperature measurements
```

You can access the interactive query authoring environment in a Jupyter notebook (or VSCode IPython notebook) like so:

```python
query_engine.interactive(file_path=..., api_key=...)
```

Both `file_path` and `api_key` are optional. `file_path` allows you to read and
write queries from a local JSON file, enabling you to persist the queries that you
create in the interactive session. `api_key` can be a Gemini API key allowing you
to use LLMs to author, update, explain, and debug queries.

## Dev Notes

**For local install:** clone the repo, cd into it and run `pip install -e .`.

**Running the dev server:** Make sure you have NodeJS version 20 or later. `cd` into the `client` directory, run `npm install`, then `npm run dev`. Then in your call to `QueryEngine.interactive`, set `dev=True`. Now when you change the frontend source code, the widget will automatically update.

If the Vite dev server stops working after you make some changes (it may show a JavaScript error like 'failed to load model'), check that any imports of TypeScript types are prefixed with the word `type`.