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
let numero = parseInt(prompt("Ingrese un numero"))

if(numero >= 0 ){
    alert("El numero es entero")
}
else{
    alert("El numero es negativo")
}

}




function ejercicio03() {
//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

let numero = parseInt(prompt("Ingrese un numero"))

  if (numero % 10 === 4) {
    alert("Este numero termina en 4")
  } else {
    alert("Este numero no termina en 4")
  }
}



function ejercicio04(){
    //4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let numero3 = parseInt(prompt("Ingrese el numero 3"))

    let numeroTotal = [numero1,numero2,numero3] // Guardamos todas las variables en un array nombrando NumeroTotal

    numeroTotal.sort(function(a,b){ //sort ordena de menor a mayor 
        return a - b                //Explicacacion 
    })

    alert(`numero menor a mayor ${numeroTotal}`)

}


function ejercicio05(){
//5. Hacer un algoritmo en JavaScript para una tienda de 
// zapatos que tiene
//  una promoción de descuento para vender al mayor,
//  esta dependerá del número de zapatos que se compren. 
// Si son más de diez, se les dará un 10% de descuento sobre el 
// total de la compra; si el número de zapatos es mayor de veinte pero
//  menor de treinta, se le otorga un 20% de descuento; y si son más treinta 
// zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
 let parZapatos = parseInt(prompt("Ingrese los pares de zapatillas que desea comprar:"));
  const precioZapatilla = 80;
  const totalSinDescuento = parZapatos * precioZapatilla;
  let descuento = 0;

  if (parZapatos > 30) {
    descuento = 0.40;
    alert(`Se le aplicará un 40% de descuento por comprar ${parZapatos} pares.`);
  } else if (parZapatos >= 20 && parZapatos <= 30) {
    descuento = 0.20;
    alert(`Se le aplicará un 20% de descuento por comprar ${parZapatos} pares.`);
  } else if (parZapatos > 10 && parZapatos < 20) {
    descuento = 0.10;
    alert(`Se le aplicará un 10% de descuento por comprar ${parZapatos} pares.`);
  } else {
    alert(`No se aplicará descuento porque solo compró ${parZapatos} pares.`);
  }

  let montoDescuento = totalSinDescuento * descuento;
  let totalFinal = totalSinDescuento - montoDescuento;

  alert(`Total sin descuento: $${totalSinDescuento}
Descuento aplicado: $${montoDescuento}
Total a pagar: $${totalFinal}`);
}




function ejercicio06(){

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber
//  cuál será su sueldo semanal

// , se sabe que si trabaja 40 horas o menos,
//  se le pagará $20 por hora, 

// pero si trabaja más de 40 horas entonces 
// las horas extras se le pagarán a $25 por hora.
  let horasTrabajadas = parseInt(prompt("Coloca las horas trabajadas por semana:"));

  if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
    alert("Por favor, ingresa un número válido de horas.");
    return;
  }

  let sueldo = 0;

  if (horasTrabajadas <= 40) {
    sueldo = horasTrabajadas * 20;
  } else {
    let horasExtras = horasTrabajadas - 40;
    sueldo = (40 * 20) + (horasExtras * 25);
  }

  alert(`Has trabajado ${horasTrabajadas} horas y tu sueldo semanal será de $ ${sueldo}`);
}



function ejercicio07(){    
// 7. Hacer un algoritmo en JavaScript para una tienda de helado 
// que da un descuento por compra a sus clientes con membresía dependiendo
//  de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
// Los descuentos son los siguientes:

//    Tipo A 10% de descuento
//    Tipo B 15% de descuento
//    Tipo C 20% de descuento
  alert(`
Tipo 1 (A) → 10% de descuento
Tipo 2 (B) → 15% de descuento
Tipo 3 (C) → 20% de descuento`);

  let cantidadHelados = parseInt(prompt("¿Cuántos helados compró?"));
  let tipoMembresia = parseInt(prompt("Seleccione el tipo de membresía (1, 2 o 3):"));
  const precioHelado = 50;
  let total = cantidadHelados * precioHelado;
  let descuento = 0;

  switch (tipoMembresia) {
    case 1:
      descuento = 0.10;
      break;
    case 2:
      descuento = 0.15;
      break;
    case 3:
      descuento = 0.20;
      break;
    default:
      alert("Tipo de membresía inválido.");
      return;
  }

  let montoDescuento = total * descuento;
  let totalFinal = total - montoDescuento;

  alert(`Compraste ${cantidadHelados} helados con membresía tipo ${tipoMembresia}.
Descuento aplicado: $${montoDescuento}
Total a pagar: $${totalFinal}`);
}



function ejercicio08() {
    // 8. Hacer un algoritmo en JavaScript para calcular 
    // el promedio de tres notas y determinar 
    // si el estudiante aprobó o no.
    let numero1 =parseInt(prompt("Ingrese la primera nota del 1 al 20 "))
    let numero2 =parseInt(prompt("Ingrese la segunda nota del 1 al 20"))
    let numero3 =parseInt(prompt("Ingrese la tercera notadel 1 al 20"))

    totalNota = (numero1+numero2+numero3) / 3

    if (totalNota >= 12  ){
        alert("El estudiante aprobo con un " + totalNota)
    }else {
        alert("El estudiante desaprobo con la nota " + totalNota)
    }


}

function ejercicio09() {
    // 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
    // se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%,
    //  si generaba menos de $2000 su aumento será de un 10%.
let sueldoTrabajador = parseInt(prompt("Ingrese el sueldo del trabajador"))
let sueldo = 2000

    if(sueldoTrabajador> sueldo){
        aumento = sueldoTrabajador *0.05
        alert("El trabajor esta ganado aproximadamente " + aumento)
    }else {
        aumento = sueldo * 0.10
        alert("El trabajor esta ganado aproximadamente " + aumento)
    }


}



function ejercicio10() {
    // 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

  let numero = parseInt(prompt("Ingrese un número:"));

  if (numero % 2 === 0) {
    alert(`El número ${numero} es PAR.`);
  } else {
    alert(`El número ${numero} es IMPAR.`);
  }
}



function ejercicio11() {
    // 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
  let mayor;

  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
  } else {
    mayor = numero3;
  }

  alert(`El número mayor es: ${mayor}`);
}

function ejercicio12() {
// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

  let numero1 = parseFloat(prompt("Ingrese el primer número:"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (numero1 > numero2) {
    alert(`El número mayor es: ${numero1}`);
  } else if (numero2 > numero1) {
    alert(`El número mayor es: ${numero2}`);
  } else {
    alert("Ambos números son iguales.");
  }
}

function ejercicio13(){
// 13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
let leerTexto = prompt("escribir una vocal")

switch(leerTexto){
    case "a":
      alert(" es una vocal" + leerTexto )
      break
    case "e":
      alert ("es una vocal " + leerTexto)
      break
    
    case "i":
      alert ("es una vocal " + leerTexto)
      break
    
    case "o":
      alert ("es una vocal " + leerTexto)
      break
    
    case "u":
      alert ("es una vocal " + leerTexto)
      break
}


}


function ejercicio14 () {
  // 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
  let numero = parseInt(prompt("Ingresa un número del 1 al 10:"));

  if (numero >= 1 && numero <= 10) {
      if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
    alert(numero + " es primo.");
  } else {
    alert(numero + " no es primo.");
  }
  } else {
    alert("Número fuera del rango.");
  }

}



function ejercicio15(){
// 15. Hacer un algoritmo en JavaScript que convierta centímetros a 
// pulgadas y libras a kilogramos.
let calcularCm = parseInt(prompt("Ingrese la cantidad de centimetros "))
let calcularLibras = parseInt(prompt("Ingrese la cantidad de Libras "))

let pulgadas   = calcularCm / 2.54
let kilogramos =  calcularLibras *  0.453592


alert("cm equivale a " + pulgadas + "pulgadas")
alert("libras equivale a " + kilogramos + "kilometros")


}


function ejercicio16(){
// 16. Hacer un algoritmo en JavaScript que lea un número y 
// según ese número, indique el día que corresponde.

let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

let dia;

switch (numero) {
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miércoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sábado";
    break;
  case 7:
    dia = "Domingo";
    break;
  default:
    dia = "Número inválido. Debe estar entre 1 y 7.";
}
alert(`estamos en el dia ${dia}`)

}

function ejercicio17 (){
  // 17. Hacer un algoritmo en JavaScript donde se 
  // ingrese una hora y nos calcule la hora dentro de un segundo.

let horaTexto = prompt("Ingresa la hora en formato HH:MM:SS:");

let partes = horaTexto.split(":"); // los separa atraves de loq ue colores en el parentecis 

let horas = parseInt(partes[0]);
let minutos = parseInt(partes[1]);
let segundos = parseInt(partes[2]);

// Convertir todo a segundos
let totalSegundos = horas * 3600 + minutos * 60 + segundos;

alert("La hora " + horaTexto + " equivale a " + totalSegundos + " segundos desde medianoche.");



}


function ejercicio18() {
  let cantidad = parseInt(prompt("Ingresa la cantidad de CDs a comprar:"));

let precioUnidad;

if (cantidad >= 1 && cantidad <= 9) {
  precioUnidad = 10;
} else if (cantidad >= 10 && cantidad <= 99) {
  precioUnidad = 8;
} else if (cantidad >= 100 && cantidad <= 499) {
  precioUnidad = 7;
} else if (cantidad >= 500) {
  precioUnidad = 6;
} else {
  alert("Cantidad inválida.");
  precioUnidad = 0;
}

if (precioUnidad > 0) {
  let totalVenta = cantidad * precioUnidad;
  let ganancia = totalVenta * 0.825; // 8.25%

  alert("Precio unitario: $" + precioUnidad);
  alert("Precio total para el cliente: $" + totalVenta);
  alert("Ganancia para el vendedor: $" + ganancia);
}
}

function ejercicio19() {

let id = parseInt(prompt("Ingresa el número del empleado (1=Cajero, 2=Servidor, 3=Mezclador, 4=Mantenimiento):"));
let dias = parseInt(prompt("Cuántos días trabajó? (máximo 6"));

    if (dias < 1 || dias > 6) {
      alert("Cantidad de días inválida.");
    } else {
      let salario = 0;

    if (id === 1){
      salario = 56;
    } 
    else if (id === 2) 
      salario = 64;
    else if (id === 3) 
      salario = 80;
    else if (id === 4) 
      salario = 48;

    else 
    alert("ID inválido. Solo de 1 a 4.");

  if (salario > 0) {
    let total = salario * dias;
    alert("Total a pagar al empleado: $" + total);
    }
  }
}


function ejercicio21 (){
    let n1 = parseInt(prompt("Ingresa el primer número:"));
    let n2 = parseInt(prompt("Ingresa el segundo número:"));
    let n3 = parseInt(prompt("Ingresa el tercer número:"));
    let n4 = parseInt(prompt("Ingresa el cuarto número:"));

    // 1. ¿Cuántos son pares?
    let cantidadPares = 0;
    if (n1 % 2 === 0)
       cantidadPares++;
    if (n2 % 2 === 0)
       cantidadPares++;
    if (n3 % 2 === 0) 
      cantidadPares++;
    if (n4 % 2 === 0) 
      cantidadPares++;
    alert("Cantidad de números pares: " + cantidadPares);

// Cuál es el mayor
let mayor = Math.max(n1, n2, n3, n4);
alert("El mayor número es: " + mayor);

//Si el tercero es par, calcular el cuadrado del segundo
if (n3 % 2 === 0) {
  let cuadrado = n2 * n2;
  alert("El tercero es par. Cuadrado del segundo: " + cuadrado);
}

//Si el primero es menor que el cuarto, calcular la media
if (n1 < n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  alert("El primero es menor que el cuarto. La media es: " + media);
}

//Si el segundo > tercero y el tercero está entre 50 y 700
if (n2 > n3) {
  if (n3 >= 50 && n3 <= 700) {
    let suma = n1 + n2 + n3 + n4;
    alert("El segundo es mayor que el tercero y el tercero está entre 50 y 700. La suma es: " + suma);
  }
}
}

function ejercicio21 (){
  
let numero = parseInt(prompt("Ingresa un número entero positivo para calcular su factorial:"));

if (numero < 0) {
  alert("El número debe ser positivo.");
} else {
  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  alert("El factorial de " + numero + " es: " + factorial);
}



}


function ejercicio22() {
  let n = parseInt(prompt("Ingresa un número entero positivo:"));

if (n < 1) {
  alert("Debes ingresar un número mayor o igual a 1.");
} else {
  // Fórmula: suma = n * (n + 1) / 2
  let suma = n * (n + 1) / 2;
  alert("La suma de los " + n + " primeros números es: " + suma);
}

}



function ejercicio23() {
  let n = parseInt(prompt("Ingresa un número entero positivo"));

if (n < 1) {
  alert("Debes ingresar un número mayor o igual a 1");
} else {
  let suma = 0;

  for (let i = 1; i <= n; i += 2) {
    suma += i;
  }

  alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
}

}


function ejercicio24() {
  let suma = 0;

for (let i = 2; i <= 1000; i += 2) {
  suma += i;
}

alert("La suma de todos los números pares hasta 1000 es: " + suma);
}



function ejercicio25 (){
    let numero = parseInt(prompt("Ingresa un número entero positivo"));

    if (isNaN(numero) || numero < 0) {
    alert(" ingresa un número entero positivo válido");
    } else {
    let resultado = 1;
    let i = numero;

    while (i > 1) {
    resultado *= i;
    i--;
    }

    alert("El factorial de " + numero + " es " + resultado);
    }
}


function ejercicio26(){
let dividendo = parseInt(prompt("Ingresa el dividendo (número mayor o igual a 0):"));
let divisor = parseInt(prompt("Ingresa el divisor (número mayor que 0):"));

if (isNaN(dividendo) || isNaN(divisor) || dividendo < 0 || divisor <= 0) {
  alert("Por favor, ingresa números válidos. Dividendo ≥ 0 y divisor > 0.");
} else {
  let cociente = 0;
  let restante = dividendo;

  while (restante >= divisor) {
    restante -= divisor;
    cociente++;
  }

  alert("Cociente: " + cociente + "\nResto: " + restante);
}

}



function ejercicio27 (){
let suma = 0;
let contador = 0;

while (true) {
  let entrada = prompt("Ingresa un número positivo o negativo para terminar");
  let numero = parseInt(entrada);

  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    // Pide otra vez
  }

  if (numero < 0) {
    break; // Termina el ciclo si el número es negativo
  }

  suma += numero;
  contador++;
}

if (contador === 0) {
  alert("No ingresaste números positivos");
} else {
  let media = suma / contador;
  alert("La media de los números ingresados es: " + media);
}

  
}


function ejercicio28(){
let suma = 0;
let i = 1;

do {
  suma += i;
  i++;
} while (i <= 100);

alert("Suma primeros 100 números" + suma);


}






function ejercicio29(){
let suma = 0;
let i = 1;

while (i <= 100) {
  suma += i;
  i++;
}

alert("Suma primeros 100 números : " + suma);

}




function ejercicio30(){
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

alert("Suma primeros 100 números : " + suma);

}







function ejercicio31(){
let sumaPares = 0, cuentaPares = 0;
let sumaImpares = 0, cuentaImpares = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Ingresa el número " + i + " de 10:"));
  if (isNaN(num)) {
    alert("Número inválido, intenta de nuevo.");
    i--;
    continue;
  }
  
  if (num % 2 === 0) {
    sumaPares += num;
    cuentaPares++;
  } else {
    sumaImpares += num;
    cuentaImpares++;
  }
}

let mediaPares = cuentaPares > 0 ? (sumaPares / cuentaPares): "No hay números pares";
let mediaImpares = cuentaImpares > 0 ? (sumaImpares / cuentaImpares): "No hay números impares";

alert("Media pares: " + mediaPares + "\nMedia impares: " + mediaImpares);


}



function ejercicio32 (){
  let mayorPoblacion = 0;
let provinciaMayor = "";
let ciudadMayor = "";

for (let p = 1; p <= 3; p++) {
  for (let c = 1; c <= 11; c++) {
    let entrada = prompt(`Ingresa la población de la ciudad ${c} de la provincia ${p}:`);
    let poblacion = parseInt(entrada);

    if (isNaN(poblacion) || poblacion < 0) {
      alert("Por favor ingresa un número válido mayor o igual a 0.");
      c--; // repetir la ciudad actual
      continue;
    }

    if (poblacion > mayorPoblacion) {
      mayorPoblacion = poblacion;
      provinciaMayor = p;
      ciudadMayor = c;
    }
  }
}

alert(`La ciudad con mayor población es la ciudad ${ciudadMayor} de la provincia ${provinciaMayor} con ${mayorPoblacion} habitantes.`);

}




function ejercicio33 (){
  let continuar = "s";

while (continuar.toLowerCase() === "s") {//dectectrar minuscula o mayuscula
  // Aquí va el código o tarea principal que quieres repetir
  alert("Ejecutando el programa...");

  continuar = prompt("¿Quieres continuar? (s/n)");
  if (!continuar) {
    // Si cancela o no escribe nada, salimos
    break;
  }
}

alert("Programa terminado.");

}



function ejercicio34 (){

for (let i = 1; i <= 9; i++) {
  let resultado = "Tabla del " + i + ":\n";
  for (let j = 1; j <= 10; j++) {
    resultado += i + " x " + j + " = " + (i * j) + "\n";
  }
  alert(resultado);
}



}




function ejercicio35 (){

let mayor = null;
let menor = null;

for (let i = 1; i <= 20; i++) {
  let entrada = prompt("Ingresa el número " + i + " de 20");
  let num = parseInt(entrada);

  if (isNaN(num)) {
    alert("Número inválido, intenta de nuevo.");
    i--;
    continue;
  }

  if (mayor === null || num > mayor) {
    mayor = num;
  }

  if (menor === null || num < menor) {
    menor = num;
  }
}

alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);


}






function ejercicio36 (){

let n = parseInt(prompt("¿Cuántos términos de la serie Fibonacci quieres ver?"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número válido mayor que cero.");
} else {
  let a = 0, b = 1, serie = "Serie Fibonacci:\n" + a;
  
  for (let i = 1; i < n; i++) {
    serie += ", " + b;
    let temp = a + b;
    a = b;
    b = temp;
  }

  alert(serie);
}
}


function ejercicio37 (){
let a = parseInt(prompt("Ingresa el primer número:"));
let b = parseInt(prompt("Ingresa el segundo número:"));

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  alert("Por favor ingresa dos números enteros positivos.");
} else {
  let originalA = a, originalB = b;

  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  alert("El M.C.D. de " + originalA + " y " + originalB + " es: " + a);
}


}


function ejercicio38 (){
let numero = parseInt(prompt("Ingresa un número para saber si es perfecto:"));

if (isNaN(numero) || numero <= 0) {
  alert("Por favor, ingresa un número entero positivo.");
} else {
  let suma = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      suma += i;
    }
  }

  if (suma === numero) {
    alert(numero + " es un número perfecto.");
  } else {
    alert(numero + " NO es un número perfecto.");
  }
}


}




function ejercicio39 (){
let n = parseInt(prompt("¿Cuántos términos deseas usar para aproximar π?"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número entero positivo.");
} else {
  let pi = 0;

  for (let i = 0; i < n; i++) {
    let termino = Math.pow(-1, i) * (4 / (2 * i + 1));
    pi += termino;
  }

  alert("Aproximación de π usando " + n + " términos es: " + pi);
}


}


function ejercicio40 (){
  let n = parseInt(prompt("¿Cuántos términos deseas usar para aproximar π con la serie de Nilakantha?"));

if (isNaN(n) || n <= 0) {
  alert("Por favor, ingresa un número entero positivo.");
} else {
  let pi = 3;
  let signo = 1;

  for (let i = 2, contador = 1; contador <= n; i += 2, contador++) {
    let termino = 4 / (i * (i + 1) * (i + 2));
    pi += signo * termino;
    signo *= -1; // alterna entre suma y resta
  }

  alert("Aproximación de π con " + n + " términos es: " + pi);
}

}
