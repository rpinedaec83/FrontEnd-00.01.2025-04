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
let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número no es negativo.");
}
}


function ejercicio03(){
//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
let numero = prompt("Ingrese un número:");
let ultimoDigito = numero.charAt(numero.length - 1);

if (ultimoDigito === '4') {
    console.log("El número termina en 4.");
} 
else {
    console.log("El número no termina en 4.");
}
}

function ejercicio04(){
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
let num1 = parseInt(prompt("Ingrese el primer número entero:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
let num3 = parseInt(prompt("Ingrese el tercer número entero:"));

let menor, medio, mayor;

// Comparar y ordenar manualmente
if (num1 <= num2 && num1 <= num3) {
  menor = num1;
  if (num2 <= num3) {
    medio = num2;
    mayor = num3;
  } else {
    medio = num3;
    mayor = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
  if (num1 <= num3) {
    medio = num1;
    mayor = num3;
  } else {
    medio = num3;
    mayor = num1;
  }
} else {
  menor = num3;
  if (num1 <= num2) {
    medio = num1;
    mayor = num2;
  } else {
    medio = num2;
    mayor = num1;
  }
}
console.log("Números ordenados de menor a mayor: " + menor + ", " + medio + ", " + mayor);
}

function ejercicio05(){
//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
const precioPorZapato = 80;
let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar:"));
let descuento = 0;

if (cantidad > 30) {
    descuento = 0.40; 
} else if (cantidad > 20 && cantidad <= 30) {
    descuento = 0.20; 
} else if (cantidad > 10 && cantidad <= 20) {
    descuento = 0.10; 
} else {
    descuento = 0; 
}

let totalSinDescuento = cantidad * precioPorZapato;
let montoDescuento = totalSinDescuento * descuento;
let totalAPagar = totalSinDescuento - montoDescuento;


console.log(`Cantidad de zapatos: ${cantidad}`);
console.log(`Precio por zapato: $${precioPorZapato}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Monto de descuento: $${montoDescuento.toFixed(2)}`);
console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);
}

function ejercicio06(){
//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas en la semana:"));


const tarifaNormal = 20;
const tarifaExtra = 25;

let sueldo;

if (horasTrabajadas <= 40) {
    sueldo = horasTrabajadas * tarifaNormal;
} 
else {
    let horasExtras = horasTrabajadas - 40;
    sueldo = (40 * tarifaNormal) + (horasExtras * tarifaExtra);
}
console.log("El sueldo semanal es: $" + sueldo.toFixed(2));
}

function ejercicio07(){
//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//   Tipo A 10% de descuento
//   Tipo B 15% de descuento
//   Tipo C 20% de descuento
let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

let descuento = 0;

if (tipoMembresia === "A") {
    descuento = 0.10; 
} else if (tipoMembresia === "B") {
    descuento = 0.15; 
} else if (tipoMembresia === "C") {
    descuento = 0.20; 
} else {
    console.log("Tipo de membresía no válido. No se aplicará descuento.");
}

let montoDescuento = totalCompra * descuento;
let totalAPagar = totalCompra - montoDescuento;


console.log(`Tipo de membresía: ${tipoMembresia}`);
console.log(`Descuento aplicado: ${(descuento * 100)}%`);
console.log(`Monto de descuento: $${montoDescuento.toFixed(2)}`);
console.log(`Total a pagar: $${totalAPagar.toFixed(2)}`);   
}

function ejercicio08(){
//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 60) {
    console.log(`El estudiante aprobó con un promedio de ${promedio.toFixed(2)}.`);
} else {
    console.log(`El estudiante no aprobó. Su promedio es ${promedio.toFixed(2)}.`);
}
}

function ejercicio09(){
//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
let salarioActual = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

let porcentajeAumento;

if (salarioActual > 2000) {
    porcentajeAumento = 0.05; 
} else {
    porcentajeAumento = 0.10;
}

let aumento = salarioActual * porcentajeAumento;

let nuevoSalario = salarioActual + aumento;

console.log(`Salario actual: $${salarioActual.toFixed(2)}`);
console.log(`Porcentaje de aumento: ${(porcentajeAumento * 100)}%`);
console.log(`Monto del aumento: $${aumento.toFixed(2)}`);
console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}
function ejercicio10(){
//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
let numero = parseInt(prompt("Ingrese un número entero:"));

if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} 
else {
    console.log(`El número ${numero} es impar.`);
}
}

function ejercicio11(){
//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

console.log(`El número mayor es: ${mayor}`);
}

function ejercicio12(){
//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    console.log(`El número mayor es: ${num1}`);
} else if (num2 > num1) {
    console.log(`El número mayor es: ${num2}`);
} else {
    console.log("Ambos números son iguales.");
}
}

function ejercicio13(){
//  13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

let letra = prompt("Ingrese una letra:").toLowerCase();

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`La letra '${letra}' es una vocal.`);
} 
else {
    console.log(`La letra '${letra}' no es una vocal.`);
}
}

function ejercicio14(){
//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
  function esPrimo(num) {
        return num === 2 || num === 3 || num === 5 || num === 7;
    }

    let numero = parseInt(prompt("Ingrese un número entero positivo del 1 al 10:"));

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Número inválido, debe estar entre 1 y 10.");
        return;
    }

    if (esPrimo(numero)) {
        alert(`${numero} es un número primo.`);
    } else {
        alert(`${numero} no es un número primo.`);
    }
}

function ejercicio15(){
//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let centimetros = parseFloat(prompt("Ingrese la medida en centímetros:"));
    let libras = parseFloat(prompt("Ingrese el peso en libras:"));

    if (isNaN(centimetros) || centimetros < 0) {
        alert("Por favor, ingrese un valor válido y positivo para centímetros.");
        return;
    }
    if (isNaN(libras) || libras < 0) {
        alert("Por favor, ingrese un valor válido y positivo para libras.");
        return;
    }

    let pulgadas = centimetros / 2.54;
    let kilogramos = libras * 0.453592;

    alert(`${centimetros} cm son ${pulgadas.toFixed(2)} pulgadas.\n${libras} libras son ${kilogramos.toFixed(2)} kilogramos.`);
}

function ejercicio16(){
//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let numero = parseInt(prompt("Ingrese un número del 1 al 7 para conocer el día de la semana:"));

    if (isNaN(numero) || numero < 1 || numero > 7) {
        alert("Número inválido. Debe ser un entero entre 1 y 7.");
        return;
    }

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
    }

    alert(`El día correspondiente al número ${numero} es ${dia}.`);
}
function ejercicio17(){
//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
  let hora = prompt("Ingrese la hora en formato HH:MM:SS (ejemplo: 14:30:59):");

    // Validar formato con expresión regular simple
    const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!regex.test(hora)) {
        alert("Formato incorrecto. Debe ser HH:MM:SS, con HH entre 00 y 23.");
        return;
    }

    // Separar horas, minutos y segundos
    let [hh, mm, ss] = hora.split(":").map(Number);

    // Sumar un segundo
    ss += 1;
    if (ss === 60) {
        ss = 0;
        mm += 1;
        if (mm === 60) {
            mm = 0;
            hh += 1;
            if (hh === 24) {
                hh = 0;
            }
        }
    }
    // Formatear con ceros a la izquierda
    let hhStr = hh.toString().padStart(2, '0');
    let mmStr = mm.toString().padStart(2, '0');
    let ssStr = ss.toString().padStart(2, '0');

    alert(`La hora dentro de un segundo será: ${hhStr}:${mmStr}:${ssStr}`);
}

function ejercicio18(){
//18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//    $10. Si se compran unidades separadas hasta 9.
//    $8. Si se compran entre 10 unidades hasta 99.
//    $7. Entre 100 y 499 unidades.
//    $6. Para mas de 500 unidades.
 let cantidad = parseInt(prompt("Ingrese la cantidad de CDs que desea comprar:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Debe ser un número positivo.");
        return;
    }

    let precioUnidad;

    if (cantidad <= 9) {
        precioUnidad = 10;
    } 
    else if (cantidad >= 10 && cantidad <= 99) {
        precioUnidad = 8;
    } 
    else if (cantidad >= 100 && cantidad <= 499) {
        precioUnidad = 7;
    } 
    else { 
        precioUnidad = 6;
    }

    let total = cantidad * precioUnidad;

    alert(`Cantidad: ${cantidad} CDs\nPrecio unitario: $${precioUnidad}\nTotal a pagar: $${total}`);
}
