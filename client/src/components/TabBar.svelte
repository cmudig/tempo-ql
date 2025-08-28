<script lang="ts">
  import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
  import ThemeToggle from './ThemeToggle.svelte';
  import Fa from 'svelte-fa';

  export let activeTab: string = 'query-inspector';
  export let onTabChange: (tab: string) => void = () => {};

  const tabs = [
    { id: 'query-inspector', label: 'Query Inspector', icon: faCode },
    { id: 'data-elements', label: 'Data Elements', icon: faDatabase },
  ];
</script>

<div class="w-full bg-gray-300 dark:bg-gray-800 dark:text-white">
  <nav class="flex gap-2 px-4 py-2" aria-label="Tabs">
    {#each tabs as tab}
      <button
        class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 {activeTab ===
        tab.id
          ? 'bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800'
          : 'bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600'}"
        on:click={() => onTabChange(tab.id)}
      >
        <Fa icon={tab.icon} class="inline mr-2" />
        {tab.label}
      </button>
    {/each}
    <div class="flex-auto" />
    <ThemeToggle />
  </nav>
</div>
