function ejercicio01(){
//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
let numero = parseInt(prompt("Ingresa un numero"));
if(!isNaN(numero)){
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
}
else{
    alert("El numero ingresado no es valido")
}
}

function ejercicio02(){
//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
}