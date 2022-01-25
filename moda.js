function repeticiones(lista){
    var listaRepeticiones ={};
    lista.map(function(elemento){
        if (listaRepeticiones[elemento]) {
            listaRepeticiones[elemento] += 1;
        } else {
            listaRepeticiones[elemento] = 1;
        }  

    });

    return Object.entries(listaRepeticiones);
}


function calcularModa(lista){

    var listaRepeticiones = repeticiones(lista);
    var listaOrdenada = listaRepeticiones.sort((a,b) => a[1]-b[1]);

    return listaOrdenada[listaOrdenada.length-1]
}

lista = [6, 5, 1, 6, 2, 1, 3, 2, 1, 7, 8, 7];
var moda = calcularModa(lista);