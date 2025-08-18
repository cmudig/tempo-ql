<script lang="ts">
  import { theme } from '../stores/theme';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import SliceMetricHistogram from './charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from './charts/SliceMetricCategoryBar.svelte';
  import type { QueryResult } from './charts/utils/slice.type';
  import * as d3 from 'd3';
  import QueryResultCard from './QueryResultCard.svelte';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faChevronUp,
  } from '@fortawesome/free-solid-svg-icons';

  export let queryText: string;
  export let data: {
    result: QueryResult;
    dataset_queries?: string[];
  };

  let isExpanded = false;

  function toggleExpanded() {
    isExpanded = !isExpanded;
  }

  // Format numbers with commas
  function formatNumber(n: number) {
    return n?.toLocaleString?.() ?? n;
  }
</script>

<div
  class="border border-slate-300 dark:border-slate-600 rounded-md mb-2 overflow-hidden"
>
  <!-- Header with dropdown arrow -->
  <button
    on:click={toggleExpanded}
    class="w-full px-3 py-2 text-left flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none"
  >
    <span
      class="text-sm font-mono text-slate-700 dark:text-slate-300 truncate flex-1"
    >
      {queryText}
    </span>
    <Fa
      icon={isExpanded ? faChevronUp : faChevronDown}
      class="text-slate-600 dark:text-slate-300"
    />
  </button>

  {#if isExpanded}
    <div class="p-4 border-t border-slate-200 dark:border-slate-700">
      <!-- Values section -->
      <QueryResultCard values={data.result} />
    </div>
    {#if data.dataset_queries && data.dataset_queries.length > 0}
      <div class="p-4 border-t border-slate-200 dark:border-slate-700">
        <div class="text-xs font-semibold text-slate-500 mb-1 uppercase">
          SQL Queries
        </div>
        {#each data.dataset_queries as sql}
          <pre
            class="bg-white dark:bg-slate-900 text-xs font-mono p-2 rounded">{sql}</pre>
        {/each}
      </div>
    {/if}
  {/if}
</div>
