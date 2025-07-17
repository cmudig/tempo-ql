<script lang="ts">
  import SliceMetricHistogram from './charts/SliceMetricHistogram.svelte';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import SliceMetricCategoryBar from './charts/SliceMetricCategoryBar.svelte';
  import type { QueryResult } from './charts/utils/slice.type';
  import { theme } from '../stores/theme';

  import * as d3 from 'd3';

  export let values: QueryResult | null = null;
  export let idsLength: number = 0;
  export let width: string = 'w-full max-w-2xl';

  let showCountDetails = false;
  let showMissingnessDetails = false;

  // Debug logging to check if values are passed
  $: {
    console.log('QueryResultCard - Values received:');
    console.log('  values:', values);
  }
  
  // Format numbers with commas
  function formatNumber(n: number) {
    return n?.toLocaleString?.() ?? n;
  }
  // Format percent
  function formatPercent(n: number) {
    return n?.toFixed?.(1) + '%';
  }
  $: console.log('values', values);
</script>

<div class="bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none {width} transition-colors duration-200">
  <!-- Header with share icon -->
  <div class="flex items-center justify-between mb-2">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>
    <!-- Share icon placeholder -->
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="text-gray-400"><path d="M15 8a3 3 0 1 0-6 0v8a3 3 0 1 0 6 0V8z"/><path d="M12 3v2m0 14v2m7-7h2m-18 0H3"/></svg>
  </div>

  {#if values && values.values}
    <div class="text-sm font-mono text-gray-700 dark:text-gray-300 mb-4">
      <span class="font-semibold">Type:</span> {values.values.type || 'Time Series'}
    </div>

    <!-- Info rows -->
    <div class="space-y-2">
      <!-- Count row with dropdown -->
      <div class="flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md">
        <div class="flex items-center">
          <button
            class="mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            on:click={() => showCountDetails = !showCountDetails}
            aria-label="Toggle count details"
            style="font-size: 1.1em;"
          >
            {#if showCountDetails}
              ▼
            {:else}
              ▶
            {/if}
          </button>
          <span class="font-bold text-gray-900 dark:text-gray-100 mr-2">Count:</span>
          <span class="tabular-nums text-gray-700 dark:text-gray-200">{formatNumber(values.values.length ?? 0)}</span>
          <span class="ml-1 text-gray-500 dark:text-gray-400 text-sm">rows</span>
        </div>
        {#if showCountDetails}
          <div class="mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300">
            <div class="mb-2">
              <div class="flex flex-wrap justify-between items-center mb-1 gap-1">
                <span class="text-gray-600 dark:text-gray-400">Unique IDs:</span>
                <span class="font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">
                  {formatNumber(values.values.num_unique_ids ?? 0)} / {formatNumber(idsLength)}
                </span>
              </div>
              <SliceMetricBar
                value={idsLength > 0 ? (values.values.num_unique_ids ?? 0) / idsLength : 0}
                width={null}
                showFullBar
              >
                <span slot="caption">
                  <strong>{idsLength > 0 ? d3.format('.1%')((values.values.num_unique_ids ?? 0) / idsLength) : '0.0%'}</strong>
                  {#if idsLength > 0}
                    <span class="text-gray-500 dark:text-gray-400 ml-1 text-xs">
                      ({formatNumber(values.values.num_unique_ids ?? 0)} / {formatNumber(idsLength)})
                    </span>
                  {/if}
                </span>
              </SliceMetricBar>
            </div>
            <div>
              <div class="flex justify-between items-center mb-1">
                <span class="text-gray-600 dark:text-gray-400">Number of timesteps per trajectory:</span>
              </div>
              <SliceMetricHistogram
                histValues={values.values.ids_hist}
                mean={values.values.ids_hist_mean}
                width={null}
              />
            </div>
          </div>
        {/if}
      </div>
      <!-- Missingness row with dropdown -->
      <div class="flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md">
        <div class="flex items-center">
          <button
            class="mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            on:click={() => showMissingnessDetails = !showMissingnessDetails}
            aria-label="Toggle missingness details"
            style="font-size: 1.1em;"
          >
            {#if showMissingnessDetails}
              ▼
            {:else}
              ▶
            {/if}
          </button>
          <span class="font-bold text-gray-900 dark:text-gray-100 mr-2">Missingness:</span>
          <span class="tabular-nums text-gray-700 dark:text-gray-200">{d3.format('.1%')(values.values.missingness ?? 0)}</span>
        </div>
        {#if showMissingnessDetails}
          <div class="mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300">
            <div>
              <div class="flex flex-wrap justify-between items-center mb-1 gap-1">
                <span class="text-gray-600 dark:text-gray-400">Number of missing values:</span>
                <span class="font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">
                  {formatNumber(values.values.num_missing_values ?? 0)} / {formatNumber(values.values.length ?? 0)}
                </span>
              </div>
              <SliceMetricBar
                value={values.values.missingness ?? 0}
                width={null}
                color="#ef4444"
                showFullBar
              >
                <span slot="caption">
                  <strong>{d3.format('.1%')(values.values.missingness ?? 0)}</strong>
                  <span class="text-gray-500 dark:text-gray-400 ml-1 text-xs">
                    ({formatNumber(values.values.num_missing_values ?? 0)} / {formatNumber(values.values.length ?? 0)})
                  </span>
                </span>
              </SliceMetricBar>
              
              {#if values.values.missing_ids_hist && Object.keys(values.values.missing_ids_hist).length > 0}
                <div class="flex justify-between items-center mb-1">
                  <span class="text-gray-600 dark:text-gray-400">Number of missing values per trajectory:</span>
                </div>
                <SliceMetricHistogram
                  histValues={values.values.missing_ids_hist}
                  mean={values.values.missing_ids_hist_mean}
                  width={null}
                />
              {/if}
            </div>
          </div>
        {/if}
      </div>
      <!-- Values row with histogram -->
      <div class="flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md">
        <div class="flex items-center mb-2">
          <span class="font-bold text-gray-900 dark:text-gray-100 mr-2">Values:</span>
        </div>
        {#if values.values.type == 'binary'}
          <SliceMetricBar
            value={values.values.mean ?? 0}
            width={200}
            color="#d97706"
            showFullBar
          >
            <span slot="caption">
              <strong>{d3.format('.1%')(values.values.mean ?? 0)}</strong>
              true,
              <strong>{d3.format('.1%')(1 - (values.values.mean ?? 0))}</strong> false
            </span>
          </SliceMetricBar>
        {:else if values.values.type == 'continuous'}
          <SliceMetricHistogram
            histValues={values.values.hist}
            mean={values.values.mean ?? 0}
            width={200}
          />
        {:else if values.values.type == 'categorical'}
          <SliceMetricCategoryBar
            order={Object.keys(values.values.counts || {}).sort(
              (a, b) => (values.values.counts?.[b] ?? 0) - (values.values.counts?.[a] ?? 0)
            )}
            counts={values.values.counts || {}}
            width={200}
          />
        {/if}
      </div>
    </div>
  {:else}
    <!-- Empty state -->
    <div class="text-center py-8 text-gray-500 dark:text-gray-400">
      <div class="text-4xl mb-2">📊</div>
      <div class="text-sm font-mono">No query results yet</div>
      <div class="text-xs mt-1">Enter a query and click Run to see results</div>
    </div>
  {/if}
</div> 