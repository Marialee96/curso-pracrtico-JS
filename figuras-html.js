function calculoP(lado){
    var lado = document.getElementById("lado").value;
    const perimetro = lado*4;
    alert(perimetro);
}

function calculoA(lado){
    var lado = document.getElementById("lado").value;
    const area = lado*lado;
    alert(area);
}

function calculoH(cat1,cat2,base){

    cat1 = document.getElementById("cat1").value;
    cat2 = document.getElementById("cat2").value;
    base = document.getElementById("base").value;

    if (cat1 == cat2 && cat1 != base){
        const altura = Math.sqrt(Math.pow(cat1,2)-Math.pow((base/2),2));
        alert(altura);
    } else {
        alert("No es un triangulo isóceles");
    }
}




