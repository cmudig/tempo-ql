export const highlightPatterns = [
  {
    name: 'tempo-placeholder-token',
    match: /^####TOKEN####([A-z]+)####ENDTOKEN####/,
  },
  {
    name: 'tempo-string',
    match: /^([\'\"]([^\'\"\#]*(?!####TOKEN####)#?)*[\'\"]?)/,
  },
  {
    name: 'tempo-constant',
    match: /^(#(?:now|mintime|maxtime|indexvalue|value))/i,
  },
  {
    name: 'tempo-data-field',
    match: /^(\{[^\}\#]+\}?)/,
  },
  {
    name: 'tempo-function',
    match: [/^([A-z_]+)\(/, '', '('],
  },
  {
    name: 'tempo-keyword',
    match:
      /^\b(and|or|not|case|when|where|end|else|in|then|every|at|as|from|to|(starts|ends)?with|contains|as|value|rate|duration|exists|mean|median|sum|min|max|first|last|any|all|nonnull|distinct|count|integral|impute|carry|cut|quantiles|bins)\b/i,
  },
];

// Simple syntax highlighter function
export function highlightSyntax(text: string): string {
  let highlightedText = text;
  
  // Replace special tokens for highlighting
  highlightedText = highlightedText.replaceAll(/<([A-z]+?)>/g, '####TOKEN####$1####ENDTOKEN####');
  
  // Apply highlighting patterns
  highlightPatterns.forEach(pattern => {
    if (pattern.name === 'tempo-placeholder-token') {
      highlightedText = highlightedText.replace(
        /####TOKEN####([A-z]+)####ENDTOKEN####/g,
        '<span class="tempo-placeholder-token">$1</span>'
      );
    } else if (pattern.name === 'tempo-string') {
      highlightedText = highlightedText.replace(
        /([\'\"]([^\'\"\#]*(?!####TOKEN####)#?)*[\'\"]?)/g,
        '<span class="tempo-string">$1</span>'
      );
    } else if (pattern.name === 'tempo-constant') {
      highlightedText = highlightedText.replace(
        /(#(?:now|mintime|maxtime|indexvalue|value))/gi,
        '<span class="tempo-constant">$1</span>'
      );
    } else if (pattern.name === 'tempo-data-field') {
      highlightedText = highlightedText.replace(
        /(\{[^\}\#]+\}?)/g,
        '<span class="tempo-data-field">$1</span>'
      );
    } else if (pattern.name === 'tempo-function') {
      highlightedText = highlightedText.replace(
        /([A-z_]+)\(/g,
        '<span class="tempo-function">$1</span>('
      );
    } else if (pattern.name === 'tempo-keyword') {
      highlightedText = highlightedText.replace(
        /\b(and|or|not|case|when|where|end|else|in|then|every|at|as|from|to|(starts|ends)?with|contains|as|value|rate|duration|exists|mean|median|sum|min|max|first|last|any|all|nonnull|distinct|count|integral|impute|carry|cut|quantiles|bins)\b/gi,
        '<span class="tempo-keyword">$1</span>'
      );
    }
  });
  
  // Escape HTML characters
  highlightedText = highlightedText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  return highlightedText;
}

export function formatQueryForHighlights(query: string): string {
  // replace <word> with a token
  query = query.replaceAll(/<([A-z]+?)>/g, '####TOKEN####$1####ENDTOKEN####');
  return query.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
} 