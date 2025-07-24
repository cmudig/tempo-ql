import os
from typing import Optional, Dict, Any
from google import genai


class AIAssistant:
    """
    AI Assistant class that handles Gemini API interactions for data analysis and query assistance.
    Only functions when a valid API key is provided.
    """
    
    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize the AI Assistant with an optional API key.
        
        Args:
            api_key: Gemini API key. If None, will try to get from GEMINI_API_KEY environment variable.
        """
        self.api_key = api_key or os.getenv('GEMINI_API_KEY')
        self.genai_client = None
        self.is_enabled = False
        
        # Initialize the Gemini client if we have a valid API key
        if self.api_key and self._is_valid_api_key(self.api_key):
            try:
                self.genai_client = genai.Client(api_key=self.api_key)
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
    
    def _create_data_analysis_prompt(self, user_question: str, context: str = None) -> str:
        """
        Create a context-aware prompt for data analysis.
        
        Args:
            user_question: The user's question
            context: Optional context about available data fields
            
        Returns:
            Formatted prompt for the AI model
        """
        base_prompt = f"""You are a helpful data analysis assistant. You can help users understand their data and write queries.

{context if context else ''}User Question: {user_question}

Please provide a helpful response. If the user is asking about data analysis or queries, provide specific guidance. If they need help with Tempo-QL syntax, explain the concepts clearly."""
        
        return base_prompt
    
    def _call_gemini_api(self, prompt: str) -> str:
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
        
        try:
            response = self.genai_client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt
            )
            
            return response.text
                
        except Exception as e:
            raise Exception(f"Error calling Gemini API: {str(e)}")
    
    def process_question(self, question: str, data_fields: Optional[list] = None) -> str:
        """
        Process a user question and return an AI-generated response.
        
        Args:
            question: The user's question
            data_fields: Optional list of available data fields for context
            
        Returns:
            AI-generated response to the question
        """
        if not self.is_available():
            return "AI Assistant is not available. Please check your API key configuration."
        
        try:
            # Create context with available data fields
            context = ""
            if data_fields:
                context = f"Available data fields: {', '.join(data_fields)}\n\n"
            
            prompt = self._create_data_analysis_prompt(question, context)
            
            # Call Gemini API
            response = self._call_gemini_api(prompt)
            
            return response
            
        except Exception as e:
            return f"Error: {str(e)}"
    
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