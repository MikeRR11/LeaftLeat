function detecCentroids(){
    drawlayers.forEach(
        function(layer){
            try{
                let centroid = turf.centroid(layer.toGeoJSON());
                console.log(centroid.geometry.coordinates);

        }catch(error){
            console.log("No se puede calcular el centroide de un poligono sin area");
        }
    }
    )
}