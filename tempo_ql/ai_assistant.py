import os
from typing import Optional, Dict, Any, List
from google import genai
from google.genai import types
import json
from tempo_ql.generic.dataset import ConceptFilter

search_concepts_function = {
    "name": "search_concepts",
    "description": "Search for concepts that match a given query. Returns a list of up to 100 concept names that match the query.",
    "parameters": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "A Tempo data element query including either the `id` or the `name` field. The query is case-sensitive and you can use regex patterns in the query, for example: \"name contains /heart rate|hr/\""
            },
            "scope": {
                "type": "string",
                "description": "The scope in which to search for concepts. If not provided, searches all scopes (but this is not preferable)."
            },
        },
        "required": [
            "query"
        ],
        "propertyOrdering": [
            "query",
            "scope",
        ]
    }
}

class AIAssistant:
    """
    AI Assistant class that handles Gemini API interactions for data analysis and query assistance.
    Only functions when a valid API key is provided.
    """
    
    def __init__(self, query_engine, api_key: Optional[str] = None):
        """
        Initialize the AI Assistant with an optional API key.
        
        Args:
            query_engine: A query engine used to retrieve data elements and parse
                query strings.
            api_key: Gemini API key. If None, will try to get from GEMINI_API_KEY environment variable.
        """
        self.query_engine = query_engine
        self.api_key = api_key or os.getenv('GEMINI_API_KEY')
        self.genai_client = None
        self.is_enabled = False
        
        # Initialize the Gemini client if we have a valid API key
        if self.api_key and self._is_valid_api_key(self.api_key):
            try:
                self.genai_client = genai.Client(api_key=self.api_key)
                tools = types.Tool(function_declarations=[search_concepts_function])
                self.config = types.GenerateContentConfig(tools=[tools])
                self.is_enabled = True
            except Exception as e:
                print(f"Warning: Failed to initialize Gemini client: {e}")
                self.is_enabled = False
    
    def _is_valid_api_key(self, api_key: str) -> bool:
        """
        Check if the API key has a valid format.
        
        Args:
            api_key: The API key to validate
            
        Returns:
            True if the API key appears to be valid, False otherwise
        """
        if not api_key:
            return False
        
        # Basic validation - Gemini API keys are typically long strings
        if len(api_key) < 10:
            return False
        
        # You can add more specific validation here if needed
        return True
    
    def get_status(self) -> str:
        """
        Get the current status of the AI assistant.
        
        Returns:
            Status message describing the current state
        """
        if not self.api_key:
            return "Not configured - please provide a valid Gemini API key"
        elif not self._is_valid_api_key(self.api_key):
            return "Invalid API key format"
        elif not self.is_enabled:
            return "API key provided but client initialization failed"
        else:
            return f"Configured: {self.api_key[:10]}..."
    
    def is_available(self) -> bool:
        """
        Check if the AI assistant is available for use.
        
        Returns:
            True if the assistant is properly configured and ready to use
        """
        return self.is_enabled and self.genai_client is not None
    
    def _create_data_analysis_prompt(self, user_question: str, table_context: str) -> str:
        """
        Create a context-aware prompt for data analysis.
        
        Args:
            user_question: The user's question
            tables: String defining context about the available tables
            
        Returns:
            Formatted prompt for the AI model
        """
        with open(os.path.join(os.path.dirname(__file__), "prompt.txt"), "r") as file:
            base_prompt = file.read()

        base_prompt = base_prompt.replace("<DATASET_INFO>", table_context)
        base_prompt = base_prompt.replace("<INSTRUCTION>", user_question)

        return base_prompt
    
    def _call_gemini_api(self, prompt: str, max_num_calls: int = 10) -> str:
        """
        Call the Gemini API and return the response.
        
        Args:
            prompt: The prompt to send to the API
            
        Returns:
            The API response text
            
        Raises:
            Exception: If the API call fails or the assistant is not available
        """
        if not self.is_available():
            raise Exception("AI Assistant is not available. Please check your API key configuration.")
        
        num_calls = 0
        contents = [
            types.Content(
                role="user", parts=[types.Part(text=prompt)]
            )
        ]
        while num_calls < max_num_calls:
            try:
                response = self.genai_client.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=contents,
                    config=self.config
                )
            except Exception as e:
                raise Exception(f"Error calling Gemini API: {str(e)}")
            
            print("Gemini response:", response.candidates[0].content)
            if response.candidates[0].content.parts[0].function_call:
                function_call = response.candidates[0].content.parts[0].function_call
                if function_call.name == "search_concepts":
                    try:
                        args = function_call.args
                        query_filter = self.query_engine.parse_data_element_query(args["query"])
                        if ("name" in query_filter) == ("id" in query_filter):
                            function_response = "The input query must select based on exactly one of 'name' or 'id'. Please try again."
                        else:
                            query_filter = ConceptFilter(*(query_filter['name'] if 'name' in query_filter else query_filter['id']))
                            available_names = self.query_engine.dataset.list_names(scope=args["scope"], return_counts=True)
                            matching_names = available_names[query_filter.filter_series(available_names["name"])]
                            function_response = json.dumps(matching_names.head(100).to_dict(orient='records'))
                            if len(matching_names) >= 100:
                                function_response = "More than 100 concepts matched the query. The results are truncated.\n" + function_response
                        print("Responding to function call:", function_response)
                        function_response = types.Part.from_function_response(
                            name=function_call.name,
                            response={"result": function_response},
                        )
                        contents.append(response.candidates[0].content)
                        contents.append(types.Content(role="user", parts=[function_response]))

                    except Exception as e:
                        raise Exception(f"Error searching concepts during Gemini function call: {str(e)}")
            else:
                return response.text
            num_calls += 1
        raise Exception("Gemini made too many function calls, aborting request.")
    
    def process_question(self, question: str) -> str:
        """
        Process a user question and return an AI-generated response.
        
        Args:
            question: The user's question
            
        Returns:
            AI-generated response to the question
        """
        if not self.is_available():
            return "AI Assistant is not available. Please check your API key configuration."
        
        prompt = self._create_data_analysis_prompt(question, self.query_engine.dataset.get_table_context())
        
        # Call Gemini API
        response = self._call_gemini_api(prompt)
        
        return response
        
    
    def test_connection(self) -> Dict[str, Any]:
        """
        Test the connection to the Gemini API.
        
        Returns:
            Dictionary with test results including success status and message
        """
        if not self.is_available():
            return {
                "success": False,
                "message": "AI Assistant is not available",
                "status": self.get_status()
            }
        
        try:
            # Simple test query
            test_response = self._call_gemini_api("Hello, this is a test message. Please respond with 'OK' if you can see this.")
            
            return {
                "success": True,
                "message": "Connection successful",
                "response": test_response,
                "status": self.get_status()
            }
            
        except Exception as e:
            return {
                "success": False,
                "message": f"Connection failed: {str(e)}",
                "status": self.get_status()
            } 