
/*===============================================================================================================================*/

/*Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla los doce nombres utilizando la función console.log(). */

function mostrarMes(){
  let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  mes.forEach((element) => {
    console.log(element)
  })

document.getElementById('inputE1').innerHTML = "En la consola se muestran los meses del año\nPresiona F12 para observar.";
}

/*===============================================================================================================================*/

/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de 
texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function esPar(){
  let n = parseInt(prompt("Ingrese un numero y se le devolvera si es par o no."))
  if ((n > 0) && (Number(n))){
    if(n%2==0){
        
      document.getElementById('inputE2').innerHTML = "El número "+n+" es par";
    
    }else{
        
      document.getElementById('inputE2').innerHTML = "El número "+n+" es impar";
    }
  }
  else{
    alert("No se ingreso parametro.");
  }

  /*  return (n%2==0) ? true :false;  */ 
}
/*===============================================================================================================================*/

/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o 
por una mezcla de ambas.*/ 

function MayOrMin(){
  let cadTexto = prompt("Ingrese una cadena de texto.\nSe determinara si se encuentra en mayuscula o minuscula");

  if(!(Number(cadTexto))){
    if (cadTexto === cadTexto.toUpperCase()){
      document.getElementById('inputE3').innerHTML = cadTexto + " --> Mayuscula.";
    }
    else if(cadTexto === cadTexto.toLowerCase()){
      document.getElementById('inputE3').innerHTML = cadTexto + " --> Minuscula."
      } 
    else{
      document.getElementById('inputE3').innerHTML = cadTexto + " --> Contiene mayusculas y minusculas."
    }
  }
}
/*===============================================================================================================================*/

/*Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/

function factorial(){
	let n = parseInt(prompt("Ingrese un numero y se le devolvera el factorial"))
  var fact = 1; 
	for (i=1; i<=n; i++) {
		fact = fact * i; 
	}
	document.getElementById('inputE4').innerHTML = fact + " es el factorial de " + n+"!"; 
}
/*===============================================================================================================================*/
  function mayoresa10() {
    let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
    let nMayores10 = []
    for (i = 0; i < length.numeros; i++) {
      if (numeros[i] > 10) {
        nMayores10.push(numeros[i])
      }
    }

    nMayores10.forEach((num) => {
      console.log(num)
    })
  }

  /*Funcion de orden superior. Funcion que llaman funcion*/
  function aMenosQue(prueba, entonces) {
    if (!prueba) entonces();

    repetir(3, n => {
      aMenosQue( /*primer parametro de prueba*/ n % 2 == 1,
        /*segundo parametro de consecuencia, el "entonces"*/
        () => {
          console.log(n, "es par");
        });
    });
  }