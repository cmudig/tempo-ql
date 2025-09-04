<script lang="ts">
  import {
    createNewQuery,
    deleteQueryItem,
    duplicateQueryItem,
    getQueryItem,
    moveQueryItem,
    placeQueryItem,
    type QueryFile,
    queryItemExists,
    queryNameExistsAnywhere,
    queryNameValid,
    updateQueryItem,
  } from './file_browser/queryfile';
  import AIAssistantSection from './AIAssistantSection.svelte';
  import TextInputCard from './TextInputCard.svelte';
  import {
    faCheck,
    faClock,
    faCopy,
    faListDots,
    faPencil,
    faPlus,
    faTrash,
    faXmark,
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import QueryFileBrowser from './file_browser/QueryFileBrowser.svelte';
  import Hoverable from '../utils/Hoverable.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { areObjectsEqual } from '../utils/utils';

  export let fileContents: QueryFile = {};
  export let savePath: string = '';

  export let textInput: string = '';
  export let dataFields: string[] = [];
  export let onRun: () => void = () => {};
  export let onExplain: () => void = () => {};

  // AI Assistant props
  export let onLLMSubmit: (question: string) => void = () => {};
  export let llmResponse: string = '';
  export let llmLoading: boolean = false;
  export let llmError: string = '';
  export let llmAvailable: boolean = false;
  export let apiStatus: string = '';
  export let extractedQuery: string = '';
  export let hasExtractedQuery: boolean = false;
  export let onQueryExtracted: () => void = () => {};

  export let onHistoryClick: () => void = () => {};
  export let onQueryHistoryClick: () => void = () => {};
  export let aiQuestion: string = '';

  let showingBrowser: boolean = false;

  export let currentQueryPath: string[] = [];

  function handleQuerySelection(path: string[], query: string) {
    if (
      currentQueryPath.length > 0 &&
      textInput != getQueryItem(fileContents, currentQueryPath)
    ) {
      if (
        !confirm(
          `You have unsaved changes for ${currentQueryPath[currentQueryPath.length - 1]}. Proceed without saving changes?`
        )
      )
        return;
    }
    currentQueryPath = path;
    textInput = query;
    showingBrowser = false;
  }

  $: if (!!savePath && currentQueryPath.length == 0) showingBrowser = true;

  let isEditingName: boolean = false;
  let newName: string | null = null;
  $: if (isEditingName && newName == null)
    newName = currentQueryPath[currentQueryPath.length - 1] ?? null;
  else if (!isEditingName) newName = null;
  let oldEditBox: HTMLInputElement;
  let editBox: HTMLInputElement;
  $: if (editBox !== oldEditBox) {
    if (!!editBox) {
      editBox.focus();
      editBox.select();
    }
    oldEditBox = editBox;
  }

  function renameQuery(newName: string) {
    isEditingName = false;
    if (newName == currentQueryPath[currentQueryPath.length - 1]) return;
    if (!queryNameValid(newName)) {
      alert(
        'Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.'
      );
      return;
    }
    if (
      queryItemExists(fileContents, [
        ...currentQueryPath.slice(0, currentQueryPath.length - 1),
        newName,
      ])
    ) {
      alert('This name already exists. All item names must be unique.');
      return;
    }

    fileContents = moveQueryItem(fileContents, currentQueryPath, [
      ...currentQueryPath.slice(0, currentQueryPath.length - 1),
      newName,
    ]);
    currentQueryPath = [
      ...currentQueryPath.slice(0, currentQueryPath.length - 1),
      newName,
    ];
  }

  function onSaveAs(name: string) {
    if (!queryNameValid(name)) {
      alert(
        'Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.'
      );
      return;
    }
    if (queryNameExistsAnywhere(fileContents, name)) {
      alert(
        'The variable name already exists. All variable names must be unique.'
      );
      return;
    }
    let newPath = [
      ...currentQueryPath.slice(0, currentQueryPath.length - 1),
      name,
    ];
    fileContents = placeQueryItem(fileContents, newPath, textInput);
    currentQueryPath = newPath;
  }

  function onDiscard() {
    if (currentQueryPath.length > 0) {
      textInput = getQueryItem(fileContents, currentQueryPath) as string;
    }
  }

  function duplicateQuery() {
    let result = duplicateQueryItem(fileContents, currentQueryPath);
    fileContents = result.contents;
    currentQueryPath = result.queryPath;
  }

  function deleteQuery() {
    if (
      confirm(
        `Are you sure you want to delete this query? This action cannot be undone.`
      )
    ) {
      fileContents = deleteQueryItem(fileContents, currentQueryPath);
      currentQueryPath = [];
    }
  }

  function runQuery() {
    onRun();
  }

  let alive: boolean = false;

  function handleKeydown(event: KeyboardEvent) {
    if (!alive) return;
    // Handle Ctrl+R (rename), Ctrl+D (duplicate), Ctrl+Shift+Backspace, Ctrl+Q
    if (event.ctrlKey || event.metaKey) {
      if (!!savePath && event.key === 'r' && !event.shiftKey) {
        event.preventDefault();
        isEditingName = true;
        return;
      } else if (!!savePath && event.key === 'd' && !event.shiftKey) {
        event.preventDefault();
        duplicateQuery();
        return;
      } else if (!!savePath && event.key === 'Backspace' && event.shiftKey) {
        event.preventDefault();
        deleteQuery();
        return;
      } else if (
        !!savePath &&
        event.key === 'q' &&
        currentQueryPath.length > 0
      ) {
        event.preventDefault();
        showingBrowser = !showingBrowser;
        return;
      }
    }
  }

  onMount(() => {
    alive = true;
    window.addEventListener('keydown', handleKeydown);
  });
  onDestroy(() => {
    alive = false;
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="w-1/2 shrink-0 flex flex-col h-full z-0">
  {#if showingBrowser}
    <QueryFileBrowser
      bind:fileContents
      {savePath}
      {currentQueryPath}
      allowClose={currentQueryPath.length > 0}
      onClose={() => (showingBrowser = false)}
      onSelect={handleQuerySelection}
      onRename={(newPath) => {
        currentQueryPath = newPath;
      }}
    />
  {:else}
    <div class="px-4 pt-2 flex items-center mb-4 gap-2 shrink-0">
      {#if !!savePath}
        <button
          class="px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"
          title="Browse saved queries (Ctrl+Q)"
          on:click={() => (showingBrowser = true)}
        >
          <Fa icon={faListDots} class="inline" />
        </button>
      {/if}
      {#if currentQueryPath.length > 0}
        {#if isEditingName}
          <form
            class="flex-auto"
            on:submit|preventDefault|stopPropagation={() => {
              console.log('renaming!');
              renameQuery(newName);
            }}
          >
            <input
              type="text"
              class="flat-text-input w-full"
              bind:value={newName}
              bind:this={editBox}
              on:blur={() => renameQuery(newName)}
            />
          </form>
        {:else}
          <Hoverable
            class="rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer"
            on:click={() => (isEditingName = true)}
            let:hovering
          >
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate"
              title="Rename this query (Ctrl+R)"
            >
              {currentQueryPath[currentQueryPath.length - 1] ?? 'TempoQL Query'}
            </h3>
            {#if hovering}
              <Fa
                icon={faPencil}
                class="pl-2 text-gray-900 dark:text-gray-100"
              />
            {/if}
          </Hoverable>
          {#if currentQueryPath.length > 1}
            <div
              class="text-sm text-gray-600 dark:text-gray-400 truncate min-w-0"
            >
              in <span class="font-mono"
                >{currentQueryPath[currentQueryPath.length - 2]}</span
              >
            </div>
          {/if}
          <div class="flex-auto" />
        {/if}
        <div class="flex items-center">
          <button
            on:click|stopPropagation={duplicateQuery}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Duplicate this query (Ctrl+D)"
          >
            <Fa icon={faCopy} />
          </button>
          <button
            on:click|stopPropagation={deleteQuery}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Delete this query (Ctrl+Shift+Backspace)"
          >
            <Fa icon={faTrash} />
          </button>
        </div>
        <button
          on:click={() => {
            let result = createNewQuery(
              fileContents,
              currentQueryPath.slice(0, currentQueryPath.length - 1)
            );
            console.log('result', result);
            fileContents = result.contents;
            currentQueryPath = result.queryPath;
            textInput = '';
          }}
          class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"
          title="Create a new query at the top level"
        >
          <Fa icon={faPlus} class="inline mr-2" />
          Query
        </button>
      {:else}
        <h3
          class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap flex-auto truncate"
        >
          TempoQL Query
        </h3>
      {/if}
      <button
        on:click={onQueryHistoryClick}
        class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"
        title="View query history"
      >
        <Fa icon={faClock} class="inline mr-2" />
        History
      </button>
    </div>

    <!-- Text Input Card -->
    <div class="shrink h-2/3">
      <TextInputCard
        bind:value={textInput}
        {dataFields}
        onRun={runQuery}
        {onExplain}
        onHistoryClick={onQueryHistoryClick}
        width="w-full"
        allowSave={!!savePath}
        {onSaveAs}
        {onDiscard}
        onSave={() => {
          if (currentQueryPath.length > 0)
            fileContents = placeQueryItem(
              fileContents,
              currentQueryPath,
              textInput
            );
        }}
        hasUnsavedChanges={currentQueryPath.length > 0 &&
          !!fileContents &&
          textInput != getQueryItem(fileContents, currentQueryPath)}
      />
    </div>

    {#if llmAvailable}
      <!-- AI Assistant Section with scrollable area -->
      <div class="mt-4 w-full h-1/2 overflow-hidden">
        <AIAssistantSection
          onSubmit={onLLMSubmit}
          {llmResponse}
          isLoading={llmLoading}
          error={llmError}
          {apiStatus}
          width="w-full"
          scrollable={true}
          {extractedQuery}
          {hasExtractedQuery}
          {onQueryExtracted}
          {onHistoryClick}
          bind:question={aiQuestion}
          onRun={(text) => {
            textInput = text;
            onRun();
          }}
        />
      </div>
    {/if}
  {/if}
</div>
