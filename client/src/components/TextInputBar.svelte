<script lang="ts">
  export let onSubmit: (value: string) => void = () => {};
  export let placeholder: string = 'Ask a question about your data...';
  export let width: string = 'w-full';

  let inputValue = '';
  let inputElement: HTMLInputElement;

  function handleSubmit() {
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      inputValue = '';
      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }
</script>

<div class="bg-white p-4 border border-gray-200 rounded-lg {width}">
  <div class="flex items-center gap-3">
    <!-- Text Input -->
    <div class="flex-1">
      <input
        bind:this={inputElement}
        type="text"
        bind:value={inputValue}
        on:keydown={handleKeydown}
        class="w-full px-4 py-2 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
        {placeholder}
      />
    </div>

    <!-- Submit Button -->
    <button
      on:click={handleSubmit}
      disabled={!inputValue.trim()}
      class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-200 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 flex items-center gap-2"
    >
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      Submit
    </button>
  </div>
</div>
