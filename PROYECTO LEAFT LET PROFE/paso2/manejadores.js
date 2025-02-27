let centroides = document.getElementById('centroid');

centroides.addEventListener('click', function() {
    console.log("Vamos a calcular los centroides...");
    detecCentroids();
});

let areas = document.getElementById('areas');
areas.addEventListener('click', function() {
    console.log("Vamos a calcular las áreas...");
    calculateareas();
});