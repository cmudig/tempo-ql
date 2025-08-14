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
  import QueryHistoryDropdown from './components/QueryHistoryDropdown.svelte';

  export let model;

  // Create backend connection
  const backend = createBackendConnection(model);

  // Destructure stores and functions for cleaner usage
  const {
    message,
    values,
    idsLength,
    listNames,
    handleTextInput,
    handleLLMQuestion,
    subqueryEnabled,
    subqueries,
    scopes,
    selectedScope,
    scopeConcepts,
    handleScopeAnalysis,
    llmMessage,
    llmLoading,
    llmError,
    llmEnabled,
    apiStatus,
    isLoading,
    loadingMessage,
    extractedQuery,
    aiExplanation,
    hasExtractedQuery,
    handleQueryExtraction,
    textInputStore,
  } = backend;

  // Local state for text input - reactive to backend changes
  let textInput = '';

  // Sync local textInput with backend store - this handles AI query extraction
  $: {
    if ($textInputStore && $textInputStore !== textInput) {
      console.log(
        '🔄 Frontend: Syncing text input from backend:',
        $textInputStore
      );
      console.log('🔄 Frontend: Previous textInput:', textInput);
      textInput = $textInputStore;
      console.log('🔄 Frontend: Updated textInput:', textInput);
    }
  }

  // Get data fields from backend list_names (now a simple list)
  $: dataFields = $listNames || [];

  // Tab state
  let activeTab = 'data-elements';

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
    $llmMessage &&
    $llmMessage.trim() &&
    !$llmLoading &&
    currentQuestion &&
    !historicalResponse
  ) {
    // Add the question-response pair to history
    // Extract query from the response if available
    const extractedQuery = $extractedQuery || null;
    addToHistory(currentQuestion, $llmMessage, extractedQuery);
    currentQuestion = ''; // Reset current question
  }

  // Handle tab changes
  function handleTabChange(tab: string) {
    activeTab = tab;
  }

  // Handle run button click
  function handleRun() {
    if (textInput.trim()) {
      model.set('process_trigger', 'run');
      model.save_changes();
    }
  }

  function handleExplain() {
    if (textInput.trim()) {
      console.log('🔍 Explain button clicked for query:', textInput);
      // Use the AI assistant in explain mode to explain the current query
      handleLLMQuestion(
        `Please explain this TempoQL query: ${textInput}`,
        'explain'
      );
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

    if (!showHistoryDropdown) {
      // Calculate position when opening dropdown
      calculateHistoryDropdownPosition();
    }

    showHistoryDropdown = !showHistoryDropdown;
  }

  // Handle query history button click - toggle dropdown
  function handleQueryHistoryClick() {
    console.log('📚 Query History button clicked');

    if (!showQueryHistoryDropdown) {
      // Calculate position when opening dropdown
      calculateQueryHistoryDropdownPosition();
    }

    showQueryHistoryDropdown = !showQueryHistoryDropdown;
  }

  // Calculate position for history dropdown
  function calculateHistoryDropdownPosition() {
    // Find all history buttons and log them
    const allHistoryButtons = document.querySelectorAll('.history-button');
    console.log('🔍 Found history buttons:', allHistoryButtons.length);

    // Find the history button directly
    const historyButton = document.querySelector('.history-button');
    console.log('🔍 Looking for history button:', historyButton);

    if (historyButton) {
      // Temporarily highlight the button we found for debugging
      (historyButton as HTMLElement).style.border = '2px solid red';
      (historyButton as HTMLElement).style.backgroundColor =
        'rgba(255, 0, 0, 0.2)';
      setTimeout(() => {
        (historyButton as HTMLElement).style.border = '';
        (historyButton as HTMLElement).style.backgroundColor = '';
      }, 2000);

      const buttonRect = historyButton.getBoundingClientRect();
      console.log('📍 Button position:', {
        top: buttonRect.top,
        bottom: buttonRect.bottom,
        left: buttonRect.left,
        right: buttonRect.right,
        width: buttonRect.width,
        height: buttonRect.height,
      });

      // Log the button's parent elements to see where it is
      let parent = historyButton.parentElement;
      let parentPath = [];
      while (parent && parentPath.length < 5) {
        parentPath.push(
          parent.tagName +
            (parent.className ? '.' + parent.className.split(' ')[0] : '')
        );
        parent = parent.parentElement;
      }
      console.log('📍 Button parent path:', parentPath.reverse().join(' > '));

      const dropdownWidth = 320; // Width of the dropdown

      // Position dropdown at the same level as the history button
      historyDropdownPosition = {
        top: buttonRect.top - 10, // Slightly above the button
        left: buttonRect.right - dropdownWidth, // Align right edge with button
      };

      console.log('📍 Calculated dropdown position:', historyDropdownPosition);

      // Ensure dropdown doesn't go off-screen to the left
      if (historyDropdownPosition.left < 10) {
        historyDropdownPosition.left = 10;
      }

      // Ensure dropdown doesn't go off-screen to the right
      if (
        historyDropdownPosition.left + dropdownWidth >
        window.innerWidth - 10
      ) {
        historyDropdownPosition.left = window.innerWidth - dropdownWidth - 10;
      }

      // Ensure dropdown doesn't go below viewport (only if it would be completely off-screen)
      const maxTop = window.innerHeight - 50; // Leave minimal space at bottom
      if (historyDropdownPosition.top > maxTop) {
        historyDropdownPosition.top = maxTop;
      }

      console.log('📍 Final dropdown position:', historyDropdownPosition);
      console.log('📍 Viewport height:', window.innerHeight);
      console.log('📍 Max top allowed:', maxTop);
    } else {
      console.log('❌ History button not found!');
    }
  }

  // Calculate position for query history dropdown
  function calculateQueryHistoryDropdownPosition() {
    // Find the query history button directly
    const queryHistoryButton = document.querySelector('.query-history-button');
    console.log('🔍 Looking for query history button:', queryHistoryButton);

    if (queryHistoryButton) {
      const buttonRect = queryHistoryButton.getBoundingClientRect();
      console.log('📍 Query button position:', {
        top: buttonRect.top,
        bottom: buttonRect.bottom,
        left: buttonRect.left,
        right: buttonRect.right,
      });

      const dropdownWidth = 320; // Width of the dropdown

      // Position dropdown right below the query history button
      queryHistoryDropdownPosition = {
        top: buttonRect.bottom + 5, // 5px below the button
        left: buttonRect.right - dropdownWidth, // Align right edge with button
      };

      console.log(
        '📍 Calculated query dropdown position:',
        queryHistoryDropdownPosition
      );

      // Ensure dropdown doesn't go off-screen to the left
      if (queryHistoryDropdownPosition.left < 10) {
        queryHistoryDropdownPosition.left = 10;
      }

      // Ensure dropdown doesn't go off-screen to the right
      if (
        queryHistoryDropdownPosition.left + dropdownWidth >
        window.innerWidth - 10
      ) {
        queryHistoryDropdownPosition.left =
          window.innerWidth - dropdownWidth - 10;
      }

      // Ensure dropdown doesn't go below viewport (only if it would be completely off-screen)
      const maxTop = window.innerHeight - 50; // Leave minimal space at bottom
      if (queryHistoryDropdownPosition.top > maxTop) {
        queryHistoryDropdownPosition.top = maxTop;
      }

      console.log(
        '📍 Final query dropdown position:',
        queryHistoryDropdownPosition
      );
    } else {
      console.log('❌ Query history button not found!');
    }
  }

  // Handle window resize to recalculate dropdown position
  function handleWindowResize() {
    if (showHistoryDropdown) {
      calculateHistoryDropdownPosition();
    }
    if (showQueryHistoryDropdown) {
      calculateQueryHistoryDropdownPosition();
    }
  }

  // Handle scroll to recalculate dropdown position
  function handleScroll() {
    if (showHistoryDropdown) {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        calculateHistoryDropdownPosition();
      });
    }
    if (showQueryHistoryDropdown) {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        calculateQueryHistoryDropdownPosition();
      });
    }
  }

  // Add window event listeners
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroll);
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
      textInput = historyItem.query;
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
      textInput = historyItem.query;
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
        selectedScope={$selectedScope}
        scopeConcepts={$scopeConcepts}
        isLoading={$isLoading}
        loadingMessage={$loadingMessage}
        onScopeSelect={(scope) => {
          model.set('selected_scope', scope);
          model.save_changes();
        }}
        onAnalyzeScope={(scope) => {
          handleScopeAnalysis(scope);
        }}
      />
    {:else if activeTab === 'query-inspector'}
      <QueryInspectorTab
        {textInput}
        onTextInput={(value) => {
          textInput = value;
          handleTextInput(value);
        }}
        {dataFields}
        onRun={handleRun}
        onExplain={handleExplain}
        message={$message}
        values={$values}
        idsLength={$idsLength}
        subqueryEnabled={$subqueryEnabled}
        subqueries={$subqueries}
        onSubqueryToggle={(enabled) => {
          model.set('subquery_enabled', enabled);
          model.save_changes();
        }}
        onLLMSubmit={handleLLMQuestionSubmit}
        llmMessage={$llmMessage}
        llmLoading={$llmLoading}
        llmError={$llmError}
        llmEnabled={$llmEnabled}
        apiStatus={$apiStatus}
        extractedQuery={$extractedQuery}
        aiExplanation={$aiExplanation}
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
  <QueryHistoryDropdown
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
