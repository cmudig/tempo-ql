<script lang="ts">
  export let message: string = '';
  export let width: string = 'w-full max-w-2xl';
</script>

<div class="bg-white p-6 border border-gray-200 {width}">
  <h3 class="text-lg font-semibold text-gray-800 mb-3">1Backend Communication</h3>
  <div class="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-500">
    <p class="text-gray-700 text-sm leading-relaxed">
      {message || 'No message from backend yet. Try changing the text!'}
    </p>
  </div>
</div> 