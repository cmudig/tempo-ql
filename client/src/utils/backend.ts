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
  const message = traitlet(model, 'message', '');
  const word = traitlet(model, 'word', 'Hello from Python!');
  const type = traitlet(model, 'type', 'meds');
  const values = traitlet(model, 'values', {});
  const idsLength = traitlet(model, 'ids_length', 0);
  const listNames = traitlet(model, 'list_names', {
    attributes: [],
    events: [],
    intervals: [],
  });
  const subqueryEnabled = traitlet(model, 'subquery_enabled', false);
  const subqueries = traitlet(model, 'subqueries', {});

  // Text input traitlet
  const textInput = traitlet(model, 'text_input', '');

  // Data Elements tab traitlet
  const scopes = traitlet(model, 'scopes', []);
  const selectedScope = traitlet(model, 'selected_scope', '');
  const scopeConcepts = traitlet(model, 'scope_concepts', {});

  // Loading state traitlet
  const isLoading = traitlet(model, 'isLoading', false);
  const loadingMessage = traitlet(model, 'loadingMessage', '');

  // LLM traitlets
  const llmEnabled = traitlet(model, 'llm_enabled', false);
  const llmMessage = traitlet(model, 'llm_message', '');
  const llmLoading = traitlet(model, 'llm_loading', false);
  const llmError = traitlet(model, 'llm_error', '');
  const apiStatus = traitlet(model, 'api_status', 'Checking API connection...');
  const llmQuestion = traitlet(model, 'llm_question', '');
  const llmMode = traitlet(model, 'llm_mode', 'generate');

  // Processed AI response traitlets
  const extractedQuery = traitlet(model, 'extracted_query', '');
  const aiExplanation = traitlet(model, 'ai_explanation', '');
  const hasExtractedQuery = traitlet(model, 'has_extracted_query', false);

  // Store text input separately
  let currentTextInput = '';

  // Action buttons configuration
  const actionButtons: ActionButton[] = [
    {
      label: 'Template',
      icon: '📝',
      colorClass:
        'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white',
      onClick: () => {
        console.log('Template action clicked');
        message.set('Template action executed');
      },
    },
    {
      label: 'Write',
      icon: '✍️',
      colorClass:
        'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white',
      onClick: () => {
        console.log('Write action clicked');
        message.set('Write action executed');
      },
    },
    {
      label: 'Refine',
      icon: '✨',
      colorClass:
        'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white',
      onClick: () => {
        console.log('Refine action clicked');
        message.set('Refine action executed');
      },
    },
    {
      label: 'Explain',
      icon: '💡',
      colorClass:
        'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white',
      onClick: () => {
        console.log('Explain action clicked');
        message.set('Explain action executed');
      },
    },
    {
      label: 'Run',
      icon: '▶️',
      colorClass:
        'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white',
      onClick: () => {
        console.log('Run button clicked - processing current text input');
        // Trigger processing using the process_trigger traitlet
        if (currentTextInput.trim()) {
          console.log(`Processing text: "${currentTextInput}"`);
          model.set('process_trigger', 'run'); // Trigger processing
          model.save_changes();
        } else {
          message.set('Please enter some text first');
        }
      },
    },
  ];

  return {
    // Reactive stores
    message,
    word,
    type,
    values,
    idsLength,
    listNames,
    subqueryEnabled,
    subqueries,
    scopes,
    selectedScope,
    scopeConcepts,
    isLoading,
    loadingMessage,
    llmMessage,
    llmLoading,
    llmError,
    llmEnabled,
    apiStatus,
    extractedQuery,
    aiExplanation,
    hasExtractedQuery,
    textInputStore: textInput,

    // Action buttons
    actionButtons,

    // Text input handler - only stores the value, doesn't trigger processing
    handleTextInput: (value: string) => {
      console.log('Text input changed:', value);
      currentTextInput = value;

      // Store the text in the backend but don't trigger processing
      model.set('text_input', value);

      // Clear other data if input is empty
      if (!value.trim()) {
        console.log('🧹 Clearing data due to empty input');
        message.set('');
        values.set({});
        // Also clear LLM-related data
        llmMessage.set('');
        llmError.set('');
      }

      model.save_changes();
    },

    // LLM question handler
    handleLLMQuestion: (question: string, mode: string = 'generate') => {
      console.log('🤖 LLM Question submitted:', question, 'Mode:', mode);

      // Set the question and mode in the dedicated traitlets and trigger LLM processing
      model.set('llm_question', question);
      model.set('llm_mode', mode);
      model.set('llm_trigger', 'ask'); // Trigger LLM processing
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

    // Get current backend info
    getBackendInfo: () => {
      let currentType = '';
      let currentMessage = '';

      type.subscribe((val) => (currentType = val))();
      message.subscribe((val) => (currentMessage = val))();

      return {
        type: currentType,
        message: currentMessage,
      };
    },
  };
}
