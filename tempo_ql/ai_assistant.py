import os
import re
from typing import Optional, Dict, Any, List, Tuple
import json
import traceback
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
            from google import genai
            from google.genai import types
            try:
                self.genai_client = genai.Client(api_key=self.api_key)
                tools = types.Tool(function_declarations=[search_concepts_function])
                self.config = types.GenerateContentConfig(tools=[tools])
                self.is_enabled = True
            except Exception as e:
                traceback.print_exc()
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
            return f"Configured"
    
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
        base_prompt += """
Given this information, I will provide you with an instruction on a query to write. You may call the search_concepts function to retrieve a list of matching concepts, if needed. Remember that the dataset may not contain any of the event types used in the examples above. I recommend calling the search_concepts function one or more times and searching broadly, such as by using a case-insensitive regular expression, since concept names may not match your initial search. You may then need to refine your concept query to select only the relevant concepts from the ones that are returned. Think carefully to ensure that the final query is simple but returns the most relevant data elements.

After retrieving any needed concepts, write a TempoQL query obeying the syntax description above. Your output should contain one or more multiline code blocks with the language 'tempoql' that contains your answer, as well as short explanations of how the query works at a level that a non-programmer expert on clinical data could understand. Only provide multiple options if the instruction I give you is ambiguous as to what query might be needed.

Instruction: <INSTRUCTION>
"""

        base_prompt = base_prompt.replace("<DATASET_INFO>", table_context)
        base_prompt = base_prompt.replace("<INSTRUCTION>", user_question)

        return base_prompt
    
    def _create_explain_prompt(self, query: str, query_error: Optional[str], table_context: str) -> str:
        """
        Create a prompt for explaining TempoQL queries.
        
        Args:
            query: The query to explain
            query_error: An error to explain along with the query
            
        Returns:
            Formatted prompt for explaining queries
        """
        with open(os.path.join(os.path.dirname(__file__), "prompt.txt"), "r") as file:
            base_prompt = file.read()
            
        if query_error:
            question = f"Query: ```tempoql\n{query}\n```\n\nError: {query_error}"
            return base_prompt.replace("<DATASET_INFO>", table_context) + f"""
Given this information, I have written a TempoQL query below which produced an error when I ran it. 
The error will be provided below the query and I would like you to explain the error and attempt to fix the issue. If you can fix the issue, provide the code in a code block labeled tempoql, like so:

```tempoql
tempo code goes here
```

Make sure that the new query:
- Fixes any syntax or logical errors
- Uses correct data element references
- Follows proper TempoQL structure
- Is likely to execute successfully

Be clear, concise and friendly but professional, and do not include praise.

{question}
"""

        else:
            question = f"Query: ```tempoql\n{query}\n```"
            return base_prompt.replace("<DATASET_INFO>", table_context) + f"""
Given this information, I have written a TempoQL query below and I would like you to explain what it does.
Be clear, concise and friendly but professional, and do not include praise.

Provide a list of intuitive steps that the query follows to produce the response.
Some steps might include:
1. Data that the query extracts from the dataset
2. Transformations to the data
3. Aggregations used to structure the data
Include only the steps that actually exist in the query.

{question}
"""
    
    def _is_query_generation_request(self, question: str) -> bool:
        """
        Determine if the user is asking for query generation related to data analysis.
        
        Args:
            question: The user's question
            
        Returns:
            True if the question is asking for TempoQL query generation
        """
        question_lower = question.lower()
        
        # Keywords that indicate data analysis/query generation requests
        generation_keywords = [
            # Direct query requests
            'query', 'find', 'get', 'show', 'analyze', 'analysis', 'calculate', 'count',
            'measure', 'extract', 'retrieve', 'select', 'filter', 'search',
            
            # Temporal analysis keywords
            'time', 'temporal', 'before', 'after', 'during', 'between', 'every',
            'daily', 'weekly', 'monthly', 'hourly', 'interval', 'period',
            
            # Medical/data analysis terms
            'patient', 'diagnosis', 'medication', 'treatment', 'procedure', 'measurement',
            'vital', 'lab', 'test', 'observation', 'condition', 'drug', 'device',
            'encounter', 'visit', 'admission', 'discharge',
            
            # Analysis operations
            'average', 'mean', 'median', 'sum', 'total', 'maximum', 'minimum',
            'first', 'last', 'latest', 'earliest', 'recent', 'trend', 'pattern',
            'frequency', 'rate', 'duration', 'length', 'timeline',
            
            # Data exploration
            'what', 'when', 'how many', 'how often', 'which', 'where'
        ]
        
        # Check if any generation keywords are present
        for keyword in generation_keywords:
            if keyword in question_lower:
                return True
                
        # Check for question patterns that suggest data analysis
        question_patterns = [
            'can you', 'could you', 'please', 'i want', 'i need', 'help me',
            'create', 'generate', 'build', 'make', 'write'
        ]
        
        for pattern in question_patterns:
            if pattern in question_lower:
                return True
        
        return False
    
    def _contains_tempoql_query(self, question: str) -> bool:
        """
        Check if the question contains a TempoQL query to explain.
        
        Args:
            question: The user's question
            
        Returns:
            True if the question contains TempoQL syntax
        """
        # Look for TempoQL syntax patterns
        tempoql_patterns = [
            '{', '}',  # Data elements
            'every', 'before', 'after', 'at', 'during',  # Temporal operators
            '#now', '#start', '#end',  # Time references
            'mean', 'sum', 'count', 'first', 'last',  # Aggregation functions
            'contains', 'scope =', 'name =', 'id =',  # Query syntax
        ]
        
        question_lower = question.lower()
        
        # Check for TempoQL patterns
        pattern_count = 0
        for pattern in tempoql_patterns:
            if pattern in question_lower:
                pattern_count += 1
        
        # If we find multiple TempoQL patterns, it's likely a query
        return pattern_count >= 2
    
    def _extract_tempoql_query(self, text: str) -> Optional[str]:
        """
        Extract TempoQL query from AI response.
        
        Args:
            text: The AI response text
            
        Returns:
            Extracted TempoQL query or None if not found
        """
        if not text:
            return None
        
        # Look for code blocks with tempoql language
        tempoql_match = re.search(r'```tempoql\n?([\s\S]*?)```', text)
        if tempoql_match:
            return tempoql_match.group(1).strip()
        
        # Fallback: look for any code block that might contain a query
        code_block_match = re.search(r'```(?:\w+)?\n?([\s\S]*?)```', text)
        if code_block_match:
            code = code_block_match.group(1).strip()
            # Check if it looks like a TempoQL query (contains common TempoQL patterns)
            if '{' in code and any(keyword in code for keyword in ['every', 'before', 'after', 'at']):
                return code
        
        return None
    
    def _process_ai_response(self, response: str) -> Dict[str, Any]:
        """
        Process AI response to separate query and explanation.
        
        Args:
            response: Raw AI response text
            
        Returns:
            Dictionary with extracted_query, explanation, and has_query fields
        """
        return {
            'extracted_query': self._extract_tempoql_query(response),
            'explanation': response,
            'has_query': True,
            'raw_response': response
        }

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
        from google.genai import types
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
                traceback.print_exc()
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
                            # Use provided scope or None (which searches all scopes)
                            scope = args.get("scope", None)
                            available_names = self.query_engine.dataset.list_names(scope=scope, return_counts=True)
                            matching_names = available_names[query_filter.filter_series(available_names["name"])]
                            function_response = json.dumps(matching_names.head(100).to_dict(orient='records'))
                            if len(matching_names) >= 100:
                                function_response = "More than 100 concepts matched the query. The results are truncated.\n" + function_response
                        print("Responding to function call:", function_response)
                        from google.genai import types
                        function_response = types.Part.from_function_response(
                            name=function_call.name,
                            response={"result": function_response},
                        )
                        contents.append(response.candidates[0].content)
                        contents.append(types.Content(role="user", parts=[function_response]))

                    except Exception as e:
                        traceback.print_exc()
                        raise Exception(f"Error searching concepts during Gemini function call: {str(e)}")
            else:
                return response.text
            num_calls += 1
        raise Exception("Gemini made too many function calls, aborting request.")
        
    def process_question(self, question: Optional[str] = None, explain: bool = False, query: Optional[str] = None, query_error: Optional[str] = None) -> Dict[str, Any]:
        """
        Process a user question and return a processed AI response.
        
        Args:
            question: The user's question
            explain: Whether to explain the query or answer the question
            query: A query to explain
            query_error: An error 
            
        Returns:
            Dictionary with processed AI response including extracted query and explanation
        """
        if not self.is_available():
            return {
                'extracted_query': None,
                'explanation': "AI Assistant is not available. Please check your API key configuration.",
                'has_query': False,
                'raw_response': "AI Assistant is not available. Please check your API key configuration.",
                'error': True
            }
        
        try:
            # Process based on the mode
            if not explain:
                # For generate mode, check if the question is asking for query generation
                is_relevant = self._is_query_generation_request(question)
                print(f"🔍 Question relevance check for generate mode: {is_relevant}")
                print(f"🔍 Question: {question}")
                if not is_relevant:
                    return {
                        'extracted_query': None,
                        'explanation': "I can only help with generating TempoQL queries based on your data analysis needs or explaining existing TempoQL queries. Please ask me to create a query for analyzing your temporal data or to explain a TempoQL query you've written.",
                        'has_query': False,
                        'raw_response': "I can only help with generating TempoQL queries based on your data analysis needs or explaining existing TempoQL queries. Please ask me to create a query for analyzing your temporal data or to explain a TempoQL query you've written.",
                        'error': False
                    }
                prompt = self._create_data_analysis_prompt(question, self.query_engine.dataset.get_table_context())
            else:
                # For explain mode, check if the question contains a TempoQL query to explain
                assert query is not None, "query must be provided to run explanation"
                prompt = self._create_explain_prompt(query, query_error, self.query_engine.dataset.get_table_context())
            
            # Call Gemini API
            response = self._call_gemini_api(prompt)
            
            # Process the response based on mode
            if explain:
                # For explain mode, don't extract queries - just return the explanation
                processed_response = {
                    'extracted_query': None,
                    'explanation': response,
                    'has_query': False,
                    'raw_response': response,
                    'error': False
                }
            else:
                # For generate mode, process normally to extract queries
                processed_response = self._process_ai_response(response)
                processed_response['error'] = False
            
            return processed_response
            
        except Exception as e:
            traceback.print_exc()
            return {
                'extracted_query': None,
                'explanation': f"Error processing question: {str(e)}",
                'has_query': False,
                'raw_response': f"Error processing question: {str(e)}",
                'error': True
            }
        
    
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
            traceback.print_exc()
            return {
                "success": False,
                "message": f"Connection failed: {str(e)}",
                "status": self.get_status()
            } 