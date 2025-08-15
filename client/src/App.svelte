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
  } = backend;

  let selectedScope: string = '';

  // Get data fields from backend list_names (now a simple list)
  $: dataFields = $listNames || [];

  // Tab state
  let activeTab = 'query-inspector';

  // AI History Cache - stores up to 10 recent conversations
  let aiHistory: Array<{
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: Date;
  }> = [
    // Test data - manually set some history for testing
    {
      question: 'Show me patients with diabetes',
      answer:
        "I'll help you create a TempoQL query to find patients with diabetes. Here's the query:\n\n`{name contains /diabetes/i; scope = Condition}`\n\nThis query searches for conditions with 'diabetes' in the name, case-insensitive.",
      query: '{name contains /diabetes/i; scope = Condition}',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    },
    {
      question: 'What are the most common medications?',
      answer:
        'To find the most common medications, you can use this query:\n\n`{scope = Drug} | count by name`\n\nThis will count occurrences of each drug and show you the most frequently prescribed medications.',
      query: '{scope = Drug} | count by name',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    },
    {
      question:
        'Explain this query: last {name contains /Temperature/i; scope = Measurement} before #now',
      answer:
        "This query finds the most recent temperature measurements before the current time. It searches for measurements with 'Temperature' in the name and returns the last occurrence for each patient.",
      query:
        'last {name contains /Temperature/i; scope = Measurement} before #now',
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
    },
    {
      question: 'How do I find blood pressure readings?',
      answer:
        'To find blood pressure readings, use this query:\n\n`{name contains /blood pressure/i OR name contains /systolic/i OR name contains /diastolic/i; scope = Measurement}`\n\nThis will capture various blood pressure measurements in your dataset.',
      query:
        '{name contains /blood pressure/i OR name contains /systolic/i OR name contains /diastolic/i; scope = Measurement}',
      timestamp: new Date(Date.now() - 14400000), // 4 hours ago
    },
    {
      question: 'Show me patients with heart conditions',
      answer:
        "Here's a query to find patients with heart conditions:\n\n`{name contains /heart/i OR name contains /cardiac/i OR name contains /cardiovascular/i; scope = Condition}`\n\nThis searches for conditions related to heart health.",
      query:
        '{name contains /heart/i OR name contains /cardiac/i OR name contains /cardiovascular/i; scope = Condition}',
      timestamp: new Date(Date.now() - 18000000), // 5 hours ago
    },
  ];

  // History dropdown state
  let showHistoryDropdown = false;
  let showQueryHistoryDropdown = false;

  // Track current question for history
  let currentQuestion = '';

  // Track history dropdown position
  let historyDropdownPosition = { top: 0, left: 0 };
  let queryHistoryDropdownPosition = { top: 0, left: 0 };
  let aiAssistantSection: HTMLElement;

  // Track AI input override for history selection
  let aiInputValueOverride = '';

  // Track historical response display (separate from backend llm_message)
  let historicalResponse = '';

  // Handle LLM question submission (now handled by backend)
  function handleLLMQuestionSubmit(question: string) {
    currentQuestion = question; // Track the current question
    historicalResponse = ''; // Clear any historical response when submitting new question
    handleLLMQuestion(question);
  }

  // Watch for AI responses and add them to history
  $: if (
    $llmResponse &&
    $llmResponse.trim() &&
    !$llmLoading &&
    currentQuestion &&
    !historicalResponse
  ) {
    // Add the question-response pair to history
    // Extract query from the response if available
    const extractedQuery = $extractedQuery || null;
    addToHistory(currentQuestion, $llmResponse, extractedQuery);
    currentQuestion = ''; // Reset current question
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

  function handleExplain() {
    if ($textInput.trim()) {
      console.log('🔍 Explain button clicked for query:', $textInput);
      // Use the AI assistant in explain mode to explain the current query
      handleLLMQuestion($textInput, 'explain');
    }
  }

  // Add new conversation to history
  function addToHistory(
    question: string,
    answer: string | null,
    query: string | null = null
  ) {
    const newEntry = {
      question,
      answer,
      query,
      timestamp: new Date(),
    };

    // Add to beginning of array (most recent first)
    aiHistory = [newEntry, ...aiHistory];

    // Keep only the last 10 entries
    if (aiHistory.length > 10) {
      aiHistory = aiHistory.slice(0, 10);
    }

    console.log('📚 Added to history:', newEntry);
  }

  // Handle history button click - toggle dropdown
  function handleHistoryClick() {
    console.log('📚 History button clicked');

    showHistoryDropdown = !showHistoryDropdown;
  }

  // Handle query history button click - toggle dropdown
  function handleQueryHistoryClick() {
    console.log('📚 Query History button clicked');

    showQueryHistoryDropdown = !showQueryHistoryDropdown;
  }

  // Handle selecting a history item
  function handleHistorySelect(historyItem: {
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: Date;
  }) {
    console.log('📚 AI History item selected:', historyItem);

    // Close the dropdown
    showHistoryDropdown = false;

    // Populate text input with query and AI assistant with question if available
    if (historyItem.query) {
      // Set the extracted query in the main text input box and sync with backend
      $textInput = historyItem.query;
      model.set('text_input', historyItem.query);
      model.save_changes();
    }

    if (historyItem.question) {
      // Set the question in the AI assistant input
      aiInputValueOverride = historyItem.question;

      // Clear the override after a short delay to allow the component to update
      setTimeout(() => {
        aiInputValueOverride = '';
      }, 100);
    }

    // Set the historical response to display the answer if available
    if (historyItem.answer) {
      historicalResponse = historyItem.answer;
    }
  }

  // Handle query history item selection
  function handleQueryHistorySelect(historyItem: {
    question: string;
    answer: string | null;
    query: string | null;
    timestamp: Date;
  }) {
    console.log('📚 Query History item selected:', historyItem);

    // Close dropdown
    showQueryHistoryDropdown = false;

    // Populate text input with query and AI assistant with question if available
    if (historyItem.query) {
      // Set the extracted query in the main text input box and sync with backend
      $textInput = historyItem.query;
      model.set('text_input', historyItem.query);
      model.save_changes();
    }

    if (historyItem.question) {
      // Set the question in the AI assistant input
      aiInputValueOverride = historyItem.question;

      // Clear the override after a short delay to allow the component to update
      setTimeout(() => {
        aiInputValueOverride = '';
      }, 100);
    }

    // Set the historical response to display the answer if available
    if (historyItem.answer) {
      historicalResponse = historyItem.answer;
    }
  }

  // Close history dropdown
  function handleHistoryClose() {
    showHistoryDropdown = false;
  }

  // Handle query history dropdown close
  function handleQueryHistoryClose() {
    showQueryHistoryDropdown = false;
  }
</script>

<main
  class="w-full bg-white dark:bg-slate-950 transition-colors duration-200 relative overflow-hidden flex flex-col"
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
      />
    {:else if activeTab === 'query-inspector'}
      <QueryInspectorTab
        bind:textInput={$textInput}
        {dataFields}
        onRun={handleRun}
        onExplain={handleExplain}
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
        aiAssistantRef={aiAssistantSection}
        {aiInputValueOverride}
        {historicalResponse}
        width="w-full"
      />
    {/if}
  </div>

  <!-- History Dropdown Component -->
  <HistoryDropdown
    isVisible={showHistoryDropdown}
    history={aiHistory}
    onClose={handleHistoryClose}
    onSelect={handleHistorySelect}
    position={historyDropdownPosition}
  />

  <!-- Query History Dropdown Component -->
  <HistoryDropdown
    isVisible={showQueryHistoryDropdown}
    history={aiHistory}
    onClose={handleQueryHistoryClose}
    onSelect={handleQueryHistorySelect}
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
