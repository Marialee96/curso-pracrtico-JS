function cuadrado(lado) {
    var perimetro = lado * 4;
    var area = lado * lado;
    var resultado = [perimetro,area]
    return resultado
}

var resultado = cuadrado(2)
console.log(resultado)
