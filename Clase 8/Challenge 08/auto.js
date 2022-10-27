// ================================ EJERCICIO 2 ========================================= //

/*Crea las siguientes clases (cada una en su archivo): 
Motor: con métodos para arrancar el motor y apagarlo. 
Rueda: con métodos para inflar la rueda y desinflarla. 
Ventana: con métodos para abrirla y cerrarla. 
Puerta: con una ventana y métodos para abrir la puerta y cerrar la puerta.
Coche: con un motor, cuatro ruedas y dos puertas;  con los métodos que te parezcan adecuados.*/ 

class Coche{
    motor;
    rueda1;
    rueda2;
    rueda3;
    rueda4;
    puerta1;
    puerta2;

    constructor(){
        this.motor = new Motor();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
    }
}

let auto = new Coche().motor.Encender()
