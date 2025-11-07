import os
import re
from typing import Optional, Dict, Any, List, Tuple
import json
import traceback
import time
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
    
    def __init__(self, query_engine, api_key: Optional[str] = None, verbose: bool = False):
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
        self.verbose = verbose
        
        # Initialize the Gemini client if we have a valid API key
        if self.api_key and self._is_valid_api_key(self.api_key):
            from google import genai
            from google.genai import types
            try:
                self.genai_client = genai.Client(api_key=self.api_key)
                tools = types.Tool(function_declarations=[search_concepts_function])
                self.config = types.GenerateContentConfig(tools=[tools])
                self.fast_config = types.GenerateContentConfig(thinking_config=types.ThinkingConfig(thinking_budget=0))
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
    
    def _create_data_analysis_prompt(self, user_question: str, table_context: str, existing_query: Optional[str] = None) -> str:
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
        
        if existing_query is not None:
            base_prompt += f"\n\nExisting query:\n```tempoql\n{existing_query}\n```"

        return base_prompt
    
    def _create_sql_analysis_prompt(self, user_question: str, existing_query: Optional[str] = None) -> str:
        """
        Create a context-aware prompt for SQL query generation using MIMIC-IV database.
        
        Args:
            user_question: The user's question/request
            existing_query: Optional existing SQL query to modify
            
        Returns:
            Formatted prompt for the AI model
        """
        with open(os.path.join(os.path.dirname(__file__), "SQL_prompt.txt"), "r") as file:
            base_prompt = file.read()
        
        # Add the user request to the prompt
        prompt = base_prompt.replace("`user_request`", user_question)
        
        if existing_query is not None:
            prompt += f"\n\nExisting query to modify:\n```sql\n{existing_query}\n```"
            prompt += "\n\nPlease modify the existing query based on the new request."

        return prompt
    
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
You may call the search_concepts function to explain the meaning of data element queries if appropriate (for instance, to decode data elements referred to by a concept ID).

Be clear, concise and friendly but professional in your response, and do not include praise.

Provide a list of intuitive steps that the query follows to produce the response.
Some steps might include:
1. Data that the query extracts from the dataset
2. Transformations to the data
3. Aggregations used to structure the data
Include only the steps that actually exist in the query.

{question}
"""
    
    def _make_query_validation_prompt(self, question: str, query_text: Optional[str] = None) -> bool:
        """
        Determine if the user is asking a relevant query and determine the type of query it is.
        
        Args:
            question: The user's question
            
        Returns:
            a prompt to check the type of query
        """
        return f"""
You are a helpful data analysis assistant. You are an expert on a new query language called TempoQL that is specialized to deal with electronic health record data. TempoQL queries operate on time-series medical data.

Your job is to take a user-provided question and determine if it is a valid TempoQL question and if the user's existing query text is relevant to answer the question.
The user might have written a previous existing query that's unrelated to their current question. You need to determine whether that existing query is needed for the new question.
Valid TempoQL questions can ask you to generate a new query, take an existing query and update it, answer questions about an existing query, or answer general questions about TempoQL.
If the question is valid, tell me whether the existing query is needed to answer the question or not by outputting the single word 'yes' (existing query is needed to answer) or 'no' (existing query not needed).
If the question is invalid, output the single word 'invalid'.

Question:
can you help me extract the patient's heart rate every hour
Query text:
mean {{Hemoglobin; scope = Measurement}} before #now impute mean every 6 hours
Output:
no

Question:
Please write a query to get diagnosis codes related to heart failure.
Query text:
<empty>
Output:
no

Question:
run every day instead of every 5 days
Query text:
last {{Weight; scope = Observation}} from #now - 1 day to #now every 5 days
Output:
yes

Question:
how are you
Output:
invalid

Question:
{question}
Query text:
{query_text or '<empty>'}
Output:
"""
    
    def _extract_tempoql_query(self, text: str) -> Optional[str]:
        """
        Extract TempoQL query from AI response.
        
        Args:
            text: The AI response text
            
        Returns:
            Extracted TempoQL query or None if not found
        """
        if not text:
            return None, text
        
        # Look for code blocks with tempoql language
        tempoql_match = re.search(r'```tempoql\n?([\s\S]*?)```', text)
        if tempoql_match:
            return tempoql_match.group(1).strip(), re.sub(r'^' + re.escape(tempoql_match.group(0)) + r'[\r\n]+', '', text)
        
        # Fallback: look for any code block that might contain a query
        code_block_match = re.search(r'```(?:\w+)?\n?([\s\S]*?)```', text)
        if code_block_match:
            code = code_block_match.group(1).strip()
            # Check if it looks like a TempoQL query (contains common TempoQL patterns)
            if '{' in code and any(keyword in code for keyword in ['every', 'before', 'after', 'at']):
                return code, re.sub(r'^' + re.escape(code_block_match.group(0)) + r'[\r\n]+', '', text)
        
        return None, text
    
    def _extract_sql_query(self, text: str) -> Tuple[Optional[str], str]:
        """
        Extract SQL query from AI response.
        
        Args:
            text: The AI response text
            
        Returns:
            Tuple of (extracted SQL query or None, cleaned text)
        """
        if not text:
            return None, text
        
        # Look for code blocks with sql language
        sql_match = re.search(r'```sql\n?([\s\S]*?)```', text)
        if sql_match:
            return sql_match.group(1).strip(), re.sub(r'^' + re.escape(sql_match.group(0)) + r'[\r\n]+', '', text)
        
        # Fallback: look for any code block that might contain SQL
        code_block_match = re.search(r'```(?:\w+)?\n?([\s\S]*?)```', text)
        if code_block_match:
            code = code_block_match.group(1).strip()
            # Check if it looks like a SQL query (contains common SQL patterns)
            if any(keyword in code.upper() for keyword in ['SELECT', 'FROM', 'WHERE', 'JOIN', 'GROUP BY', 'ORDER BY']):
                return code, re.sub(r'^' + re.escape(code_block_match.group(0)) + r'[\r\n]+', '', text)
        
        return None, text
    
    def _process_ai_response(self, response: str) -> Dict[str, Any]:
        """
        Process AI response to separate query and explanation.
        
        Args:
            response: Raw AI response text
            
        Returns:
            Dictionary with extracted_query, explanation, and has_query fields
        """
        extracted, cleaned = self._extract_tempoql_query(response)
        return {
            'extracted_query': extracted or '',
            'explanation': cleaned,
            'has_query': True,
            'raw_response': response
        }

    def _call_gemini_api(self, prompt: str, max_num_calls: int = 10, fast_model: bool = False) -> str:
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
        responses = []
        while num_calls < max_num_calls:
            try:
                response = self.genai_client.models.generate_content(
                    model="gemini-2.5-flash-lite" if fast_model else "gemini-2.5-pro",
                    contents=contents,
                    config=self.fast_config if fast_model else self.config
                )
            except Exception as e:
                traceback.print_exc()
                raise Exception(f"Error calling Gemini API: {str(e)}")
            
            if response.candidates[0].content.parts and any(p.function_call is not None for p in response.candidates[0].content.parts):
                contents.append(response.candidates[0].content)
                for p in response.candidates[0].content.parts:
                    if p.function_call is None or p.function_call.name != "search_concepts": continue
                    function_call = p.function_call    
                    try:
                        args = function_call.args
                        query_filter = self.query_engine.parse_data_element_query(args["query"])
                        if ("name" in query_filter) == ("id" in query_filter):
                            function_response = "The input query must select based on exactly one of 'name' or 'id'. Please try again."
                        else:
                            query_field = 'name' if 'name' in query_filter else 'id'
                            query_filter = ConceptFilter(*query_filter[query_field])
                            # Use provided scope or None (which searches all scopes)
                            scope = args.get("scope", None)
                            available_names = self.query_engine.dataset.list_data_elements(scope=scope, return_counts=True)
                            matching_names = available_names[query_filter.filter_series(available_names[query_field])]
                            function_response = json.dumps(matching_names.head(100).to_dict(orient='records'))
                            if len(matching_names) >= 100:
                                function_response = "More than 100 concepts matched the query. The results are truncated.\n" + function_response
                        if self.verbose: print("Responding to function call:", query_filter, function_response)
                        from google.genai import types
                        function_response = types.Part.from_function_response(
                            name=function_call.name,
                            response={"result": function_response},
                        )
                        contents.append(types.Content(role="user", parts=[function_response]))

                    except Exception as e:
                        traceback.print_exc()
                        raise Exception(f"Error searching concepts during Gemini function call: {str(e)}")
                    
                if response.text is not None:
                    responses.append(response.text)
                responses.append('(Searching concepts...)')
            else:
                responses.append(response.text)
                return re.sub('\n{2,}', '\n\n', '\n\n'.join([r for r in responses if r]))
            num_calls += 1
        raise Exception("Gemini made too many function calls, aborting request.")
    
    def _call_gemini_api_sql(self, prompt: str, fast_model: bool = False) -> str:
        """
        Call the Gemini API for SQL generation without function calling.
        
        Args:
            prompt: The prompt to send to the API
            fast_model: Whether to use the fast model
            
        Returns:
            The API response text
            
        Raises:
            Exception: If the API call fails or the assistant is not available
        """
        if not self.is_available():
            raise Exception("AI Assistant is not available. Please check your API key configuration.")
        
        try:
            from google.genai import types
            contents = [
                types.Content(
                    role="user", parts=[types.Part(text=prompt)]
                )
            ]
            
            # Use a simple config without function calling for SQL generation
            simple_config = types.GenerateContentConfig()
            
            response = self.genai_client.models.generate_content(
                model="gemini-2.5-flash-lite" if fast_model else "gemini-2.5-pro",
                contents=contents,
                config=simple_config
            )
            
            return response.text
            
        except Exception as e:
            traceback.print_exc()
            raise Exception(f"Error calling Gemini API: {str(e)}")
        
    def validate_question(self, question: str, existing_query: Optional[str]) -> bool:
        prompt = self._make_query_validation_prompt(question, existing_query)
        response = self._call_gemini_api(prompt, fast_model=True)
        response = re.sub(r'[^A-Za-z]', '', response).lower()
        if response not in ('yes', 'no', 'invalid'):
            raise ValueError("Question validation failed - please try again.")
        
        if response == 'invalid':
            raise ValueError("The question does not seem to involve TempoQL queries. I can only answer questions related to TempoQL.")
        
        return response == 'yes'
    
    def validate_sql_question(self, question: str, existing_query: Optional[str]) -> bool:
        """
        Validate if a question is suitable for SQL query generation.
        
        Args:
            question: The user's question
            existing_query: Optional existing SQL query
            
        Returns:
            True if the question is valid for SQL generation
        """
        # Simple validation - check if question contains SQL-related keywords
        sql_keywords = ['select', 'query', 'table', 'database', 'sql', 'query', 'data', 'patient', 'admission', 'lab', 'vital', 'diagnosis', 'procedure', 'medication', 'mimic']
        question_lower = question.lower()
        
        # Check if question contains SQL-related terms or database concepts
        has_sql_terms = any(keyword in question_lower for keyword in sql_keywords)
        
        # Check if it's asking for data extraction, analysis, or query generation
        has_data_request = any(phrase in question_lower for phrase in [
            'show me', 'get me', 'find', 'extract', 'list', 'count', 'average', 'sum', 'max', 'min',
            'patients with', 'admissions', 'labs', 'vitals', 'diagnoses', 'procedures'
        ])
        
        return has_sql_terms or has_data_request
    
    def _process_sql_ai_response(self, response: str) -> Dict[str, Any]:
        """
        Process AI response to separate SQL query and explanation.
        
        Args:
            response: Raw AI response text
            
        Returns:
            Dictionary with extracted_query, explanation, and has_query fields
        """
        extracted, cleaned = self._extract_sql_query(response)
        return {
            'extracted_query': extracted or '',
            'explanation': cleaned,
            'has_query': bool(extracted),
            'raw_response': response
        }
        
    def process_sql_question(self, question: Optional[str] = None, explain: bool = False, query: Optional[str] = None, query_error: Optional[str] = None) -> Dict[str, Any]:
        """
        Process a user question and return a processed AI response for SQL query generation.
        
        Args:
            question: The user's question
            explain: Whether to explain the query or answer the question
            query: A query to explain
            query_error: An error to explain along with the query
            
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
                assert question is not None, "question must be provided to run generation"
                
                # Validate the question for SQL generation
                if not self.validate_sql_question(question, query):
                    raise ValueError("The question does not seem to be suitable for SQL query generation. Please ask about data extraction, analysis, or database queries related to MIMIC-IV.")
                
                prompt = self._create_sql_analysis_prompt(question)
            else:
                # For explain mode, check if the question contains a SQL query to explain
                assert query is not None, "query must be provided to run explanation"
                prompt = f"""
Given the following SQL query, please explain what it does in simple terms that a non-technical person could understand. Focus on what data it extracts and what insights it provides.

SQL Query:
```sql
{query}
```

Please provide a clear explanation of:
1. What data this query extracts
2. What tables it uses
3. What the results show
4. Any important assumptions or limitations
"""
            
            # Call Gemini API (use SQL-specific method without function calling)
            response = self._call_gemini_api_sql(prompt)
            
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
                processed_response = self._process_sql_ai_response(response)
                processed_response['error'] = False
            
            return processed_response
            
        except Exception as e:
            traceback.print_exc()
            return {
                'extracted_query': None,
                'explanation': str(e),
                'has_query': False,
                'raw_response': f"Error processing question: {str(e)}",
                'error': True
            }
        
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
                assert question is not None, "question must be provided to run generation"
                needs_existing_query = self.validate_question(question, query)
                if self.verbose: print(f"🔍 Needs existing query for generate mode: {needs_existing_query}")
                if needs_existing_query and not query:
                    raise ValueError("Answering your question seems to require an existing TempoQL query, but you haven't written one yet. Please try again.")
                prompt = self._create_data_analysis_prompt(question, 
                                                           self.query_engine.dataset.get_table_context(), 
                                                           existing_query=query if needs_existing_query else None)
            else:
                # For explain mode, check if the question contains a TempoQL query to explain
                assert query is not None, "query must be provided to run explanation"
                prompt = self._create_explain_prompt(query, query_error, self.query_engine.dataset.get_table_context())
            
            # Call Gemini API
            response = self._call_gemini_api(prompt)
            while not response.strip():
                if self.verbose: print("Received empty response, retrying in 5s...")
                time.sleep(5)
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
                'explanation': str(e),
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