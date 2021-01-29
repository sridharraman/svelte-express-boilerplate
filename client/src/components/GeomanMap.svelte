<script>
  import 'leaflet';
  import 'leaflet/dist/leaflet.css';

  import '@geoman-io/leaflet-geoman-free';  
  import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

  // stores
  import filter from '../store/filter.js';

  let map;
  const initialView = [51.75222, -1.25596];

  let drawnLayers;

  function fetchAPI() {
    drawnLayers = map.pm.getGeomanDrawLayers(true);
    let shapes = drawnLayers.toGeoJSON();
    filter.setGeoJSON(shapes);
  }

  // create map
  function createMap(container) {
    let m = L.map(container).setView(initialView, 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(m);

    return m;
  }

  // add toolbar
  function addToolbar() {
    map.pm.addControls({  
      position: 'topleft',
      drawCircle: false, 
      drawMarker: false, 
      drawCircleMarker: false, 
    });
  }

  // add event handlers
  function addEventHandlers() {
    map.on('pm:create', e => {  
      // console.log(e);

      // listen to changes on the new layer
      e.layer.on('pm:edit', function(x) {
        // console.log('edit', x)
      });
    });
  }

  function mapAction(container) {
    map = createMap(container);

    addToolbar();
    // addEventHandlers();
  }
</script>

<button on:click="{fetchAPI}" class="p-2">Go</button>

<div class="map" style="width: 100%; height: 100%;" use:mapAction />
