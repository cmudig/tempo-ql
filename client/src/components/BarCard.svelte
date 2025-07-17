<script lang="ts">
  export let value: number = 0;
  export let maxValue: number = 100;
  export let title: string = 'Value Display';
  export let width: string = 'w-full max-w-sm';
  
  // Calculate bar percentage
  $: percentage = Math.min((value / maxValue) * 100, 100);
  $: barColor = percentage > 80 ? 'bg-red-500' : percentage > 60 ? 'bg-yellow-500' : 'bg-green-500';
</script>

<div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200 {width}">
  <h3 class="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
  
  <!-- Value Display -->
  <div class="text-center mb-4">
    <div class="text-3xl font-bold text-indigo-600">{value}</div>
    <div class="text-sm text-gray-500">out of {maxValue}</div>
  </div>
  
  <!-- Progress Bar -->
  <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
    <div 
      class="h-4 rounded-full transition-all duration-300 ease-out {barColor}"
      style="width: {percentage}%"
    ></div>
  </div>
  
  <!-- Percentage -->
  <div class="text-right">
    <span class="text-sm font-medium text-gray-700">{percentage.toFixed(1)}%</span>
  </div>
  
  <!-- Additional Info -->
  <div class="mt-4 p-3 bg-gray-50 rounded-lg">
    <div class="text-sm text-gray-600">
      <div class="flex justify-between">
        <span>Current:</span>
        <span class="font-medium">{value}</span>
      </div>
      <div class="flex justify-between">
        <span>Max:</span>
        <span class="font-medium">{maxValue}</span>
      </div>
    </div>
  </div>
</div> 