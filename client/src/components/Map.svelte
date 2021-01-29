<script>
  // import L from 'leaflet';
  // import * as Ldraw from 'leaflet-draw';
  import 'leaflet';
  import 'leaflet-draw';

  import 'leaflet/dist/leaflet.css';
  import 'leaflet-draw/dist/leaflet.draw.css';
  // import 'leaflet-draw/dist/images/spritesheet.svg';

  let map;
  let toolbar;
  const initialView = [51.75222, -1.25596];

  function createMap(container) {
    // let tile_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    let m = L.map(container, {drawControl: true}).setView(initialView, 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(m);

    return m;
  }

  function mapAction(container) {
    // map = createMap(container);

    map = L.map(container).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // FeatureGroup is to store editable layers
    let drawnItems = new L.FeatureGroup();

    map.addLayer(drawnItems);

    let drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      }
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (e) {
       var type = e.layerType, layer = e.layer;
       if (type === 'marker') {
           // Do marker specific actions
       }

       // Do whatever else you need to. (save to db; add to map etc)
       map.addLayer(layer);

       console.log('created!');
    });

  }

  // map.on('draw:edited', function (e) {
  //        var layers = e.layers;
  //        layers.eachLayer(function (layer) {
  //            //do whatever you want; most likely save back to db
  //        });
  //    });

  function resizeMap() {
    if(map) { map.invalidateSize(); }
  }

  
</script>

<svelte:window on:resize={resizeMap} />

<div class="map" style="width: 100%; height: 100%;" use:mapAction />
