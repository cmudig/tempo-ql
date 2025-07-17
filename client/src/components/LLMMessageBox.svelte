<script lang="ts">
  export let message: string = '';
  export let isLoading: boolean = false;
  export let error: string = '';
  export let width: string = 'w-full';

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
</script>

<div class="bg-white p-6 border border-gray-200 {width}">
  <h3 class="text-lg font-semibold text-gray-800 mb-3">AI Assistant</h3>
  
  {#if isLoading}
    <!-- Loading State -->
    <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
      <div class="flex items-center space-x-3">
        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
        <span class="text-blue-700 text-sm">AI is thinking...</span>
      </div>
    </div>
  {:else if error}
    <!-- Error State -->
    <div class="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
      <div class="flex items-start space-x-3">
        <span class="text-red-500 text-lg">⚠️</span>
        <div>
          <h4 class="text-red-800 font-medium text-sm">Error</h4>
          <p class="text-red-700 text-sm mt-1">{error}</p>
        </div>
      </div>
    </div>
  {:else if message}
    <!-- Success State -->
    <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
      <div class="flex items-start space-x-3">
        <span class="text-green-500 text-lg">🤖</span>
        <div class="flex-1">
          <h4 class="text-green-800 font-medium text-sm mb-2">AI Response</h4>
          <div class="text-green-700 text-sm leading-relaxed prose prose-sm max-w-none">
            {@html formatMessage(message)}
          </div>
        </div>
      </div>
    </div>
  {:else}
    <!-- Empty State -->
    <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
      <div class="flex items-center space-x-3">
        <span class="text-gray-500 text-lg">💡</span>
        <div>
          <p class="text-gray-600 text-sm">
            Ask me anything about your data or Tempo-QL queries!
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