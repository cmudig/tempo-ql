import pathlib
import anywidget
import traitlets
import datetime
import traceback
from typing import Optional, Tuple, Any, TextIO
from collections.abc import MutableMapping
import json

from typing import TYPE_CHECKING

from tempo_ql.service import TempoQLService
if TYPE_CHECKING:
    from .evaluator import QueryEngine
from .ai_assistant import AIAssistant

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
        self.service = TempoQLService(query_engine, variable_store, api_key)
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
        info = self.service.get_dataset_info()
        self.ids_length = int(info.get("ids_length", 0))
        self.list_names = list(info.get("list_names", []))
        self.scopes = list(info.get("scopes", []))
        self.values = dict(info.get("values", {}))  
        self.ids = list(info.get("ids", []))

        print(self.scopes)

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
            self._set_loading(True, "Running query...")
            response = self.service.execute_query(
                var_name=var_name,
                query=query,
                file_contents=self.file_contents
            )

            if not response.get("ok"):
                self.query_error = response["error"]
                self.values = {}
                self.subqueries = {}
                self.data = None
                self.last_sql_query = None
                print(f"❌ Query error: {self.query_error}")
                return
            
            self.query_error = ""
            self.values = response.get("values", {})
            self.subqueries = response.get("subqueries", {})
            self.data = response.get("data")
            self.last_sql_query = response.get("last_sql_query")
            
        except Exception as e:
            error_msg = f"Error: {str(e)}"
            if self.verbose: print(f"❌ Unexpected error: {error_msg}")
            self.query_error = error_msg
            self.values = {}
            self.subqueries = {}
            self.data = None
            self.last_sql_query = None
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
            self._set_loading(True, "Explaining query...")
            response_data = self.service.llm_explain_mode(
                query=self.query_for_results, 
                query_error=self.query_error)
            self.llm_explanation = response_data.get('explanation', '')
            self._set_loading(False)
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
            response_data = self.service.llm_ask_mode(question=question, query=self.text_input.strip())
            if not response_data.get('ok'):
                self.llm_error = response_data.get('error', 'Unknown error')
                return
            
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
            analysis_result = self.service.analyze_scope(scope_name, force_refresh=force_refresh)
            
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