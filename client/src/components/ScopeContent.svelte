<script lang="ts">
  import Fa from 'svelte-fa';
  import SliceMetricBar from './charts/SliceMetricBar.svelte';
  import {
    faChevronLeft,
    faChevronRight,
    faPlus,
    faSearch,
    faWrench,
  } from '@fortawesome/free-solid-svg-icons';
  import Hoverable from '../utils/Hoverable.svelte';

  export let scopeName: string = '';
  export let isAnalyzed: boolean = false;
  export let isLoading: boolean = false;
  export let loadingMessage: string = '';
  export let onAnalyze: () => void = () => {};
  export let onInsert: (scope: string, selection: string) => void = () => {};
  export let concepts: Array<{
    id: any;
    name: string;
    type: string;
    count: number;
  }> = [];
  export let scopeConcepts: any = {};
  export let queryByName: boolean = false;

  let search = '';

  // Calculate total count for all concepts
  $: totalCount = concepts.reduce((sum, concept) => sum + concept.count, 0);

  // Check if concepts are showing IDs (indicating a problem with name lookup)
  $: hasConceptIds = concepts.some((concept) =>
    concept.name.startsWith('Concept ')
  );

  // Check if there's an error in the analysis
  $: hasError = scopeConcepts && scopeConcepts.error;

  // Filter concepts by search string (case-insensitive, id or name)
  $: filteredConcepts = search.trim()
    ? concepts.filter(
        (c) =>
          (c.name ?? '')
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase()) ||
          `${c.id ?? ''}`
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase())
      )
    : concepts;

  // Sort filtered concepts by count (high to low)
  $: sortedConcepts = [...filteredConcepts].sort((a, b) => b.count - a.count);

  // Pagination constants and state
  const CONCEPTS_PER_PAGE = 50;
  let currentPage = 1;

  // Compute total pages
  $: totalPages = Math.max(
    1,
    Math.ceil(sortedConcepts.length / CONCEPTS_PER_PAGE)
  );

  // Compute concepts for current page
  $: paginatedConcepts = sortedConcepts.slice(
    (currentPage - 1) * CONCEPTS_PER_PAGE,
    currentPage * CONCEPTS_PER_PAGE
  );

  // Reset to first page if sortedConcepts changes and currentPage is out of range
  $: if (currentPage > totalPages) currentPage = 1;

  function prevPage() {
    if (currentPage > 1) currentPage -= 1;
  }
  function nextPage() {
    if (currentPage < totalPages) currentPage += 1;
  }

  // Track selected concept IDs
  let selectedConceptIDs: Set<string> = new Set();

  // Helper: all filtered concepts selected?
  $: allFilteredSelected =
    filteredConcepts.length > 0 &&
    filteredConcepts.every((c) => selectedConceptIDs.has(c.id));

  // Helper: some but not all filtered concepts selected?
  $: someFilteredSelected =
    filteredConcepts.some((c) => selectedConceptIDs.has(c.id)) &&
    !allFilteredSelected;

  function toggleSelectAllFiltered() {
    if (allFilteredSelected) {
      // Deselect all filtered
      filteredConcepts.forEach((c) => selectedConceptIDs.delete(c.id));
      // Force reactivity
      selectedConceptIDs = new Set(selectedConceptIDs);
    } else {
      // Select all filtered
      filteredConcepts.forEach((c) => selectedConceptIDs.add(c.id));
      selectedConceptIDs = new Set(selectedConceptIDs);
    }
  }

  function toggleSelectConcept(id: string) {
    if (selectedConceptIDs.has(id)) {
      selectedConceptIDs.delete(id);
    } else {
      selectedConceptIDs.add(id);
    }
    selectedConceptIDs = new Set(selectedConceptIDs);
  }
</script>

<!-- Selected Scope Header -->
<div class="pb-6 shrink-0 flex items-center justify-between gap-2">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto">
    {scopeName}
  </h2>
  <button
    class="px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50"
    disabled={selectedConceptIDs.size == 0}
    on:click={() => {
      if (queryByName) {
        let names = concepts
          .filter((c) => selectedConceptIDs.has(c.id))
          .map((c) => "'" + c.name + "'");
        onInsert(scopeName, `name in (${names.join(', ')})`);
      } else {
        let ids = concepts
          .filter((c) => selectedConceptIDs.has(c.id))
          .map((c) => `${c.id}`);
        onInsert(scopeName, `id in (${ids.join(', ')})`);
      }
    }}
  >
    <Fa icon={faPlus} class="inline mr-2" />
    Query {#if selectedConceptIDs.size > 0}{selectedConceptIDs.size} Concept{selectedConceptIDs.size !=
      1
        ? 's'
        : ''}{/if}
  </button>
  <button
    on:click={() => (queryByName = !queryByName)}
    disabled={selectedConceptIDs.size == 0}
    class="px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
    title="Change whether to add to query by concept name or ID"
  >
    {#if queryByName}By Name{:else}By ID{/if}
  </button>
  <input
    type="search"
    class="shrink-1 ml-4 px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"
    placeholder="Filter concepts..."
    bind:value={search}
    autocomplete="off"
  />
</div>

<div class="w-full flex-auto flex flex-col h-0">
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
      <div class="w-1/2 text-gray-700 dark:text-gray-200 text-lg font-semibold">
        Data elements not retrieved yet
      </div>
      <p class="text-gray-600 dark:text-gray-400 w-1/3">
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
      class="bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"
    >
      <div
        class="grid gap-4 px-4 py-4 items-center"
        style="grid-template-columns: 2rem 2fr 1fr 2fr;"
      >
        <!-- Header Checkbox -->
        <div class="flex items-center justify-center">
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            checked={allFilteredSelected}
            indeterminate={someFilteredSelected}
            on:change={toggleSelectAllFiltered}
            aria-label="Select all concepts"
          />
        </div>
        <div class="font-semibold text-gray-900 dark:text-gray-100">
          Data Element
        </div>
        <div class="font-semibold text-gray-900 dark:text-gray-100">Type</div>
        <div class="font-semibold text-gray-900 dark:text-gray-100">
          Count
          {#if totalCount > 0}
            <span class="text-sm font-normal text-gray-600 dark:text-gray-400">
              (Total: {totalCount.toLocaleString()})
            </span>
          {/if}
        </div>
      </div>
    </div>

    <!-- Scrollable Table Body -->
    <div
      class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto"
    >
      {#if paginatedConcepts.length > 0}
        {#each paginatedConcepts as concept, index}
          <Hoverable
            class="grid gap-4 px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 items-center"
            style="grid-template-columns: 2rem 2fr 1fr 2fr;"
            let:hovering
          >
            <!-- Row Checkbox -->
            <div class="flex items-center justify-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                checked={selectedConceptIDs.has(concept.id)}
                on:change={() => toggleSelectConcept(concept.id)}
                aria-label="Select concept"
              />
            </div>
            <div
              class="text-gray-900 dark:text-gray-100 font-medium truncate"
              title={concept.name}
            >
              {#if concept.id != concept.name}<span
                  class="font-mono text-gray-500 dark:text-gray-400"
                  >{concept.id}&nbsp;</span
                >{/if}{concept.name}
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {concept.type ===
                'event'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : concept.type === 'interval'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}"
              >
                {concept.type}
              </span>
            </div>
            <div class="flex gap-2 justify-between">
              <div class="flex flex-col space-y-2">
                {#if totalCount > 0}
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
                {/if}
                <div class="text-gray-600 dark:text-gray-200 font-mono text-sm">
                  {concept.count.toLocaleString()}<span class="opacity-80">
                    &nbsp;/&nbsp;{totalCount.toLocaleString()}</span
                  >
                </div>
              </div>
              {#if hovering}
                <button
                  class="px-3 py-0.5 text-sm font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"
                  on:click={() => {
                    if (queryByName)
                      onInsert(scopeName, `name = '${concept.name}'`);
                    else onInsert(scopeName, `id = ${concept.id}`);
                  }}
                >
                  <Fa icon={faPlus} class="inline mr-2" />
                  Query
                </button>
              {/if}
            </div>
          </Hoverable>
        {/each}
      {:else}
        <div class="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
          No concepts found for this scope.
        </div>
      {/if}
    </div>
    {#if sortedConcepts.length > CONCEPTS_PER_PAGE}
      <!-- Pagination Control -->
      <div
        class="shrink-0 flex justify-end items-center px-6 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
      >
        <button
          class="p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          on:click={prevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          <Fa icon={faChevronLeft} />
        </button>
        <span class="text-sm">
          Concepts {(currentPage - 1) * CONCEPTS_PER_PAGE + 1} - {Math.min(
            currentPage * CONCEPTS_PER_PAGE,
            concepts.length
          )} of {concepts.length}
        </span>
        <button
          class="p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          on:click={nextPage}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          <Fa icon={faChevronRight} />
        </button>
      </div>
    {/if}
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
