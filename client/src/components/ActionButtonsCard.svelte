<script lang="ts">
  import type { ActionButton } from '../types';
  export let buttons: ActionButton[] = [];
</script>

<div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
  <h3 class="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-5">
    {#each buttons as btn}
      <button
        class={`font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${btn.colorClass}`}
        on:click={btn.onClick}
      >
        {#if btn.icon}
          <span class="text-sm">{btn.icon}</span>
        {/if}
        <span>{btn.label}</span>
      </button>
    {/each}
  </div>
</div> 