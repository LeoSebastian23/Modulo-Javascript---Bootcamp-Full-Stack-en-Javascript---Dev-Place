function potenciaNumerica(){
    n = parseInt(prompt("Ingrese un numero y se lo elevara a la potencia:"))
    if (n > 0){
        p = parseInt(prompt("Muy bien!\nAhora ingrese el numero al que lo quiere elevar:"))
        if (p > 0){
            potencia = Math.pow(n, p)
            alert("Perfecto.\n" + n + " elevado a la " +  p + " es " + potencia)
        }
        else{
            alert("No se permite numeros negativos")
        }  
    
    }
    else{
        alert("No se ingreso numero. (o se ingreso numero negativo)")
    }
}    

function mayorNumero() {
    if(confirm("Vamos a realizar la comparacion de dos numeros.\nSe mostrata el mayor numero de los ingresados.")){

    var num1 = parseInt(prompt("Ingrese un numero"));
    var num2 = parseInt(prompt("Ingrese otro numero"));
  
    if (num1 && num2) {
      if (num1 >= num2) {
        if (num1 == num2) {
          alert("Los numeros son iguales")
        } else {
          alert(num1+" es mayor.")
        }
      } else {
        alert(num2+" es mayor.")
      }
    } else {
      alert("Uno de los numeros no se relleno")
    }
  
  }
}

function suma(){

    if(confirm("Vamos a realizar la suma de dos numeros.")){
    var n = parseInt(prompt("Ingrese un numero"));
    var n2 = parseInt(prompt("Ingrese otro numero"));
        sum = n + n2
        alert("La suma de los numeros es: "+ sum)
    }
}

    
