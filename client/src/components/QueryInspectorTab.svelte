<script lang="ts">
  import TextInputCard from './TextInputCard.svelte';
  import QueryResultCard from './QueryResultCard.svelte';
  import SQLDisplay from './SQLDisplay.svelte';
  import SubquerySection from './SubquerySection.svelte';
  import AIAssistantSection from './AIAssistantSection.svelte';

  export let textInput: string = '';
  export let onTextInput: (value: string) => void = () => {};
  export let dataFields: string[] = [];
  export let onRun: () => void = () => {};
  export let onExplain: () => void = () => {};
  export let message: string = '';
  export let values: any = {};
  export let idsLength: number = 0;
  export let subqueryEnabled: boolean = false;
  export let subqueries: any = {};
  export let onSubqueryToggle: (enabled: boolean) => void = () => {};
  export let width: string = 'w-full';

  // AI Assistant props
  export let onLLMSubmit: (question: string) => void = () => {};
  export let llmMessage: string = '';
  export let llmLoading: boolean = false;
  export let llmError: string = '';
  export let llmEnabled: boolean = false;
  export let apiStatus: string = '';
  export let extractedQuery: string = '';
  export let aiExplanation: string = '';
  export let hasExtractedQuery: boolean = false;
  export let onQueryExtracted: () => void = () => {};

  export let onHistoryClick: () => void = () => {};
  export let onQueryHistoryClick: () => void = () => {};
  export let aiAssistantRef: HTMLElement | undefined = undefined;
  export let aiInputValueOverride: string = '';
  export let historicalResponse: string = '';
</script>

<div class="flex {width} h-full">
  <!-- Left side: Text Input Card and AI Assistant stacked -->
  <div class="w-1/2 shrink-0 flex flex-col h-full">
    <!-- Text Input Card -->
    <div class="flex-auto">
      <TextInputCard
        value={textInput}
        onInput={onTextInput}
        {dataFields}
        {onRun}
        {onExplain}
        onHistoryClick={onQueryHistoryClick}
        width="w-full"
      />
    </div>

    {#if llmEnabled}
      <!-- AI Assistant Section with scrollable area -->
      <div class="w-full h-1/2 overflow-hidden" bind:this={aiAssistantRef}>
        <AIAssistantSection
          onSubmit={onLLMSubmit}
          message={llmMessage}
          isLoading={llmLoading}
          error={llmError}
          {apiStatus}
          width="w-full"
          scrollable={true}
          {extractedQuery}
          {aiExplanation}
          {hasExtractedQuery}
          {onQueryExtracted}
          {onHistoryClick}
          inputValueOverride={aiInputValueOverride}
          {historicalResponse}
        />
      </div>
    {/if}
  </div>

  <!-- Right side: Query Output, Query Result Card and Subquery Section -->
  <div
    class="flex-auto p-4 border-l border-slate-400 dark:border-slate-600 h-full overflow-auto"
  >
    <div class="space-y-2">
      <QueryResultCard {values} {idsLength} width="w-full" scrollable={false} />
      <div
        class="flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3"
      >
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Query Output
        </h3>
        <div
          class="text-xs font-mono text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 rounded border p-2 max-h-20 overflow-y-auto"
        >
          {message || 'No query executed yet...'}
        </div>
      </div>

      <SubquerySection
        width="w-full"
        enabled={subqueryEnabled}
        {subqueries}
        {idsLength}
        onToggle={onSubqueryToggle}
      />
    </div>
  </div>
</div>
