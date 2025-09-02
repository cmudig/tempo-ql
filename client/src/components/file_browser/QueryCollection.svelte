<script lang="ts">
  import Fa from 'svelte-fa';
  import { type QueryFile, queryItemExists } from './queryfile';
  import {
    faChevronDown,
    faChevronRight,
    faCopy,
    faPencil,
    faPlus,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
  import Hoverable from '../../utils/Hoverable.svelte';
  import { areObjectsEqual } from '../../utils/utils';

  export let name: string | null = null;
  export let path: string[] = [];
  export let queries: QueryFile = {};
  export let indentLevel: number = 0;
  export let onSelect: (path: string[], query: string) => void = () => {};
  export let onNewGroup: (path: string[]) => void = () => {};
  export let onNewQuery: (path: string[]) => void = () => {};
  export let onDelete: (path: string[]) => void = () => {};
  export let onDuplicate: (path: string[]) => void = () => {};
  export let onDraggingChange: (draggingOver: boolean) => void = () => {}; // only top level
  export let onMove: (
    sourcePath: string[],
    targetPath: string[]
  ) => void = () => {};
  export let showBorder: boolean = false;
  export let draggingInto: boolean = false;

  let collapsed = indentLevel > 0;

  // Compute number of items in queries
  $: itemCount = queries ? Object.keys(queries).length : 0;

  function toggle() {
    if (indentLevel > 0) collapsed = !collapsed;
  }

  function deleteItem(key: string | null = null) {
    if (
      key == null ||
      itemCount == 0 ||
      (typeof queries[key] === 'string' && queries[key].length == 0) ||
      confirm(
        `Are you sure you want to delete this ${key != null ? 'query' : 'group'}? This action cannot be undone.`
      )
    ) {
      onDelete(key != null ? [...path, key] : path);
    }
  }

  let editingPath: string[] | null = null;
  let newName: string | null = null;
  $: if (editingPath != null && newName == null)
    newName = editingPath[editingPath.length - 1] ?? null;
  else if (!editingPath) newName = null;
  let oldEditBox: HTMLInputElement;
  let editBox: HTMLInputElement;
  $: if (editBox !== oldEditBox) {
    if (!!editBox) {
      editBox.focus();
      editBox.select();
    }
    oldEditBox = editBox;
  }

  function handleDragStart(event: DragEvent, path: string[]) {
    event.dataTransfer?.setData('application/json', JSON.stringify(path));
    event.dataTransfer?.setData('text/plain', JSON.stringify(path));
    event.stopPropagation();
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
        onMove(sourcePath, targetPath);
      }
    }
    collapsed = false;
  }

  let draggingCounter: number = 0;
  $: onDraggingChange(draggingCounter > 0 || draggingInto);

  function childSort(
    a: [string, QueryFile | string],
    b: [string, QueryFile | string]
  ): number {
    if ((typeof a[1] === 'string') == (typeof b[1] === 'string'))
      return a[0].localeCompare(b[0]);
    if (typeof a[1] === 'string') return -1;
    return 1;
  }
</script>

{#if indentLevel > 0}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-full cursor-pointer select-none {(!collapsed && itemCount > 0) ||
    ((collapsed || itemCount == 0) && showBorder)
      ? 'border-b border-gray-200 dark:border-gray-700'
      : ''}"
    on:dragover={handleDragOver}
    on:drop={(e) => handleDrop(e, path)}
    on:click={draggingCounter > 0 || draggingInto ? undefined : toggle}
    draggable="true"
    on:dragstart={(e) => handleDragStart(e, path)}
    on:dragenter|preventDefault|stopPropagation={() => draggingCounter++}
    on:dragleave|stopPropagation={() => draggingCounter--}
  >
    <Hoverable
      class="w-full flex items-center gap-2 {draggingCounter > 0 || draggingInto
        ? 'bg-blue-200 dark:bg-blue-200/40'
        : 'hover:bg-gray-100 dark:hover:bg-gray-800'} dark:text-gray-100 text-gray-900 pr-4 py-2 "
      style="padding-left: {-0.5 + indentLevel * 1.5}rem;"
      let:hovering
    >
      <div class="w-4">
        <Fa
          icon={faChevronDown}
          class="inline-block w-3 h-3 shrink-0 text-sm opacity-70 {collapsed
            ? '-rotate-90'
            : ''}"
        />
      </div>
      {#if areObjectsEqual(editingPath, path)}
        <form
          class="flex-auto"
          on:submit|preventDefault|stopPropagation={() => {
            onMove(path, [...path.slice(0, path.length - 1), newName]);
          }}
        >
          <input
            type="text"
            class="flat-text-input w-full"
            bind:value={newName}
            bind:this={editBox}
            on:keydown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                editingPath = null;
              }
            }}
            on:blur={() =>
              onMove(path, [...path.slice(0, path.length - 1), newName])}
          />
        </form>
      {:else}
        <div class="font-semibold flex-auto py-0.5 truncate">
          {name} <span class="text-xs text-gray-500">({itemCount})</span>
        </div>
      {/if}

      {#if hovering}
        <button
          on:click|stopPropagation={() => {
            onNewGroup(path);
            collapsed = false;
          }}
          class="px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"
          title="Create a new group"
        >
          <Fa icon={faPlus} class="inline mr-2" />
          Group
        </button>
        <button
          on:click|stopPropagation={() => onNewQuery(path)}
          class="px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"
          title="Create a new query"
        >
          <Fa icon={faPlus} class="inline mr-2" />
          Query
        </button>
        <div class="flex items-center">
          <button
            on:click|stopPropagation={() => (editingPath = path)}
            class="px-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Rename this group"
          >
            <Fa icon={faPencil} class="inline" />
          </button>
          <button
            on:click|stopPropagation={() => onDuplicate(path)}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Duplicate this group"
          >
            <Fa icon={faCopy} />
          </button>
          <button
            on:click|stopPropagation={() => deleteItem()}
            class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
            title="Delete this group"
          >
            <Fa icon={faTrash} />
          </button>
        </div>
      {/if}
    </Hoverable>
  </div>
{/if}
{#if !collapsed}
  {#each Object.entries(queries).sort(childSort) as [key, value], i}
    {#if typeof value === 'string'}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="w-full cursor-pointer select-none {i < itemCount - 1 ||
        showBorder
          ? 'border-b border-gray-200 dark:border-gray-700'
          : ''}"
        on:click={draggingCounter > 0 || draggingInto
          ? undefined
          : () => onSelect([...path, key], value)}
        draggable="true"
        on:dragstart={(e) => handleDragStart(e, [...path, key])}
        on:dragover={handleDragOver}
        on:drop={(e) => handleDrop(e, path)}
        on:dragenter|preventDefault|stopPropagation={() => draggingCounter++}
        on:dragleave|stopPropagation={() => draggingCounter--}
      >
        <Hoverable
          class="block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900"
          style="padding-left: {-0.5 + (indentLevel + 1) * 1.5}rem;"
          let:hovering
        >
          {#if areObjectsEqual(editingPath, [...path, key])}
            <form
              class="flex-auto"
              on:submit|preventDefault|stopPropagation={() => {
                onMove([...path, key], [...path, newName]);
              }}
            >
              <input
                type="text"
                class="flat-text-input w-full"
                bind:value={newName}
                bind:this={editBox}
                on:keydown={(e) => {
                  if (e.key === 'Escape') {
                    e.preventDefault();
                    editingPath = null;
                  }
                }}
                on:blur={() => {
                  onMove([...path, key], [...path, newName]);
                  editingPath = null;
                }}
              />
            </form>
          {:else}
            <div
              class="font-semibold whitespace-nowrap flex-auto truncate"
              title={key}
            >
              {key}&nbsp&nbsp;
              <span
                class="font-normal font-mono text-gray-600 dark:text-gray-400"
                >{value.replace('\n', ' ')}</span
              >
            </div>
          {/if}
          {#if hovering}
            <div class="flex items-center">
              <button
                on:click|stopPropagation={() => (editingPath = [...path, key])}
                class="px-1 text-xs hover:opacity-50 dark:text-gray-100"
                title="Rename this group"
              >
                <Fa icon={faPencil} class="inline" />
              </button>
              <button
                on:click|stopPropagation={() => onDuplicate([...path, key])}
                class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
                title="Duplicate this query"
              >
                <Fa icon={faCopy} />
              </button>
              <button
                on:click|stopPropagation={() => deleteItem(key)}
                class="px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"
                title="Delete this query"
              >
                <Fa icon={faTrash} />
              </button>
            </div>
          {/if}
        </Hoverable>
      </div>
    {:else}
      <svelte:self
        name={key}
        queries={value}
        path={[...path, key]}
        indentLevel={indentLevel + 1}
        {onSelect}
        {onNewQuery}
        {onNewGroup}
        {onDelete}
        {onDuplicate}
        {onMove}
        showBorder={i < itemCount - 1}
      />
    {/if}
  {/each}
{/if}
