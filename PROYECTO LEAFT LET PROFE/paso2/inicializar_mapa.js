var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.pm.addControls({
    position: 'topleft',
    drawCircle: false,
    drawCircleMarker: false,
    drawRectangle: false,
    drawPolygon: true,
    drawPolyline: true,
    drawMarker: true,
    cutPolygon: false,
    removalMode: false,
})
let drawlayers =[];
let intersectionsLayers = [];

// Manejadores de eventos
map.on("pm:create", function(e){
    let mylayer = e.layer;
    //si es un poligono entonces agregarlo al arreglo drawlayer
    if(mylayer instanceof L.Polygon){
        drawlayers.push(mylayer);
    }
    console.log("se creo un poligono");
    mylayer.addTo(map);
})
map.on("pm:remove", function(e){
    drawlayers = drawlayers.filter(layer => layer!=e.layer);
    console.log("Se removio un poligono");
})