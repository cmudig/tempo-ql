<svelte:options accessors />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    getAutocompleteOptions,
    performAutocomplete,
  } from '../utils/autocomplete';
  import { theme } from '../stores/theme';
  import highlight from 'custom-syntax-highlighter';
  import {
    highlightPatterns,
    formatQueryForHighlights,
  } from '../utils/syntaxHighlight';

  export let value: string = '';
  export let onInput: (val: string) => void = () => {};
  export let width: string = 'w-full max-w-2xl';
  export let dataFields: string[] = [];
  export let onRun: () => void = () => {};
  export let onExplain: () => void = () => {};
  export let onHistoryClick: () => void = () => {};

  let textarea: HTMLTextAreaElement;
  let autocompleteContainer: HTMLDivElement;
  let highlightedView: HTMLElement;
  let autocompleteOptions: { value: string; type: string }[] = [];
  let selectedIndex = 0;
  let showAutocomplete = false;
  let cursorPosition = 0;

  // Generate unique ID for highlighting
  let highlightedViewID: string =
    'highlightView-' +
    new Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
      .join('');

  // Undo functionality
  let undoHistory: string[] = [];
  let undoIndex = -1;
  let isUndoRedo = false;

  // Initialize with empty value
  onMount(() => {
    addToHistory('');

    // Add click outside handler
    document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    // Clean up event listener
    document.removeEventListener('click', handleClickOutside);
  });

  // Update highlighting when value changes
  $: if (highlightedView && value !== undefined) {
    // Default highlight is the current value
    let displayText = value;
    // If showing a fix preview, we render diffs inside the overlay below, not here
    highlightedView.innerText = formatQueryForHighlights(displayText);
    highlight({
      selector: `#${highlightedViewID}`,
      patterns: highlightPatterns,
    });
  }

  // Update textarea when value changes externally (e.g., from AI extraction)
  $: if (textarea && value !== undefined && textarea.value !== value) {
    console.log(
      '🔄 TextInputCard: Updating textarea with external value:',
      value
    );
    textarea.value = value;
    autoResize(textarea);
    // Add to undo history for external updates
    addToHistory(value);
  }

  function handleClickOutside(event: MouseEvent) {
    // Check if click is outside the autocomplete container and textarea
    if (autocompleteContainer && textarea) {
      const target = event.target as Node;
      const isClickInsideAutocomplete = autocompleteContainer.contains(target);
      const isClickInsideTextarea = textarea.contains(target);

      // Close autocomplete if clicking outside autocomplete OR if clicking on textarea while autocomplete is open
      if (
        !isClickInsideAutocomplete ||
        (isClickInsideTextarea && showAutocomplete)
      ) {
        console.log('🖱️ Click detected - closing autocomplete');
        showAutocomplete = false;
      }
    }
  }

  function addToHistory(newValue: string) {
    // Don't add to history if this is an undo/redo operation
    if (isUndoRedo) {
      isUndoRedo = false;
      return;
    }

    // Remove any history after current index (for new changes after undo)
    undoHistory = undoHistory.slice(0, undoIndex + 1);

    // Add new value to history
    undoHistory.push(newValue);
    undoIndex = undoHistory.length - 1;

    // Keep only last 50 entries to prevent memory issues
    if (undoHistory.length > 50) {
      undoHistory = undoHistory.slice(-50);
      undoIndex = undoHistory.length - 1;
    }

    console.log('📝 Added to history:', newValue, 'Index:', undoIndex);
  }

  function undo() {
    if (undoIndex > 0) {
      isUndoRedo = true;
      undoIndex--;
      const previousValue = undoHistory[undoIndex];
      console.log('↶ Undo to:', previousValue);

      // Update the value
      value = previousValue;
      onInput(previousValue);

      // Update textarea
      if (textarea) {
        textarea.value = previousValue;
        autoResize(textarea);
        textarea.focus();
      }

      // Clear other data if input is empty
      if (!previousValue.trim()) {
        clearOtherData();
      }
    }
  }

  function redo() {
    if (undoIndex < undoHistory.length - 1) {
      isUndoRedo = true;
      undoIndex++;
      const nextValue = undoHistory[undoIndex];
      console.log('↷ Redo to:', nextValue);

      // Update the value
      value = nextValue;
      onInput(nextValue);

      // Update textarea
      if (textarea) {
        textarea.value = nextValue;
        autoResize(textarea);
        textarea.focus();
      }

      // Clear other data if input is empty
      if (!nextValue.trim()) {
        clearOtherData();
      }
    }
  }

  function clearOtherData() {
    console.log('🧹 Clearing other data due to empty input');
    // This will be handled by the backend when it receives an empty text_input
    // The backend should clear message, values, and other related data
  }

  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const newValue = target.value;
    console.log('🔍 handleInput - New value:', newValue);
    console.log('🔍 handleInput - Cursor position:', target.selectionStart);

    // Add to undo history
    addToHistory(newValue);

    onInput(newValue);
    autoResize(target);

    // Update cursor position
    cursorPosition = target.selectionStart || 0;
    console.log('🔍 handleInput - Updated cursor position:', cursorPosition);

    // Get autocomplete options
    updateAutocompleteOptions(newValue, cursorPosition);

    // Clear other data if input is empty
    if (!newValue.trim()) {
      clearOtherData();
    }
  }

  function updateAutocompleteOptions(text: string, position: number) {
    console.log('🔍 updateAutocompleteOptions - Text:', text);
    console.log('🔍 updateAutocompleteOptions - Position:', position);

    const beforeCursor = text.substring(0, position);
    const afterCursor = text.substring(position);
    console.log('🔍 updateAutocompleteOptions - Before cursor:', beforeCursor);
    console.log('🔍 updateAutocompleteOptions - After cursor:', afterCursor);

    // Find the word being typed
    const wordMatch = beforeCursor.match(/([^\s]*)$/);
    const currentWord = wordMatch ? wordMatch[1] : '';
    console.log('🔍 updateAutocompleteOptions - Current word:', currentWord);
    console.log(
      '🔍 updateAutocompleteOptions - Data fields available:',
      dataFields
    );

    if (currentWord.length > 0) {
      autocompleteOptions = getAutocompleteOptions(
        dataFields,
        currentWord,
        beforeCursor
      );
      console.log(
        '🔍 updateAutocompleteOptions - Autocomplete options:',
        autocompleteOptions
      );
      showAutocomplete = autocompleteOptions.length > 0;
      selectedIndex = 0;
      console.log(
        '🔍 updateAutocompleteOptions - Show autocomplete:',
        showAutocomplete
      );
    } else {
      showAutocomplete = false;
      console.log(
        '🔍 updateAutocompleteOptions - No current word, hiding autocomplete'
      );
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    console.log('🔍 handleKeydown - Key pressed:', event.key);
    console.log('🔍 handleKeydown - Show autocomplete:', showAutocomplete);
    console.log(
      '🔍 handleKeydown - Options count:',
      autocompleteOptions.length
    );

    // Handle Ctrl+Z (undo) and Ctrl+Y (redo)
    if (event.ctrlKey || event.metaKey) {
      if (event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        console.log('⌨️ Ctrl+Z pressed - Undo');
        undo();
        return;
      } else if (event.key === 'y' || (event.key === 'z' && event.shiftKey)) {
        event.preventDefault();
        console.log('⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo');
        redo();
        return;
      }
    }

    if (!showAutocomplete) {
      console.log('🔍 handleKeydown - Autocomplete not shown, ignoring key');
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        selectedIndex = (selectedIndex + 1) % autocompleteOptions.length;
        console.log(
          '🔍 handleKeydown - ArrowDown, new selectedIndex:',
          selectedIndex
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        selectedIndex =
          selectedIndex === 0
            ? autocompleteOptions.length - 1
            : selectedIndex - 1;
        console.log(
          '🔍 handleKeydown - ArrowUp, new selectedIndex:',
          selectedIndex
        );
        break;
      case 'Enter':
        if (showAutocomplete) {
          event.preventDefault();
          console.log(
            '🔍 handleKeydown - Enter pressed, selecting option:',
            autocompleteOptions[selectedIndex]
          );
          selectAutocompleteOption(autocompleteOptions[selectedIndex]);
        }
        break;
      case 'Escape':
        showAutocomplete = false;
        console.log('🔍 handleKeydown - Escape pressed, hiding autocomplete');
        break;
      case 'Tab':
        if (showAutocomplete) {
          event.preventDefault();
          console.log(
            '🔍 handleKeydown - Tab pressed, selecting option:',
            autocompleteOptions[selectedIndex]
          );
          selectAutocompleteOption(autocompleteOptions[selectedIndex]);
        }
        break;
    }
  }

  function selectAutocompleteOption(option: { value: string; type: string }) {
    console.log('🔍 selectAutocompleteOption - Selected option:', option);
    console.log('🔍 selectAutocompleteOption - Current value:', value);
    console.log(
      '🔍 selectAutocompleteOption - Cursor position:',
      cursorPosition
    );

    const beforeCursor = value.substring(0, cursorPosition);
    const afterCursor = value.substring(cursorPosition);
    console.log('🔍 selectAutocompleteOption - Before cursor:', beforeCursor);
    console.log('🔍 selectAutocompleteOption - After cursor:', afterCursor);

    // Find the word being replaced
    const wordMatch = beforeCursor.match(/([^\s]*)$/);
    const currentWord = wordMatch ? wordMatch[1] : '';
    const wordStart = beforeCursor.length - currentWord.length;
    console.log('🔍 selectAutocompleteOption - Current word:', currentWord);
    console.log(
      '🔍 selectAutocompleteOption - Word start position:',
      wordStart
    );

    // Calculate the replacement based on the option type
    let replacement: string;
    if (option.type === 'data_item') {
      // For data items, we need to handle the {field} syntax
      if (currentWord.includes('{')) {
        // If we're inside a {field} block, replace the current field
        const fieldMatch = beforeCursor.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        if (fieldMatch) {
          if (fieldMatch[2]) {
            // Replace the second field (after comma)
            replacement =
              beforeCursor.substring(
                0,
                fieldMatch.index! + fieldMatch[1].length + 2
              ) + option.value;
          } else {
            // Replace the first field
            replacement =
              beforeCursor.substring(0, fieldMatch.index! + 1) + option.value;
          }
        } else {
          replacement = beforeCursor + option.value;
        }
      } else {
        // Start a new {field} block
        replacement = beforeCursor + '{' + option.value;
      }
    } else {
      // For constants, replace the #word with #option
      replacement = beforeCursor.substring(0, wordStart) + '#' + option.value;
    }

    console.log('🔍 selectAutocompleteOption - Replacement:', replacement);

    // Update the value
    const newValue = replacement + afterCursor;
    console.log('🔍 selectAutocompleteOption - New value:', newValue);
    value = newValue;
    onInput(newValue);

    // Update cursor position
    const newCursorPosition = replacement.length;
    console.log(
      '🔍 selectAutocompleteOption - New cursor position:',
      newCursorPosition
    );
    setTimeout(() => {
      if (textarea) {
        textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        textarea.focus();
        console.log('🔍 selectAutocompleteOption - Cursor position set');
      }
    }, 0);

    // Hide autocomplete
    showAutocomplete = false;
    console.log('🔍 selectAutocompleteOption - Autocomplete hidden');
  }

  function autoResize(element: HTMLTextAreaElement) {
    // Reset height to auto to get the correct scrollHeight
    element.style.height = 'auto';
    // Set the height to the scrollHeight to fit all content
    element.style.height = element.scrollHeight + 'px';
  }

  // Auto-resize when value changes
  $: if (textarea && value) {
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => autoResize(textarea), 0);
  }
</script>

<div
  class="bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none {width} transition-colors duration-200"
>
  <!-- Text Input Section -->
  <div class="mb-2 relative">
    <textarea
      id="text-input"
      bind:this={textarea}
      class="w-full p-6 pr-32 bg-transparent font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"
      placeholder="// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"
      bind:value
      on:input={handleInput}
      on:keydown={handleKeydown}
      rows="1"
      style="color: transparent; caret-color: currentColor;"
    />

    <!-- Background for textarea -->
    <div
      class="absolute top-0 left-0 w-full h-full p-6 bg-gray-100 dark:bg-gray-800 rounded-md pointer-events-none z-0"
    ></div>

    <!-- Syntax Highlighting Overlay -->
    <div
      class="absolute top-0 left-0 w-full h-full p-6 pr-32 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words"
      id={highlightedViewID}
      bind:this={highlightedView}
    ></div>

    <!-- History Button in top-right corner -->
    <button
      on:click={onHistoryClick}
      class="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200 flex items-center justify-center z-30 query-history-button"
      title="View query history"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>

    <!-- Buttons inside text area -->
    <div class="absolute bottom-2 right-2 flex space-x-2 z-30">
      <!-- Explain Button -->
      <button
        class="px-3 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center space-x-1.5 text-xs bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border border-emerald-500 hover:border-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 shadow-sm hover:shadow"
        on:click={onExplain}
        disabled={!value.trim()}
        class:opacity-50={!value.trim()}
        class:cursor-not-allowed={!value.trim()}
      >
        <span class="text-xs">💡</span>
        <span>Explain</span>
      </button>

      <!-- Run Button -->
      <button
        class="px-3 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center space-x-1.5 text-xs bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white border border-indigo-500 hover:border-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 shadow-sm hover:shadow"
        on:click={onRun}
        disabled={!value.trim()}
        class:opacity-50={!value.trim()}
        class:cursor-not-allowed={!value.trim()}
      >
        <span class="text-xs">▶️</span>
        <span>Run</span>
      </button>
    </div>

    <!-- Autocomplete Dropdown -->
    {#if showAutocomplete && autocompleteOptions.length > 0}
      <div
        bind:this={autocompleteContainer}
        class="absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto"
      >
        {#each autocompleteOptions as option, index}
          <div
            class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors {index ===
            selectedIndex
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 dark:text-gray-200'}"
            role="button"
            tabindex="0"
            on:click={() => selectAutocompleteOption(option)}
            on:keydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAutocompleteOption(option);
              }
            }}
            on:mouseenter={() => (selectedIndex = index)}
          >
            <div class="flex items-center justify-between">
              <span class="font-mono text-sm">{option.value}</span>
              <span
                class="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {option.type === 'data_item' ? 'field' : 'const'}
              </span>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  /* Syntax highlighting styles */
  :global(.tempo-placeholder-token) {
    color: #8b5cf6;
    font-weight: 600;
  }

  :global(.tempo-string) {
    color: #059669;
  }

  :global(.tempo-constant) {
    color: #dc2626;
    font-weight: 600;
  }

  :global(.tempo-data-field) {
    color: #2563eb;
    font-weight: 600;
  }

  :global(.tempo-function) {
    color: #ea580c;
    font-weight: 600;
  }

  :global(.tempo-keyword) {
    color: #7c3aed;
    font-weight: 600;
  }

  /* Dark mode styles */
  :global(.dark .tempo-placeholder-token) {
    color: #a78bfa;
  }

  :global(.dark .tempo-string) {
    color: #34d399;
  }

  :global(.dark .tempo-constant) {
    color: #f87171;
  }

  :global(.dark .tempo-data-field) {
    color: #60a5fa;
  }

  :global(.dark .tempo-function) {
    color: #fb923c;
  }

  :global(.dark .tempo-keyword) {
    color: #a78bfa;
  }

  /* Ensure textarea is above highlighting */
  #text-input {
    z-index: 10;
    position: relative;
  }

  /* Make cursor more visible */
  #text-input:focus {
    caret-color: #3b82f6 !important;
  }

  :global(.dark) #text-input:focus {
    caret-color: #a78bfa !important;
  }
</style>
