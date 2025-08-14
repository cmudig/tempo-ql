<script lang="ts">
  export let isLoading: boolean = false;
  export let message: string = '';
  export let width: string = 'w-full';
</script>

{#if isLoading}
  <div
    class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm"
  >
    <div class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex items-center space-x-3">
        <!-- Loading Spinner -->
        <div
          class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"
        ></div>

        <!-- Loading Message -->
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-900 dark:text-gray-100">
            {message || 'Loading...'}
          </p>
        </div>

        <!-- Progress Bar -->
        <div class="flex-1 max-w-md">
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-blue-600 h-2 rounded-full animate-pulse"
              style="width: 100%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
