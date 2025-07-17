<script lang="ts">
  import { theme } from '../stores/theme';
  import SubqueryItem from './SubqueryItem.svelte';

  export let width: string = 'w-full max-w-2xl';
  export let enabled: boolean = false;
  export let onToggle: (enabled: boolean) => void = () => {};
  export let subqueries: Record<string, any> = {};
  export let idsLength: number = 0;

  function toggleSection() {
    const newState = !enabled;
    onToggle(newState);
  }

  // Debug logging for subqueries
  $: {
    console.log('🔍 SubquerySection - subqueries changed:', subqueries);
    console.log('🔍 SubquerySection - enabled:', enabled);
    console.log('🔍 SubquerySection - subqueries keys:', Object.keys(subqueries));
  }
</script>

<div class="bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none {width} transition-colors duration-200">
  <!-- Header with toggle button -->
  <div class="flex items-center justify-between mb-2">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Subquery</h3>
    <button
      on:click={toggleSection}
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 {enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}"
      role="switch"
      aria-checked={enabled}
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 {enabled ? 'translate-x-6' : 'translate-x-1'}"
      />
    </button>
  </div>

  {#if enabled}
    <!-- Subquery content -->
    <div class="space-y-2 mt-3">
      {#if Object.keys(subqueries).length > 0}
        <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Found {Object.keys(subqueries).length} subqueries
        </div>
        {#each Object.entries(subqueries) as [queryText, subqueryData]}
          <SubqueryItem
            {queryText}
            result={subqueryData.result}
            {idsLength}
          />
        {/each}
      {:else}
        <div class="text-center py-4 text-gray-500 dark:text-gray-400">
          <div class="text-2xl mb-1">🔍</div>
          <div class="text-xs font-mono">No subqueries found</div>
          <div class="text-xs mt-1">Run a query to see subquery results</div>
        </div>
      {/if}
    </div>
  {/if}
</div> 