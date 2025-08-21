// Function to format markdown-like text
export function formatMessage(text: string): string {
  if (!text) return '';

  return (
    text
      // Convert **bold** to HTML
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *italic* to HTML
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert `code` to HTML
      .replace(
        /`(.*?)`/g,
        '<code class="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-sm font-mono">$1</code>'
      )
      // Convert line breaks to HTML
      .replace(/\n/g, '<br>')
  );
}
