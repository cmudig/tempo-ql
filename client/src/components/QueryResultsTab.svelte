<script lang="ts">
  import QueryResultCard from './QueryResultCard.svelte';
  import SubquerySection from './SubquerySection.svelte';
  import Fa from 'svelte-fa';
  import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
  import MarkdownOutput from './MarkdownOutput.svelte';

  export let textInput: string = '';
  export let onRun: () => void = () => {};
  export let onExplain: () => void = () => {};
  export let queryForResults: string = '';
  export let queryError: string = '';
  export let values: any = {};
  export let subqueries: any = {};
  export let width: string = 'w-full';

  // AI Assistant props
  export let llmAvailable: boolean = false;
  export let llmExplanation: string = '';
  export let llmLoading: boolean = false;
</script>

<div
  class="flex-auto p-4 h-full overflow-auto"
  class:opacity-50={!!values &&
    Object.keys(values).length > 0 &&
    textInput != queryForResults}
>
  {#if !!queryError}
    <div
      class="bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4"
    >
      <h3 class="text-lg font-medium text-red-700 dark:text-red-100 mb-2">
        Query Error
      </h3>
      <div class="text-sm font-mono text-gray-800 dark:text-gray-100">
        {queryError}
      </div>
    </div>
  {/if}
  {#if llmAvailable}
    <div
      class="px-2 mb-4 {width} dark:text-gray-100"
      class:opacity-50={(!values || Object.keys(values).length == 0) &&
        !queryError}
    >
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Explanation
        </h3>
        <button
          class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"
          on:click={() => {
            onExplain();
          }}
          disabled={(!values || Object.keys(values).length == 0) && !queryError}
        >
          <Fa icon={faBoltLightning} class="inline mr-2" />
          {#if !!queryError}Explain and Fix{:else}Explain{/if}
        </button>
      </div>
      {#if llmLoading && !llmExplanation}
        <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">
          <span
            class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"
          ></span>
          &nbsp;AI is thinking...
        </h4>
      {:else if llmExplanation}
        <MarkdownOutput
          text={llmExplanation}
          collapseLength={250}
          onRun={(text) => {
            textInput = text;
            onRun();
          }}
        />
      {/if}
    </div>
  {/if}
  <div
    class="px-2 mb-4 {width} dark:text-gray-100"
    class:opacity-50={!values || Object.keys(values).length == 0}
  >
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Query Result
      </h3>
    </div>
    {#if !!values && Object.keys(values).length > 0}
      <QueryResultCard {values} />
    {:else}
      <!-- Empty state -->
      <div class="text-center py-8 text-gray-900 dark:text-gray-100">
        No query results
      </div>
    {/if}
  </div>

  <SubquerySection width="w-full" {subqueries} />
</div>
