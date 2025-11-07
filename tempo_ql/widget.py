import pathlib
import anywidget
import traitlets
import datetime
import traceback
from typing import Optional, Tuple, Any, TextIO
from collections.abc import MutableMapping
import json

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from .evaluator import QueryEngine
from .ai_assistant import AIAssistant
from .utils import make_query_result_summary


# Development and production asset paths
DEV_ESM_URL = "http://localhost:5173/src/widget-main.js?anywidget"
DEV_CSS_URL = ""
BUNDLE_DIR = pathlib.Path(__file__).parent / "static"

MAX_HISTORY_ITEMS = 10

class TempoQLWidget(anywidget.AnyWidget):
    """
    Tempo-QL Jupyter Widget for interactive data querying and analysis.
    
    Features:
    - TempoQL query execution with error handling
    - AI-powered query explanation and generation
    - Data scope analysis and visualization
    - Real-time query results and subquery inspection
    """
    
    # ==== CORE TRAITLETS ====
    
    # File contents
    file_contents = traitlets.Dict({}).tag(sync=True)
    file_path = traitlets.Any(allow_none=True)
    _save_path = traitlets.Unicode('').tag(sync=True)
    
    # Query input and processing
    text_input = traitlets.Unicode("").tag(sync=True)
    process_trigger = traitlets.Unicode("").tag(sync=True)
    
    # AI Assistant
    llm_available = traitlets.Bool(False).tag(sync=True)
    llm_trigger = traitlets.Unicode("").tag(sync=True)
    llm_question = traitlets.Unicode("").tag(sync=True)
    llm_loading = traitlets.Bool(False).tag(sync=True)
    llm_error = traitlets.Unicode("").tag(sync=True)
    llm_response = traitlets.Unicode("").tag(sync=True) # for general AI outputs to be shown in the lower-left
    llm_explanation = traitlets.Unicode("").tag(sync=True) # for query explanations to be shown in the result view
    extracted_query = traitlets.Unicode("").tag(sync=True)
    has_extracted_query = traitlets.Bool(False).tag(sync=True)
    api_status = traitlets.Unicode("Checking API connection...").tag(sync=True)
    
    # Data scope analysis
    query_for_results = traitlets.Unicode("").tag(sync=True) # keeps track of which query produced the given results
    scopes = traitlets.List([]).tag(sync=True)
    scope_analysis_trigger = traitlets.Unicode("").tag(sync=True)
    scope_concepts = traitlets.Dict({}).tag(sync=True)
    
    # Query results
    values = traitlets.Dict().tag(sync=True)
    subqueries = traitlets.Dict({}).tag(sync=True)
    query_error = traitlets.Unicode("").tag(sync=True)
    
    # Basic dataset info
    ids_length = traitlets.Int(0).tag(sync=True)
    list_names = traitlets.List([]).tag(sync=True)
    
    # Loading state
    isLoading = traitlets.Bool(False).tag(sync=True)
    loadingMessage = traitlets.Unicode("").tag(sync=True)
    
    # History
    query_history = traitlets.List([]).tag(sync=True)
    ai_history = traitlets.List([]).tag(sync=True)
    
    # Widget appearance
    height = traitlets.Int(default=None, allow_none=True).tag(sync=True)
    
    def __init__(self, query_engine: Optional["QueryEngine"] = None, variable_store: Optional[MutableMapping] = None, api_key: Optional[str] = None, dev: bool = False, verbose: bool = False, *args, **kwargs):
        """
        Initialize the Tempo-QL widget.
        
        Args:
            query_engine: QueryEngine instance for data processing
            variable_store: A dict-like object that will be used to store variable results
            api_key: Google Gemini API key for AI features
            source_file: A path to file or file contents containing existing queries. If
                a path to a JSON file is given, the widget will write to the file
                as you update the queries. If the file does not exist, the widget
                will attempt to write to this file.
            dev: Use development assets instead of production build
        """
        self.verbose = verbose
        
        # Load frontend assets
        self._load_assets(dev)
        
        # Initialize parent class
        super().__init__(*args, **kwargs)
        
        # Initialize core components
        self._init_components(query_engine, variable_store, api_key)
        
        # Initialize data and UI state
        self._init_data_state()

    def _load_assets(self, dev: bool):
        """Load frontend JavaScript and CSS assets."""
        try:
            if dev:
                self._esm = DEV_ESM_URL
                self._css = DEV_CSS_URL
            else:
                self._esm = (BUNDLE_DIR / "widget-main.js").read_text()
                self._css = (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError(
                "No built widget source found, and dev is set to False. "
                "To resolve, run 'npx vite build' from the client directory."
            )
            
    @traitlets.observe("file_path")
    def updated_file_path(self, change=None):
        if isinstance(self.file_path, str):
            self.file_path = pathlib.Path(self.file_path)
            return
        
        if self.file_path is not None and isinstance(self.file_path, pathlib.Path):
            self._save_path = self.file_path.name
            if self.file_path.exists():
                self.file_contents = json.loads(self.file_path.read_text())
                # Check that the types match expectations: each value should be either a string or dict containing more strings or dicts of strings, etc.
                def _validate_file_contents(obj):
                    if isinstance(obj, str):
                        return True
                    elif isinstance(obj, dict):
                        return all(_validate_file_contents(v) for v in obj.values())
                    return False

                if not _validate_file_contents(self.file_contents):
                    raise ValueError("File contents must be a nested structure of dicts/strings.")
            else:
                self.file_contents = {}
        else:
            self._save_path = ''
            self.file_contents = {}

    def _init_components(self, query_engine: Optional["QueryEngine"], variable_store: Optional[MutableMapping], api_key: Optional[str]):
        """Initialize core widget components."""
        self.query_engine = query_engine
        self.variable_store = variable_store
        self.last_sql_query = None
        self.data = None
        
        # Initialize AI Assistant
        self.ai_assistant = AIAssistant(query_engine=query_engine, api_key=api_key, verbose=self.verbose)
        self.llm_available = self.ai_assistant.is_enabled
        self.api_status = self.ai_assistant.get_status()
        
    def _init_data_state(self):
        """Initialize data-dependent state if query engine is available."""
        if not self.query_engine:
            self._set_empty_data_state()
            return
            
        try:
            # Get basic dataset info
            self.ids = self.query_engine.get_ids()
            self.ids_length = len(self.ids)
            
            # Get concept names
            names_df = self.query_engine.dataset.list_data_elements(return_counts=True)
            self.list_names = (
                names_df['name'].tolist() 
                if hasattr(names_df, 'name') and 'name' in names_df.columns 
                else []
            )
            
            # Initialize scopes
            self.scopes = self.query_engine.dataset.get_scopes()
            
            # Initialize default values structure
            self.values = {}
            
        except Exception as e:
            traceback.print_exc()
            print(f"⚠️ Warning: Could not initialize data state: {e}")
            self._set_empty_data_state()

    def _set_empty_data_state(self):
        """Set empty/default state when no query engine is available."""
        self.ids_length = 0
        self.list_names = []
        self.scopes = []
        self.values = {}

    # ==== UTILITY METHODS ====
    
    def _set_loading(self, loading: bool, message: str = ""):
        """Set loading state for the widget."""
        self.isLoading = loading
        self.loadingMessage = message

    def _clear_ai_state(self):
        """Clear all AI-related state variables."""
        self.llm_error = ""
        self.llm_explanation = ""
        self.llm_response = ""
        self.extracted_query = ""
        self.has_extracted_query = False

    def _set_ai_error(self, error_message: str):
        """Set AI error state consistently."""
        self._clear_ai_state()
        self.llm_error = ""  # Don't show in error field
        self.llm_response = error_message

    def _set_ai_success(self, explanation: str, extracted_query: str = "", has_query: bool = False):
        """Set AI success state consistently."""
        self._clear_ai_state()
        self.llm_response = explanation
        self.llm_error = ""
        if has_query:
            self.extracted_query = extracted_query
            self.has_extracted_query = True

    # ==== QUERY PROCESSING ====
    
    def execute_query(self, var_name: Optional[str], query: str):
        """
        Execute a TempoQL query with comprehensive error handling.
        
        Args:
            query: The TempoQL query string to execute
            
        Returns:
            Tuple of (success: bool, message: str, result: Any)
        """
        if not query or not query.strip():
            return False, "No query provided", None
            
        if not self.query_engine:
            return False, "No query engine available", None
        
        # Reset state
        self.last_sql_query = None
        
        # Execute query
        self._set_loading(True, "Running query...")
        if var_name is not None:
            result, subqueries = self.query_engine.query_from(self.file_contents, target=var_name, variable_store=self.variable_store, return_subqueries=True)
            if self.variable_store is not None:
                self.variable_store[var_name] = result
        else:
            result, subqueries = self.query_engine.query(query, variable_store=self.variable_store, return_subqueries=True)
            
        # Process successful query
        self._set_loading(True, "Processing results...")
        self.data = result
        self.values = make_query_result_summary(result, self.ids)
        self.subqueries = {
            k: {**v, 'result': make_query_result_summary(v['result'], self.ids)}
            for k, v in subqueries.items()
        }
        
    # ==== HISTORY ====
    
    def add_query_to_history(self, query: str):
        """Adds the given query to the query history."""
        # Remove any existing entry with the same query
        history = [
            item for item in self.query_history if item.get("query") != query
        ]
        # Insert the new query at the beginning
        history.insert(0, {"query": query, 
                                      "timestamp": datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")})
        # Trim the list to MAX_HISTORY_ITEMS
        self.query_history = history[:MAX_HISTORY_ITEMS]
        
    def add_ai_question_to_history(self, question: str, answer: str, query: Optional[str]):
        # Insert the new query at the beginning
        ai_history = [*self.ai_history]
        ai_history.insert(0, {"question": question,
                                "answer": answer or "",
                                **({"query": query} if query else {}), 
                                "timestamp": datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")})
        # Trim the list to MAX_HISTORY_ITEMS
        self.ai_history = ai_history[:MAX_HISTORY_ITEMS]

    # ==== SCOPE ANALYSIS ====
    
    def analyze_scope(self, scope_name: str, force_refresh: bool = False):
        """Analyze a data scope using the ScopeAnalyzer."""
        self._set_loading(True, "Loading scopes...")
        concepts = self.query_engine.dataset.list_data_elements(scope=scope_name, return_counts=True, cache_only=not force_refresh)
        if not len(concepts):
            self._set_loading(False)
            return None
        result = {
            'scope_name': scope_name,
            'concept_count': len(concepts),
            'concepts': concepts.to_dict(orient='records'),
            'analyzed_at': str(datetime.datetime.now()),
            'cache_version': '4.0',
            'total_records': concepts['count'].sum()
        }
        self._set_loading(False)
        return result

    # ==== AI EXPLANATION ====
    
    def run_llm_explanation(self):
        """Trigger AI explanation for a successful query."""
        if not (self.ai_assistant and self.ai_assistant.is_available()):
            print("⚠️ AI assistant not available for explanation")
            return
            
        if self.verbose: print("🔍 AI explain mode triggered for successful query")
        try:            
            self._set_loading(True, "Explaining query...")
            
            # Process AI question
            response_data = self.ai_assistant.process_question(explain=True, query=self.query_for_results, query_error=self.query_error)
            
            if response_data.get('error', False):
                self.llm_explanation = response_data.get('explanation', 'An error occurred while explaining your query. Please try again.')
            else:
                self.llm_explanation = response_data.get('explanation', '')
                
        except Exception as e:
            self.llm_explanation = f"An error occurred while explaining your query: {str(e)}"
        finally:
            self._set_loading(False)  # Clear loading state

    # ==== TRAITLET OBSERVERS ====
    
    @traitlets.observe('process_trigger')
    def _on_process_trigger(self, change):
        """Handle query execution trigger from frontend (Run button)."""
        if not change['new']:
            return
            
        query = self.text_input.strip()
        self.query_for_results = query
        self.query_error = ""
        self.llm_explanation = ""
        
        var_name = self.process_trigger[len('variable:'):] if self.process_trigger.startswith('variable:') else None
        if self.verbose: print(f"🔍 Processing query: {query}, {var_name}")
        try:
            self._set_loading(True, "Checking query...")
            self.execute_query(var_name, query)
        except Exception as e:
            error_msg = f"Error: {str(e)}"
            if self.verbose: print(f"❌ Unexpected error: {error_msg}")
            self.query_error = error_msg
            self.values = {}
            self.data = None
            raise e
        finally:
            self._set_loading(False)
            self.process_trigger = ""
            self.add_query_to_history(query)

    @traitlets.observe('llm_trigger')
    def _on_llm_trigger(self, change):
        """Handle AI assistant trigger from frontend (Ask button)."""
        if not change['new']:
            return
        
        if change['new'] == 'explain':
            self.run_llm_explanation()
            self.llm_trigger = ''
            return
        
        question = self.llm_question.strip()
        if not question:
            self._set_ai_error("No question provided")
            self._reset_llm_state()
            return
            
        try:
            self.llm_loading = True
            self._clear_ai_state()
            
            # Show appropriate loading message based on mode
            self._set_loading(True, "Generating...")
            
            # Process AI question
            response_data = self.ai_assistant.process_question(question=question, query=self.text_input.strip())
            
            if response_data.get('error', False):
                self.llm_error = response_data.get('explanation', 'Unknown error')
            else:
                explanation = response_data.get('explanation', '')
                extracted_query = response_data.get('extracted_query', '')
                has_query = response_data.get('has_query', False)
                
                self._set_ai_success(explanation, extracted_query, has_query)

        except Exception as e:
            traceback.print_exc()
            self.llm_error = f"Error: {str(e)}"
            self._clear_ai_state()
        finally:
            self._set_loading(False)  # Clear loading state
            self.llm_trigger = ''
            self.llm_loading = False
            self.add_ai_question_to_history(question, self.llm_response, self.extracted_query or None)


    @traitlets.observe('scope_analysis_trigger')
    def _on_scope_analysis_trigger(self, change):
        """Handle scope analysis trigger from frontend."""
        if not change['new']:
            return
            
        trigger_value = change['new']
        force_refresh = trigger_value.endswith(':force')
        scope_name = trigger_value[:-6] if force_refresh else trigger_value
        
        if self.verbose: print(f"🔍 Analyzing scope: {scope_name} (force: {force_refresh})")
        
        try:
            self._set_loading(True, f"Starting analysis of {scope_name}...")
            analysis_result = self.analyze_scope(scope_name, force_refresh)
            
            if analysis_result:
                self.scope_concepts = analysis_result
                concept_count = len(analysis_result.get('concepts', []))
                if self.verbose: print(f"✅ Found {concept_count} concepts in {scope_name}")
            elif force_refresh:
                self.scope_concepts = {
                    'scope_name': scope_name,
                    'concept_count': 0,
                    'concepts': [],
                    'error': 'No data found for this scope'
                }
            else:
                self.scope_concepts = {}
                
        except Exception as e:
            if self.verbose: print(f"❌ Error analyzing scope {scope_name}: {e}")
            self.scope_concepts = {
                'scope_name': scope_name,
                'concept_count': 0,
                'concepts': [],
                'error': f'Analysis failed: {str(e)}'
            }
        finally:
            self._set_loading(False)
            self.scope_analysis_trigger = ""

    def _reset_llm_state(self):
        """Reset LLM trigger state after processing."""
        self.llm_loading = False
        self.llm_trigger = ""
        self.llm_question = ""

    @traitlets.observe("file_contents")
    def write_file_contents(self, change=None):
        new_contents = change.new if change is not None else self.file_contents
        
        if self.file_path is not None:
            self.file_path.write_text(json.dumps(new_contents, indent=2))