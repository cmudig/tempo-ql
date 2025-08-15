<script lang="ts">
  export let isLoading: boolean = false;
  export let message: string = '';
  export let width: string = 'w-full';
</script>

{#if isLoading}
  <div
    class="absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center z-80"
  >
    <div
      class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-1/2 p-6"
    >
      <div class="space-y-3">
        <!-- Loading Message -->
        <div class="flex-1">
          <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
            {message || 'Loading...'}
          </p>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div
            class="bg-blue-600 h-2 rounded-full animate-pulse"
            style="width: 100%"
          ></div>
        </div>
      </div>
    </div>
  </div>
{/if}
