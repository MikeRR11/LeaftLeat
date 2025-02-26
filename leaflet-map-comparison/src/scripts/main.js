// This file contains the JavaScript code that initializes the Leaflet maps, implements the synchronization logic between the two maps, sets up the Geoman drawing tools, and handles the events to ensure that edits are reflected on both maps.

const map1 = L.map('map1').setView([51.505, -0.09], 13);
const map2 = L.map('map2').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map2);

const syncMaps = (event) => {
    const { latlng, layerType, layers } = event;
    if (layerType === 'marker') {
        layers.forEach(layer => {
            layer.addTo(map2);
        });
    } else if (layerType === 'polygon' || layerType === 'polyline') {
        layers.forEach(layer => {
            layer.addTo(map2);
        });
    }
};

map1.on('pm:create', syncMaps);
map2.on('pm:create', syncMaps);

map1.pm.addControls({
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    drawRectangle: true,
    drawCircle: true,
    editMode: true,
    removalMode: true,
});

map2.pm.addControls({
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    drawRectangle: true,
    drawCircle: true,
    editMode: true,
    removalMode: true,
});