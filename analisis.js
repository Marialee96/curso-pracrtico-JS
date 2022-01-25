
//Mediana general de los salarios de los colombianos

function ordenar(salarios){

    var salariosOrdenados = salarios.sort((salario1,salario2) => salario1-salario2);
    return salariosOrdenados
}

function calculoMediana(salarios){

    var salariosOrdenados = ordenar(salarios);
    console.log(salariosOrdenados)
    const mitad = parseInt(salariosOrdenados.length/2);
    
    if (salariosOrdenados.length % 2 == 0) {
        var mediana = (salariosOrdenados[mitad-1]+salariosOrdenados[mitad])/2;
    } else {
        var mediana = salariosOrdenados[mitad];
    }

    return {
        mediana: mediana,
        salariosOrdenados: salariosOrdenados
    }

}


const salarios = colombia.map(persona => persona.valor);

var {mediana,salariosOrdenados} = calculoMediana(salarios);

//Mediana del Top 10% de los salarios en colombia
const porcentaje = 10;
const startPosition = (100-porcentaje)*salariosOrdenados.length/100;
const countPosition = salariosOrdenados.length - startPosition;
const salariosTop10 = salariosOrdenados.splice(startPosition,countPosition);

var medianatop10 = calculoMediana(salariosTop10);