<svelte:options accessors />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    getAutocompleteOptions,
    performAutocomplete,
  } from '../utils/autocomplete';
  import highlight from 'custom-syntax-highlighter';
  import {
    highlightPatterns,
    formatQueryForHighlights,
  } from '../utils/syntaxHighlight';
  import Fa from 'svelte-fa';
  import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons';

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
    textarea.value = value;
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
        textarea.focus();
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
        textarea.focus();
      }
    }
  }

  function handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const newValue = target.value;
    console.log('🔍 handleInput - New value:', newValue);
    console.log('🔍 handleInput - Cursor position:', target.selectionStart);

    // Add to undo history
    addToHistory(newValue);

    value = newValue;
    onInput(newValue);

    // Update cursor position
    cursorPosition = target.selectionStart || 0;
    console.log('🔍 handleInput - Updated cursor position:', cursorPosition);

    // Get autocomplete options
    updateAutocompleteOptions(newValue, cursorPosition);
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
</script>

<div class="flex flex-col w-full h-full p-4 mb-2">
  <div class="flex items-center mb-4 gap-2 shrink-0">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2">
      TempoQL Query
    </h3>
  </div>

  <!-- Text Input Section -->
  <div class="relative flex-auto min-h-0">
    <textarea
      id="text-input"
      bind:this={textarea}
      class="w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"
      placeholder="// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"
      bind:value
      on:input={handleInput}
      on:keydown={handleKeydown}
      autocomplete="false"
      autocapitalize="false"
      autocorrect="false"
      spellcheck="false"
      rows="1"
      style="color: transparent; caret-color: currentColor;"
    />

    <!-- Syntax Highlighting Overlay -->
    <div
      class="absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100"
      id={highlightedViewID}
      bind:this={highlightedView}
    ></div>

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

    <div
      class="absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"
    >
      <!-- Explain Button -->
      <!-- <button
      class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"
      on:click={onExplain}
      disabled={!value.trim()}
      class:opacity-50={!value.trim()}
      class:cursor-not-allowed={!value.trim()}
    >
      Explain
    </button> -->
      <button
        on:click={onHistoryClick}
        class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        title="View query history"
      >
        <Fa icon={faClock} class="inline mr-2" />
        History
      </button>

      <!-- Run Button -->
      <button
        class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"
        on:click={onRun}
        disabled={!value.trim()}
        class:opacity-50={!value.trim()}
        class:cursor-not-allowed={!value.trim()}
      >
        <Fa icon={faPlay} class="inline mr-2" />
        Run Query
      </button>
    </div>
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
