<!-- This component contains the prototype of the following:
  1. Search filters: datetime range, dropdown, text field
  2. Submit button: to process the request
-->

<script>
  import Datepicker from 'svelte-calendar';
  import apidata from '../store/apidata.js';
  import filter from '../store/filter.js';

  // import axios from 'axios';
  import { handleFetchErrors } from '../services/error_handlers.js';

  let origin = '';
  let destination  = '';
  let selectedPolygon;
  let startDate;
  let endDate;

  let startDateChosen;
  let endDateChosen;
  let format = "#{l}, #{F} #{j}, #{Y}";

  let polygons = [
    { id: 1, text: `Polygon 1` },
    { id: 2, text: `Polygon 2` },
    { id: 3, text: `Polygon 3` }
  ];

  function handleSubmit() {
    fetch('http://localhost:3000/api/v1/vehicles/city/' + $filter.cityId)
     .then(handleFetchErrors)
     .then(response => response.json()) // promise
     .then(json => { // actual data
        apidata.updateChartData(json, 'Vehicle Types');
      })
     .catch(error => { // error
        console.log(error);
      })
  }

  $: filter_geojson_features = ($filter.geojson.features != undefined && $filter.geojson.features.length != 0);

  $: checkFilters =  !($filter.origin || $filter.destination || $filter.startdate || $filter.enddate || filter_geojson_features || $filter.cityId);

  function resetFilters() {
    apidata.reset();
  }
</script>

<div>
  
  <div>
    <input class="p-2" bind:value={$filter.origin} placeholder="Origin" />
    <input class="p-2" bind:value={$filter.destination} placeholder="Destination" />
    <input class="p-2" type=number bind:value={$filter.cityId} placeholder="City ID" />

    <select bind:value={selectedPolygon} class="p-2">
      {#each polygons as polygon}
        <option value={polygon}>
          {polygon.text}
        </option>
      {/each}
    </select>
  </div>

  <div>
    Filters: <br/>
    {JSON.stringify($filter)}
  </div>

  <div>
    <Datepicker
              format={format}
              bind:formattedSelected={startDate}
              bind:dateChosen={startDateChosen}>
      <button class="custom-button bg-green-50 p-2">
        {#if startDateChosen}From: {startDate}{:else}Start Date: ...{/if}
      </button>
    </Datepicker>

    <Datepicker
              format={format}
              bind:formattedSelected={endDate}
              bind:dateChosen={endDateChosen}>
      <button class="custom-button bg-red-50 p-2">
        {#if endDateChosen}To: {endDate}{:else}End Date: ...{/if}
      </button>
    </Datepicker>
  </div>

  <div class="float-right">
    <button disabled={checkFilters} class="p-2 disabled:opacity-50 bg-blue-100" on:click="{handleSubmit}">
      Submit
    </button>

    <button class="p-2 bg-gray-100" on:click="{resetFilters}">Reset</button>
  </div>

</div>
