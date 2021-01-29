<script>
  import apidata from '../store/apidata.js';

  function changeApiData() {
    apidata.toggleVisibility();
    apidata.incInt();
  }
</script>

<div>
  {JSON.stringify($apidata)}
  <hr>

  <button on:click="{changeApiData}" class="p-2 bg-blue-200">Change!</button>
  <button on:click="{apidata.reset}" class="p-2 bg-red-200">Reset</button>
</div>
