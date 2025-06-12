from .dataset import OMOPDataset
from ..evaluator import QueryEngine
from .local_database import LocalOMOPDatabase

if __name__ == "__main__":
    # Initialize local database
    local_db = LocalOMOPDatabase("query_language/omop/mimic-iv-demo-data-in-the-omop-common-data-model-0.9/1_omop_data_csv", "query_language/omop/omop_database.db")
    local_db.setup_database()
    local_db.close()

    # Initialize query engine
    query_engine = QueryEngine(OMOPDataset(local_db.get_connection_string()))

    # Example tempo query

    # # example 1
    # example1 = "{Heart Rate}"

    # read_example1 = query_engine.read_from_tempo(example1)
    # data_elements = query_engine.extract_data_format(read_example1)
    # print(data_elements)

    # omop_ids = query_engine.search_omop_id(data_elements[0])
    # print(omop_ids)
    # processed_omop_ids = query_engine.process_omop_id(omop_ids)
    # print(processed_omop_ids)

    # result = query_engine.extract_data_from_one_data_element(data_elements[0])
    # print(result)

    # # example 2
    # example2 = "{bed}"
    # output2 = query_engine.extract_data(example2)
    # print(output2)

    example1 = "{Gender}"
    output1 = query_engine.query(example1)
    print(output1)
    
    # example 3
    example3 = "{name contains /Temperature/; scope = 'Measurement'}"
    output3 = query_engine.query(example3)
    print(output3)