<script lang="ts">
  import { faXmark } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export let isVisible: boolean = false;
  export let history: Array<{
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: string;
  }> = [];
  export let onClose: () => void = () => {};
  export let onSelect: (historyItem: {
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: string;
  }) => void = () => {};
  export let position: { top: number; left: number } = { top: 0, left: 0 };

  // Format timestamp for display
  function formatTimestamp(timestampString: string): string {
    let timestamp = new Date();
    timestamp.setTime(Date.parse(timestampString));
    console.log('format:', timestampString, Date.parse(timestampString));
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
    if (!!onClose) onClose();
  }
</script>

{#if isVisible}
  <!-- Backdrop -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-white/80 z-40"
    on:click|stopPropagation={handleClickOutside}
  ></div>

  <!-- Dropdown -->
  <div
    class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none"
  >
    <div
      class="bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        <h3 class="font-medium text-gray-900">Query History</h3>
        <button
          on:click={onClose}
          class="text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"
          title="Close history"
        >
          <Fa icon={faXmark} />
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
              class="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              on:click={() => onSelect(historyItem)}
            >
              <div class="flex items-start justify-between">
                <h4
                  class="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1"
                >
                  {#if historyItem.question}
                    {historyItem.question}
                  {:else}
                    <span class="font-mono"
                      >{historyItem.query || 'No query extracted'}</span
                    >
                  {/if}
                </h4>
                <span
                  class="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"
                >
                  {formatTimestamp(historyItem.timestamp)}
                </span>
              </div>
              {#if historyItem.answer}
                <p
                  class="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2"
                >
                  {historyItem.answer}
                </p>
              {/if}
            </div>
          {/each}
        {/if}
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
