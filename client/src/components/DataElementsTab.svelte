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
  $: isAnalyzed = selectedScope && scopeConcepts && scopeConcepts.scope_name === selectedScope;
  $: concepts = isAnalyzed && scopeConcepts.concepts ? scopeConcepts.concepts.map(concept => ({
    name: concept.name,
    type: concept.type,
    count: concept.count
  })) : [];
</script>

<div class="flex h-full {width} overflow-hidden">
  <!-- Left Sidebar -->
  <div class="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
    <!-- Scopes Header -->
    <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Scopes
      </h3>
    </div>
    
    <!-- Scopes Content -->
    <div class="p-4">
      {#if scopes.length > 0}
        <div class="space-y-1">
          {#each scopes as scope}
            <button
              class="w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 {selectedScope === scope ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}"
              on:click={() => onScopeSelect(scope)}
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
  <div class="flex-1 bg-white dark:bg-gray-900 p-6">
    {#if selectedScope}
      <!-- Selected Scope Header -->
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
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
        concepts={concepts}
        scopeConcepts={scopeConcepts}
        onAnalyze={() => onAnalyzeScope(selectedScope)}
      />
    {:else}
      <!-- Default Content -->
      <div class="text-center py-12">
        <div class="text-6xl mb-4">📊</div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Data Elements
        </h3>
        <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Select a scope from the sidebar to explore data elements for that table.
          <br><br>
          <span class="text-sm text-gray-500 dark:text-gray-500">
            Choose a scope to get started...
          </span>
        </p>
      </div>
    {/if}
  </div>
</div> 