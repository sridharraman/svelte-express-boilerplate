<script>
  // modules
  import 'chartjs-plugin-colorschemes';

  // components
  import Pie from "svelte-chartjs/src/Pie.svelte";

  // props
  export let chartData;

  // chart data
  $: data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data
      }
    ]
  };

  // chart options
  $: options = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    },
    title: {
      display: true,
      text: chartData.title
    },
    plugins: {
      colorschemes: {
        scheme: 'brewer.Paired10'
      }
    }
  }
</script>

<div>
  <Pie {data} {options} />
</div>
