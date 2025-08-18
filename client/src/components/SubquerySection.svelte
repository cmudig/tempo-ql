<script lang="ts">
  import Fa from 'svelte-fa';
  import { theme } from '../stores/theme';
  import SubqueryItem from './SubqueryItem.svelte';
  import {
    faChevronDown,
    faChevronUp,
  } from '@fortawesome/free-solid-svg-icons';

  export let width: string = 'w-full max-w-2xl';
  export let enabled: boolean = false;
  export let subqueries: Record<string, any> = {};
  export let idsLength: number = 0;

  // Debug logging for subqueries
  $: {
    console.log('🔍 SubquerySection - subqueries changed:', subqueries);
    console.log('🔍 SubquerySection - enabled:', enabled);
    console.log(
      '🔍 SubquerySection - subqueries keys:',
      Object.keys(subqueries)
    );
  }
</script>

<div
  class="p-2 mb-0 border-0 rounded-none {width} transition-colors duration-200"
  class:opacity-50={Object.keys(subqueries).length == 0}
>
  <!-- Header with toggle button -->
  <button
    class="block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"
    on:click={() => (enabled = !enabled)}
  >
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
      Subqueries
    </h3>
    <div class="p-2 text-slate-800 dark:text-slate-200">
      <Fa icon={enabled ? faChevronUp : faChevronDown} class="inline" />
    </div>
  </button>

  {#if enabled}
    <!-- Subquery content -->
    <div class="space-y-2 mt-3">
      {#if Object.keys(subqueries).length > 0}
        {#each Object.entries(subqueries) as [queryText, subqueryData]}
          <SubqueryItem {queryText} data={subqueryData} />
        {/each}
      {:else}
        <div class="text-center py-8 text-slate-900 dark:text-slate-100">
          No subqueries yet
        </div>
      {/if}
    </div>
  {/if}
</div>
