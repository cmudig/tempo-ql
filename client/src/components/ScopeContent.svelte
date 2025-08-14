<script lang="ts">
  import Fa from 'svelte-fa';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';

  export let scopeName: string = '';
  export let isAnalyzed: boolean = false;
  export let isLoading: boolean = false;
  export let loadingMessage: string = '';
  export let onAnalyze: () => void = () => {};
  export let concepts: Array<{ name: string; type: string; count: number }> =
    [];
  export let scopeConcepts: any = {};

  // Calculate total count for all concepts
  $: totalCount = concepts.reduce((sum, concept) => sum + concept.count, 0);

  // Check if concepts are showing IDs (indicating a problem with name lookup)
  $: hasConceptIds = concepts.some((concept) =>
    concept.name.startsWith('Concept ')
  );

  // Check if there's an error in the analysis
  $: hasError = scopeConcepts && scopeConcepts.error;

  // Sort concepts by count (high to low)
  $: sortedConcepts = [...concepts].sort((a, b) => b.count - a.count);
</script>

<div class="w-full flex-auto">
  {#if isLoading}
    <!-- Loading State -->
    <div class="text-center py-16">
      <!-- Loading Animation -->
      <div class="flex justify-center mb-8">
        <div class="relative">
          <!-- Outer ring -->
          <div
            class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"
          ></div>
          <!-- Inner ring -->
          <div
            class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin"
            style="animation-direction: reverse; animation-duration: 1.5s;"
          ></div>
          <!-- Center dot -->
          <div
            class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"
          ></div>
        </div>
      </div>

      <!-- Current Status -->
      {#if loadingMessage}
        <div
          class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
        >
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span class="text-sm text-blue-700 dark:text-blue-300 font-medium">
              {loadingMessage}
            </span>
          </div>
        </div>
      {/if}
    </div>
  {:else if !isAnalyzed}
    <!-- Not Analyzed State -->
    <div
      class="flex flex-col w-full h-full items-center justify-center text-center gap-4"
    >
      <div
        class="w-1/2 text-slate-700 dark:text-slate-200 text-lg font-semibold"
      >
        Data elements not retrieved yet
      </div>
      <p class="text-slate-600 dark:text-slate-400 w-1/3">
        Click below to retrieve available data elements in this scope.
      </p>
      <button
        class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"
        on:click={onAnalyze}
        disabled={isLoading}
      >
        <Fa icon={faSearch} class="inline mr-2" />
        Load Data Elements for <span class="font-mono">{scopeName}</span>
      </button>
    </div>
  {:else}
    <!-- Analyzed State -->
    <div class="w-full">
      <!-- Error State -->
      {#if hasError}
        <div
          class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4"
        >
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="text-red-600 dark:text-red-400">❌</span>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
                Analysis Failed
              </h3>
              <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{scopeConcepts.error}</p>
                <button
                  class="mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"
                  on:click={() => onAnalyze()}
                >
                  🔄 Retry Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      {:else if hasConceptIds}
        <!-- Warning if concept IDs are showing -->
        <div
          class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4"
        >
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <span class="text-yellow-600 dark:text-yellow-400">⚠️</span>
            </div>
            <div class="ml-3">
              <h3
                class="text-sm font-medium text-yellow-800 dark:text-yellow-200"
              >
                Concept Names Not Found
              </h3>
              <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.
                </p>
                <button
                  class="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"
                  on:click={() => onAnalyze()}
                >
                  🔄 Refresh Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      {/if}
      <!-- Fixed Header Section -->
      <div
        class="bg-slate-50 dark:bg-slate-800 rounded-t-lg border border-slate-200 dark:border-slate-700"
      >
        <div class="grid grid-cols-3 gap-4 px-6 py-4">
          <div class="font-semibold text-slate-900 dark:text-slate-100">
            Data Element
          </div>
          <div class="font-semibold text-slate-900 dark:text-slate-100">
            Type
          </div>
          <div class="font-semibold text-slate-900 dark:text-slate-100">
            Count
            {#if totalCount > 0}
              <span
                class="text-sm font-normal text-slate-600 dark:text-slate-400"
              >
                (Total: {totalCount.toLocaleString()})
              </span>
            {/if}
          </div>
        </div>
      </div>

      <!-- Scrollable Table Body -->
      <div
        class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-b-lg overflow-hidden"
      >
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          {#if sortedConcepts.length > 0}
            {#each sortedConcepts as concept, index}
              <div
                class="grid grid-cols-3 gap-4 px-6 py-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150"
              >
                <div
                  class="text-slate-900 dark:text-slate-100 font-medium truncate"
                  title={concept.name}
                >
                  {concept.name}
                </div>
                <div class="text-slate-600 dark:text-slate-400">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {concept.type ===
                    'event'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : concept.type === 'interval'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200'}"
                  >
                    {concept.type}
                  </span>
                </div>
                <div class="flex flex-col space-y-2">
                  {#if totalCount > 0}
                    <div class="flex flex-col space-y-1">
                      <div class="w-32">
                        <SliceMetricBar
                          width={128}
                          value={concept.count / totalCount}
                          showTooltip={false}
                          showFullBar={true}
                          color="#3b82f6"
                          fullBarColor="#9ca3af"
                          horizontalLayout={true}
                        />
                      </div>
                    </div>
                  {/if}
                  <div
                    class="text-slate-600 dark:text-slate-200 font-mono text-sm"
                  >
                    {concept.count.toLocaleString()}<span class="opacity-80">
                      &nbsp;/&nbsp;{totalCount.toLocaleString()}</span
                    >
                  </div>
                </div>
              </div>
            {/each}
          {:else}
            <div
              class="px-6 py-8 text-center text-slate-500 dark:text-slate-400"
            >
              No concepts found for this scope.
            </div>
          {/if}
        </div>
      </div>

      <!-- Summary -->
      {#if concepts.length > 0}
        <div class="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Found {concepts.length} concept{concepts.length !== 1 ? 's' : ''} in {scopeName}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  /* Dark mode scrollbar */
  :global(.dark) .custom-scrollbar {
    scrollbar-color: #475569 #1e293b;
  }

  :global(.dark) .custom-scrollbar::-webkit-scrollbar-track {
    background: #1e293b;
  }

  :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #475569;
  }

  :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
</style>
