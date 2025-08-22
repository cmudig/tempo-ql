<script lang="ts">
  import Fa from 'svelte-fa';
  import { faCheck, faCopy, faPlay } from '@fortawesome/free-solid-svg-icons';
  import highlight from 'custom-syntax-highlighter';
  import {
    highlightPatterns,
    formatQueryForHighlights,
  } from '../utils/syntaxHighlight';

  export let content: string = '';
  export let onRun: (code: string) => void = () => {};

  // Generate unique ID for highlighting
  let highlightedViewID: string =
    'highlightView-' +
    new Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10))
      .join('');

  let highlightView: HTMLElement;
  $: if (!!highlightView && !!content) {
    highlightView.innerText = formatQueryForHighlights(content);
    highlight({
      selector: `#${highlightedViewID}`,
      patterns: highlightPatterns,
    });
  }

  let copied: boolean = false;

  async function copyToClipboard(code: string) {
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    copied = true;
    setTimeout(() => (copied = false), 5000);
  }
</script>

<div
  class="bg-slate-100 dark:bg-slate-800 rounded-md my-2 p-4 pr-12 relative text-slate-900 dark:text-slate-100"
>
  <div class="flex items-center absolute right-0 top-0 mr-2 mt-2">
    <button
      class="p-2 hover:opacity-50 text-slate-700 dark:text-slate-200 text-sm"
      title="Copy"
      on:click={() => copyToClipboard(content)}
    >
      {#if copied}<Fa icon={faCheck} />{:else}
        <Fa icon={faCopy} />{/if}
    </button>
    <button
      class="p-2 hover:opacity-50 text-slate-700 dark:text-slate-200 text-sm"
      title="Run this query"
      on:click={() => onRun(content)}
    >
      <Fa icon={faPlay} />
    </button>
  </div>
  <code
    class="font-mono whitespace-pre-line"
    id={highlightedViewID}
    bind:this={highlightView}>{content}</code
  >
</div>
