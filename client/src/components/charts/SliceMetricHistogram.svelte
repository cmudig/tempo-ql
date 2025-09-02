<script lang="ts">
  import { format, precisionFixed } from 'd3-format';
  import { LayerCake, Svg, Html } from 'layercake';

  import Column from './Column.svelte';
  import { scaleBand, scaleLinear } from 'd3-scale';
  import type { Histogram } from './utils/slice.type';
  import { onMount } from 'svelte';
  import AxisX from './AxisX.svelte';

  export let width: number | null = 100;

  export let histValues: Histogram;
  export let mean = null;
  export let unit: string | null = null;
  export let title: string | null = null;
  export let horizontalLayout = false;

  export let noParent = false;

  export let color = '#3b82f6';

  let data: Array<{ bin: string | number; count: number; label: string }> = [];
  let histBins: Array<string | number> = [];

  let binFormat = format('.3g');
  let countFormat = format(',');

  $: if (!!histValues) {
    let tempBins = Object.keys(histValues);
    let precision = tempBins.reduce(
      (curr, val, i) =>
        i > 0
          ? Math.min(
              curr,
              Math.abs(parseFloat(val) - parseFloat(tempBins[i - 1]))
            )
          : curr,
      1e9
    );
    binFormat = format(`.${precisionFixed(precision)}f`);
    let stringLabels = Object.keys(histValues).some(
      (v) => v.search(/[^-0-9.]/) >= 0
    );
    console.log('string labels:', stringLabels, Object.keys(histValues));
    data = Object.entries(histValues).map((v) => ({
      bin: stringLabels ? v[0] : parseFloat(v[0]),
      count: <number>v[1],
      label: stringLabels ? v[0] : binFormat(v[0]),
    }));
    data.sort((a, b) =>
      stringLabels
        ? a.label.localeCompare(b.label)
        : parseFloat(a.bin) - parseFloat(b.bin)
    );
    histBins = data.map((v) => v.bin);
  } else {
    data = [];
    histBins = [];
  }

  let loaded = false;
  onMount(() => setTimeout(() => (loaded = true), 0));

  let hoveredBin: string;

  function makeTooltipText(d) {
    return `${d.label}${!!unit ? ' ' + unit : ''}: ${countFormat(d.count)} instances`;
  }

  $: console.log('histBins', histBins);
  $: console.log('histValues', histValues);
</script>

<!-- duplicate template for whether or not a parent element is needed -->
{#if noParent}
  {#if !!title}
    <div class="font-bold text-xs truncate text-right">
      {title}
    </div>
  {/if}
  <div style="width: {width == null ? '100%' : `${width}px`}; height: 16px;">
    {#if loaded && histBins.length > 0}
      <LayerCake
        padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        x="bin"
        y="count"
        xScale={scaleBand().round(true)}
        xDomain={histBins}
        yScale={scaleLinear()}
        yDomain={[0, null]}
        {data}
        custom={{
          hoveredGet: (d) => d.bin == hoveredBin,
        }}
      >
        <Svg>
          <Column
            fill={color}
            on:hover={(e) =>
              (hoveredBin = e.detail != null ? e.detail.bin : null)}
          />
          <AxisX ticks={[]} baseline gridlines={false} />
        </Svg>
      </LayerCake>
    {/if}
  </div>
  <div
    class:mt-1={!horizontalLayout}
    class="text-xs text-gray-800 dark:text-gray-200 truncate"
  >
    {#if !$$slots.caption}
      {#if hoveredBin != null}
        {makeTooltipText(data.find((d) => d.label == hoveredBin))}
      {:else if mean != null}
        M = <strong>{format('.3')(mean)}</strong>
      {:else}
        &nbsp;{/if}
    {:else}
      <slot name="caption" />
    {/if}
  </div>
{:else}
  <div
    class:flex={horizontalLayout}
    class:my-0.5={horizontalLayout}
    class="gap-1 items-center"
  >
    {#if !!title}
      <div class="font-bold text-xs truncate text-right" style="width: 96px;">
        {title}
      </div>
    {/if}
    <div style="width: {width == null ? '100%' : `${width}px`}; height: 16px;">
      {#if loaded && histBins.length > 0}
        <LayerCake
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          x="bin"
          y="count"
          xScale={scaleBand().round(true)}
          xDomain={histBins}
          yScale={scaleLinear()}
          yDomain={[0, null]}
          {data}
          custom={{
            hoveredGet: (d) => d.label == hoveredBin,
          }}
        >
          <Svg>
            <Column
              fill={color}
              on:hover={(e) =>
                (hoveredBin = e.detail != null ? e.detail.label : null)}
            />
            <AxisX ticks={[]} baseline gridlines={false} />
          </Svg>
        </LayerCake>
      {/if}
    </div>
    <div
      class:mt-1={!horizontalLayout}
      class="text-xs text-gray-800 dark:text-gray-200 truncate"
    >
      {#if !$$slots.caption}
        {#if hoveredBin != null}
          {makeTooltipText(data.find((d) => d.label == hoveredBin))}
        {:else if mean != null}
          M = <strong>{format('.3')(mean)}{!!unit ? ' ' + unit : ''}</strong>
        {:else}
          &nbsp;{/if}
      {:else}
        <slot name="caption" />
      {/if}
    </div>
  </div>
{/if}
