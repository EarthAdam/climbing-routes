mapboxgl.accessToken = 'pk.eyJ1IjoiZWFydGhhZGFtIiwiYSI6ImNqd3Y3amlwczBnMzc0YW4xc2x1NWVuNGoifQ.jQvOGeLkupgLxp31-Oa6gw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-105.35,40],
    zoom: 12
});

var icon = "circle";

map.on('load', function() {
    map.addSource('7s', { type: 'geojson', data: 'https://raw.githubusercontent.com/OhioAdam/climbing-routes/main/7s.geojson' });
    map.addSource('8s', { type: 'geojson', data: 'https://raw.githubusercontent.com/OhioAdam/climbing-routes/main/8s.geojson' });
    map.addSource('9s', { type: 'geojson', data: 'https://raw.githubusercontent.com/OhioAdam/climbing-routes/main/9s.geojson' });
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
    
});
