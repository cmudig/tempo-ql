import { traitlet } from '../stores';
import type { ActionButton } from '../types';

export interface BackendModel {
  get: (name: string) => any;
  set: (name: string, value: any) => void;
  on: (event: string, callback: (model: any, value: any) => void) => void;
  onAttach?: (callback: () => void) => void;
  save_changes: () => void;
  process_text_input?: (text: string) => string;
  process_text_input_method?: (text: string) => string;
  _frontend_methods?: {
    process_text_input?: (text: string) => string;
  };
}

export function createBackendConnection(model: BackendModel) {
  const values = traitlet(model, 'values', {});

  // each key is a name of a variable or a group. The value can be another
  // dictionary of variables/groups or a string representing a Tempo query
  const fileContents = traitlet(model, 'file_contents', {});

  const savePath = traitlet(model, '_save_path', '');

  const listNames = traitlet(model, 'list_names', {
    attributes: [],
    events: [],
    intervals: [],
  });
  const subqueries = traitlet(model, 'subqueries', {});
  const queryError = traitlet(model, 'query_error', '');

  // Text input traitlet
  const textInput = traitlet(model, 'text_input', '');
  const queryForResults = traitlet(model, 'query_for_results', '');

  // Data Elements tab traitlet
  const scopes = traitlet(model, 'scopes', []);
  const scopeConcepts = traitlet(model, 'scope_concepts', {});

  // Loading state traitlet
  const isLoading = traitlet(model, 'isLoading', false);
  const loadingMessage = traitlet(model, 'loadingMessage', '');

  // LLM traitlets
  const llmAvailable = traitlet(model, 'llm_available', false);
  const llmResponse = traitlet(model, 'llm_response', '');
  const llmLoading = traitlet(model, 'llm_loading', false);
  const llmError = traitlet(model, 'llm_error', '');
  const apiStatus = traitlet(model, 'api_status', 'Checking API connection...');

  // Processed AI response traitlets
  const extractedQuery = traitlet(model, 'extracted_query', '');
  const llmExplanation = traitlet(model, 'llm_explanation', '');
  const hasExtractedQuery = traitlet(model, 'has_extracted_query', false);

  const queryHistory = traitlet(model, 'query_history', []);
  const aiHistory = traitlet(model, 'ai_history', []);

  // Store text input separately
  let currentTextInput = '';

  return {
    // Reactive stores
    values,
    queryForResults,
    savePath,
    fileContents,
    listNames,
    subqueries,
    queryError,
    scopes,
    scopeConcepts,
    isLoading,
    loadingMessage,
    llmResponse,
    llmLoading,
    llmError,
    llmAvailable,
    apiStatus,
    extractedQuery,
    llmExplanation,
    hasExtractedQuery,
    textInput,
    queryHistory,
    aiHistory,

    runQuery: (variableName: string | null, textInput: string) => {
      model.set('text_input', textInput);
      model.set(
        'process_trigger',
        variableName != null ? `variable:${variableName}` : 'run'
      );
      model.save_changes();
    },

    // LLM question handler
    handleLLMQuestion: (question: string) => {
      model.set('llm_question', question);
      model.set('llm_trigger', 'ask'); // Trigger LLM processing
      model.save_changes();
    },

    handleLLMExplanation: () => {
      model.set('llm_trigger', 'explain'); // Trigger LLM processing
      model.save_changes();
    },

    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      // Get the extracted query and update the text input
      let currentExtractedQuery = '';
      extractedQuery.subscribe((val) => (currentExtractedQuery = val))();

      if (currentExtractedQuery && currentExtractedQuery !== currentTextInput) {
        console.log(
          '🔄 Query extracted from AI response:',
          currentExtractedQuery
        );
        console.log('🔄 Current text input:', currentTextInput);
        console.log('🔄 Updating text input with extracted query');
        currentTextInput = currentExtractedQuery;
        model.set('text_input', currentExtractedQuery);
        model.save_changes();
      } else if (currentExtractedQuery === currentTextInput) {
        console.log(
          '🔄 Extracted query is same as current input, no update needed'
        );
      }
    },

    // Scope analysis handler
    handleScopeAnalysis: (scopeName: string, forceRefresh: boolean = false) => {
      console.log(
        '🔍 Scope Analysis requested for:',
        scopeName,
        forceRefresh ? '(force refresh)' : ''
      );

      // Trigger scope analysis with force refresh flag
      const triggerValue = forceRefresh ? `${scopeName}:force` : scopeName;
      model.set('scope_analysis_trigger', triggerValue);
      model.save_changes();
    },
  };
}
