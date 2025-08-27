<script lang="ts">
  import TextInputCard from './TextInputCard.svelte';
  import QueryResultCard from './QueryResultCard.svelte';
  import SubquerySection from './SubquerySection.svelte';
  import AIAssistantSection from './AIAssistantSection.svelte';
  import { formatMessage } from '../utils/markdown_format';
  import Fa from 'svelte-fa';
  import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
  import MarkdownOutput from './MarkdownOutput.svelte';

  export let textInput: string = '';
  export let onTextInput: (value: string) => void = () => {};
  export let dataFields: string[] = [];
  export let onRun: () => void = () => {};
  export let onExplain: () => void = () => {};
  export let queryError: string = '';
  export let values: any = {};
  export let subqueries: any = {};
  export let width: string = 'w-full';

  // AI Assistant props
  export let onLLMSubmit: (question: string) => void = () => {};
  export let llmResponse: string = '';
  export let llmLoading: boolean = false;
  export let llmError: string = '';
  export let llmAvailable: boolean = false;
  export let apiStatus: string = '';
  export let extractedQuery: string = '';
  export let llmExplanation: string = '';
  export let hasExtractedQuery: boolean = false;
  export let onQueryExtracted: () => void = () => {};

  export let onHistoryClick: () => void = () => {};
  export let onQueryHistoryClick: () => void = () => {};
  export let aiQuestion: string = '';
</script>

<div class="flex {width} h-full">
  <!-- Left side: Text Input Card and AI Assistant stacked -->
  <div class="w-1/2 shrink-0 flex flex-col h-full">
    <!-- Text Input Card -->
    <div class="flex-auto">
      <TextInputCard
        bind:value={textInput}
        {dataFields}
        {onRun}
        {onExplain}
        onHistoryClick={onQueryHistoryClick}
        width="w-full"
      />
    </div>

    {#if llmAvailable}
      <!-- AI Assistant Section with scrollable area -->
      <div class="w-full h-1/2 overflow-hidden">
        <AIAssistantSection
          onSubmit={onLLMSubmit}
          {llmResponse}
          isLoading={llmLoading}
          error={llmError}
          {apiStatus}
          width="w-full"
          scrollable={true}
          {extractedQuery}
          {hasExtractedQuery}
          {onQueryExtracted}
          {onHistoryClick}
          bind:question={aiQuestion}
          onRun={(text) => {
            textInput = text;
            onRun();
          }}
        />
      </div>
    {/if}
  </div>

  <!-- Right side: Query Output, Query Result Card and Subquery Section -->
  <div
    class="flex-auto p-4 border-l border-slate-400 dark:border-slate-600 h-full overflow-auto"
  >
    {#if !!queryError}
      <div
        class="bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4"
      >
        <h3 class="text-lg font-medium text-red-700 dark:text-red-100 mb-2">
          Query Error
        </h3>
        <div class="text-sm font-mono text-slate-800 dark:text-slate-100">
          {queryError}
        </div>
      </div>
    {/if}
    {#if llmAvailable}
      <div
        class="px-2 mb-4 {width} dark:text-slate-100"
        class:opacity-50={(!values || Object.keys(values).length == 0) &&
          !queryError}
      >
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Explanation
          </h3>
          <button
            class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"
            on:click={() => {
              onExplain();
            }}
            disabled={(!values || Object.keys(values).length == 0) &&
              !queryError}
          >
            <Fa icon={faBoltLightning} class="inline mr-2" />
            {#if !!queryError}Explain and Fix{:else}Explain{/if}
          </button>
        </div>
        {#if llmExplanation}
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
      class="px-2 mb-4 {width} dark:text-slate-100"
      class:opacity-50={!values || Object.keys(values).length == 0}
    >
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Query Result
        </h3>
      </div>
      {#if !!values && Object.keys(values).length > 0}
        <QueryResultCard {values} />
      {:else}
        <!-- Empty state -->
        <div class="text-center py-8 text-slate-900 dark:text-slate-100">
          No query results
        </div>
      {/if}
    </div>

    <SubquerySection width="w-full" {subqueries} />
  </div>
</div>
