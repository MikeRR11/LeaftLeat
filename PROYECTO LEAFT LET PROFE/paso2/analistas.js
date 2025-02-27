function detecCentroids() {
    drawlayers.forEach(function(layer) {
        try {
            let centroid = turf.centroid(layer.toGeoJSON());
            console.log(centroid.geometry.coordinates);
            L.marker([centroid.geometry.coordinates[1], centroid.geometry.coordinates[0]]).addTo(map);
        } catch (error) {
            console.warn("No se puede calcular el centroide de un poligono sin area", error);
        }
    });
}

function calculateareas() {
    drawlayers.forEach(function(layer) {
        try {
            let area = turf.area(layer.toGeoJSON());
            let centroid = turf.centroid(layer.toGeoJSON());
            let x = centroid.geometry.coordinates[1];
            let y = centroid.geometry.coordinates[0];
            L.marker([x, y], {
                icon: L.divIcon({
                    className: "area_label",
                    html: `${area.toFixed(2)} m<sup>2</sup>`
                }),
            }).addTo(map);
            console.log("Área del polígono:", area, "metros cuadrados");
        } catch (error) {
            console.warn("No se puede calcular el area de un poligono sin area", error);
        }
    });
}