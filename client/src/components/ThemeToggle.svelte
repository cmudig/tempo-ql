<script lang="ts">
  import { theme } from '../stores/theme';

  function toggleTheme() {
    console.log('Theme toggle clicked, current theme:', $theme);
    theme.toggle();
  }

  // Debug: log theme changes and check DOM
  $: {
    console.log('Theme changed to:', $theme);
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      console.log('HTML classes:', html.className);
      console.log('Has dark class:', html.classList.contains('dark'));
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
  title="Toggle theme"
>
  {#if $theme === 'dark'}
    <!-- Sun icon for dark mode -->
    <svg
      class="w-5 h-5 text-yellow-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  {:else}
    <!-- Moon icon for light mode -->
    <svg
      class="w-5 h-5 text-gray-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </svg>
  {/if}
</button>
