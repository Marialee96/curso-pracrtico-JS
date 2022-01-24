
//Código de cuadrado
console.group("Cuadrado");
var lado = prompt("Ingrese el la longitud del lado del cuadrado: ");
var perimetro = lado * 4;
console.log("El perímetro es: "+perimetro+"cm");

const area = lado *lado;
console.log("El área es: "+area+"cm^2")
console.groupEnd();

//Código de triángulo

console.group("Triángulo");
const ladoT1 = 6;
const ladoT2 = 6;
const ladoT3 = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoT1
    + "cm, "
    + ladoT2
    + "cm, y "
    + ladoT3
    + "cm"
);

const perimetroT = ladoT1 + ladoT2 + ladoT3;
const altura = Math.sqrt(Math.pow(ladoT1,2)-Math.pow((ladoT3/2),2));
const areaT = Math.round((ladoT3 * altura)/2,2);
console.log("El perímero del triángulo es: "
    + perimetro
    + "cm y el área es: "
    + areaT 
    +"cm^2"
);

console.groupEnd();

//Código de triángulo

console.group("Circulo");

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;

const circunferencia = diametro * PI;
const areaC = Math.pow(radio,2) * PI;

console.log("El radio del circulo: "
    + radio
    + "cm, la circunferencia es: "
    + circunferencia
    + "cm y el área es: "
    +areaC
    +"cm^2"
);
console.groupEnd();