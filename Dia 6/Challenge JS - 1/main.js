function CalcularIVA(){
    if(confirm("¿Desea calcular la operacion?")){

    precio = parseInt(document.getElementById("precio").value);
    iva = (precio * 21)/100
    total = precio + iva

    alert("El total a pagar es: "+ (total));
    }
}

function Creditos(){
     var credito = 0 
    for (var i=0 ; i < 4 ; i++) {
        if(confirm("¿Desea abonar un credito?\nCreditos: "+credito)){
            credito++;
        }
        else {
            break;
        } 
    }

    switch(credito)
    {
        case 1:
            alert("Tienes acceso a 1 sala: Consola")
            break;
        case 2:
            alert("Tienes acceso a 2 salas: Consolas - Juegos 2D")
             break;
        case 3:
            alert("Tienes acceso a 3 salas: Consolas - Juegos 2D - Juegos 3D")
            break;
        case 4:
            alert("Tienes acceso a 4 salas: Consolas - Juegos 2D - Juegos 3D - Realidad Virtual")
            break;
    }
}

function Oficinas(){
   auto =(prompt("Elije el tipo del auto:\n1-Gasolina\n2-Diesel\n3-Electrico"))

    switch(auto)
    {
        case '1':
        case 'Gasolina':
            alert("Dirigirse a la oficina 100.");
            break;
        case '2':
        case 'Diesel':            
            alert("Dirigirse a la oficina 200.");
            break;
        case '3':
        case 'Electrico':
            alert("Dirigirse a la oficina 200.");
            break;
}
}

function Descuentos(){
    aPagar = parseInt(prompt("Ingrese el monto a pagar: "));
    var descuento = 0;

    if (aPagar < 100){
        alert("No hay descuentos")
    }
    else if ((aPagar > 100) && (aPagar <= 300)) {
        descuento = (aPagar*5)/100
        }
    else if ((aPagar > 300) && (aPagar <= 500)) {
        descuento = (aPagar*10)/100
            }
    else if (aPagar > 500){
        descuento = (aPagar*15)/100
    }

    total = aPagar- descuento 
    alert("Total a pagar: "+ total + " Descuento de: "+ descuento)
}