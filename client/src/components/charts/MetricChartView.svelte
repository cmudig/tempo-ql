<script lang="ts">
  import { onMount } from 'svelte';
  import { type SliceMetric } from './utils/slice.type';
  import SliceMetricCategoryBar from './SliceMetricCategoryBar.svelte';
  import SliceMetricHistogram from './SliceMetricHistogram.svelte';
  import SliceMetricBar from './SliceMetricBar.svelte';
  import * as d3 from 'd3';
  import { theme } from '../../stores/theme';

  onMount(() => {
    console.log('mounted metric hcart');
  });
  export let values: SliceMetric | null = null;
  $: console.log('values in metricchart:', values);
</script>

{#if !!values}
  {#if values.type == 'binary'}
    <SliceMetricBar
      value={values.mean ?? 0}
      width={null}
      color="#d97706"
      fullBarColor={$theme == 'dark' ? '#374151' : '#e5e7eb'}
      showFullBar
    >
      <span slot="caption">
        <strong>{d3.format('.1%')(values.mean ?? 0)}</strong>
        true,
        <strong>{d3.format('.1%')(1 - (values.mean ?? 0))}</strong>
        false
      </span>
    </SliceMetricBar>
  {:else if values.type == 'count'}
    <SliceMetricBar
      value={(values.count ?? 0) / (values.total ?? 1)}
      width={null}
      color="#d97706"
      fullBarColor={$theme == 'dark' ? '#374151' : '#e5e7eb'}
      showFullBar
    >
      <span slot="caption">
        <strong>{d3.format(',')(values.count ?? 0)}</strong>
        / {d3.format(',')(values.total ?? 1)}
      </span>
    </SliceMetricBar>
  {:else if values.type == 'continuous'}
    <SliceMetricHistogram
      histValues={values.hist}
      mean={values.mean ?? 0}
      width={null}
    />
  {:else if values.type == 'categorical'}
    <SliceMetricCategoryBar
      order={Object.keys(values.counts || {}).sort(
        (a, b) => (values.counts?.[b] ?? 0) - (values.counts?.[a] ?? 0)
      )}
      counts={values.counts || {}}
      width={null}
    />
  {/if}
{/if}
