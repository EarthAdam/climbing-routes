mapboxgl.accessToken = 'pk.eyJ1IjoiZWFydGhhZGFtIiwiYSI6ImNqd3Y3amlwczBnMzc0YW4xc2x1NWVuNGoifQ.jQvOGeLkupgLxp31-Oa6gw';

//Add commas and stuff to cost value
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    //style: 'mapbox://styles/earthadam/cjggo2pka002c2so00qaetnaz',	//Website
    //style: 'mapbox satellite-streets-v11',	//Presentation
    //style: 'mapbox://styles/earthadam/cjggwweef00002rpuoj1t93h3',	//Desert
    //style: 'mapbox://styles/earthadam/cjs968jaf2e1j1fmp6hj0pwwn',
    center: [-105.35,40],
    zoom: 12
});

var icon = "circle";

map.on('load', function() {
    var layers = ['7s','8s', '9s'];
    var colors = ['#39DFff','#00FF00', '#FFFF00'];
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      }
    //map.addSource('projects', { type: 'geojson', data: 'projects.geojson' });
    map.addSource('7s', { type: 'geojson', data: 'https://raw.githubusercontent.com/ohioadam/climbing-routes/master/7s.geojson' });
    map.addSource('8s', { type: 'geojson', data: 'https://raw.githubusercontent.com/ohioadam/climbing-routes/master/8s.geojson' });
    map.addSource('9s', { type: 'geojson', data: 'https://raw.githubusercontent.com/ohioadam/climbing-routes/master/9s.geojson' });
    // Add a layer showing the places.
    map.addLayer({
        "id": "7s",
        "type": "circle",
        source: "7s",
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 20,
                'stops': [[12, 5], [22, 180]]
            },
            'circle-color': '#39DFff'
        }
    });
    map.addLayer({
        "id": "8s",
        "type": "circle",
        source: "8s",
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 20,
                'stops': [[12, 5], [22, 180]]
            },
            'circle-color': '#00FF00'
        }
    });
    map.addLayer({
        "id": "9s",
        "type": "circle",
        source: "9s",
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 20,
                'stops': [[12, 5], [22, 180]]
            },
            'circle-color': '#FFFF00'
        }
    });
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

  

    map.on('click', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
    
});
