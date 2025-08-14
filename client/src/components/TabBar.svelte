<script lang="ts">
  export let activeTab: string = 'data-elements';
  export let onTabChange: (tab: string) => void = () => {};

  const tabs = [
    { id: 'data-elements', label: 'Data Elements', icon: '📊' },
    { id: 'query-inspector', label: 'Query Inspector', icon: '🔍' },
  ];
</script>

<div
  class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
>
  <div class="max-w-full mx-auto">
    <nav class="flex space-x-8 px-4" aria-label="Tabs">
      {#each tabs as tab}
        <button
          class="group relative min-w-0 flex-1 overflow-hidden py-4 px-1 text-center text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300 focus:z-10 focus:outline-none transition-colors duration-200 {activeTab ===
          tab.id
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-500 dark:text-gray-400'}"
          on:click={() => onTabChange(tab.id)}
        >
          <span class="flex items-center justify-center space-x-2">
            <span class="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </span>

          <!-- Active tab indicator -->
          {#if activeTab === tab.id}
            <span
              class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400"
            ></span>
          {/if}

          <!-- Hover indicator -->
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          ></span>
        </button>
      {/each}
    </nav>
  </div>
</div>
