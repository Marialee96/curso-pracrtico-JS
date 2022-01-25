
function calcularPromedio(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i<lista.length; i++){
    //     sumaLista1 = sumaLista + lista1[i];
    // }

    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){

        return valorAcumulado + nuevoElemento;
    }); 

    const promedio = sumaLista/lista.length; 

    return promedio;

}

const promedio = calcularPromedio([100,200,300,500]);

var resultado = document.getElementById('resultado');
    resultado.innerText = "el promedio de los elementos del arreglo es: " 
    + promedio;