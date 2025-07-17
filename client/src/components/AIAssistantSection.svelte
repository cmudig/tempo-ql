<script lang="ts">
  import { theme } from '../stores/theme';
  export let onSubmit: (value: string) => void = () => {};
  export let message: string = '';
  export let isLoading: boolean = false;
  export let error: string = '';
  export let apiStatus: string = 'Checking API connection...';
  export let width: string = 'w-full';
  
  let inputValue = '';
  let inputElement: HTMLInputElement;
  
  function handleSubmit() {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      inputValue = '';
      if (inputElement) {
        inputElement.focus();
      }
    }
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
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

<div class="bg-white dark:bg-gray-900 p-4 border-0 rounded-none {width} transition-colors duration-200">
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
    <div class="flex items-center gap-3">
      <!-- Text Input -->
      <div class="flex-1">
        <input
          bind:this={inputElement}
          type="text"
          bind:value={inputValue}
          on:keydown={handleKeydown}
          class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="// Ask about your data or Tempo-QL queries..."
          disabled={isLoading}
        />
      </div>
      
      <!-- Submit Button -->
      <button
        on:click={handleSubmit}
        disabled={!inputValue.trim() || isLoading}
        class="px-6 py-2 bg-white text-gray-800 border border-gray-300 rounded-md font-medium transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:bg-gray-700 disabled:border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {#if isLoading}
          <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Thinking...</span>
        {:else}
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
          <span>Ask</span>
        {/if}
      </button>
    </div>
  </div>
  
  <!-- AI Response Section -->
  {#if isLoading}
    <!-- Loading State -->
    <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <div class="flex items-center space-x-3">
        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 dark:border-blue-400"></div>
        <span class="text-blue-600 dark:text-blue-400 text-sm font-mono">AI is thinking...</span>
      </div>
    </div>
  {:else if error}
    <!-- Error State -->
    <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <div class="flex items-start space-x-3">
        <span class="text-red-500 dark:text-red-400 text-lg">⚠️</span>
        <div>
          <h4 class="text-red-500 dark:text-red-400 font-medium text-sm">Error</h4>
          <p class="text-gray-700 dark:text-gray-300 text-sm mt-1 font-mono">{error}</p>
        </div>
      </div>
    </div>
  {:else if message}
    <!-- Success State -->
    <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <div class="flex items-start space-x-3">
        <span class="text-blue-600 dark:text-blue-400 text-lg">🤖</span>
        <div class="flex-1">
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">AI Response</h4>
          <div class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono">
            {@html formatMessage(message)}
          </div>
        </div>
      </div>
    </div>
  {:else}
    <!-- Empty State -->
    <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600">
      <div class="flex items-center space-x-3">
        <span class="text-gray-500 dark:text-gray-400 text-lg">💡</span>
        <div>
          <p class="text-gray-600 dark:text-gray-300 text-sm font-mono">
            // Ask me anything about your data or Tempo-QL queries!
          </p>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  :global(.prose code) {
    background-color: rgb(243 244 246);
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
  }
</style> 