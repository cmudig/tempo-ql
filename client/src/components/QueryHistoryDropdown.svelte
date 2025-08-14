<script lang="ts">
  export let isVisible: boolean = false;
  export let history: Array<{
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: Date;
  }> = [];
  export let onClose: () => void = () => {};
  export let onSelect: (historyItem: {
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: Date;
  }) => void = () => {};
  export let position: { top: number; left: number } = { top: 0, left: 0 };

  // Format timestamp for display
  function formatTimestamp(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  }

  // Handle click outside to close
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.query-history-dropdown')) {
      onClose();
    }
  }

  // Function to format markdown-like text
  function formatMessage(text: string): string {
    if (!text) return '';

    return (
      text
        // Convert **bold** to HTML
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Convert *italic* to HTML
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Convert `code` to HTML
        .replace(
          /`(.*?)`/g,
          '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
        )
        // Convert line breaks to HTML
        .replace(/\n/g, '<br>')
    );
  }
</script>

{#if isVisible}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black bg-opacity-25 z-40"
    on:click={handleClickOutside}
  ></div>

  <!-- Dropdown -->
  <div
    class="fixed z-50 query-history-dropdown"
    style="top: {position.top}px; left: {position.left}px;"
  >
    <div
      class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl max-w-md w-80 max-h-96 overflow-hidden"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700"
      >
        <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
          Query History
        </h3>
        <button
          on:click={onClose}
          class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"
          title="Close history"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- History List -->
      <div class="max-h-80 overflow-y-auto">
        {#if history.length === 0}
          <div class="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
            No query history yet
          </div>
        {:else}
          {#each history as historyItem, index}
            <div
              class="p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              on:click={() => onSelect(historyItem)}
            >
              <div class="flex items-start justify-between mb-2">
                <h4
                  class="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1"
                >
                  {historyItem.query || 'No query extracted'}
                </h4>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"
                >
                  {formatTimestamp(historyItem.timestamp)}
                </span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
                {historyItem.answer || 'No response available'}
              </p>
            </div>
          {/each}
        {/if}
      </div>

      <!-- Footer -->
      <div
        class="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
      >
        <div class="text-xs text-gray-500 dark:text-gray-400 text-center">
          Showing {history.length} of 10 recent queries
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Line clamp utilities for text truncation */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Custom scrollbar for the history list */
  .overflow-y-auto::-webkit-scrollbar {
    width: 6px;
  }

  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  .dark .overflow-y-auto::-webkit-scrollbar-track {
    background: #374151;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  .dark .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #6b7280;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  .dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
</style>
