// ================================ EJERCICIO 1 ========================================= // 
class NIF {
    DNI;
    Letra;

    constructor(dni) {
        this.DNI = dni
        this.Letra = this.buscarLetra()
    }

    buscarLetra() {
        let Letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let l = (this.DNI %23)
        return Letras[l]
    }

    leer() {
        do{
        this.dni = parseInt(prompt("Ingrese su numero de DNI"))
        this.Letra = thisbuscarLetra();
        }
        while(this.dni<=0)
    }

    mostrar() {
        return "DNI: " + this.DNI + " - " + this.Letra
    }

    getDNI() {
        return this.DNI
    }
    setDNI(dni) {
        this.DNI = dni
        this.buscarLetra()
    }

}

nroDNI = parseInt(prompt("Ingrese su numero de DNI"))
let N = new NIF(nroDNI)
alert(N.mostrar())

// ================================ EJERCICIO 3 ========================================= // 
class Persona {
    nombre;
    edad;
    DNI;

    constructor(nombre, edad, dni) {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
    }

    mostrar() {
        alert(this.nombre)
        alert(this.edad)
        alert(this.dni)
    }

    esMayorDeEdad() {
        if (this.edad > 18) {
            return true
        } else {
            return false
        }
    }
    /* --------------------------------------------------------- */
    getNombre() {
        return this.nombre
    }
    setNombre(Nom) {
        this.nombre = Nom
    }

    getEdad() {
        return this.edad
    }

    setEdad( edad) {
        this.edad = edad
    }

    getDNI() {
        return this.DNI
    }

    setEdad( dni) {
        this.DNI = dni
    }
    /* --------------------------------------------------------- */
}
// ================================ EJERCICIO 4 ========================================= // 
/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y cantidad (puede tener decimales).
El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para la clase:
Un constructor, donde los datos pueden estar vacíos.
Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
mostrar(): Muestra los datos de la cuenta.
ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.*/

class Cuenta{
    titular; 
    cantidad;
    total;

    constructor(){
        this.titular;
        this.cantidad;
        this.total=0
    }

    getTitular() {
        return this.titular
    }
    setTitular(persona) {
        this.titular = persona
    }
    getTotal() {
        return this.total
    }
    setTotal(tot) {
        this.total = tot
    }

    ingresar(cantidad){
        if (cantidad > 0){
            this.total += this.cantidad
        }
    }

    retirar(cantidad){
        total = total - cantidad;
    }

    mostrar(){
        console.log("Titular: "+ this.titular)
        console.log("Total: "+ this.total)
    }
}


