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
  const listNames = traitlet(model, 'list_names', { attributes: [], events: [], intervals: [] });
  const subqueryEnabled = traitlet(model, 'subquery_enabled', false);
  const subqueries = traitlet(model, 'subqueries', {});
  
  // LLM traitlets
  const llmMessage = traitlet(model, 'llm_message', '');
  const llmLoading = traitlet(model, 'llm_loading', false);
  const llmError = traitlet(model, 'llm_error', '');
  const apiStatus = traitlet(model, 'api_status', 'Checking API connection...');

  // Store text input separately
  let currentTextInput = '';

  // Action buttons configuration
  const actionButtons: ActionButton[] = [
    // {
    //   label: 'Template',
    //   icon: '📝',
    //   colorClass: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white',
    //   onClick: () => {
    //     console.log('Template action clicked');
    //     message.set('Template action executed');
    //   }
    // },
    // {
    //   label: 'Write',
    //   icon: '✍️',
    //   colorClass: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white',
    //   onClick: () => {
    //     console.log('Write action clicked');
    //     message.set('Write action executed');
    //   }
    // },
    // {
    //   label: 'Refine',
    //   icon: '✨',
    //   colorClass: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white',
    //   onClick: () => {
    //     console.log('Refine action clicked');
    //     message.set('Refine action executed');
    //   }
    // },
    // {
    //   label: 'Explain',
    //   icon: '💡',
    //   colorClass: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white',
    //   onClick: () => {
    //     console.log('Explain action clicked');
    //     message.set('Explain action executed');
    //   }
    // },
    {
      label: 'Run',
      icon: '▶️',
      colorClass: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white',
      onClick: () => {
        console.log('Run button clicked - processing current text input');
        // Trigger processing using the process_trigger traitlet
        if (currentTextInput.trim()) {
          console.log(`Processing text: "${currentTextInput}"`);
          model.set('process_trigger', 'run');  // Trigger processing
          model.save_changes();
        } else {
          message.set('Please enter some text first');
        }
      }
    }
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
    llmMessage,
    llmLoading,
    llmError,
    apiStatus,
    
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
    handleLLMQuestion: (question: string) => {
      console.log('🤖 LLM Question submitted:', question);
      
      // Store the question in text_input and trigger LLM processing
      model.set('text_input', question);
      model.set('llm_trigger', 'ask');  // Trigger LLM processing
      model.save_changes();
    },
    
    // Get current backend info
    getBackendInfo: () => {
      let currentType = '';
      let currentMessage = '';
      
      type.subscribe(val => currentType = val)();
      message.subscribe(val => currentMessage = val)();
      
      return {
        type: currentType,
        message: currentMessage
      };
    }
  };
} 