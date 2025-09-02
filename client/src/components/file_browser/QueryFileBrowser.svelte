<script lang="ts">
  import Fa from 'svelte-fa';
  import QueryCollection from './QueryCollection.svelte';
  import {
    createNewGroup,
    createNewQuery,
    deleteQueryItem,
    duplicateQueryItem,
    getQueryItem,
    moveQueryItem,
    QueryFile,
    queryItemExists,
  } from './queryfile';
  import { faListDots, faPlus } from '@fortawesome/free-solid-svg-icons';
  import { areObjectsEqual } from '../../utils/utils';

  export let fileContents: QueryFile = {};
  export let savePath: string = '';
  export let allowClose: boolean = true;
  export let onClose: () => void = () => {};
  export let onSelect: (path: string[], query: string) => void = () => {};

  function createQuery(path: string[] = []) {
    let result = createNewQuery(fileContents, path);
    fileContents = result.contents;
    onSelect(
      result.queryPath,
      getQueryItem(fileContents, result.queryPath) as string
    );
  }

  function moveItem(src: string[], dst: string[]) {
    if (areObjectsEqual(src, dst)) return;
    if (queryItemExists(fileContents, dst)) {
      alert(
        'An item with this name already exists - all items must have unique names.'
      );
      return;
    }
    fileContents = moveQueryItem(fileContents, src, dst);
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
  }

  function handleDrop(event: DragEvent, targetPath: string[]) {
    event.preventDefault();
    draggingCounter = 0;
    const data = event.dataTransfer?.getData('application/json');
    if (data) {
      const sourcePath = JSON.parse(data);
      // add the name of the current drag object to the drop zone
      targetPath = [...targetPath, sourcePath[sourcePath.length - 1]];
      if (JSON.stringify(sourcePath) !== JSON.stringify(targetPath)) {
        moveItem(sourcePath, targetPath);
      }
    }
  }

  let draggingOnBrowser: boolean = false;
  let draggingCounter: number = 0;
</script>

<div
  class="flex flex-col mb-2 max-h-full"
  class:h-full={Object.entries(fileContents).length == 0}
  on:dragover={handleDragOver}
  on:drop={(e) => handleDrop(e, [])}
  on:dragenter|preventDefault|stopPropagation={() => draggingCounter++}
  on:dragleave|stopPropagation={() => draggingCounter--}
>
  <div class="px-4 pt-2 flex items-center mb-4 gap-2 shrink-0">
    {#if allowClose}
      <button
        class="px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"
        title="Close query browser"
        on:click={onClose}
      >
        <Fa icon={faListDots} class="inline" />
      </button>
    {/if}

    <h3
      class="text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"
      class:px-2={allowClose}
    >
      Queries
    </h3>

    <button
      on:click={() => (fileContents = createNewGroup(fileContents, []))}
      class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
      title="Create a new group"
    >
      <Fa icon={faPlus} class="inline mr-2" />
      Group
    </button>
    <button
      on:click={() => {
        createQuery([]);
      }}
      class="px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
      title="Create a new query at the top level"
    >
      <Fa icon={faPlus} class="inline mr-2" />
      Query
    </button>
  </div>
  {#if Object.entries(fileContents).length > 0}
    <div class="mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400">
      Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.
    </div>
    <div
      class="rounded-lg {draggingOnBrowser || draggingCounter > 0
        ? 'outline outline-2 outline-blue-500'
        : ''} border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4"
    >
      <QueryCollection
        bind:queries={fileContents}
        {onSelect}
        onNewGroup={(path) =>
          (fileContents = createNewGroup(fileContents, path))}
        onNewQuery={(path) => createQuery(path)}
        onDelete={(path) =>
          (fileContents = deleteQueryItem(fileContents, path))}
        onDuplicate={(path) =>
          (fileContents = duplicateQueryItem(fileContents, path).contents)}
        onMove={(src, dst) => moveItem(src, dst)}
        onDraggingChange={(dragging) => (draggingOnBrowser = dragging)}
      />
    </div>
  {:else}
    <div
      class="flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4"
    >
      <div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">
        File is empty
      </div>
      <p class="text-gray-600 dark:text-gray-400 w-1/3">
        Click above to create a query or group of queries in this file.
      </p>
    </div>
  {/if}
  {#if savePath}
    <div class="mx-4 mt-4">
      <span
        class="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
      >
        Queries saved to&nbsp;<span class="font-mono">{savePath}</span>
      </span>
    </div>
  {/if}
</div>
