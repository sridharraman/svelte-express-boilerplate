<script>
  // components
  import PieChart from './PieChart.svelte';

  // stores
  import apidata from '../store/apidata.js';

  // Iterate over apidata to generate charts #TODO

</script>

<div>
  {#if $apidata.chartData && $apidata.chartData.data}
    <PieChart chartData={$apidata.chartData} />
  {/if}
</div>
