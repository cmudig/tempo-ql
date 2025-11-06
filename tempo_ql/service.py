import datetime
import traceback
from typing import Optional, Tuple, Any, TextIO
from collections.abc import MutableMapping

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .evaluator import QueryEngine
from .ai_assistant import AIAssistant
from .utils import make_query_result_summary


MAX_HISTORY_ITEMS = 10

class TempoQLService:
    
    def __init__(self, query_engine: Optional["QueryEngine"] = None, variable_store: Optional[MutableMapping] = None, api_key: Optional[str] = None):
        self.query_engine = query_engine
        self.variable_store = variable_store
        self.last_sql_query = None
        self.data = None
        
        # Initialize AI Assistant
        self.ai_assistant = AIAssistant(query_engine=query_engine, api_key=api_key)
        self.llm_available = self.ai_assistant.is_enabled
        self.api_status = self.ai_assistant.get_status()
        
    def get_dataset_info(self):
        """Initialize data-dependent state if query engine is available."""
        if not self.query_engine:
            return {"ids_length": 0, "list_names": [], "scopes": [], "values": {}}
            
        try:
            # Get basic dataset info
            ids = self.query_engine.get_ids()
            ids_length = len(ids)
            
            # Get concept names
            names_df = self.query_engine.dataset.list_data_elements(return_counts=True)
            list_names = (
                names_df['name'].tolist() 
                if hasattr(names_df, 'name') and 'name' in names_df.columns 
                else []
            )
            
            # Initialize scopes
            scopes = self.query_engine.dataset.get_scopes()
            
            # Initialize default values structure
            values = {}
            
            return {"ids": ids, 
                    "ids_length": ids_length, 
                    "list_names": list_names, 
                    "scopes": scopes, 
                    "values": values}
        
        except Exception as e:
            traceback.print_exc()
            print(f"⚠️ Warning: Could not initialize data state: {e}")
            return {"ids_length": 0, "list_names": [], "scopes": [], "values": {}}

    # ==== QUERY PROCESSING ====
    
    def execute_query(self, var_name: Optional[str], query: str, file_contents: Optional[dict]={}):
        """
        Execute a TempoQL query with comprehensive error handling.
        
        Args:
            query: The TempoQL query string to execute
            
        Returns:
            Tuple of (success: bool, message: str, result: Any)
        """
        # Input validation
        if not query or not query.strip():
            return {"ok": False, "error": "No query provided"}
            
        if not self.query_engine:
            return {"ok": False, "error": "No query engine available"}

        # Reset state
        self.last_sql_query = None
        
        # Execute query
        try:
        
            if var_name is not None:
                result, subqueries = self.query_engine.query_from(
                    file_contents, 
                    target=var_name, 
                    variable_store=self.variable_store, 
                    return_subqueries=True)
                if self.variable_store is not None:
                    self.variable_store[var_name] = result
            else:
                result, subqueries = self.query_engine.query(
                    query, 
                    variable_store=self.variable_store, 
                    return_subqueries=True)
                
            # Process successful query
            self.data = result
            
            ids = self.query_engine.get_ids()
            values = make_query_result_summary(result, ids)
            subqueries = {
                k: {**v, 'result': make_query_result_summary(v['result'], ids)}
                for k, v in subqueries.items()
            }

            return {
                "ok": True,
                "error": "",
                "data": result,
                "values": values,
                "subqueries": subqueries,
                "last_sql_query": self.last_sql_query
            }
    
        except Exception as e:
            traceback.print_exc()
            return {"ok": False, "error": f"{e}"}

    # ==== SCOPE ANALYSIS ====
    
    def analyze_scope(self, scope_name: str, force_refresh: bool = False):
        """Analyze a data scope using the ScopeAnalyzer."""
        try: 
            concepts = self.query_engine.dataset.list_data_elements(
                scope=scope_name, 
                return_counts=True, 
                cache_only=not force_refresh)

            if not len(concepts):
                return {
                    'ok': True,
                    'scope_name': scope_name,
                    'concept_count': 0,
                    'concepts': [],
                    'analyzed_at': str(datetime.datetime.now()),
                    'cache_version': '4.0',
                    'total_records': 0
                }
            return {
                'ok': True,
                'scope_name': scope_name,
                'concept_count': len(concepts),
                'concepts': concepts.to_dict(orient='records'),
                'analyzed_at': str(datetime.datetime.now()),
                'cache_version': '4.0',
                'total_records': concepts['count'].sum()
            }

        except Exception as e:
            traceback.print_exc()
            return {'ok': False, 'error': f'{e}'}

    # ==== AI WORKFLOW ====
    
    def run_llm_explanation(self):
        """Trigger AI explanation for a successful query."""
        if not (self.ai_assistant and self.ai_assistant.is_available()):
            print("⚠️ AI assistant not available for explanation")
            return
            
        print("🔍 AI explain mode triggered for successful query")
        try:            
            # Process AI question
            response_data = self.ai_assistant.process_question(
                explain=True, 
                query=self.query_for_results, 
                query_error=self.query_error)
            
            if response_data.get('error', False):
                llm_explanation = response_data.get('explanation', 'An error occurred while explaining your query. Please try again.')
                return {
                    'ok': False,
                    'explanation': llm_explanation
                }
            else:
                llm_explanation = response_data.get('explanation', '')
                return {
                    'ok': True,
                    'explanation': llm_explanation
                }
                
        except Exception as e:
            traceback.print_exc()
            return {'ok': True, 'error': f"An error occurred while explaining your query: {str(e)}"} 
        
    def process_llm_question(self, question: str, query: str = ""):
        if not question or not question.strip():
            return {'ok': False, 'error': 'No question provided.'}
        if not (self.ai_assistant and self.ai_assistant.is_available()):
            return {'ok': False, 'error': 'AI assistant not available.'}
        
        try:
            response_data = self.ai_assistant.process_question(
                question=question.strip(), 
                query=query.strip())
            
            if response_data.get('error', False):
                llm_error = response_data.get('explanation', 'Unknown error')
                return {
                    'ok': False,
                    'error': llm_error
                }
            return {
                'ok': True,
                'explanation': response_data.get('explanation', ''),
                'extracted_query': response_data.get('extracted_query', ''),
                'has_query': response_data.get('has_query', False)
            }
        
        except Exception as e:
            traceback.print_exc()
            return {'ok': False, 'error': f"{e}"}
