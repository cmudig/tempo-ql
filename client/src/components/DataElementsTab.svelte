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
  export let onInsert: (scope: string, selection: string) => void = () => {};

  // Real analysis data from backend
  $: isAnalyzed =
    selectedScope &&
    scopeConcepts &&
    scopeConcepts.scope_name === selectedScope;
  $: concepts =
    isAnalyzed && scopeConcepts.concepts ? scopeConcepts.concepts : [];

  $: if (!selectedScope && scopes.length > 0) {
    selectedScope = scopes[0];
    onScopeSelect(selectedScope);
  }
</script>

<div class="flex h-full {width} overflow-hidden">
  <!-- Left Sidebar -->
  <div
    class="w-1/4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-shrink-0"
  >
    <!-- Scopes Header -->
    <h3
      class="px-4 py-3 font-semibold uppercase text-gray-900 dark:text-gray-100"
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
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'}"
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
        <div class="text-gray-500 dark:text-gray-400 text-sm">
          No scopes available...
        </div>
      {/if}
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="flex-auto bg-white dark:bg-gray-900 p-6 flex flex-col h-full">
    {#if selectedScope}
      <!-- Scope Content -->
      <ScopeContent
        scopeName={selectedScope}
        {isAnalyzed}
        {isLoading}
        {loadingMessage}
        {concepts}
        {scopeConcepts}
        {onInsert}
        onAnalyze={() => onAnalyzeScope(selectedScope)}
      />
    {:else}
      <!-- Default Content -->
      <div class="flex w-full h-full items-center justify-center">
        <div class="w-1/2 text-gray-600 dark:text-gray-400 text-center">
          Select a scope from the sidebar to explore available data elements.
        </div>
      </div>
    {/if}
  </div>
</div>
