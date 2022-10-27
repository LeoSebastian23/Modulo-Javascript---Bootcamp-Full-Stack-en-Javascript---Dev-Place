function capturar() {
    //console.log("capturado")
    class Persona {
      nombre;
      edad;
  
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }
    }
    var nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);
    var edadCapturar = document.getElementById("edad").value;
    console.log(edadCapturar);
    
    nuevaPersona = new Persona(nombreCapturar,edadCapturar);
    agregar();
  }

  var agenda=[];

  function agregar(){
    agenda.push(nuevaPersona)
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevaPersona.nombre+"</td><td>"+nuevaPersona.edad+"</td></tbody>"
  }

  function eliminar(){

  }


