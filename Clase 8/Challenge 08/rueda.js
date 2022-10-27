class Rueda{
    inflada;

    constructor(){
        this.inflada = false
    }

    inflar(){
        return this.inflada = true
    }

    desinflar(){
        return this.inflada = false
    }
}