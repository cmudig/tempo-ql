<script lang="ts">
  import { onMount } from 'svelte';
  import MarkdownCodeBlock from './MarkdownCodeBlock.svelte';

  export let text: string;
  export let collapseLength: number | null = null;
  export let onRun: (code: string) => void = () => {};

  type Block = { type: 'text' | 'code'; content: string };

  let blocks: Block[] = [];
  $: collapsible = !!collapseLength && text.length > collapseLength;
  let collapsed: boolean = false;

  $: {
    text;
    collapsed = false;
  }

  // Simple markdown parser for code blocks and text
  function parseMarkdown(md: string): Block[] {
    const lines = md.split('\n');
    const result: Block[] = [];
    let inCode = false;
    let codeBuffer: string[] = [];
    let textBuffer: string[] = [];
    let codeLang = '';

    for (let line of lines) {
      if (line.startsWith('```')) {
        if (!inCode) {
          // Start code block
          inCode = true;
          codeLang = line.slice(3).trim();
          if (textBuffer.length) {
            result.push({ type: 'text', content: textBuffer.join('\n') });
            textBuffer = [];
          }
        } else {
          // End code block
          inCode = false;
          result.push({ type: 'code', content: codeBuffer.join('\n') });
          codeBuffer = [];
        }
      } else if (inCode) {
        codeBuffer.push(line);
      } else {
        textBuffer.push(line);
      }
    }
    if (textBuffer.length) {
      result.push({ type: 'text', content: textBuffer.join('\n') });
    }
    return result;
  }

  $: blocks = parseMarkdown(
    collapsible && collapsed ? text.slice(0, collapseLength) + '...' : text
  );

  // Simple markdown formatting for text blocks (bold, italics, links, inline code)
  function formatMarkdown(md: string): string {
    // Handle lists first
    // Convert markdown lists to HTML lists
    let html = md;

    // Inline formatting
    html = html
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^\*\n]+)(\*\*|$)/g, '<strong>$1</strong>')
      .replace(/\*([^\*\n]+)\*/g, '<em>$1</em>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank">$1</a>'
      );

    // Replace remaining newlines with <br>, but not inside lists
    html = html.replace(/(?<!<\/[ou]l>)\n/g, '<br>');

    return html;
  }
</script>

{#each blocks as block, i}
  {#if block.type === 'code'}
    <MarkdownCodeBlock content={block.content} {onRun} />
  {:else}
    <div class="leading-relaxed mb-2">
      {@html formatMarkdown(block.content)}
    </div>
  {/if}
{/each}
{#if collapsible}
  <div>
    <a
      class="text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"
      on:click={() => (collapsed = !collapsed)}
      href="#"
    >
      {!collapsed ? 'Less' : 'More'}
    </a>
  </div>
{/if}
