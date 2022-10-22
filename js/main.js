mapboxgl.accessToken = 'pk.eyJ1IjoiZWFydGhhZGFtIiwiYSI6ImNqd3Y3amlwczBnMzc0YW4xc2x1NWVuNGoifQ.jQvOGeLkupgLxp31-Oa6gw';

//Add commas and stuff to cost value
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var map = new mapboxgl.Map({
    container: 'map',
    //style: 'mapbox://styles/earthadam/cjvy2aoum109m1ct7j4cce74d',
    //style: 'mapbox://styles/earthadam/cjggo2pka002c2so00qaetnaz',	//Website
    style: 'mapbox://styles/earthadam/cjxo0sdri31o01clrrw3qesbq',	//Presentation
    //style: 'mapbox://styles/earthadam/cjggwweef00002rpuoj1t93h3',	//Desert
    //style: 'mapbox://styles/earthadam/cjs968jaf2e1j1fmp6hj0pwwn',
    center: [40,-113],
    zoom: 7
});

var icon = "circle";

map.on('load', function() {
    var layers = ['Retired','Active', 'Future'];
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
        "id": "sites",
        "type": "circle",
        source: "7s",
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 20,
                'stops': [[12, 5], [22, 180]]
            },
            // color circles by project status, using a match expression
            // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
            'circle-color': [
                'match',
                ['get', 'Map Color'],
                'G', '#00ff00',
                'Y', '#ffff00',
                'B', '#39DFff',
                /* other */ '#fff'
            ],
            'circle-stroke-color': [
                'match',
                ['get', 'Map Color'],
                'G', '#004400',
                'Y', '#444400',
                'B', '#00497A',
                /* other */ '#444'
            ],
            'circle-opacity':[
                'match',
                ['get', 'Map Color'],
                'G', 1,
                'Y', 1,
                'B', 1,
                'D', 0,
                /* other */ 1
            ],
            'circle-stroke-opacity':[
                'match',
                ['get', 'Map Color'],
                'G', 1,
                'Y', 1,
                'B', 1,
                'D', 0,
                /* other */ 1
            ],
            'circle-stroke-width':1
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
