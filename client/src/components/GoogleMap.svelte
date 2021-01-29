<script>
  import { onMount } from 'svelte';

  let container;
  let map;
  let zoom = 8;
  let center = {lat: -34.397, lng: 150.644};
  
    
  onMount(async () => {
    map = new google.maps.Map(container, {
            zoom,
      center,
      styles: mapStyles // optional
    });
  });
</script>

<style>
.full-screen {
    width: 100vw;
    height: 100vh;
}
</style>

<svelte:head>
  <script defer async
  src="https://maps.googleapis.com/maps/api/js?key=<key>&callback=initMap">
  </script>
</svelte:head>

<div class="full-screen" bind:this={container}></div>