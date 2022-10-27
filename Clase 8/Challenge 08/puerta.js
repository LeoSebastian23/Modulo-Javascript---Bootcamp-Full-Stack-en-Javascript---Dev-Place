class Puerta{
    puerta;
    ventana;

    constructor(){
        this.puerta = true;
        this.ventana = new Ventana();
    }

    abrirPuerta(){
        return this.puerta = false
    }
    cerrarPuerta(){
        return this.puerta = true
    }
}