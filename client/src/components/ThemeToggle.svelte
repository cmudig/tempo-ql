<script lang="ts">
  import Fa from 'svelte-fa';
  import { theme } from '../stores/theme';
  import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  class="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
  title="Toggle theme"
>
  {#if $theme === 'dark'}
    <Fa icon={faSun} />
  {:else}
    <Fa icon={faMoon} />
  {/if}
</button>
