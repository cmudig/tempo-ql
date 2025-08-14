<script lang="ts">
  import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
  import ThemeToggle from './ThemeToggle.svelte';
  import Fa from 'svelte-fa';

  export let activeTab: string = 'data-elements';
  export let onTabChange: (tab: string) => void = () => {};

  const tabs = [
    { id: 'data-elements', label: 'Data Elements', icon: faDatabase },
    { id: 'query-inspector', label: 'Query Inspector', icon: faCode },
  ];
</script>

<div class="w-full bg-slate-300 dark:bg-slate-800 dark:text-white">
  <nav class="flex gap-2 px-4 py-2" aria-label="Tabs">
    {#each tabs as tab}
      <button
        class="px-4 py-1 font-semibold rounded-md transition-colors duration-200 {activeTab ===
        tab.id
          ? 'bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800'
          : 'bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600'}"
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
