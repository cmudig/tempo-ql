<script lang="ts">
  import { createBackendConnection } from './utils/backend';
  import { theme } from './stores/theme';

  // Import all modular components
  import TabBar from './components/TabBar.svelte';
  import DataElementsTab from './components/DataElementsTab.svelte';
  import QueryInspectorTab from './components/QueryInspectorTab.svelte';
  import StatusFooter from './components/StatusFooter.svelte';
  import ThemeToggle from './components/ThemeToggle.svelte';
  import LoadingBar from './components/LoadingBar.svelte';
  import HistoryDropdown from './components/HistoryDropdown.svelte';

  export let model;

  // Create backend connection
  const backend = createBackendConnection(model);

  // Destructure stores and functions for cleaner usage
  const {
    values,
    listNames,
    runQuery,
    handleLLMQuestion,
    handleLLMExplanation,
    subqueries,
    queryError,
    scopes,
    scopeConcepts,
    handleScopeAnalysis,
    llmResponse,
    llmLoading,
    llmError,
    llmAvailable,
    llmExplanation,
    apiStatus,
    isLoading,
    loadingMessage,
    extractedQuery,
    hasExtractedQuery,
    handleQueryExtraction,
    textInput,
    queryHistory,
    aiHistory,
  } = backend;

  let selectedScope: string = '';

  // Get data fields from backend list_names (now a simple list)
  $: dataFields = $listNames || [];

  // Tab state
  let activeTab = 'query-inspector';

  // History dropdown state
  let showAIHistoryDropdown = false;
  let showQueryHistoryDropdown = false;

  // Track current question for history
  let currentQuestion = '';

  // Track history dropdown position
  let historyDropdownPosition = { top: 0, left: 0 };
  let queryHistoryDropdownPosition = { top: 0, left: 0 };

  // Handle LLM question submission (now handled by backend)
  function handleLLMQuestionSubmit(question: string) {
    currentQuestion = question; // Track the current question
    handleLLMQuestion(question);
  }

  // Handle tab changes
  function handleTabChange(tab: string) {
    activeTab = tab;
  }

  // Handle run button click
  function handleRun() {
    console.log('text input', $textInput);
    if ($textInput.trim()) {
      runQuery($textInput);
    }
  }

  // Handle history button click - toggle dropdown
  function handleHistoryClick() {
    showAIHistoryDropdown = !showAIHistoryDropdown;
  }

  // Handle query history button click - toggle dropdown
  function handleQueryHistoryClick() {
    showQueryHistoryDropdown = !showQueryHistoryDropdown;
  }

  // Handle selecting a history item
  function handleSelectHistoricalQuery(historyItem: {
    question?: string;
    answer?: string | null;
    query?: string | null;
    timestamp: string;
  }) {
    console.log('📚 AI History item selected:', historyItem);

    // Close the dropdown
    showAIHistoryDropdown = false;
    showQueryHistoryDropdown = false;

    // Populate text input with query and AI assistant with question if available
    if (historyItem.query) {
      // Set the extracted query in the main text input box and sync with backend
      $textInput = historyItem.query;
      model.set('text_input', historyItem.query);
      model.save_changes();
    }

    if (historyItem.question) {
      currentQuestion = historyItem.question;
    }

    // Set the historical response to display the answer if available
    if (historyItem.answer) {
      $llmResponse = historyItem.answer;
    }
  }

  // Close history dropdown
  function handleHistoryClose() {
    showAIHistoryDropdown = false;
  }

  // Handle query history dropdown close
  function handleQueryHistoryClose() {
    showQueryHistoryDropdown = false;
  }
</script>

<main
  class="w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex flex-col"
  style="height: 600px;"
>
  <!-- Tab Bar -->
  <TabBar {activeTab} onTabChange={handleTabChange} />

  <!-- Tab Content -->
  <div class="flex-auto w-full min-h-0 z-0">
    {#if activeTab === 'data-elements'}
      <DataElementsTab
        width="w-full"
        scopes={$scopes}
        bind:selectedScope
        scopeConcepts={$scopeConcepts}
        isLoading={$isLoading}
        loadingMessage={$loadingMessage}
        onScopeSelect={(scope) => {
          handleScopeAnalysis(scope, false);
        }}
        onAnalyzeScope={(scope) => {
          handleScopeAnalysis(scope, true);
        }}
        onInsert={(scope, selection) => {
          $textInput = $textInput + `{${selection}; scope = ${scope}}`;
          activeTab = 'query-inspector';
        }}
      />
    {:else if activeTab === 'query-inspector'}
      <QueryInspectorTab
        bind:textInput={$textInput}
        bind:aiQuestion={currentQuestion}
        {dataFields}
        onRun={handleRun}
        onExplain={handleLLMExplanation}
        queryError={$queryError}
        values={$values}
        subqueries={$subqueries}
        onLLMSubmit={handleLLMQuestionSubmit}
        llmResponse={$llmResponse}
        llmLoading={$llmLoading}
        llmError={$llmError}
        llmAvailable={$llmAvailable}
        apiStatus={$apiStatus}
        extractedQuery={$extractedQuery}
        llmExplanation={$llmExplanation}
        hasExtractedQuery={$hasExtractedQuery}
        onQueryExtracted={handleQueryExtraction}
        onHistoryClick={handleHistoryClick}
        onQueryHistoryClick={handleQueryHistoryClick}
        width="w-full"
      />
    {/if}
  </div>

  <!-- History Dropdown Component -->
  <HistoryDropdown
    isVisible={showAIHistoryDropdown}
    history={$aiHistory}
    onClose={handleHistoryClose}
    onSelect={handleSelectHistoricalQuery}
    position={historyDropdownPosition}
  />

  <!-- Query History Dropdown Component -->
  <HistoryDropdown
    isVisible={showQueryHistoryDropdown}
    history={$queryHistory}
    onClose={handleQueryHistoryClose}
    onSelect={handleSelectHistoricalQuery}
    position={queryHistoryDropdownPosition}
  />

  <!-- Loading Bar -->
  <LoadingBar isLoading={$isLoading} message={$loadingMessage} />
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
