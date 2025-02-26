const map1 = L.map('map1').setView([4.580117151176814, -74.15308284860983], 16);
const map2 = L.map('map2').setView([4.580117151176814, -74.15308284860983], 16);

const layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map1);

const layer2 = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map2);

const sideBySide = L.control.sideBySide(layer1, layer2).addTo(map1);

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