<script lang="ts">
  import ScopeContent from './ScopeContent.svelte';

  export let width: string = 'w-full';
  export let scopes: string[] = [];
  export let selectedScope: string = '';
  export let scopeConcepts: any = {};
  export let isLoading: boolean = false;
  export let loadingMessage: string = '';
  export let onScopeSelect: (scope: string) => void = () => {};
  export let onAnalyzeScope: (scope: string) => void = () => {};

  // Real analysis data from backend
  $: isAnalyzed =
    selectedScope &&
    scopeConcepts &&
    scopeConcepts.scope_name === selectedScope;
  $: concepts =
    isAnalyzed && scopeConcepts.concepts
      ? scopeConcepts.concepts.map((concept) => ({
          name: concept.name,
          type: concept.type,
          count: concept.count,
        }))
      : [];

  $: if (!selectedScope && scopes.length > 0) selectedScope = scopes[0];
</script>

<div class="flex h-full {width} overflow-hidden">
  <!-- Left Sidebar -->
  <div
    class="w-1/4 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex-shrink-0"
  >
    <!-- Scopes Header -->
    <h3
      class="px-4 py-3 font-semibold uppercase text-slate-900 dark:text-slate-100"
    >
      Scopes
    </h3>

    <!-- Scopes Content -->
    <div class="px-4">
      {#if scopes.length > 0}
        <div class="space-y-1">
          {#each scopes as scope}
            <button
              class="w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 {selectedScope ===
              scope
                ? 'bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'}"
              on:click={() => {
                selectedScope = scope;
                onScopeSelect(scope);
              }}
            >
              {scope}
            </button>
          {/each}
        </div>
      {:else}
        <div class="text-slate-500 dark:text-slate-400 text-sm">
          No scopes available...
        </div>
      {/if}
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="flex-auto bg-white dark:bg-slate-900 p-6 flex flex-col h-full">
    {#if selectedScope}
      <!-- Selected Scope Header -->
      <div class="pb-6 shrink-0">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
          {selectedScope}
        </h2>
        <div class="mt-2 h-1 w-16 bg-blue-600 dark:bg-blue-400 rounded"></div>
      </div>

      <!-- Scope Content -->
      <ScopeContent
        scopeName={selectedScope}
        {isAnalyzed}
        {isLoading}
        {loadingMessage}
        {concepts}
        {scopeConcepts}
        onAnalyze={() => onAnalyzeScope(selectedScope)}
      />
    {:else}
      <!-- Default Content -->
      <div class="flex w-full h-full items-center justify-center">
        <div class="w-1/2 text-slate-600 dark:text-slate-400 text-center">
          Select a scope from the sidebar to explore available data elements.
        </div>
      </div>
    {/if}
  </div>
</div>
