document.getElementById('greetButton').addEventListener('click', function() {
    alert('¡Hola! ¿Cómo estás?');
});


// foreach

let arreglo= [4,6,8,3,4,6];

arreglo.forEach( (valor, indice) =>{
    console.log(valor);
});

// map
function calcularCuadrado(valor){
    //Aquí va toda la magia
    return valor ** 2;
}

let cuadrados = arreglo.map(calcularCuadrado);

// imprimir cuadrados

console.log(arreglo);
cuadrados.forEach((valor, indice) => {
    console.log(`El cuadrado de ${arreglo[indice]} es ${valor}`);
});

//Filter

function mayor50(valor) {
    return valor > 50;
}

let mayores50 = cuadrados.filter(mayor50);

//slice

let parte = arreglo.slice(2, 4);
console.log(parte);
console.log(arreglo);