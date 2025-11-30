<script lang="ts">
  import {
    faBoltLightning,
    faCheckCircle,
    faClock,
    faWarning,
    faXmarkCircle,
  } from '@fortawesome/free-solid-svg-icons';
  import { theme } from '../stores/theme';
  import Fa from 'svelte-fa';
  import MarkdownOutput from './MarkdownOutput.svelte';

  export let onSubmit: (value: string) => void = () => {};
  export let onRun: (code: string) => void = () => {};
  export let isLoading: boolean = false;
  export let error: string = '';
  export let llmResponse: string = '';
  export let apiStatus: string = 'Checking API connection...';
  export let width: string = 'w-full';
  export let scrollable: boolean = true;
  export let extractedQuery: string = '';
  export let hasExtractedQuery: boolean = false;

  export let onQueryExtracted: () => void = () => {};
  export let onHistoryClick: () => void = () => {};

  let tab: 'query' | 'response' = 'query';

  export let question: string = '';
  let inputElement: HTMLTextAreaElement;

  function handleSubmit() {
    if (question.trim()) {
      onSubmit(question.trim());
      tab = 'response';
      // Keep the question in the input box instead of clearing it
      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }

  // Trigger query extraction when a query is available
  $: if (hasExtractedQuery && extractedQuery) {
    console.log(
      '🤖 AIAssistant: Query extracted, triggering handler:',
      extractedQuery
    );
    onQueryExtracted();
  }

  // Function to get API status color and icon
  function getApiStatusInfo(status: string) {
    if (status.includes('Configured') || status.includes('ready')) {
      return {
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        icon: faCheckCircle,
      };
    } else if (
      status.includes('Not configured') ||
      status.includes('Invalid')
    ) {
      return {
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        icon: faXmarkCircle,
      };
    } else {
      return {
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        icon: faWarning,
      };
    }
  }

  $: apiStatusInfo = getApiStatusInfo(apiStatus);
</script>

<div class="px-4 pb-2 {width} h-full flex flex-col">
  <!-- Header with API Status -->
  <div class="flex items-center mb-4 gap-2 shrink-0">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2">
      AI Assistant
    </h3>
    <button
      class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 {tab ===
      'query'
        ? 'bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800'
        : 'dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}"
      on:click={() => (tab = 'query')}
      type="button"
    >
      Question
    </button>
    <button
      class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 {tab ===
      'response'
        ? 'bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800'
        : 'dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}"
      on:click={() => (tab = 'response')}
      disabled={!llmResponse && !error}
      type="button"
    >
      Answer
    </button>
    <div class="flex-auto" />
    <button
      on:click={onHistoryClick}
      class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
      title="View AI question/answer history"
    >
      <Fa icon={faClock} class="inline mr-2" />
      History
    </button>
  </div>

  <!-- AI Input Section -->
  {#if tab == 'query'}
    <div class="relative w-full min-h-0 flex-auto">
      <!-- Large Textarea Input like main query input -->
      <textarea
        bind:this={inputElement}
        bind:value={question}
        on:keydown={handleKeydown}
        class="w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"
        placeholder="Ask me to generate, update, or explain a TempoQL query..."
        disabled={isLoading}
        rows="5"
      ></textarea>

      <div
        class="absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"
      >
        <!-- Run Button -->
        <button
          class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"
          on:click={() => {
            handleSubmit();
            tab = 'response';
          }}
          disabled={!question.trim() || isLoading}
        >
          <Fa icon={faBoltLightning} class="inline mr-2" />
          Ask AI
        </button>
      </div>
    </div>
  {:else}
    <!-- AI Response Section -->
    <div class="h-full {scrollable ? 'overflow-auto' : ''}">
      {#if error}
        <!-- Error State -->
        <div
          class="bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4"
        >
          <h3 class="text-lg font-medium text-red-700 dark:text-red-100 mb-2">
            Error
          </h3>
          <div class="text-sm font-mono text-gray-800 dark:text-gray-100">
            {error}
          </div>
        </div>
      {:else}
        {#if llmResponse}
          <div class="flex-1 overflow-y-auto ai-scrollbar">
            <div
              class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"
            >
              <MarkdownOutput text={llmResponse} {onRun} />
            </div>
          </div>
        {/if}
        {#if isLoading && !llmResponse}
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">
            <span
              class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"
            ></span>
            &nbsp;AI is thinking...
          </h4>
        {/if}
      {/if}
    </div>
  {/if}
</div>

<style>
  /* Custom scrollbar styles for webkit browsers */
  :global(.ai-scrollbar::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }

  :global(.ai-scrollbar::-webkit-scrollbar-track) {
    background: #f1f5f9;
    border-radius: 4px;
  }

  :global(.dark .ai-scrollbar::-webkit-scrollbar-track) {
    background: #374151;
  }

  :global(.ai-scrollbar::-webkit-scrollbar-thumb) {
    background: #cbd5e1;
    border-radius: 4px;
  }

  :global(.ai-scrollbar::-webkit-scrollbar-thumb:hover) {
    background: #94a3b8;
  }

  :global(.dark .ai-scrollbar::-webkit-scrollbar-thumb) {
    background: #6b7280;
  }

  :global(.dark .ai-scrollbar::-webkit-scrollbar-thumb:hover) {
    background: #9ca3af;
  }

  /* Firefox scrollbar */
  :global(.ai-scrollbar) {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }

  :global(.dark .ai-scrollbar) {
    scrollbar-color: #6b7280 #374151;
  }
</style>
