<script lang="ts">
  import {
    createNewQueryRecursive,
    deleteQueryItem,
    duplicateQueryItem,
    moveQueryItem,
    QueryFile,
    queryItemExists,
    updateQueryItem,
  } from './file_browser/queryfile';
  import AIAssistantSection from './AIAssistantSection.svelte';
  import TextInputCard from './TextInputCard.svelte';
  import {
    faCheck,
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

  let currentQueryPath: string[] = [];

  function handleQuerySelection(path: string[], query: string) {
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
    if (
      queryItemExists(fileContents, [
        ...currentQueryPath.slice(0, currentQueryPath.length - 1),
        newName,
      ])
    ) {
      if (
        !confirm(
          'This name already exists. Are you sure you want to overwrite the existing item?'
        )
      )
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

  function runAndSaveQuery() {
    if (currentQueryPath.length > 0) {
      fileContents = updateQueryItem(fileContents, currentQueryPath, textInput);
    }
    onRun();
  }
</script>

<div class="w-1/2 shrink-0 flex flex-col h-full z-0">
  {#if showingBrowser}
    <QueryFileBrowser
      bind:fileContents
      {savePath}
      allowClose={currentQueryPath.length > 0}
      onClose={() => (showingBrowser = false)}
      onSelect={handleQuerySelection}
    />
  {:else}
    <div class="px-4 pt-2 flex items-center mb-4 gap-2 shrink-0">
      {#if !!savePath}
        <button
          class="px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"
          title="Browse saved queries"
          on:click={() => (showingBrowser = true)}
        >
          <Fa icon={faListDots} class="inline" />
        </button>
      {/if}
      {#if currentQueryPath}
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
            <div class="text-sm text-gray-600 dark:text-gray-400">
              in <span class="font-mono"
                >{currentQueryPath[currentQueryPath.length - 2]}</span
              >
            </div>
          {/if}
          <div class="flex-auto" />
        {/if}
        <div class="flex items-center">
          <button
            on:click|stopPropagation={() => {
              let result = duplicateQueryItem(fileContents, currentQueryPath);
              fileContents = result.contents;
              currentQueryPath = result.queryPath;
            }}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Duplicate this query"
          >
            <Fa icon={faCopy} />
          </button>
          <button
            on:click|stopPropagation={() => {
              fileContents = deleteQueryItem(fileContents, currentQueryPath);
              currentQueryPath = [];
            }}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Delete this query"
          >
            <Fa icon={faTrash} />
          </button>
        </div>
        <button
          on:click={() => {
            let result = createNewQueryRecursive(
              fileContents,
              currentQueryPath.slice(0, currentQueryPath.length - 1)
            );
            fileContents = result.contents;
            currentQueryPath = result.queryPath;
            textInput = '';
          }}
          class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          title="Create a new query at the top level"
        >
          <Fa icon={faPlus} class="inline mr-2" />
          Query
        </button>
      {:else}
        <h3
          class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap truncate"
        >
          TempoQL Query
        </h3>
      {/if}
    </div>

    <!-- Text Input Card -->
    <div class="shrink h-2/3">
      <TextInputCard
        bind:value={textInput}
        {dataFields}
        onRun={runAndSaveQuery}
        {onExplain}
        onHistoryClick={onQueryHistoryClick}
        width="w-full"
      />
    </div>

    {#if llmAvailable}
      <!-- AI Assistant Section with scrollable area -->
      <div class="w-full h-1/2 overflow-hidden">
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
