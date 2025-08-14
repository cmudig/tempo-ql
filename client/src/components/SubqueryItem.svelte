<script lang="ts">
  import { theme } from '../stores/theme';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import SliceMetricHistogram from './charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from './charts/SliceMetricCategoryBar.svelte';
  import type { QueryResult } from './charts/utils/slice.type';
  import * as d3 from 'd3';

  export let queryText: string;
  export let result: any;
  export let idsLength: number = 0;

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
  class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md mb-2 overflow-hidden"
>
  <!-- Header with dropdown arrow -->
  <button
    on:click={toggleExpanded}
    class="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
  >
    <span
      class="text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"
    >
      {queryText}
    </span>
    <svg
      class="w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 {isExpanded
        ? 'rotate-180'
        : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {#if isExpanded}
    <div class="px-3 pb-3 border-t border-gray-200 dark:border-gray-700">
      <!-- Full subquery text display -->
      <div
        class="mt-3 mb-3 p-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-700 dark:text-gray-300"
      >
        {queryText}
      </div>

      <!-- Compact results display -->
      <div class="space-y-2 mt-2">
        <!-- Values section -->
        {#if result?.values}
          <div class="space-y-2">
            <!-- Count info -->
            <div class="flex items-center justify-between text-xs">
              <span class="text-gray-600 dark:text-gray-400">Count:</span>
              <span class="font-mono text-gray-700 dark:text-gray-300">
                {formatNumber(result.values.length ?? 0)} rows
              </span>
            </div>

            <!-- Unique IDs -->
            {#if result.values.num_unique_ids !== undefined}
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-600 dark:text-gray-400">Unique IDs:</span
                >
                <span class="font-mono text-gray-700 dark:text-gray-300">
                  {formatNumber(result.values.num_unique_ids)} / {formatNumber(
                    idsLength
                  )}
                </span>
              </div>
              <SliceMetricBar
                value={idsLength > 0
                  ? result.values.num_unique_ids / idsLength
                  : 0}
                width={null}
                showFullBar
              >
                <span slot="caption" class="text-xs">
                  <strong
                    >{idsLength > 0
                      ? d3.format('.1%')(
                          result.values.num_unique_ids / idsLength
                        )
                      : '0.0%'}</strong
                  >
                </span>
              </SliceMetricBar>
            {/if}

            <!-- Missingness -->
            {#if result.values.missingness !== undefined}
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-600 dark:text-gray-400">Missing:</span>
                <span class="font-mono text-gray-700 dark:text-gray-300">
                  {d3.format('.1%')(result.values.missingness)}
                </span>
              </div>
              <SliceMetricBar
                value={result.values.missingness}
                width={null}
                color="#ef4444"
                showFullBar
              >
                <span slot="caption" class="text-xs">
                  <strong>{d3.format('.1%')(result.values.missingness)}</strong>
                </span>
              </SliceMetricBar>
            {/if}

            <!-- Values visualization -->
            {#if result.values.type}
              <div class="mt-2">
                {#if result.values.type === 'binary'}
                  <SliceMetricBar
                    value={result.values.mean ?? 0}
                    width={null}
                    color="#d97706"
                    showFullBar
                  >
                    <span slot="caption" class="text-xs">
                      <strong
                        >{d3.format('.1%')(result.values.mean ?? 0)}</strong
                      > true
                    </span>
                  </SliceMetricBar>
                {:else if result.values.type === 'continuous' && result.values.hist}
                  <SliceMetricHistogram
                    histValues={result.values.hist}
                    mean={result.values.mean ?? 0}
                    width={null}
                  />
                {:else if result.values.type === 'categorical' && result.values.counts}
                  <SliceMetricCategoryBar
                    order={Object.keys(result.values.counts).sort(
                      (a, b) =>
                        (result.values.counts[b] ?? 0) -
                        (result.values.counts[a] ?? 0)
                    )}
                    counts={result.values.counts}
                    width={null}
                  />
                {/if}
              </div>
            {/if}
          </div>
        {/if}

        <!-- Occurrences section -->
        {#if result?.occurrences}
          <div class="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Occurrences:
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-600 dark:text-gray-400">Count:</span>
                <span class="font-mono text-gray-700 dark:text-gray-300">
                  {formatNumber(result.occurrences.length ?? 0)} rows
                </span>
              </div>
              {#if result.occurrences.type === 'continuous' && result.occurrences.hist}
                <SliceMetricHistogram
                  histValues={result.occurrences.hist}
                  mean={result.occurrences.mean ?? 0}
                  width={null}
                />
              {/if}
            </div>
          </div>
        {/if}

        <!-- Durations section -->
        {#if result?.durations}
          <div class="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div class="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Durations:
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-600 dark:text-gray-400">Count:</span>
                <span class="font-mono text-gray-700 dark:text-gray-300">
                  {formatNumber(result.durations.length ?? 0)} rows
                </span>
              </div>
              {#if result.durations.type === 'continuous' && result.durations.hist}
                <SliceMetricHistogram
                  histValues={result.durations.hist}
                  mean={result.durations.mean ?? 0}
                  width={null}
                />
              {/if}
            </div>
          </div>
        {/if}

        <!-- SQL Queries section removed - assuming only result data is available -->
      </div>
    </div>
  {/if}
</div>
