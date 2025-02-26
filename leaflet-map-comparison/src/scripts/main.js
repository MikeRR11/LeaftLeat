const map1 = L.map('map1').setView([4.580117151176814, -74.15308284860983], 16);
const map2 = L.map('map2').setView([4.580117151176814, -74.15308284860983], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map1);

L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map2);

L.tileLayer('http://{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map2);

map1.sync(map2);
map2.sync(map1);

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

const divider = document.getElementById('divider');
let isDragging = false;

divider.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const containerWidth = document.getElementById('map-container').offsetWidth;
    const leftWidth = e.clientX / containerWidth * 100;
    document.getElementById('map1').style.width = `${leftWidth}%`;
    document.getElementById('map2').style.width = `${100 - leftWidth}%`;
    divider.style.left = `${leftWidth}%`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});