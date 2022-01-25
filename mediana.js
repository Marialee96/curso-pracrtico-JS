function calcularMediana(lista) {

    if (lista.length % 2 == 0) {
        var mediana = (lista[(lista.length/2)-1]+lista[(lista.length/2)])/2;
    } else {
        var mediana = (lista[(lista.length-1)/2]);
    }
    return mediana
}

function ordenarLista(lista){
    var aux;
    for (let i = 0; i < lista.length-1; i++) {
        for (let j = i+1; j < lista.length; j++) {
            if (lista[j]<lista[i]) {
                aux = lista[i];
                lista[i] = lista[j];
                lista[j] = aux;
            }
            
        }
        
    }
}

const cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?: "));
const lista = [];


for (let i = 0; i < cantidad; i++) {
    var numero = parseInt(prompt("Elemento # "+(i+1)));
    lista.push(numero);  
}

console.log(lista);

const listaOrdenada = ordenarLista(lista);

console.log(lista);

const mediana = calcularMediana(lista);