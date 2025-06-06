function ejercicio01() {
    //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
    let numero = parseInt(prompt("Ingresa un numero"));
    if (!isNaN(numero)) {
        if (numero > 99 && numero < 1000) {
            alert("Este numero tiene 3 digitos")
        }
        else {
            alert("Este numero no tiene 3 digitos")
        }
    }
    else {
        alert("El numero ingresado no es valido")
    }
}

function ejercicio02() {
    //2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    let numero = parseInt(prompt("Ingresa un numero"));
    if (!isNaN(numero)) {
        if (numero < 0) {
            alert("Este numero es negativo")
        }
        else {
            alert("Este numero es positivo")
        }
    }
    else {
        alert("El numero ingresado no es valido")
    }
}

function ejercicio03() {
    //3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let numero = prompt("Ingresa un numero");
    let ultimoNumero = numero[numero.length - 1]
    if (!isNaN(numero)) {
        if (ultimoNumero == '4') {
            alert("El numero termina en 4")
        }
        else {
            alert("El numero no termina en 4")
        }
    }
    else {
        alert("El numero ingresado no es valido")
    }
}

function ejercicio04() {
    //4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    let primerNumero = parseInt(prompt("Ingresa el primer numero"));
    let segundoNumero = parseInt(prompt("Ingresa el segundo numero"));
    let tercerNumero = parseInt(prompt("Ingresa el tercer numero"));
    if (!isNaN(primerNumero, segundoNumero, tercerNumero)){
        let numeros = [primerNumero, segundoNumero, tercerNumero]
        numeros.sort((a,b) => a - b)
        alert("Numeros ordenados de menor a mayor: " + numeros.join(", "))
    }
    else {
        alert("El numero ingresado no es valido")
    }
}

function ejercicio05() {
    //5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos a comprar:"));
    const precioUnitario = 80;
    let total = cantidad * precioUnitario;
    let descuento = 0;

    if (cantidad > 30) {
        descuento = 0.40;
    } else if (cantidad > 20) {
        descuento = 0.20;
    } else if (cantidad > 10) {
        descuento = 0.10;
    }

    let totalConDescuento = total - (total * descuento);

    alert(`Total sin descuento: $${total.toFixed(2)}\nDescuento: ${descuento * 100}%\nTotal a pagar: $${totalConDescuento.toFixed(2)}`);
}

function ejercicio06() {
    //6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    let horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
    let sueldo = 0;

    if (horas <= 40) {
        sueldo = horas * 20;
    } else {
        sueldo = 40 * 20 + (horas - 40) * 25;
    }

    alert(`El sueldo semanal es: $${sueldo}`);
}

function ejercicio07() {
    //7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
   //Tipo A 10% de descuento
   //Tipo B 15% de descuento
   //Tipo C 20% de descuento
    let tipo = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
    let monto = parseFloat(prompt("Ingrese el monto de la compra:"));
    let descuento = 0;

    switch (tipo) {
        case "A":
            descuento = 0.10;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresía no válido.");
            return;
    }

    let total = monto - (monto * descuento);
    alert(`Monto con descuento: $${total.toFixed(2)}`);
}

function ejercicio08() {
    //8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 12.5) {
        alert(`Promedio: ${promedio.toFixed(2)} - Aprobado`);
    } else {
        alert(`Promedio: ${promedio.toFixed(2)} - Desaprobado`);
    }
}

function ejercicio09() {
    //9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    let sueldoActual = parseFloat(prompt("Ingrese su sueldo actual:"));
    let aumento = sueldoActual > 2000 ? sueldoActual * 0.05 : sueldoActual * 0.10;
    let nuevoSueldo = sueldoActual + aumento;

    alert(`Sueldo actual: $${sueldoActual.toFixed(2)}\nAumento: $${aumento.toFixed(2)}\nNuevo sueldo: $${nuevoSueldo.toFixed(2)}`);
}

function ejercicio10() {
    //10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    let numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        alert("Entrada no válida");
        return;
    }
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

function ejercicio11() {
    //11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));
    let c = parseFloat(prompt("Ingrese el tercer número:"));

    let mayor = Math.max(a, b, c);

    alert(`El mayor número es: ${mayor}`);
}

function ejercicio12() {
    //12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    let a = parseFloat(prompt("Ingrese el primer número:"));
    let b = parseFloat(prompt("Ingrese el segundo número:"));

    if (a === b) {
        alert("Ambos números son iguales.");
    } else {
        let mayor = a > b ? a : b;
        alert(`El mayor número es: ${mayor}`);
    }
}

function ejercicio13() {
    //13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
    let letra = prompt("Ingrese una letra:").toLowerCase();

    if (letra.length !== 1 || !isNaN(letra)) {
        alert("Por favor, ingrese solo una letra.");
        return;
    }
    if ("aeiou".includes(letra)) {
        alert("Es una vocal.");
    } else {
        alert("No es una vocal.");
    }
}

function ejercicio14() {
    //14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
    let numero = parseInt(prompt("Ingrese un número entre 1 y 9:"));

    if (numero < 1 || numero > 9) {
        alert("Número fuera de rango.");
        return;
    }

    const primos = [2, 3, 5, 7];

    if (primos.includes(numero)) {
        alert(`${numero} es un número primo.`);
    } else {
        alert(`${numero} no es un número primo.`);
    }
}

function ejercicio15() {
    //15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    let lb = parseFloat(prompt("Ingrese la cantidad en libras:"));

    let pulgadas = cm / 2.54;
    let kg = lb * 0.453592;

    alert(`${cm} cm = ${pulgadas.toFixed(2)} pulgadas\n${lb} libras = ${kg.toFixed(2)} kilogramos`);
}

function ejercicio16() {
    //16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (numero >= 1 && numero <= 7) {
        alert(`El día correspondiente es: ${dias[numero - 1]}`);
    } else {
        alert("Número fuera de rango. Debe estar entre 1 y 7.");
    }
}

function ejercicio17() {
    //17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    let horas = parseInt(prompt("Ingrese las horas (0-23):"));
    let minutos = parseInt(prompt("Ingrese los minutos (0-59):"));
    let segundos = parseInt(prompt("Ingrese los segundos (0-59):"));

    if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
        alert("Hora inválida.");
        return;
    }

    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    if (horas === 24) {
        horas = 0;
    }
    alert(`La hora un segundo después es: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
}

function ejercicio18() {
    //18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
    //$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
    //$7. Entre 100 y 499 unidades.
    //$6. Para mas de 500 unidades.
    //La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
    let precioUnidad = 0;

    if (cantidad < 1) {
        alert("Cantidad inválida.");
        return;
    }

    if (cantidad <= 9) {
        precioUnidad = 10;
    } else if (cantidad <= 99) {
        precioUnidad = 8;
    } else if (cantidad <= 499) {
        precioUnidad = 7;
    } else {
        precioUnidad = 6;
    }

    let totalVenta = cantidad * precioUnidad;
    let ganancia = totalVenta * 0.0825;

    alert(`Precio total para el cliente: $${totalVenta.toFixed(2)}\nGanancia del vendedor: $${ganancia.toFixed(2)}`);
}

function ejercicio19() {
    //19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
    //Cajero (56$/día).
    //Servidor (64$/día).
    //Preparador de mezclas (80$/día).
    //Mantenimiento (48$/día).
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
    let tipo = parseInt(prompt("Ingrese el número identificador del empleado:\n1 - Cajero\n2 - Servidor\n3 - Preparador de mezclas\n4 - Mantenimiento"));
    let dias = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));
    let salarioDia = 0;

    if (dias < 1 || dias > 6) {
        alert("Cantidad de días inválida.");
        return;
    }

    switch (tipo) {
        case 1:
            salarioDia = 56;
            break;
        case 2:
            salarioDia = 64;
            break;
        case 3:
            salarioDia = 80;
            break;
        case 4:
            salarioDia = 48;
            break;
        default:
            alert("Tipo de empleado inválido.");
            return;
    }

    let total = salarioDia * dias;
    alert(`Total a pagar al empleado: $${total}`);
}

function ejercicio20() {
    //20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    //¿Cuántos números son Pares?
    //¿Cuál es el mayor de todos?
    //Si el tercero es par, calcular el cuadrado del segundo.
    //Si el primero es menor que el cuarto, calcular la media de los 4 números.
    //Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    let n1 = parseInt(prompt("Ingrese el primer número:"));
    let n2 = parseInt(prompt("Ingrese el segundo número:"));
    let n3 = parseInt(prompt("Ingrese el tercer número:"));
    let n4 = parseInt(prompt("Ingrese el cuarto número:"));

    if ([n1, n2, n3, n4].some(n => isNaN(n) || n <= 0)) {
        alert("Todos los números deben ser enteros positivos.");
        return;
    }

    // ¿Cuántos son pares?
    let pares = [n1, n2, n3, n4].filter(n => n % 2 === 0).length;
    alert(`Cantidad de números pares: ${pares}`);

    // ¿Cuál es el mayor?
    let mayor = Math.max(n1, n2, n3, n4);
    alert(`El mayor número es: ${mayor}`);

    // Si el tercero es par, calcular el cuadrado del segundo
    if (n3 % 2 === 0) {
        alert(`El tercero es par. El cuadrado del segundo es: ${n2 ** 2}`);
    }

    // Si el primero es menor que el cuarto, calcular media
    if (n1 < n4) {
        let media = (n1 + n2 + n3 + n4) / 4;
        alert(`El primero es menor que el cuarto. La media es: ${media.toFixed(2)}`);
    }

    // Si segundo > tercero y tercero entre 50 y 700, sumar todos
    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
        let suma = n1 + n2 + n3 + n4;
        alert(`El segundo es mayor que el tercero y el tercero está entre 50 y 700. La suma es: ${suma}`);
    }
}

function ejercicio21() {
    //21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    let n = parseInt(prompt("Ingrese un número entero no negativo:"));
    if (isNaN(n) || n < 0) return alert("Número inválido.");
    
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    alert(`El factorial de ${n} es: ${fact}`);
}

function ejercicio22() {
    //22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    let n = parseInt(prompt("Ingrese un número positivo:"));
    if (isNaN(n) || n <= 0) return alert("Número inválido.");
    
    let suma = (n * (n + 1)) / 2;
    alert(`La suma de los primeros ${n} números es: ${suma}`);
}

function ejercicio23() {
    //23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
    let n = parseInt(prompt("Ingrese un número positivo:"));
    if (isNaN(n) || n <= 0) return alert("Número inválido.");
    
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
        suma += i;
    }
    alert(`La suma de los impares hasta ${n} es: ${suma}`);
}

function ejercicio24() {
    //24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert(`La suma de los números pares hasta 1000 es: ${suma}`);
}

function ejercicio25() {
    //25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    function calcularFactorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * calcularFactorial(n - 1);
    }

    let n = parseInt(prompt("Ingrese un número entero no negativo:"));
    if (isNaN(n) || n < 0) return alert("Número inválido.");
    alert(`El factorial de ${n} es: ${calcularFactorial(n)}`);
}

function ejercicio26() {
    //26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    
    if (isNaN(dividendo) || isNaN(divisor) || divisor <= 0) return alert("Datos inválidos.");

    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    alert(`Cociente: ${cociente}, Resto: ${dividendo}`);
}

function ejercicio27() {
    //27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
    let suma = 0;
    let contador = 0;
    while (true) {
        let numero = parseFloat(prompt("Ingrese un número positivo (negativo para terminar):"));
        if (numero < 0) break;
        if (!isNaN(numero)) {
            suma += numero;
            contador++;
        }
    }

    if (contador === 0) {
        alert("No se ingresaron números válidos.");
    } else {
        alert(`La media es: ${(suma / contador).toFixed(2)}`);
    }
}

function ejercicio28() {
    //28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
    let suma = 0, i = 1;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio29() {
    //29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
    let suma = 0, i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio30() {
    //30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio31() {
    // 31. Hacer un algoritmo en JavaScript para calcular la media de los números pares e impares, sólo se ingresarán diez números.
    let sumaPar = 0, sumaImpar = 0, contPar = 0, contImpar = 0;
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        if (num % 2 === 0) {
            sumaPar += num;
            contPar++;
        } else {
            sumaImpar += num;
            contImpar++;
        }
    }
    let mediaPar = contPar > 0 ? sumaPar / contPar : 0;
    let mediaImpar = contImpar > 0 ? sumaImpar / contImpar : 0;
    alert(`Media de pares: ${mediaPar.toFixed(2)}\nMedia de impares: ${mediaImpar.toFixed(2)}`);
}

function ejercicio32() {
    // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
    let ciudadMayor = "";
    let mayorPoblacion = -1;

    for (let i = 1; i <= 11; i++) {
        let ciudad = prompt(`Nombre de la ciudad ${i}:`);
        let poblacion = parseInt(prompt(`Población de ${ciudad}:`));
        if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadMayor = ciudad;
        }
    }

    alert(`La ciudad con más población es ${ciudadMayor} con ${mayorPoblacion} habitantes.`);
}

function ejercicio33() {
    // 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
    let continuar = true;
    while (continuar) {
        alert("Ejecutando una parte del programa...");
        continuar = confirm("¿Deseas continuar?");
    }
    alert("Programa finalizado.");
}

function ejercicio34() {
    // 34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
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

function ejercicio35() {
    // 35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    let mayor = Number.NEGATIVE_INFINITY;
    let menor = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= 20; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i}:`));
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }

    alert(`Mayor número: ${mayor}\nMenor número: ${menor}`);
}

function ejercicio36() {
    // 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
    let n = parseInt(prompt("¿Cuántos términos de Fibonacci deseas ver?"));
    if (n <= 0) return alert("Número inválido.");

    let a = 0, b = 1, serie = "0";

    for (let i = 1; i < n; i++) {
        serie += `, ${b}`;
        [a, b] = [b, a + b];
    }

    alert(`Serie Fibonacci de ${n} términos:\n${serie}`);
}

function ejercicio37() {
    // 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));

    function mcd(x, y) {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    alert(`El MCD de ${a} y ${b} es: ${mcd(a, b)}`);
}

function ejercicio38() {
    // 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
    let num = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
    let suma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) suma += i;
    }

    if (suma === num) {
        alert(`${num} es un número perfecto.`);
    } else {
        alert(`${num} no es un número perfecto.`);
    }
}

function ejercicio39() {
    // 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz.
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
    let terminos = parseInt(prompt("Ingrese el número de términos para aproximar π (Gregory-Leibniz):"));
    let pi = 0;
    let signo = 1;

    for (let i = 0; i < terminos; i++) {
        let denominador = 2 * i + 1;
        pi += signo * (4 / denominador);
        signo *= -1;
    }

    alert(`Aproximación de π con ${terminos} términos:\n${pi}`);
}

function ejercicio40() {
    // 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha.
// Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + ...
    let terminos = parseInt(prompt("Ingrese el número de términos para aproximar π (Nilakantha):"));
    let pi = 3;
    let signo = 1;

    for (let i = 2, count = 0; count < terminos; i += 2, count++) {
        let termino = 4 / (i * (i + 1) * (i + 2));
        pi += signo * termino;
        signo *= -1;
    }

    alert(`Aproximación de π con ${terminos} términos:\n${pi}`);
}

















