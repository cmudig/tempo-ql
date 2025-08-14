import pathlib
import anywidget
import traitlets
from typing import Optional, Tuple, Any

from .evaluator import QueryEngine
from .ai_assistant import AIAssistant
from .scope_analyzer import ScopeAnalyzer
from .utils import make_query_result_summary


# Development and production asset paths
DEV_ESM_URL = "http://localhost:5173/src/widget-main.js?anywidget"
DEV_CSS_URL = ""
BUNDLE_DIR = pathlib.Path(__file__).parent / "static"


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
    # Query input and processing
    text_input = traitlets.Unicode("").tag(sync=True)
    process_trigger = traitlets.Unicode("").tag(sync=True)
    message = traitlets.Unicode("").tag(sync=True)
    
    # AI Assistant
    llm_available = traitlets.Bool(False).tag(sync=True)
    llm_trigger = traitlets.Unicode("").tag(sync=True)
    llm_question = traitlets.Unicode("").tag(sync=True)
    llm_mode = traitlets.Unicode("generate").tag(sync=True)  # "generate" or "explain"
    llm_loading = traitlets.Bool(False).tag(sync=True)
    llm_error = traitlets.Unicode("").tag(sync=True)
    ai_explanation = traitlets.Unicode("").tag(sync=True)
    extracted_query = traitlets.Unicode("").tag(sync=True)
    has_extracted_query = traitlets.Bool(False).tag(sync=True)
    api_status = traitlets.Unicode("Checking API connection...").tag(sync=True)
    
    # Data scope analysis
    scopes = traitlets.List([]).tag(sync=True)
    scope_analysis_trigger = traitlets.Unicode("").tag(sync=True)
    scope_concepts = traitlets.Dict({}).tag(sync=True)
    
    # Query results
    values = traitlets.Dict().tag(sync=True)
    subqueries = traitlets.Dict({}).tag(sync=True)
    subquery_enabled = traitlets.Bool(False).tag(sync=True)
    
    # Basic dataset info
    ids_length = traitlets.Int(0).tag(sync=True)
    list_names = traitlets.List([]).tag(sync=True)
    
    # Loading state
    isLoading = traitlets.Bool(False).tag(sync=True)
    loadingMessage = traitlets.Unicode("").tag(sync=True)
    
    # ==== BACKWARD COMPATIBILITY ====
    # These are kept for frontend compatibility but map to new fields
    llm_message = traitlets.Unicode("").tag(sync=True)  # Maps to ai_explanation
    name = traitlets.Unicode().tag(sync=True)
    selected_scope = traitlets.Unicode("").tag(sync=True)

    def __init__(self, query_engine: Optional[QueryEngine] = None, api_key: Optional[str] = None, dev: bool = False, *args, **kwargs):
        """
        Initialize the Tempo-QL widget.
        
        Args:
            query_engine: QueryEngine instance for data processing
            api_key: Google Gemini API key for AI features
            dev: Use development assets instead of production build
        """
        # Load frontend assets
        self._load_assets(dev)
        
        # Initialize parent class
        super().__init__(*args, **kwargs)
        
        # Initialize core components
        self._init_components(query_engine, api_key)
        
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

    def _init_components(self, query_engine: Optional[QueryEngine], api_key: Optional[str]):
        """Initialize core widget components."""
        self.query_engine = query_engine
        self.last_sql_query = None
        self.data = None
        
        # Initialize AI Assistant
        self.ai_assistant = AIAssistant(query_engine=query_engine, api_key=api_key)
        self.llm_available = self.ai_assistant.is_enabled
        self.api_status = self.ai_assistant.get_status()
        
        # Initialize Scope Analyzer
        if query_engine:
            self.scope_analyzer = ScopeAnalyzer(query_engine=query_engine)

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
            names_df = self.query_engine.dataset.list_names()
            self.list_names = (
                names_df['name'].tolist() 
                if hasattr(names_df, 'name') and 'name' in names_df.columns 
                else []
            )
            
            # Initialize scopes
            self.scopes = self.scope_analyzer.get_scopes() if hasattr(self, 'scope_analyzer') else []
            
            # Initialize default values structure
            self._set_default_values()
            
        except Exception as e:
            print(f"⚠️ Warning: Could not initialize data state: {e}")
            self._set_empty_data_state()

    def _set_empty_data_state(self):
        """Set empty/default state when no query engine is available."""
        self.ids_length = 0
        self.list_names = []
        self.scopes = []
        self._set_default_values()

    def _set_default_values(self):
        """Set default empty values structure."""
        default_metric = {"length": 0, "missingness": 0.0, "type": "binary", "mean": 0.0, "hist": []}
        self.values = {
            "values": default_metric,
            "occurrences": default_metric,
            "durations": default_metric
        }

    # ==== UTILITY METHODS ====
    
    def _set_loading(self, loading: bool, message: str = ""):
        """Set loading state for the widget."""
        self.isLoading = loading
        self.loadingMessage = message

    def _clear_ai_state(self):
        """Clear all AI-related state variables."""
        self.llm_error = ""
        self.ai_explanation = ""
        self.llm_message = ""
        self.extracted_query = ""
        self.has_extracted_query = False

    def _set_ai_error(self, error_message: str):
        """Set AI error state consistently."""
        self._clear_ai_state()
        self.llm_error = ""  # Don't show in error field
        self.ai_explanation = error_message
        self.llm_message = error_message

    def _set_ai_success(self, explanation: str, extracted_query: str = "", has_query: bool = False):
        """Set AI success state consistently."""
        self._clear_ai_state()
        self.ai_explanation = explanation
        self.llm_message = explanation
        if has_query:
            self.extracted_query = extracted_query
            self.has_extracted_query = True

    # ==== QUERY PROCESSING ====
    
    def execute_query(self, query: str) -> Tuple[bool, str, Any]:
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
        
        try:
            # Reset state
            self.last_sql_query = None
            
            # Execute query
            print(f"🔍 Executing query: {query}")
            result = self.query_engine.query(query, return_subqueries=False)
            self.last_sql_query = self.query_engine.get_last_sql_query()
            
            print(f"✅ Query executed successfully")
            return True, self.last_sql_query or "Query completed", result
            
        except Exception as e:
            error_message = f"Error in query execution: {str(e)}"
            print(f"❌ {error_message}")
            return False, error_message, None

    def _process_query_results(self, query: str, result: Any):
        """Process successful query results and update widget state."""
        try:
            # Process subqueries
            self._process_subqueries(query)
            
            # Update main result data
            self.data = result
            
            # Generate result summary
            try:
                self.values = make_query_result_summary(result)
            except Exception as e:
                print(f"Warning: Error creating values summary: {e}")
                self._set_default_values()
                
        except Exception as e:
            print(f"Warning: Error processing query results: {e}")

    def _process_subqueries(self, query: str):
        """Process and summarize subqueries."""
        try:
            _, subqueries = self.query_engine.query(query, return_subqueries=True)
            processed_subqueries = {}
            
            if isinstance(subqueries, dict):
                for key, value in subqueries.items():
                    if isinstance(value, dict) and 'result' in value:
                        try:
                            processed_subqueries[key] = {
                                'result': make_query_result_summary(value['result'])
                            }
                        except Exception as e:
                            print(f"Warning: Error processing subquery {key}: {e}")
                            processed_subqueries[key] = {
                                'result': {'values': {'length': 0, 'type': 'unknown'}}
                            }
            
            self.subqueries = processed_subqueries
            self.subquery_enabled = len(processed_subqueries) > 0
            
        except Exception as e:
            print(f"Warning: Error getting subqueries: {e}")
            self.subqueries = {}
            self.subquery_enabled = False

    # ==== SCOPE ANALYSIS ====
    
    def analyze_scope(self, scope_name: str, force_refresh: bool = False):
        """Analyze a data scope using the ScopeAnalyzer."""
        if not hasattr(self, 'scope_analyzer'):
            print("❌ ScopeAnalyzer not initialized")
            return None
            
        def progress_callback(message: str):
            # Add more descriptive prefixes to progress messages
            if "analyzing" in message.lower():
                formatted_message = f"Analyzing {scope_name}: {message}"
            elif "processing" in message.lower():
                formatted_message = f"Processing {scope_name}: {message}"
            else:
                formatted_message = f"{scope_name}: {message}"
            self._set_loading(True, formatted_message)
        
        return self.scope_analyzer.analyze_scope(
            scope_name, 
            force_refresh=force_refresh, 
            progress_callback=progress_callback
        )

    # ==== AI ASSISTANT METHODS ====
    
    def _trigger_ai_explanation(self, query: str):
        """Trigger AI explanation for a successful query."""
        if not (self.ai_assistant and self.ai_assistant.is_available()):
            print("⚠️ AI assistant not available for explanation")
            return
            
        self._clear_ai_state()
        self.llm_question = f"Please explain this TempoQL query: {query}"
        self.llm_mode = "explain"
        self.llm_trigger = "ask"
        print("🔍 AI explain mode triggered for successful query")

    def _trigger_ai_fix(self, failed_query: str, error_message: str):
        """Trigger AI fix mode for a failed query."""
        if not (self.ai_assistant and self.ai_assistant.is_available()):
            print("⚠️ AI assistant not available for query fixing")
            self._set_ai_error(error_message)
            return
            
        print(f"🔧 Triggering AI fix mode for failed query")
        print(f"🔧 Failed query: {failed_query}")
        print(f"🔧 Error: {error_message}")
        
        self._clear_ai_state()
        self.llm_loading = True
        
        try:
            # Show analyzing error stage
            self._set_loading(True, "Analyzing error...")
            
            # Call AI assistant in fix mode
            self._set_loading(True, "Generating fix...")
            response_data = self.ai_assistant.process_question(
                question="Please fix this failed TempoQL query",
                mode="fix",
                failed_query=failed_query,
                error_message=error_message
            )
            
            if response_data.get('error', False):
                error_msg = response_data.get('explanation', 'Failed to fix query')
                print(f"❌ AI fix failed: {error_msg}")
                self._set_ai_error(f"Failed to fix query: {error_msg}")
            else:
                explanation = response_data.get('explanation', '')
                extracted_query = response_data.get('extracted_query', '')
                has_query = response_data.get('has_query', False)
                
                print(f"✅ AI fix completed. Has fixed query: {has_query}")
                self._set_ai_success(explanation, extracted_query, has_query)
                
        except Exception as e:
            error_msg = f"Error during AI fix: {str(e)}"
            print(f"❌ {error_msg}")
            self._set_ai_error(error_msg)
        finally:
            self.llm_loading = False

    # ==== TRAITLET OBSERVERS ====
    
    @traitlets.observe('process_trigger')
    def _on_process_trigger(self, change):
        """Handle query execution trigger from frontend (Run button)."""
        if not change['new']:
            return
            
        query = self.text_input.strip()
        print(f"🔍 Processing query: {query}")
        
        try:
            self._set_loading(True, "Checking query...")
            
            # Execute query with error handling
            success, message, result = self.execute_query(query)
            self.message = message
            
            if success:
                # Process successful query
                print(f"✅ Query succeeded")
                self._set_loading(True, "Processing results...")
                self._process_query_results(query, result)
                self._set_loading(True, "Generating explanation...")
                self._trigger_ai_explanation(query)
            else:
                # Handle query error - trigger AI fix mode
                print(f"❌ Query failed: {message}")
                self._set_loading(True, "Fixing query...")
                self._trigger_ai_fix(query, message)
                
        except Exception as e:
            error_msg = f"Error: {str(e)}"
            print(f"❌ Unexpected error: {error_msg}")
            self.message = error_msg
            # For unexpected errors, also try AI fix if possible
            self._set_loading(True, "Attempting to fix error...")
            self._trigger_ai_fix(query, error_msg)
        finally:
            self._set_loading(False)
            self.process_trigger = ""

    @traitlets.observe('llm_trigger')
    def _on_llm_trigger(self, change):
        """Handle AI assistant trigger from frontend (Ask button)."""
        if not change['new']:
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
            mode = self.llm_mode or "generate"
            if mode == "generate":
                self._set_loading(True, "Generating query...")
            elif mode == "explain":
                self._set_loading(True, "Explaining query...")
            else:
                self._set_loading(True, "Processing request...")
            
            # Process AI question
            response_data = self.ai_assistant.process_question(question, mode=mode)
            
            if response_data.get('error', False):
                self.llm_error = response_data.get('explanation', 'Unknown error')
            else:
                explanation = response_data.get('explanation', '')
                extracted_query = response_data.get('extracted_query', '')
                has_query = response_data.get('has_query', False)
                
                self._set_ai_success(explanation, extracted_query, has_query)
                
        except Exception as e:
            self.llm_error = f"Error: {str(e)}"
            self._clear_ai_state()
        finally:
            self._set_loading(False)  # Clear loading state
            self._reset_llm_state()

    @traitlets.observe('scope_analysis_trigger')
    def _on_scope_analysis_trigger(self, change):
        """Handle scope analysis trigger from frontend."""
        if not change['new']:
            return
            
        trigger_value = change['new']
        force_refresh = trigger_value.endswith(':force')
        scope_name = trigger_value[:-6] if force_refresh else trigger_value
        
        print(f"🔍 Analyzing scope: {scope_name} (force: {force_refresh})")
        
        try:
            self._set_loading(True, f"Starting analysis of {scope_name}...")
            analysis_result = self.analyze_scope(scope_name, force_refresh)
            
            if analysis_result:
                self.scope_concepts = analysis_result
                concept_count = len(analysis_result.get('concepts', []))
                print(f"✅ Found {concept_count} concepts in {scope_name}")
            else:
                self.scope_concepts = {
                    'scope_name': scope_name,
                    'concept_count': 0,
                    'concepts': [],
                    'error': 'No data found for this scope'
                }
                
        except Exception as e:
            print(f"❌ Error analyzing scope {scope_name}: {e}")
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
        self.llm_mode = "generate"


# Backward compatibility alias
Widget = TempoQLWidget