<script lang="ts">
  import { traitlet } from './stores';

  export let model;

  let counter = traitlet(model, 'counter', 0);
  let message = traitlet(model, 'message', '');
</script>

<main class="w-full flex flex-col bg-white">
  <div>
    <input
      type="number"
      bind:value={$counter}
      class="p-2 border border-gray-300 rounded mb-4"
    />
  </div>
  <div>
    <span class="font-bold">Message from backend:</span>
    {$message}
  </div>
</main>
