<script lang="ts">
  import { get } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import { createHttpBackendConnection } from './utils/http_connection';

  // Import all modular components
  import TabBar from './components/TabBar.svelte';
  import DataElementsTab from './components/DataElementsTab.svelte';
  import QueryResultsTab from './components/QueryResultsTab.svelte';
  import LoadingBar from './components/LoadingBar.svelte';
  import HistoryDropdown from './components/HistoryDropdown.svelte';
  import EditorView from './components/EditorView.svelte';
  import NavBar from './components/NavBar.svelte';
  import defaultLogo from '../../assets/logo_light.png';

  // Create HTTP backend connection (FastAPI-based)
  const backend = createHttpBackendConnection('/api');

  // Destructure stores and functions for cleaner usage
  const {
    savePath,
    fileContents,
    values,
    listNames,
    runQuery,
    streamLLMExplanation,
    streamLLMQuestion,
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
    queryForResults,
    queryHistory,
    aiHistory,
  } = backend;

  let selectedScope: string = '';

  // Get data fields from backend list_data_elements (now a simple list)
  $: dataFields = $listNames || [];

  // Tab state
  let activeTab = 'data-elements';

  // History dropdown state
  let showAIHistoryDropdown = false;
  let showQueryHistoryDropdown = false;

  // Track current question for history
  let currentQuestion = '';

  // Track history dropdown position
  let historyDropdownPosition = { top: 0, left: 0 };
  let queryHistoryDropdownPosition = { top: 0, left: 0 };

  let currentQueryPath: string[] = [];
  let cancelLLMQuestionStream: (() => void) | null = null;
  let cancelLLMExplanationStream: (() => void) | null = null;

  function extractTempoQuery(text: string) {
    const match = text.match(/```tempoql\s*([\s\S]*?)```/i);
    if (match) {
      extractedQuery.set(match[1].trim());
      hasExtractedQuery.set(true);
    } else {
      hasExtractedQuery.set(false);
    }
  }

  function pushAIHistoryEntry(question: string, answer: string) {
    const queryText = get(extractedQuery) || '';
    aiHistory.update((current) => {
      const filtered = current.filter((entry) => entry.question !== question);
      filtered.unshift({
        question,
        answer,
        query: queryText,
        timestamp: new Date().toISOString(),
      });
      return filtered.slice(0, 10);
    });
  }

  function handleLLMQuestionSubmit(question: string) {
    currentQuestion = question;
    cancelLLMQuestionStream?.();
    llmError.set('');
    llmResponse.set('');
    extractedQuery.set('');
    hasExtractedQuery.set(false);
    llmLoading.set(true);

    let fullResponse = '';
    cancelLLMQuestionStream = streamLLMQuestion(
      question,
      get(textInput),
      (delta) => {
        if (!delta) return;
        fullResponse += delta;
        llmResponse.update((prev) => prev + delta);
      },
      () => {
        llmLoading.set(false);
        extractTempoQuery(fullResponse);
        pushAIHistoryEntry(question, fullResponse);
        cancelLLMQuestionStream = null;
      },
      (err) => {
        llmError.set(err);
        llmLoading.set(false);
        cancelLLMQuestionStream = null;
      }
    );
  }

  function handleLLMExplanationStream() {
    const currentQuery = get(queryForResults);
    const currentError = get(queryError);
    if (!currentQuery) {
      llmError.set('No query to explain');
      return;
    }

    cancelLLMExplanationStream?.();
    llmExplanation.set('');
    llmError.set('');
    llmLoading.set(true);

    cancelLLMExplanationStream = streamLLMExplanation(
      currentQuery,
      currentError,
      (delta) => {
        if (!delta) return;
        llmExplanation.update((prev) => prev + delta);
      },
      () => {
        llmLoading.set(false);
        cancelLLMExplanationStream = null;
      },
      (err) => {
        llmError.set(err);
        llmLoading.set(false);
        cancelLLMExplanationStream = null;
      }
    );
  }

  onDestroy(() => {
    cancelLLMQuestionStream?.();
    cancelLLMExplanationStream?.();
  });

  // Handle tab changes
  function handleTabChange(tab: string) {
    activeTab = tab;
  }

  // Handle run button click
  function handleRun() {
    console.log('text input', $textInput);
    if ($textInput.trim()) {
      runQuery(
        currentQueryPath.length > 0
          ? currentQueryPath[currentQueryPath.length - 1]
          : null,
        $textInput
      );
    }
    activeTab = 'results';
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

    // Populate text input with query if available
    if (historyItem.query) {
      // Set the extracted query in the main text input box
      $textInput = historyItem.query;
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

  let introVisible: boolean = true;
</script>

<main class="w-full h-screen flex flex-col bg-white dark:bg-gray-950 relative">
  <NavBar on:showintro={() => (introVisible = true)} />
  <div class="min-h-0 w-full flex-auto flex">
    <EditorView
      bind:fileContents={$fileContents}
      savePath={$savePath}
      bind:textInput={$textInput}
      bind:aiQuestion={currentQuestion}
      bind:currentQueryPath
      {dataFields}
      onRun={handleRun}
      onExplain={handleLLMExplanationStream}
      onLLMSubmit={handleLLMQuestionSubmit}
      llmResponse={$llmResponse}
      llmLoading={$llmLoading}
      llmError={$llmError}
      llmAvailable={$llmAvailable}
      apiStatus={$apiStatus}
      extractedQuery={$extractedQuery}
      hasExtractedQuery={$hasExtractedQuery}
      onQueryExtracted={handleQueryExtraction}
      onHistoryClick={handleHistoryClick}
      onQueryHistoryClick={handleQueryHistoryClick}
    />

    <div class="w-1/2 mb-2">
      <div
        class="w-full h-full border-l border-gray-300 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900"
      >
        <!-- Tab Bar -->
        <TabBar {activeTab} onTabChange={handleTabChange} />

        <!-- Tab Content -->
        <div class="flex-auto w-full min-h-0 z-0">
          {#if activeTab === 'results'}
            <QueryResultsTab
              bind:textInput={$textInput}
              queryForResults={$queryForResults}
              onRun={handleRun}
              onExplain={handleLLMExplanationStream}
              queryError={$queryError}
              values={$values}
              subqueries={$subqueries}
              llmAvailable={$llmAvailable}
              llmExplanation={$llmExplanation}
              llmLoading={$llmLoading}
              llmError={$llmError}
              width="w-full"
            />
          {:else if activeTab === 'data-elements'}
            <DataElementsTab
              scopes={$scopes}
              bind:scopeName={selectedScope}
              scopeConcepts={$scopeConcepts}
              isLoading={$isLoading}
              loadingMessage={$loadingMessage}
              onScopeSelect={(scope) => {
                handleScopeAnalysis(scope, false);
              }}
              onAnalyze={() => {
                handleScopeAnalysis(selectedScope, true);
              }}
              onInsert={(scope, selection) => {
                $textInput = $textInput + `{${selection}; scope = ${scope}}`;
              }}
            />
          {/if}
        </div>
      </div>
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
  </div>

  {#if introVisible}
    <div
      class="w-full h-full absolute top-0 left-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div
        class="relative bg-white rounded-lg flex flex-col items-center justify-between p-8"
        style="width: 50vw; height: 60vh; min-width: 320px; min-height: 320px; max-width: 90vw; max-height: 90vh;"
      >
        <div
          class="flex-1 w-full flex flex-col items-center justify-center overflow-auto mb-4 px-6"
        >
          <img src={defaultLogo} alt="TempoQL" class="w-64 max-w-1/2 mb-4" />
          <p class="text-gray-700 mb-4 text-center font-semibold">
            <a href="https://github.com/cmudig/tempo-ql" target="_blank"
              >TempoQL</a
            > is a readable, precise, and portable query language and visual interface
            for extracting and validating datasets from electronic health record
            (EHR) data.
          </p>
          <p class="text-gray-700 mb-2 text-center">
            This demo interface allows you to try TempoQL on the <a
              href="https://physionet.org/content/mimic-iv-demo/2.2/"
              target="_blank">MIMIC-IV Demo Dataset</a
            >. For other datasets, you can
            <a href="https://pypi.org/project/tempo-ql/" target="_blank"
              >install TempoQL</a
            >
            using Pip.<br />
          </p>
          <p class="text-gray-500 mb-4 text-center">
            <strong>How to Use:</strong> Type a TempoQL query in the top left, or
            ask the AI Assistant in the lower left to generate a query for you. TempoQL
            queries work best at extracting attributes, events, intervals, or time
            series over a set of patients.
          </p>
          <p class="text-gray-500 text-sm text-center">
            If using TempoQL in your work, please cite <a
              href="https://arxiv.org/abs/2511.09337"
              target="_blank">our paper</a
            >. This demo website was created by Ryan Ng.
          </p>
        </div>
        <div class="w-full flex justify-center">
          <button
            class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"
            on:click={() => (introVisible = false)}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  {/if}
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
