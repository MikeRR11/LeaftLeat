const map1 = L.map('map1').setView([51.505, -0.09], 13);
const map2 = L.map('map2').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
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