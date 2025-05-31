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
    let input = prompt("Ingresa un número entero:");
    let numero = Number(input); // Se recomienda usar Number en lugar de parseInt para mayor claridad

    // Verificar si es un número entero válido
    if (Number.isInteger(numero)) {
        /* alert("si es numero entero"); */
        if (numero < 0) {
            alert("Este número es negativo.");
        }
        else {
            alert("Este número no es negativo.");
        }
    }
    else {
        alert("Debe ingresar un número entero válido.");
    }
}

function ejercicio03() {
    //3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let input = prompt("Ingresa un numero entero:");
    let numero = Number(input);
    let ultimaCifra = Math.abs(numero) % 10;
    if (Number.isInteger(numero)) {
        if (ultimaCifra == 4) {
            alert("El numero termina en 4");
        }
        else {
            alert("El numero no termina en 4");
        }
    }
    else {
        alert("Debe ingresar un número entero válido.");
    }
}
function ejercicio04() {
    //4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
    let primerNumero = Number(prompt("Coloque el primer numero"));
    let segundoNumero = Number(prompt("Coloque el segundo numero"));
    let tercerNumero = Number(prompt("Coloque el tercer numero"));

    if (Number.isInteger(primerNumero) && Number.isInteger(segundoNumero) && Number.isInteger(tercerNumero)) {
        let numeros = [primerNumero, segundoNumero, tercerNumero];

        numeros.sort((a, b) => a - b);

        alert("Numeros ordenados de menor a mayor: " + numeros.join(", "));
    }
    else {
        alert("Debes ingresar solo numero enteros validos");
    }
}

function ejercicio05() {
    //5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    const precioZapato = 80;
    let numeroZapato = Number(prompt("Coloque el número de zapatos a comprar"));

    if (Number.isInteger(numeroZapato) && numeroZapato > 0) {
        let total;
        if (numeroZapato > 30) {
            total = numeroZapato * precioZapato * 0.6; // 40% de descuento
        } else if (numeroZapato > 20) {
            total = numeroZapato * precioZapato * 0.8; // 20% de descuento
        } else if (numeroZapato > 10) {
            total = numeroZapato * precioZapato * 0.9; // 10% de descuento
        } else {
            total = numeroZapato * precioZapato; // Sin descuento
        }
        alert("El total a pagar es: $" + total);
    } else {
        alert("Debe ingresar un número entero válido de zapatos.");
    }
}

function ejercicio06() {
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
    let numeroHoras = parseInt(prompt("Colocar horas trabajadas"));
    if (!isNaN(numeroHoras) && numeroHoras > 0) {
        let sueldo;
        if (numeroHoras > 40) {
            sueldo = (numeroHoras * 20) + ((numeroHoras - 40) * 5);
        } else if (numeroHoras < 41) {
            sueldo = numeroHoras * 20;
        }
        alert("El Sueldo a recibir es $" + sueldo)
    } else {
        alert("Agregar un valor valido")
    }

}

function ejercicio07() {
    /* 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento */
    let heladoPrecio = parseInt(prompt("Indicar precio del helado a comprar"));
    let tipoMembresia = parseInt(prompt(`
        Seleccione el tipo de membresia:
        1 ---> A
        2 ---> B
        3 ---> C
        4 ---> Sin membresia
        `));
    if (!isNaN(heladoPrecio) && !isNaN(tipoMembresia) && tipoMembresia < 0 && tipoMembresia > 5) {
        switch (tipoMembresia) {
            case 1:
                total = heladoPrecio * 0.9;
                break;
            case 2:
                total = heladoPrecio * 0.85;
                break;
            case 3:
                total = heladoPrecio * 0.80;
                break;
            case 4:
                total = heladoPrecio;
                break;
        }
        alert("El precio a pagar es $" + total);
    } else {
        alert("Selecionar un valor valido");
    }
}

function ejercicio08() {
    //Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no
    alert("Nota Final mayor a 12 para aprobar");
    let primerNumero = parseInt(prompt("Coloque la primera nota"));
    let segundoNumero = parseInt(prompt("Coloque la segunda nota"));
    let tercerNumero = parseInt(prompt("Coloque la tercera nota"));
    if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
        let promedio = (primerNumero + segundoNumero + tercerNumero) / 3;
        if (promedio > 12) {
            alert("Aprobado con nota: " + promedio);
        } else {
            alert("Desaprobado con nota: " + promedio);
        }
    } else {
        alert("Selecionar un valor valido");
    }
}

function ejercicio09() {
    //9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    let sueldo = parseInt(prompt("Coloque el sueldo del colaborador"));
    if (!isNaN(sueldo) && sueldo > 0) {
        if (sueldo > 1999) {
            nuevoSueldo = sueldo * 0.05;
        } else {
            nuevoSueldo = sueldo * 0.10;
        }
        alert("El aumento que debe recibir es $" + nuevoSueldo)
    } else {
        alert("Selecionar un valor valido");
    }

}

function ejercicio10() {
    //10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    let numero = parseInt(prompt("Colocar un numero"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("El numero es PAR");
        } else {
            alert("El numero es IMPAR")
        }
    } else {
        alert("Selecionar un valor valido");
    }
}

function ejercicio11() {
    //11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    let primerNumero = parseInt(prompt("Coloque el primer numero"));
    let segundoNumero = parseInt(prompt("Coloque el segundo numero"));
    let tercerNumero = parseInt(prompt("Coloque el tercer numero"));
    if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
        if (primerNumero >= segundoNumero && primerNumero >= tercerNumero) {
            mayor = primerNumero;
        } else if (segundoNumero >= primerNumero && segundoNumero >= tercerNumero) {
            mayor = segundoNumero;
        } else {
            mayor = tercerNumero;
        }
        alert("El numero mayor es: " + mayor);
    } else {
        alert("Selecionar un valor valido");
    }
}


function ejercicio12() {
    //12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    let primerNumero = parseInt(prompt("Coloque el primer numero"));
    let segundoNumero = parseInt(prompt("Coloque el segundo numero"));
    if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
        if (primerNumero >= segundoNumero) {
            mayor = primerNumero;
        } else {
            mayor = segundoNumero;
        }
        alert("El numero mayor es: " + mayor);
    } else {
        alert("Selecionar un valor valido");
    }
}

function ejercicio13() {
    //13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
    let letra = prompt("Coloca una Letra");
    if (letra && letra.length === 1 && isNaN(letra)) {
        letra = letra.toLowerCase();
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            alert("La letra ingresada es una vocal.");
        } else {
            alert("La letra ingresada no es una vocal.");
        }
    } else {
        alert("Ingresa solo una letra válida.");
    }
}

function ejercicio14() {
    //14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
    let numero = parseInt(prompt("Coloca un numero"));
    if (!isNaN(numero) && numero >= 1 && numero <= 10) {
        let esPrimo = true;

        if (numero === 1) {
            esPrimo = false;
        } else {
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        if (esPrimo) {
            alert("El número " + numero + " es primo.");
        } else {
            alert("El número " + numero + " no es primo.");
        }
    } else {
        alert("Debes ingresar un número entero del 1 al 10.");
    }
}

function ejercicio15() {
    //15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
    let operacion = parseInt(prompt(`
        Seleccione el tipo de conversión:
        1 ---> cm a in
        2 ---> lb a Kg
        `));
    if (operacion === 1) {
        let cm = parseInt(prompt("indicar lo centimetros a convertir en pulgadas"));
        if (!isNaN(cm)) {
            let nroPulgadas = cm * 0.393701;
            alert(cm + "cm equivalen a " + nroPulgadas + "in");
        } else {
            alert("Valor no válido");
        }

    } else if (operacion === 2) {
        let lb = parseInt(prompt("indicar las libras a convertir en kilogramos"));
        if (!isNaN(lb)) {
            let nroKilogramos = lb * 0.453592;
            alert(lb + "lbs equivalen a " + nroKilogramos + "Kg");
        } else {
            alert("Valor no válido");
        }
    } else {
        alert("Opción no válida");
    }
}

function ejercicio16() {
    //16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
    let numero = parseInt(prompt("Indicar numero"));
    if (!isNaN(numero) && numero <= 7 && numero >= 1) {
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
        alert("El día correspondiente es: " + dia);
    } else {
        alert("Por favor, ingresa un número entero del 1 al 7.");
    }
}

function ejercicio17() {
    //17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    let horas = parseInt(prompt("Ingresa la hora (0 a 23):"));
    let minutos = parseInt(prompt("Ingresa los minutos (0 a 59):"));
    let segundos = parseInt(prompt("Ingresa los segundos (0 a 59):"));
    if (
        !isNaN(horas) && horas >= 0 && horas <= 23 &&
        !isNaN(minutos) && minutos >= 0 && minutos <= 59 &&
        !isNaN(segundos) && segundos >= 0 && segundos <= 59
    ) {
        let ahora = new Date();
        ahora.setHours(horas, minutos, segundos);
        ahora.setSeconds(ahora.getSeconds() + 1);
        let nuevaHora = ahora.toTimeString().split(" ")[0];
        alert("La hora dentro de un segundo será: " + nuevaHora);
    } else {
        alert("Por favor, ingresa una hora válida.");
    }
}

function ejercicio18() {
    /* 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor. */

    let numero = parseInt(prompt("Inserte numero de CD a comprar"));
    if (!isNaN(numero) && numero > 0) {

        if (numero >= 500) {
            total = numero * 6;
            alert("El precio total es $" + total);
        } else if (numero <= 499 && numero >= 100) {
            total = numero * 7;
            alert("El precio total es $" + total);
        } else if (numero <= 99 && numero >= 10) {
            total = numero * 8;
            alert("El precio total es $" + total);
        } else {
            total = numero * 10;
            alert("El precio total es $" + total);
        }
    } else {
        alert("Por favor, ingresa un número válida.");
    }

}

function ejercicio19() {
    /* 19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó */
    let tipoEmpleado = parseInt(prompt(`
        Selecione el tipo de colaborador:
        1 --> Cajero
        2 --> Servidor
        3 --> Preparador de mezclas
        4 --> Mantenimiento
        `));
    let diasTrabajados = parseInt(prompt("Colocar número de dias trabajados"));

    if (!isNaN(tipoEmpleado) &&
        !isNaN(diasTrabajados) &&
        tipoEmpleado >= 1 && tipoEmpleado <= 4 &&
        diasTrabajados >= 1 && diasTrabajados <= 6) {
        switch (tipoEmpleado) {
            case 1:
                total = diasTrabajados * 56;
                break;
            case 2:
                total = diasTrabajados * 64;
                break;
            case 3:
                total = diasTrabajados * 80;
                break;
            case 4:
                total = diasTrabajados * 48;
                break;
        }
        alert("El monto del sueldo a pagar es $" + total);
    } else {
        alert("Por favor, ingresa un número válida.");
    }
}

function ejercicio20() {
    /* 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números. */
    let n1 = parseInt(prompt("Ingresa el primer número entero positivo"));
    let n2 = parseInt(prompt("Ingresa el segundo número entero positivo"));
    let n3 = parseInt(prompt("Ingresa el tercer número entero positivo"));
    let n4 = parseInt(prompt("Ingresa el cuarto número entero positivo"));
    if (!isNaN(n1) && n1 > 0 &&
        !isNaN(n2) && n2 > 0 &&
        !isNaN(n3) && n3 > 0 &&
        !isNaN(n4) && n4 > 0) {
        let pares = 0;
        if (n1 % 2 === 0) pares++;
        if (n2 % 2 === 0) pares++;
        if (n3 % 2 === 0) pares++;
        if (n4 % 2 === 0) pares++;
        alert(`Cantidad de números pares: ${pares}`);
        let mayor = Math.max(n1, n2, n3, n4);
        alert(`El número mayor es: ${mayor}`);
        if (n3 % 2 === 0) {
            let cuadrado = n2 ** 2;
            alert(`El tercer número es par. El cuadrado del segundo es: ${cuadrado}`);
        }
        if (n1 < n4) {
            let media = (n1 + n2 + n3 + n4) / 4;
            alert(`El primero es menor que el cuarto. La media es: ${media}`);
        }
        if (n2 > n3 && n3 >= 50 && n3 <= 700) {
            let suma = n1 + n2 + n3 + n4;
            alert(`El segundo es mayor que el tercero y el tercero está entre 50 y 700.\nLa suma de los números es: ${suma}`);
        }
    } else {
        alert("Debes ingresar 4 números enteros y positivos.");
    }
}

function ejercicio21() {
    //21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
    let numero = parseInt(prompt("Coloque un numero"))
    if (!isNaN(numero) && numero >= 0) {
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }

        alert(`El factorial de ${numero} es: ${factorial}`);
    } else {
        alert("Debes ingresar un número entero no negativo");
    }
}

function ejercicio22() {
    //22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
    let numero = parseInt(prompt("Coloca un número entero no negativo:"));
    if (!isNaN(numero) && numero >= 0) {
        let sumatoria = 0;
        for (let i = 0; i <= numero; i++) {
            sumatoria += i;
        }
        alert(`La sumatoria de los primeros ${numero} números es: ${sumatoria}`);
    } else {
        alert("Debes ingresar un número entero no negativo.");
    }
}

function ejercicio23() {
    // 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    if (!isNaN(n) && n > 0) {
        let suma = 0;
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }
        alert("La suma de los impares menores o iguales a " + n + " es: " + suma);
    } else {
        alert("Ingrese un número válido.");
    }
}

function ejercicio24() {
    //24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert("La suma de los números pares hasta 1000 es: " + suma);
}

function ejercicio25() {
    // 25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
    let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    if (!isNaN(n) && n >= 0) {
        let resultado = 1, i = 1;
        while (i <= n) {
            resultado *= i;
            i++;
        }
        alert("El factorial de " + n + " es: " + resultado);
    } else {
        alert("Ingrese un número válido.");
    }
}

function ejercicio26() {
    // 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    if (!isNaN(dividendo) && !isNaN(divisor) && divisor > 0) {
        let cociente = 0;
        let resto = dividendo;
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        alert("Cociente: " + cociente + ", Resto: " + resto);
    } else {
        alert("Datos no válidos.");
    }
}

function ejercicio27() {
    // 27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
    let suma = 0, contador = 0;
    while (true) {
        let num = parseFloat(prompt("Ingrese un número positivo (negativo para terminar):"));
        if (num < 0) break;
        if (!isNaN(num)) {
            suma += num;
            contador++;
        }
    }
    if (contador > 0) {
        alert("La media es: " + (suma / contador));
    } else {
        alert("No se ingresaron números positivos.");
    }
}

function ejercicio28() {
    // 28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
    let suma = 0, i = 1;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio29() {
    // 29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
    let suma = 0, i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio30() {
    // 30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio31() {
    // 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
    let sumaPares = 0, sumaImpares = 0, contPares = 0, contImpares = 0;
    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt("Ingrese el número " + i + ":"));
        if (!isNaN(num)) {
            if (num % 2 === 0) {
                sumaPares += num;
                contPares++;
            } else {
                sumaImpares += num;
                contImpares++;
            }
        }
    }
    let mediaPares = contPares ? (sumaPares / contPares) : 0;
    let mediaImpares = contImpares ? (sumaImpares / contImpares) : 0;
    alert("Media pares: " + mediaPares + "\nMedia impares: " + mediaImpares);
}

function ejercicio32() {
    // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. 
    let mayorPoblacion = 0;
    let ciudadMayor = "";
    for (let prov = 1; prov <= 3; prov++) {
        for (let ciu = 1; ciu <= 11; ciu++) {
            let nombre = prompt(`Provincia ${prov}, Ciudad ${ciu}: Nombre de la ciudad`);
            let poblacion = parseInt(prompt(`Provincia ${prov}, Ciudad ${ciu}: Población`));
            if (!isNaN(poblacion) && poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayor = nombre;
            }
        }
    }
    alert("La ciudad con más población es: " + ciudadMayor + " con " + mayorPoblacion + " habitantes.");
}

function ejercicio33() {
    // 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
    let continuar = true;
    while (continuar) {
        alert("El programa continúa...");
        continuar = confirm("¿Desea continuar?");
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
    let mayor = null, menor = null;
    for (let i = 1; i <= 20; i++) {
        let num = parseFloat(prompt("Ingrese el número " + i + ":"));
        if (!isNaN(num)) {
            if (mayor === null || num > mayor) mayor = num;
            if (menor === null || num < menor) menor = num;
        }
    }
    alert("El mayor es: " + mayor + "\nEl menor es: " + menor);
}

function ejercicio36() {
    // 36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
    let n = parseInt(prompt("¿Cuántos términos de Fibonacci desea ver?"));
    if (!isNaN(n) && n > 0) {
        let a = 0, b = 1, serie = [a];
        for (let i = 1; i < n; i++) {
            serie.push(b);
            let temp = a + b;
            a = b;
            b = temp;
        }
        alert("Serie de Fibonacci: " + serie.join(", "));
    } else {
        alert("Ingrese un número válido.");
    }
}

function ejercicio37() {
    // 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        alert("El MCD es: " + a);
    } else {
        alert("Datos no válidos.");
    }
}

function ejercicio38() {
    // 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
    let n = parseInt(prompt("Ingrese un número:"));
    if (!isNaN(n) && n > 0) {
        let suma = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) suma += i;
        }
        if (suma === n) {
            alert(n + " es un número perfecto.");
        } else {
            alert(n + " no es un número perfecto.");
        }
    } else {
        alert("Ingrese un número válido.");
    }
}

function ejercicio39() {
    /* 39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... */
    let n = parseInt(prompt("Ingrese la cantidad de términos a usar para aproximar π:"));
    if (!isNaN(n) && n > 0) {
        let pi = 0;
        for (let i = 0; i < n; i++) {
            let termino = Math.pow(-1, i) / (2 * i + 1);
            pi += termino;
        }
        pi *= 4; 
        alert(`Aproximación de π con ${n} términos es: ${pi}`);
    } else {
        alert("Por favor, ingrese un número entero positivo.");
    }
}

function ejercicio40() {
    /* 40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ... */
    let terminos = parseInt(prompt("¿Cuántos términos desea usar para la aproximación de pi?"));
    if (!isNaN(terminos) && terminos > 0) {
        let pi = 3;
        let signo = 1;
        for (let i = 2, count = 0; count < terminos; i += 2, count++) {
            pi += signo * (4 / (i * (i + 1) * (i + 2)));
            signo *= -1;
        }
        alert("Aproximación de pi con " + terminos + " términos: " + pi);
    } else {
        alert("Ingrese un número válido.");
    }
}