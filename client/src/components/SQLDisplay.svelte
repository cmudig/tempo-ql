<script lang="ts">
  import { theme } from '../stores/theme';
  export let message: string = '';
  export let width: string = 'w-full max-w-2xl';

  // Function to detect if the message contains SQL
  function isSQLQuery(text: string): boolean {
    if (!text) return false;

    // Check for common SQL keywords
    const sqlKeywords = [
      'SELECT',
      'FROM',
      'WHERE',
      'JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'INNER JOIN',
      'GROUP BY',
      'ORDER BY',
      'HAVING',
      'UNION',
      'INSERT',
      'UPDATE',
      'DELETE',
      'CREATE',
      'ALTER',
      'DROP',
      'TABLE',
      'INDEX',
      'VIEW',
      'PROCEDURE',
      'CASE',
      'WHEN',
      'THEN',
      'ELSE',
      'END',
      'AS',
      'ON',
      'AND',
      'OR',
      'NOT',
      'IN',
      'EXISTS',
      'BETWEEN',
      'LIKE',
      'IS NULL',
      'IS NOT NULL',
    ];

    const upperText = text.toUpperCase();
    return sqlKeywords.some((keyword) => upperText.includes(keyword));
  }

  // Function to format SQL with proper indentation
  function formatSQL(sql: string): string {
    if (!sql) return '';

    // Basic SQL formatting
    let formatted = sql
      // Add line breaks after common SQL keywords
      .replace(
        /\b(SELECT|FROM|WHERE|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|HAVING|UNION|CASE|WHEN|THEN|ELSE|END)\b/gi,
        '\n$1'
      )
      // Add line breaks after commas in SELECT clauses
      .replace(
        /(SELECT\s+)(.*?)(\s+FROM)/gis,
        (match, select, fields, from) => {
          const formattedFields = fields
            .split(',')
            .map((field) => field.trim())
            .join(',\n  ');
          return `${select}\n  ${formattedFields}\n${from}`;
        }
      )
      // Add line breaks after commas in other clauses
      .replace(/(,\s*)([A-Za-z_][A-Za-z0-9_.]*)/g, ',\n  $2')
      // Add line breaks for conditions
      .replace(/\b(AND|OR)\b/gi, '\n  $1')
      // Clean up multiple line breaks
      .replace(/\n\s*\n/g, '\n')
      // Add proper indentation
      .split('\n')
      .map((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return '';

        // Determine indentation level
        let indent = '';
        if (
          trimmed.match(
            /^(SELECT|FROM|WHERE|JOIN|GROUP BY|ORDER BY|HAVING|UNION|CASE|WHEN|THEN|ELSE|END)/i
          )
        ) {
          indent = '';
        } else if (trimmed.match(/^(AND|OR|,)/i)) {
          indent = '  ';
        } else if (trimmed.match(/^(LEFT JOIN|RIGHT JOIN|INNER JOIN)/i)) {
          indent = '';
        } else {
          indent = '  ';
        }

        return indent + trimmed;
      })
      .filter((line) => line.trim())
      .join('\n');

    return formatted;
  }

  $: isSQL = isSQLQuery(message);
  $: formattedSQL = isSQL ? formatSQL(message) : '';
</script>

<div
  class="bg-white dark:bg-gray-900 p-4 border-0 rounded-none {width} transition-colors duration-200"
>
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
    Query Output
  </h3>

  {#if isSQL}
    <!-- SQL Query Display -->
    <div
      class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600"
    >
      <div class="flex items-center justify-between mb-3">
        <span
          class="text-blue-600 dark:text-blue-400 text-sm font-mono font-semibold"
          >SQL Query</span
        >
        <button
          class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-colors"
          on:click={() => navigator.clipboard.writeText(message)}
          title="Copy SQL to clipboard"
        >
          📋 Copy
        </button>
      </div>
      <pre
        class="text-green-600 dark:text-green-400 text-sm leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap">{formattedSQL}</pre>
    </div>
  {:else}
    <!-- Regular Message Display -->
    <div
      class="bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600"
    >
      <p
        class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed font-mono"
      >
        {message || '// No output yet. Execute a query to see results.'}
      </p>
    </div>
  {/if}
</div>
