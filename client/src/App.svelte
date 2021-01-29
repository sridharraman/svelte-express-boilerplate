<script>
  import { onMount } from 'svelte';

	import Sidebar from './components/Sidebar.svelte';
  import SearchBar from './components/SearchBar.svelte';
  // import Map from './components/Map.svelte';
  // import GoogleMap from './components/GoogleMap.svelte';
  import GeomanMap from './components/GeomanMap.svelte';

</script>

<div class="container mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
    <div class="border p-4 lg:col-span-4">
      <SearchBar />
    </div>

    <div class="border p-4 lg:col-span-1 h-screen">
      Sidebar
      <Sidebar />
    </div>

    <div class="border p-4 lg:col-span-3 h-screen mb-5">
      2/3 columns
      <!-- <Map /> -->
      <GeomanMap />
    </div>
      
  </div>
  
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
