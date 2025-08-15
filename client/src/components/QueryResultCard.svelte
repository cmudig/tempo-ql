<script lang="ts">
  import SliceMetricHistogram from './charts/SliceMetricHistogram.svelte';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import SliceMetricCategoryBar from './charts/SliceMetricCategoryBar.svelte';
  import type { QueryResult } from './charts/utils/slice.type';
  import { theme } from '../stores/theme';

  import * as d3 from 'd3';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faChevronRight,
  } from '@fortawesome/free-solid-svg-icons';
  import MetricChartView from './charts/MetricChartView.svelte';

  export let values: QueryResult | null = null;

  let showCountDetails = false;
  let showMissingnessDetails = false;
  let showTypeDetails = false;

  // Debug logging to check if values are passed
  $: {
    console.log('QueryResultCard - Values received:');
    console.log('  values:', values);
  }

  const formatNumber = d3.format(',');
  const formatPercent = d3.format('.1~%');

  $: console.log('values', values);
</script>

{#if values && values.values}
  <div class="text-sm font-mono text-slate-700 dark:text-slate-300 mb-4">
    <span class="font-semibold">Type:</span>
    {values.values.type || 'Time Series'}
  </div>

  <!-- Info rows -->
  <div class="space-y-2">
    <!-- Count row with dropdown -->
    <div
      class="flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md overflow-hidden"
    >
      <button
        class="flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"
        on:click={() => (showCountDetails = !showCountDetails)}
        aria-label="Toggle count details"
      >
        <Fa
          icon={showCountDetails ? faChevronDown : faChevronRight}
          class="text-slate-500 dark:text-slate-300"
        />
        <div>
          <span class="font-bold text-slate-900 dark:text-slate-100"
            >Count:</span
          >
          <span class="tabular-nums text-slate-700 dark:text-slate-200"
            >{formatNumber(values.values.length ?? 0)}</span
          >
          <span class="text-slate-500 dark:text-slate-400">rows</span>
        </div>
      </button>
      {#if showCountDetails}
        <div class="mx-2 px-2 py-2">
          {#if values.ids}
            <div
              class="mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"
            >
              Trajectories
            </div>
            <div class="mb-2">
              <MetricChartView values={values.ids.count} />
            </div>
            <div
              class="mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"
            >
              Timesteps per Trajectory
            </div>
            <div class="mb-2">
              <MetricChartView values={values.ids.count_per_trajectory} />
            </div>
          {/if}
        </div>
      {/if}
    </div>
    <!-- Missingness row with dropdown -->
    {#if (values.missingness.rate.count ?? 0) > 0}
      <div
        class="flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md"
      >
        <button
          class="flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"
          on:click={() => (showMissingnessDetails = !showMissingnessDetails)}
          aria-label="Toggle missingness details"
        >
          <Fa
            icon={showMissingnessDetails ? faChevronDown : faChevronRight}
            class="text-slate-500 dark:text-slate-300"
          />
          <div>
            <span class="font-bold text-slate-900 dark:text-slate-100"
              >Missingness:</span
            >
            <span class="tabular-nums text-slate-700 dark:text-slate-200"
              >{formatPercent(
                (values.missingness.rate.count ?? 0) /
                  (values.missingness.rate.total ?? 1)
              )}</span
            >
            <span class="text-slate-500 dark:text-slate-400"> of rows</span>
          </div>
        </button>
        {#if showMissingnessDetails}
          <div class="mx-2 px-2 py-2">
            {#if values.missingness}
              <div
                class="mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"
              >
                Number of Missing Values
              </div>
              <div class="mb-2">
                <MetricChartView values={values.missingness.rate} />
              </div>
              <div
                class="mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"
              >
                Missingness Rate per Trajectory
              </div>
              <div class="mb-2">
                <MetricChartView
                  values={values.missingness.rate_per_trajectory}
                />
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/if}
    {#if values.types}
      <div
        class="flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md"
      >
        <button
          class="flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"
          on:click={() => (showTypeDetails = !showTypeDetails)}
          aria-label="Toggle type details"
        >
          <Fa
            icon={showTypeDetails ? faChevronDown : faChevronRight}
            class="text-slate-500 dark:text-slate-300"
          />
          <div>
            <span class="font-bold text-slate-900 dark:text-slate-100"
              >Data Elements:</span
            >
            <span class="tabular-nums text-slate-700 dark:text-slate-200">
              {formatNumber(Object.keys(values.types.counts).length ?? 0)}
            </span>
            <span class="text-slate-500 dark:text-slate-400">
              distinct elements</span
            >
          </div>
        </button>
        {#if showTypeDetails}
          <div class="mx-2 px-2 py-2">
            <MetricChartView values={values.types} />
          </div>
        {/if}
      </div>
    {/if}
    <!-- Values row with histogram -->
    <div
      class="flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 px-4 py-2 text-base w-full rounded-md"
    >
      <div
        class="mb-2 text-sm font-bold text-slate-900 dark:text-slate-100 mr-2"
      >
        Values:
      </div>
      <MetricChartView values={values.values} />
    </div>
  </div>
{/if}
