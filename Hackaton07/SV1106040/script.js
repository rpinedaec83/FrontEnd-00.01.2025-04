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
//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.

function ejercicio02() {
    let numero = parseInt(prompt("Ingresa un número entero"));
    if (!isNaN(numero)) {
        if (numero < 0) {
            alert("El número es negativo.");
        } else {
            alert("El número no es negativo.");
        }
    } else {
        alert("Entrada inválida.");
    }
}
//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4
function ejercicio03() {
    let numero = parseInt(prompt("Ingresa un número"));
    if (!isNaN(numero)) {
        if (Math.abs(numero) % 10 === 4) {
            alert("El número termina en 4.");
        } else {
            alert("El número no termina en 4.");
        }
    } else {
        alert("Entrada inválida.");
    }
}
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {
    let nums = [];
    for (let i = 0; i < 3; i++) {
        let num = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        if (!isNaN(num)) {
            nums.push(num);
        } else {
            alert("Entrada inválida.");
            return;
        }
    }
    nums.sort((a, b) => a - b);
    alert(`Números ordenados de menor a mayor: ${nums.join(", ")}`);
}
// 5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento 
// para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez,
//  se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de 
// veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se 
// otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05() {
    let cantidad = parseInt(prompt("¿Cuántos zapatos deseas comprar?"));
    const precioUnitario = 80;
    let descuento = 0;

    if (!isNaN(cantidad)) {
        if (cantidad > 30) {
            descuento = 0.40;
        } else if (cantidad > 20) {
            descuento = 0.20;
        } else if (cantidad > 10) {
            descuento = 0.10;
        }

        let totalSinDescuento = cantidad * precioUnitario;
        let totalConDescuento = totalSinDescuento * (1 - descuento);
        alert(`Total a pagar: $${totalConDescuento.toFixed(2)} (descuento aplicado: ${descuento * 100}%)`);
    } else {
        alert("Entrada inválida.");
    }
}
//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
//  se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora,
//  pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejercicio06() {
    let horas = parseInt(prompt("Ingresa el número de horas trabajadas esta semana"));
    if (!isNaN(horas)) {
        let sueldo = 0;
        if (horas <= 40) {
            sueldo = horas * 20;
        } else {
            sueldo = (40 * 20) + ((horas - 40) * 25);
        }
        alert(`El sueldo semanal es: $${sueldo}`);
    } else {
        alert("Entrada inválida.");
    }
}
//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus
//  clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B
//  y tipo C. Los descuentos son los siguientes:
   //Tipo A 10% de descuento
  // Tipo B 15% de descuento
   //Tipo C 20% de descuento
function ejercicio07() {
    let tipo = prompt("Ingresa el tipo de membresía (A, B, C)").toUpperCase();
    let precio = parseFloat(prompt("Ingresa el precio de la compra"));

    if (!isNaN(precio)) {
        let descuento = 0;
        if (tipo === "A") {
            descuento = 0.10;
        } else if (tipo === "B") {
            descuento = 0.15;
        } else if (tipo === "C") {
            descuento = 0.20;
        } else {
            alert("Tipo de membresía inválido.");
            return;
        }

        let total = precio * (1 - descuento);
        alert(`Total a pagar con descuento: $${total.toFixed(2)}`);
    } else {
        alert("Precio inválido.");
    }
}

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas
//  y determinar si el estudiante aprobó o no.
function ejercicio08() {
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i + 1}:`));
        if (!isNaN(nota)) {
            notas.push(nota);
        } else {
            alert("Nota inválida.");
            return;
        }
    }
    let promedio = (notas[0] + notas[1] + notas[2]) / 3;
    alert(`Promedio: ${promedio.toFixed(2)} - ${promedio >= 10 ? "Aprobado" : "Reprobado"}`);
}

//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe
//  tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 
// su aumento será de un 10%.
function ejercicio09() {
    let salario = parseFloat(prompt("Ingresa el salario actual del trabajador"));
    if (!isNaN(salario)) {
        let aumento = salario > 2000 ? salario * 0.05 : salario * 0.10;
        let nuevoSalario = salario + aumento;
        alert(`El nuevo salario será: $${nuevoSalario.toFixed(2)} (aumento: $${aumento.toFixed(2)})`);
    } else {
        alert("Salario inválido.");
    }
}

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {
    let numero = parseInt(prompt("Ingresa un número"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("El número es par.");
        } else {
            alert("El número es impar.");
        }
    } else {
        alert("Entrada inválida.");
    }
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11() {
    let a = parseFloat(prompt("Ingresa el primer número"));
    let b = parseFloat(prompt("Ingresa el segundo número"));
    let c = parseFloat(prompt("Ingresa el tercer número"));

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let mayor = Math.max(a, b, c);
        alert(`El número mayor es: ${mayor}`);
    } else {
        alert("Uno o más valores ingresados son inválidos.");
    }
}
//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12() {
    let a = parseFloat(prompt("Ingresa el primer número"));
    let b = parseFloat(prompt("Ingresa el segundo número"));

    if (!isNaN(a) && !isNaN(b)) {
        if (a > b) {
            alert(`El mayor es: ${a}`);
        } else if (b > a) {
            alert(`El mayor es: ${b}`);
        } else {
            alert("Ambos números son iguales.");
        }
    } else {
        alert("Uno o ambos valores ingresados son inválidos.");
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {
    let letra = prompt("Ingresa una letra").toLowerCase();
    if (letra.length === 1 && letra.match(/[a-z]/i)) {
        if ("aeiou".includes(letra)) {
            alert("La letra es una vocal.");
        } else {
            alert("La letra no es una vocal.");
        }
    } else {
        alert("Entrada inválida.");
    }
}
//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 
// y determine si es un número primo.
function ejercicio14() {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 9"));
    const primos = [2, 3, 5, 7];

    if (!isNaN(numero) && numero >= 1 && numero <= 9) {
        if (primos.includes(numero)) {
            alert("El número es primo.");
        } else {
            alert("El número no es primo.");
        }
    } else {
        alert("Número fuera de rango o inválido.");
    }
}
//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    let cm = parseFloat(prompt("Ingresa la cantidad en centímetros"));
    let lb = parseFloat(prompt("Ingresa la cantidad en libras"));

    if (!isNaN(cm) && !isNaN(lb)) {
        let pulgadas = cm / 2.54;
        let kg = lb * 0.453592;
        alert(`${cm} cm = ${pulgadas.toFixed(2)} pulgadas\n${lb} libras = ${kg.toFixed(2)} kilogramos`);
    } else {
        alert("Una o ambas entradas son inválidas.");
    }
}
//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que 
// corresponde.
function ejercicio16() {
    let dia = parseInt(prompt("Ingresa un número del 1 al 7"));
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (!isNaN(dia) && dia >= 1 && dia <= 7) {
        alert(`El día correspondiente es: ${dias[dia - 1]}`);
    } else {
        alert("Número fuera de rango.");
    }
}
//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un
//  segundo.
function ejercicio17() {
    let hora = parseInt(prompt("Ingresa la hora (0-23)"));
    let minuto = parseInt(prompt("Ingresa el minuto (0-59)"));
    let segundo = parseInt(prompt("Ingresa el segundo (0-59)"));

    if (
        !isNaN(hora) && hora >= 0 && hora < 24 &&
        !isNaN(minuto) && minuto >= 0 && minuto < 60 &&
        !isNaN(segundo) && segundo >= 0 && segundo < 60
    ) {
        segundo++;
        if (segundo === 60) {
            segundo = 0;
            minuto++;
            if (minuto === 60) {
                minuto = 0;
                hora++;
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
        alert(`La hora dentro de un segundo será: ${hora}:${minuto}:${segundo}`);
    } else {
        alert("Entrada inválida.");
    }
}
//18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD 
// vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    //$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
   // $7. Entre 100 y 499 unidades.
   // $6. Para mas de 500 unidades.
   // La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado
   //  un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio18() {
    let cantidad = parseInt(prompt("¿Cuántos CDs desea comprar?"));
    let precioUnidad;

    if (!isNaN(cantidad)) {
        if (cantidad <= 9) {
            precioUnidad = 10;
        } else if (cantidad <= 99) {
            precioUnidad = 8;
        } else if (cantidad <= 499) {
            precioUnidad = 7;
        } else {
            precioUnidad = 6;
        }

        let total = cantidad * precioUnidad;
        let ganancia = total * 0.0825;
        alert(`Total a pagar: $${total}\nGanancia del vendedor: $${ganancia.toFixed(2)}`);
    } else {
        alert("Cantidad inválida.");
    }
}
//19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados 
// de la siguiente forma con su número identificador y salario diario correspondiente:
   // Cajero (56$/día).
    //Servidor (64$/día).
   // Preparador de mezclas (80$/día).
    //Mantenimiento (48$/día).
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números 
    // enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
function ejercicio19() {
    let tipo = parseInt(prompt("Ingresa el número identificador del empleado (1-4):\n1. Cajero\n2. Servidor\n3. Preparador\n4. Mantenimiento"));
    let dias = parseInt(prompt("¿Cuántos días trabajó esta semana? (máximo 6)"));

    let salarios = [56, 64, 80, 48];

    if (!isNaN(tipo) && tipo >= 1 && tipo <= 4 && !isNaN(dias) && dias >= 1 && dias <= 6) {
        let pago = salarios[tipo - 1] * dias;
        alert(`Total a pagar: $${pago}`);
    } else {
        alert("Datos inválidos.");
    }
}
//20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las
//  siguientes operaciones:
    //¿Cuántos números son Pares?
   // ¿Cuál es el mayor de todos?
   // Si el tercero es par, calcular el cuadrado del segundo.
    //Si el primero es menor que el cuarto, calcular la media de los 4 números.
    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 
    // 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
function ejercicio20() {
    let nums = [];
    for (let i = 0; i < 4; i++) {
        let num = parseInt(prompt(`Ingresa el número ${i + 1}`));
        if (!isNaN(num) && num > 0) {
            nums.push(num);
        } else {
            alert("Número inválido.");
            return;
        }
    }

    let [n1, n2, n3, n4] = nums;
    let pares = nums.filter(n => n % 2 === 0).length;
    let mayor = Math.max(...nums);
    let mensaje = `Cantidad de pares: ${pares}\nMayor número: ${mayor}\n`;

    if (n3 % 2 === 0) {
        mensaje += `El tercero es par. Cuadrado del segundo: ${n2 ** 2}\n`;
    }

    if (n1 < n4) {
        let media = (n1 + n2 + n3 + n4) / 4;
        mensaje += `El primero es menor que el cuarto. Media: ${media}\n`;
    }

    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
        let suma = n1 + n2 + n3 + n4;
        mensaje += `El segundo es mayor que el tercero y el tercero está entre 50 y 700. Suma: ${suma}\n`;
    }

    alert(mensaje);
}
//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21() {
    let n = parseInt(prompt("Ingresa un número entero positivo"));
    if (!isNaN(n) && n >= 0) {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        alert(`El factorial de ${n} es ${factorial}`);
    } else {
        alert("Número inválido");
    }
}
//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22() {
    let n = parseInt(prompt("Ingresa un número entero positivo"));
    if (!isNaN(n) && n > 0) {
        let suma = (n * (n + 1)) / 2;
        alert(`La suma de los primeros ${n} números es ${suma}`);
    } else {
        alert("Número inválido");
    }
}
//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23() {
    let n = parseInt(prompt("Ingresa un número entero positivo"));
    if (!isNaN(n) && n > 0) {
        let suma = 0;
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }
        alert(`La suma de los impares hasta ${n} es ${suma}`);
    } else {
        alert("Número inválido");
    }
}
//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert(`La suma de los pares hasta 1000 es ${suma}`);
}
//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25() {
    let n = parseInt(prompt("Ingresa un número entero positivo"));
    if (!isNaN(n) && n >= 0) {
        let factorial = 1;
        let i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }
        alert(`El factorial de ${n} es ${factorial}`);
    } else {
        alert("Número inválido");
    }
}
//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
    let dividendo = parseInt(prompt("Ingresa el dividendo"));
    let divisor = parseInt(prompt("Ingresa el divisor"));

    if (!isNaN(dividendo) && !isNaN(divisor) && divisor > 0) {
        let cociente = 0;
        let resto = dividendo;

        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        alert(`Cociente: ${cociente}\nResto: ${resto}`);
    } else {
        alert("Entradas inválidas.");
    }
}
//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números 
// positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27() {
    let suma = 0;
    let contador = 0;
    while (true) {
        let num = parseFloat(prompt("Ingresa un número positivo (negativo para terminar)"));
        if (num < 0) break;
        if (!isNaN(num)) {
            suma += num;
            contador++;
        } else {
            alert("Entrada inválida");
        }
    }

    if (contador > 0) {
        let media = suma / contador;
        alert(`Media: ${media}`);
    } else {
        alert("No se ingresaron números válidos.");
    }
}
//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo 
// repetir.
function ejercicio28() {
    let i = 1;
    let suma = 0;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    alert(`La suma de los primeros 100 números es ${suma}`);
}
//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo
//  mientras.
function ejercicio29() {
    let i = 1;
    let suma = 0;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert(`La suma de los primeros 100 números es ${suma}`);
}
//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo 
// para.
function ejercicio30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert(`La suma de los primeros 100 números es ${suma}`);
}
//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se
//  ingresará diez números.
function ejercicio31() {
    let sumaPares = 0, sumaImpares = 0;
    let contPares = 0, contImpares = 0;

    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        if (!isNaN(num)) {
            if (num % 2 === 0) {
                sumaPares += num;
                contPares++;
            } else {
                sumaImpares += num;
                contImpares++;
            }
        } else {
            alert("Entrada inválida, intenta de nuevo.");
            i--; 
        }
    }

    let mediaPares = contPares > 0 ? (sumaPares / contPares) : 0;
    let mediaImpares = contImpares > 0 ? (sumaImpares / contImpares) : 0;

    alert(`Media de pares: ${mediaPares}\nMedia de impares: ${mediaImpares}`);
}
//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once 
// ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
function ejercicio32() {
    let mayorPoblacion = 0;
    let ciudadMayor = "";

    for (let i = 1; i <= 11; i++) {
        let ciudad = prompt(`Nombre de la ciudad ${i}:`);
        let poblacion = parseInt(prompt(`Población de ${ciudad}:`));
        if (!isNaN(poblacion)) {
            if (poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayor = ciudad;
            }
        } else {
            alert("Población inválida.");
            i--; // repetir
        }
    }

    alert(`La ciudad con mayor población es ${ciudadMayor} con ${mayorPoblacion} habitantes.`);
}
//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33() {
    let continuar;
    do {
        let mensaje = prompt("Escribe un mensaje:");
        alert(`Dijiste: ${mensaje}`);
        continuar = confirm("¿Deseas continuar?");
    } while (continuar);
}
//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al 
// nueve.
function ejercicio34() {
    let resultado = "";
    for (let i = 1; i <= 9; i++) {
        resultado += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += "\n";
    }
    alert(resultado);
}
//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe 
// ingresar sólo veinte números.
function ejercicio35() {
    let mayor = Number.NEGATIVE_INFINITY;
    let menor = Number.POSITIVE_INFINITY;

    for (let i = 0; i < 20; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        if (!isNaN(num)) {
            if (num > mayor) mayor = num;
            if (num < menor) menor = num;
        } else {
            alert("Número inválido");
            i--; // repetir número
        }
    }

    alert(`Mayor: ${mayor}\nMenor: ${menor}`);
}
//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36() {
    let n = parseInt(prompt("¿Cuántos términos de la serie Fibonacci deseas ver?"));
    if (!isNaN(n) && n > 0) {
        let a = 0, b = 1, serie = [a];
        if (n > 1) serie.push(b);

        for (let i = 2; i < n; i++) {
            let siguiente = a + b;
            serie.push(siguiente);
            a = b;
            b = siguiente;
        }

        alert(`Serie de Fibonacci (${n} términos):\n${serie.join(", ")}`);
    } else {
        alert("Número inválido.");
    }
}
//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de 
// Euclides.
function ejercicio37() {
    let a = parseInt(prompt("Ingresa el primer número"));
    let b = parseInt(prompt("Ingresa el segundo número"));

    if (!isNaN(a) && !isNaN(b)) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        alert(`El M.C.D. es ${a}`);
    } else {
        alert("Entradas inválidas.");
    }
}
//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38() {
    let n = parseInt(prompt("Ingresa un número"));
    if (!isNaN(n) && n > 0) {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) suma += i;
        }
        if (suma === n) {
            alert(`${n} es un número perfecto.`);
        } else {
            alert(`${n} no es un número perfecto.`);
        }
    } else {
        alert("Número inválido.");
    }
}
//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de 
// Gregory-Leibniz. La formula que se debe aplicar es:
   //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ..
function ejercicio39() {
    let n = parseInt(prompt("¿Cuántos términos deseas usar para aproximar π?"));
    if (!isNaN(n) && n > 0) {
        let pi = 0;
        for (let i = 0; i < n; i++) {
            pi += (4 / (2 * i + 1)) * (i % 2 === 0 ? 1 : -1);
        }
        alert(`Aproximación de π usando ${n} términos: ${pi}`);
    } else {
        alert("Número inválido.");
    }
}
 
//40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de 
// Nilakantha. La formula que se debe aplicar es:

    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

function ejercicio40() {
    let n = parseInt(prompt("¿Cuántos términos deseas usar para aproximar π?"));
    if (!isNaN(n) && n > 0) {
        let pi = 3;
        let signo = 1;
        for (let i = 2, t = 0; t < n; i += 2, t++) {
            pi += signo * (4 / (i * (i + 1) * (i + 2)));
            signo *= -1;
        }
        alert(`Aproximación de π con ${n} términos (Nilakantha): ${pi}`);
    } else {
        alert("Número inválido.");
    }
}