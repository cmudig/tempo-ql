<script lang="ts">
  import { theme } from '../stores/theme';
  export let onSubmit: (value: string) => void = () => {};
  export let message: string = '';
  export let isLoading: boolean = false;
  export let error: string = '';
  export let apiStatus: string = 'Checking API connection...';
  export let width: string = 'w-full';
  export let scrollable: boolean = false;
  export let extractedQuery: string = '';
  export let aiExplanation: string = '';
  export let hasExtractedQuery: boolean = false;

  export let onQueryExtracted: () => void = () => {};
  export let onHistoryClick: () => void = () => {};
  export let inputValueOverride: string = '';
  export let historicalResponse: string = '';
  
  let inputValue = '';
  let inputElement: HTMLTextAreaElement;
  
  // Handle external input value override (for history selection)
  $: if (inputValueOverride && inputValueOverride !== inputValue) {
    inputValue = inputValueOverride;
    if (inputElement) {
      autoResize(inputElement);
    }
  }
  
  function handleSubmit() {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      // Keep the question in the input box instead of clearing it
      if (inputElement) {
        inputElement.focus();
        autoResize(inputElement);
      }
    }
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }
  
  function autoResize(element: HTMLTextAreaElement) {
    element.style.height = 'auto';
    element.style.height = Math.min(element.scrollHeight, 200) + 'px';
  }
  
  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    autoResize(target);
  }
  


  // Function to format markdown-like text
  function formatMessage(text: string): string {
    if (!text) return '';
    
    return text
      // Convert **bold** to HTML
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *italic* to HTML
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert `code` to HTML
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
      // Convert line breaks to HTML
      .replace(/\n/g, '<br>');
  }

  // Trigger query extraction when a query is available
  $: if (hasExtractedQuery && extractedQuery) {
    console.log('🤖 AIAssistant: Query extracted, triggering handler:', extractedQuery);
    onQueryExtracted();
  }
  
  // Function to get API status color and icon
  function getApiStatusInfo(status: string) {
    if (status.includes('Configured') || status.includes('ready')) {
      return { color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200', icon: '✅' };
    } else if (status.includes('Not configured') || status.includes('Invalid')) {
      return { color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', icon: '❌' };
    } else {
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', icon: '⚠️' };
    }
  }
  
  $: apiStatusInfo = getApiStatusInfo(apiStatus);
</script>

<div class="bg-white dark:bg-gray-900 p-4 border-0 rounded-none {width} transition-colors duration-200 {scrollable ? 'h-full flex flex-col' : ''}">
  <!-- Header with API Status -->
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Assistant</h3>
    <div class="flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
      <span>{apiStatusInfo.icon}</span>
      <span class="text-gray-700 dark:text-gray-300">{apiStatus}</span>
    </div>
  </div>
  
  <!-- AI Input Section -->
  <div class="mb-4">
    <div class="relative">
      <!-- Large Textarea Input like main query input -->
      <textarea
        bind:this={inputElement}
        bind:value={inputValue}
        on:input={handleInput}
        on:keydown={handleKeydown}
        class="w-full p-6 pr-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-y-auto min-h-[120px] max-h-[200px]"
        placeholder="// Ask me to generate a TempoQL query or explain data patterns..."
        disabled={isLoading}
        rows="5"
      ></textarea>
      
      <!-- History Button in top-right corner -->
      <button
        on:click={onHistoryClick}
        class="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200 flex items-center justify-center z-10 history-button"
        title="View AI conversation history"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </button>
      
      <!-- Submit Button inside textarea -->
      <button
        on:click={handleSubmit}
        disabled={!inputValue.trim() || isLoading}
        class="absolute bottom-2 right-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1.5 text-xs z-10"
      >
        {#if isLoading}
          <div class="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
          <span>Thinking...</span>
        {:else}
          <span class="text-xs">🤖</span>
          <span>Ask</span>
        {/if}
      </button>
    </div>
  </div>
  
  <!-- AI Response Section -->
  <div class="{scrollable ? 'flex-1 overflow-y-auto' : ''}">
    {#if isLoading}
      <!-- Loading State -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col">
        <div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0">
          <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 dark:border-blue-400"></div>
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">AI is thinking...</h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex items-center justify-center">
          <span class="text-gray-600 dark:text-gray-300 text-sm font-mono">Processing your request...</span>
        </div>
      </div>
    {:else if error}
      <!-- Error State -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col">
        <div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0">
          <span class="text-red-500 dark:text-red-400 text-lg">⚠️</span>
          <h4 class="text-red-500 dark:text-red-400 font-medium text-sm">Error</h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4">
          <p class="text-gray-700 dark:text-gray-300 text-sm font-mono">{error}</p>
        </div>
      </div>
    {:else if historicalResponse}
      <!-- Historical Response State -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col">
        <div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0">
          <span class="text-purple-600 dark:text-purple-400 text-lg">📚</span>
          <h4 class="text-purple-600 dark:text-purple-400 font-medium text-sm">Historical Response</h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4 ai-scrollbar">
          <div class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono">
            {@html formatMessage(historicalResponse)}
          </div>
        </div>
      </div>
    {:else if aiExplanation || message}
      <!-- Success State -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col">
        <div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0">
          <span class="text-blue-600 dark:text-blue-400 text-lg">🤖</span>
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">AI Response</h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4 ai-scrollbar">
          <div class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono">
            {@html formatMessage(aiExplanation || message)}
          </div>
        </div>
      </div>
    {:else}
      <!-- Empty State -->
      <div class="bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col">
        <div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0">
          <span class="text-gray-500 dark:text-gray-400 text-lg">💡</span>
          <h4 class="text-gray-500 dark:text-gray-400 font-medium text-sm">AI Assistant</h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4 flex items-center justify-center">
          <p class="text-gray-600 dark:text-gray-300 text-sm font-mono text-center">
            // Ask me anything about your data or Tempo-QL queries!
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Custom scrollbar styles for webkit browsers */
  :global(.ai-scrollbar::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }
  
  :global(.ai-scrollbar::-webkit-scrollbar-track) {
    background: #f1f5f9;
    border-radius: 4px;
  }
  
  :global(.dark .ai-scrollbar::-webkit-scrollbar-track) {
    background: #374151;
  }
  
  :global(.ai-scrollbar::-webkit-scrollbar-thumb) {
    background: #cbd5e1;
    border-radius: 4px;
  }
  
  :global(.ai-scrollbar::-webkit-scrollbar-thumb:hover) {
    background: #94a3b8;
  }
  
  :global(.dark .ai-scrollbar::-webkit-scrollbar-thumb) {
    background: #6b7280;
  }
  
  :global(.dark .ai-scrollbar::-webkit-scrollbar-thumb:hover) {
    background: #9ca3af;
  }
  
  /* Firefox scrollbar */
  :global(.ai-scrollbar) {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }
  
  :global(.dark .ai-scrollbar) {
    scrollbar-color: #6b7280 #374151;
  }

  :global(.prose code) {
    background-color: rgb(243 244 246);
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
  }
</style> 