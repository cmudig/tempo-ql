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
  import { formatMessage } from '../utils/markdown_format';
  import MarkdownOutput from './MarkdownOutput.svelte';
  export let onSubmit: (value: string) => void = () => {};
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
  export let inputValueOverride: string = '';
  export let historicalResponse: string = '';

  let tab: 'query' | 'response' = 'query';

  let inputValue = '';
  let inputElement: HTMLTextAreaElement;

  // Handle external input value override (for history selection)
  $: if (inputValueOverride && inputValueOverride !== inputValue) {
    inputValue = inputValueOverride;
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
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

<div class="px-4 pb-4 {width} h-full flex flex-col">
  <!-- Header with API Status -->
  <div class="flex items-center mb-4 gap-2 shrink-0">
    <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 pr-2">
      AI Assistant
    </h3>
    <button
      class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 {tab ===
      'query'
        ? 'bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800'
        : 'dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}"
      on:click={() => (tab = 'query')}
      type="button"
    >
      Query
    </button>
    <button
      class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 {tab ===
      'response'
        ? 'bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800'
        : 'dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'}"
      on:click={() => (tab = 'response')}
      disabled={!llmResponse && !error}
      type="button"
    >
      Response
    </button>
    <div class="flex-auto" />
    <div
      class="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
    >
      <Fa icon={apiStatusInfo.icon} class="inline mr-2" />
      {apiStatus}
    </div>
  </div>

  <!-- AI Input Section -->
  {#if tab == 'query'}
    <div class="relative w-full min-h-0 flex-auto">
      <!-- Large Textarea Input like main query input -->
      <textarea
        bind:this={inputElement}
        bind:value={inputValue}
        on:keydown={handleKeydown}
        class="w-full h-full p-4 pb-16 bg-transparent text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20"
        placeholder="Ask me to generate, update, or explain a TempoQL query..."
        disabled={isLoading}
        rows="5"
      ></textarea>

      <div
        class="absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"
      >
        <button
          on:click={onHistoryClick}
          class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"
          title="View query history"
        >
          <Fa icon={faClock} class="inline mr-2" />
          History
        </button>

        <!-- Run Button -->
        <button
          class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"
          on:click={() => {
            handleSubmit();
            tab = 'response';
          }}
          disabled={!inputValue.trim() || isLoading}
        >
          <Fa icon={faBoltLightning} class="inline mr-2" />
          Ask AI
        </button>
      </div>
    </div>
  {:else}
    <!-- AI Response Section -->
    <div class="h-full {scrollable ? 'overflow-auto' : ''}">
      {#if isLoading}
        <!-- Loading State -->
        <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">
          <span
            class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"
          ></span>
          &nbsp;AI is thinking...
        </h4>
      {:else if error}
        <!-- Error State -->
        <div
          class="bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4"
        >
          <h3 class="text-lg font-medium text-red-700 dark:text-red-100 mb-2">
            Error
          </h3>
          <div class="text-sm font-mono text-slate-800 dark:text-slate-100">
            {error}
          </div>
        </div>
      {:else if historicalResponse}
        <div
          class="flex items-center space-x-3 p-4 border-b border-slate-300 dark:border-slate-600 flex-shrink-0"
        >
          <span class="text-purple-600 dark:text-purple-400 text-lg">📚</span>
          <h4 class="text-purple-600 dark:text-purple-400 font-medium text-sm">
            Historical Response
          </h4>
        </div>
        <div class="flex-1 overflow-y-auto p-4 ai-scrollbar">
          <MarkdownOutput text={historicalResponse} />
        </div>
      {:else if llmResponse}
        <!-- Success State -->
        <div class="flex-1 overflow-y-auto ai-scrollbar">
          <div
            class="text-slate-700 dark:text-slate-200 text-sm leading-relaxed prose prose-sm max-w-none"
          >
            <MarkdownOutput text={llmResponse} />
          </div>
        </div>
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
