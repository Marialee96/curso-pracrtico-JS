function cupon(nombre,valor){
    this.nombre = nombre;
    this.valor = valor;
}

function discount(precio,descuento){

    var precioFinal = precio-(precio*descuento/100);
    return precioFinal  
}

function calculo(){
    const precio = document.getElementById('precio').value;
    const descuento = document.getElementById('descuento').value;
    const subTotal = discount(precio,descuento);

    const cupones = document.getElementById('cupones').value;

    for (let i = 0; i < listaCupones.length; i++) {
        if (cupones==listaCupones[i].nombre) {
            var total = discount(subTotal,listaCupones[i].valor);
            bandera = 1;
            break
        } 
        
    }

    if (bandera != 1) {
        alert("El cupón no es válido");
            var total = subTotal;
    }

    
    const resultP = document.getElementById('ResultP');
    resultP.innerText = "El precio con descuento es $"+ total;
}

var listaCupones = [
    new cupon("A1",10), 
    new cupon("A2",20), 
    new cupon("A3",30)   

]

var bandera;



    
    

