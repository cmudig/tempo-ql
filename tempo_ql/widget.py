import pathlib
import anywidget
import traitlets
import threading
import os
import sys
import random
import statistics
import pandas as pd
import math
import json
import asyncio
from google import genai

# Now you can import from tempo-ql
import sys
from evaluator import QueryEngine

from utils import make_query_result_summary


def default_thread_starter(fn, args=[], kwargs={}):
    thread = threading.Thread(target=fn, args=args, kwargs=kwargs)
    thread.daemon = True
    thread.start()
    
def synchronous_thread_starter(fn, args=[], kwargs={}):
    fn(*args, **kwargs)
    
# from `npx vite`
DEV_ESM_URL = "http://localhost:5173/src/widget-main.js?anywidget"
DEV_CSS_URL = ""

# from `npx vite build`
BUNDLE_DIR = pathlib.Path(__file__).parent / "static"

class Widget(anywidget.AnyWidget):
    name = traitlets.Unicode().tag(sync=True)
    
    # Message parameter
    message = traitlets.Unicode("").tag(sync=True)
    
    # Text input traitlet for storing user input (doesn't trigger processing)
    text_input = traitlets.Unicode("").tag(sync=True)
    
    # Trigger traitlet for processing (only set when Run button is clicked)
    process_trigger = traitlets.Unicode("").tag(sync=True)
    
    # LLM traitlet for storing AI responses
    llm_message = traitlets.Unicode("").tag(sync=True)
    llm_loading = traitlets.Bool(False).tag(sync=True)
    llm_error = traitlets.Unicode("").tag(sync=True)
    api_status = traitlets.Unicode("Checking API connection...").tag(sync=True)
    
    # LLM trigger traitlet for processing LLM requests
    llm_trigger = traitlets.Unicode("").tag(sync=True)
    
    values = traitlets.Dict({"values": {"length": 0, "missingness": 0.0, "type": "binary", "mean": 0.0, "hist": []}, "occurrences": {"length": 0, "missingness": 0.0, "type": "binary", "mean": 0.0, "hist": []}, "durations": {"length": 0, "missingness": 0.0, "type": "binary", "mean": 0.0, "hist": []}}).tag(sync=True)
    ids_length = traitlets.Int(0).tag(sync=True)
    list_names = traitlets.List([]).tag(sync=True)
    subquery_enabled = traitlets.Bool(False).tag(sync=True)
    subqueries = traitlets.Dict({}).tag(sync=True)
    
    def __init__(self, query_engine: QueryEngine = None, *args, **kwargs):
        # Extract dev parameter before passing to parent
        dev_mode = kwargs.pop('dev', False)
        
        try:
            self._esm = DEV_ESM_URL if dev_mode else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if dev_mode else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")

        # Initialize parent class first
        super().__init__(*args, **kwargs)
        
        # Set the parameters after parent initialization
        self.query_engine = query_engine
        self.last_sql_query = None

        # Initialize empty DataFrame
        self.data = None
        
        # Update query engine status for frontend
        if query_engine is not None:
            self.query_engine_status = "Query engine ready"
        else:
            self.query_engine_status = "No query engine available"
        
        # LLM configuration - get API key from environment variable only
        self.gemini_api_key = os.getenv('GEMINI_API_KEY')
        
        # Initialize Google Generative AI client
        if self.gemini_api_key:
            self.genai_client = genai.Client(api_key=self.gemini_api_key)
        else:
            self.genai_client = None
        
        # Set initial API status
        self.api_status = self.get_gemini_api_key_status()

        self.ids = self.query_engine.get_ids()
        self.ids_length = len(self.ids)
        
        # Extract just the "name" column from the DataFrame and convert to list
        names_df = self.query_engine.dataset.list_names()
        if hasattr(names_df, 'name') and 'name' in names_df.columns:
            self.list_names = names_df['name'].tolist()
        else:
            self.list_names = []
    
    def get_gemini_api_key_status(self) -> str:
        """Get the status of the Gemini API key"""
        if not self.gemini_api_key:
            return "Not configured - please set GEMINI_API_KEY environment variable"
        elif len(self.gemini_api_key) < 10:
            return "Invalid API key format"
        else:
            return f"Configured: {self.gemini_api_key[:10]}..."
    
    def _process_text_input(self, text: str):
        """Process text input and return result"""
        if not text:
            return "No text provided"
        try:

            # ... rest of code ...
            if self.query_engine:
                # First query to get result and SQL
                try:
                    result = self.query_engine.query(text,return_subqueries=False)
                    self.last_sql_query = self.query_engine.get_last_sql_query()
                except Exception as query_error:
                    print(f"Error in main query: {query_error}")
                    return f"Error in main query: {str(query_error)}"
                
                # Second query to get subqueries
                try:
                    _ , subqueries = self.query_engine.query(text,return_subqueries=True)
                    
                    # Preprocess subqueries: assume only "result" key exists
                    processed_subqueries = {}
                    if isinstance(subqueries, dict):
                        for key, value in subqueries.items():
                            if isinstance(value, dict) and 'result' in value:
                                try:
                                    # Apply make_query_result_summary to the result
                                    processed_subqueries[key] = {
                                        'result': make_query_result_summary(value['result'])
                                    }
                                except Exception as subquery_error:
                                    print(f"Warning: Error processing subquery {key}: {subquery_error}")
                                    # Fallback: create a basic summary
                                    processed_subqueries[key] = {
                                        'result': {'values': {'length': 0, 'type': 'unknown'}}
                                    }
                except Exception as subquery_error:
                    print(f"Warning: Error getting subqueries: {subquery_error}")
                    processed_subqueries = {}
                
                self.subquery_enabled = len(processed_subqueries) > 0
                self.subqueries = processed_subqueries
                
                self.data = result
                try:
                    self.values = make_query_result_summary(result)
                except Exception as summary_error:
                    print(f"Error creating values summary: {summary_error}")
                    self.values = {"values": {"length": 0, "missingness": 0.0, "type": "unknown", "mean": 0.0, "hist": []}}
                
                return self.last_sql_query
            else:
                return f"Text received: {text} (no query engine available)"
        except Exception as e:
            return f"Error processing text: {str(e)}"
    
    def _create_data_analysis_prompt(self, user_question: str, context: str = None) -> str:
        """Create a context-aware prompt for data analysis"""
        base_prompt = f"""You are a helpful data analysis assistant. You can help users understand their data and write queries.

{context if context else ''}User Question: {user_question}

Please provide a helpful response. If the user is asking about data analysis or queries, provide specific guidance. If they need help with Tempo-QL syntax, explain the concepts clearly."""
        
        return base_prompt
    
    def _call_gemini_api(self, prompt: str) -> str:
        """Call the Gemini API and return the response"""
        try:
            if not self.genai_client:
                return "Please set your GEMINI_API_KEY environment variable."
            
            response = self.genai_client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt
            )
            
            return response.text
                
        except Exception as e:
            raise Exception(f"Error calling Gemini API: {str(e)}")
    
    def _process_llm_question(self, question: str):
        """Process LLM question and return response"""
        try:
            # Create context with available data fields
            context = "Available data fields: patient_id, age, gender, diagnosis, medication, lab_result, vital_signs, procedure, visit_date, discharge_date\n\n"
            prompt = self._create_data_analysis_prompt(question, context)
            
            # Call Gemini API
            response = self._call_gemini_api(prompt)
            
            return response
            
        except Exception as e:
            return f"Error: {str(e)}"
    
    @traitlets.observe('process_trigger')
    def _on_process_trigger(self, change):
        """Handle processing trigger from frontend (Run button)"""
        if change['new']:
            print(f"🔍 DEBUG: Process trigger activated with value: '{change['new']}'")
            print(f"🔍 DEBUG: Current text_input: '{self.text_input}'")
            
            # Process the current text_input value
            result = self._process_text_input(self.text_input)
            print(f"🔍 DEBUG: Processing result: {result}")
            
            self.processed_result = result
            self.message = result
            print(f"🔍 DEBUG: Message set to: {self.message}")
            
            # Reset the trigger
            self.process_trigger = ""
            print(f"🔍 DEBUG: Process trigger reset")
    
    @traitlets.observe('llm_trigger')
    def _on_llm_trigger(self, change):
        """Handle LLM trigger from frontend (Ask button)"""
        if change['new']:
            # Set loading state
            self.llm_loading = True
            self.llm_error = ""
            
            # Get the question from text_input
            question = self.text_input.strip()
            if question:
                try:
                    # Process the LLM question
                    response = self._process_llm_question(question)
                    self.llm_message = response
                    if response.startswith("Error:"):
                        self.llm_error = response
                        self.llm_message = ""
                except Exception as e:
                    self.llm_error = f"Error: {str(e)}"
                    self.llm_message = ""
            else:
                self.llm_error = "No question provided"
                self.llm_message = ""
            
            # Reset loading state and trigger
            self.llm_loading = False
            self.llm_trigger = ""