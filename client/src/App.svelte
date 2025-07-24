<script lang="ts">
  import { createBackendConnection } from './utils/backend';
  import { theme } from './stores/theme';
  
  // Import all modular components
  import TextInputCard from './components/TextInputCard.svelte';
  import QueryResultCard from './components/QueryResultCard.svelte';
  import SQLDisplay from './components/SQLDisplay.svelte';
  import AIAssistantSection from './components/AIAssistantSection.svelte';
  import StatusFooter from './components/StatusFooter.svelte';
  import ThemeToggle from './components/ThemeToggle.svelte';
  import SubquerySection from './components/SubquerySection.svelte';

  export let model;

  // Create backend connection
  const backend = createBackendConnection(model);
  
  // Destructure stores and functions for cleaner usage
  const { message, values, idsLength, listNames, actionButtons, handleTextInput, handleLLMQuestion, subqueryEnabled, subqueries, llmMessage, llmLoading, llmError, apiStatus } = backend;
  
  // Local state for text input
  let textInput = '';
  
  // Get data fields from backend list_names (now a simple list)
  $: dataFields = $listNames || [];
  
  // Handle LLM question submission (now handled by backend)
  function handleLLMQuestionSubmit(question: string) {
    handleLLMQuestion(question);
  }
</script>

<main class="w-full max-w-full mx-auto p-4 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200 relative">
  <div class="absolute top-4 right-4 z-10">
    <ThemeToggle />
  </div>
  
  <!-- Row with Text Input Card and Query Result Card -->
  <div class="flex flex-col lg:flex-row gap-2 mb-2">
    <!-- Left side: Text Input Card and Message Card stacked -->
    <div class="flex-1 flex flex-col gap-0">
      <TextInputCard 
        value={textInput} 
        onInput={(value) => {
          textInput = value;
          handleTextInput(value);
        }}
        {actionButtons}
        {dataFields}
        width="w-full"
      />
      <SQLDisplay message={$message} width="w-full" />
    </div>
    
    <!-- Right side: Query Result Card and Subquery Section -->
    <div class="lg:w-80 flex flex-col gap-2">
      <QueryResultCard 
        values={$values}
        idsLength={$idsLength}
        width="w-full"
      />
      <SubquerySection 
        width="w-full" 
        enabled={$subqueryEnabled}
        subqueries={$subqueries}
        idsLength={$idsLength}
        onToggle={(enabled) => {
          model.set('subquery_enabled', enabled);
          model.save_changes();
        }}
      />
    </div>
  </div>

  <!-- AI Assistant Section -->
  <div class="mb-2">
    <AIAssistantSection 
      onSubmit={handleLLMQuestionSubmit}
      message={$llmMessage}
      isLoading={$llmLoading}
      error={$llmError}
      apiStatus={$apiStatus}
      width="w-full"
    />
  </div>

  <!-- Status Footer -->
  <StatusFooter />
</main>

<style>
  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
</style>
