function ejercicio1() {
    var num = prompt("Ingrese un número");
    num = Number(num);

    if ((num >= 100 && num <= 999) || (num <= -100 && num >= -999)) {
        alert("El número tiene tres dígitos");
    } else {
        alert("El número NO tiene tres dígitos");
    }

}
function ejercicio2() {
    var num = prompt("Ingrese un número entero");
    num = Number(num);

    if (num < 0) {
        alert("El número es negativo");
    } else {
        alert("El número no es negativo");
    }

}
function ejercicio3() {
    var num = prompt("Ingrese un número");
    num = Number(num);

    if (num < 0) num = -num;

    while (num >= 10) {
        num = num - (num / 10 | 0) * 10;
    }

    if (num == 4) {
        alert("El número termina en 4");
    } else {
        alert("El número no termina en 4");
    }


}
function ejercicio4() {
    var a = Number(prompt("Ingrese primer número"));
    var b = Number(prompt("Ingrese segundo número"));
    var c = Number(prompt("Ingrese tercer número"));

    var menor, medio, mayor;


    if (a <= b && a <= c) menor = a;
    else if (b <= a && b <= c) menor = b;
    else menor = c;


    if (a >= b && a >= c) mayor = a;
    else if (b >= a && b >= c) mayor = b;
    else mayor = c;


    if ((a != menor) && (a != mayor)) medio = a;
    else if ((b != menor) && (b != mayor)) medio = b;
    else medio = c;

    alert("Orden: " + menor + ", " + medio + ", " + mayor);

}
function ejercicio5() {
    var cantidad = Number(prompt("¿Cuántos zapatos va a comprar?"));
    var precioUnitario = 80;
    var total = cantidad * precioUnitario;
    var descuento = 0;

    if (cantidad > 30) descuento = total * 0.40;
    else if (cantidad > 20 && cantidad <= 30) descuento = total * 0.20;
    else if (cantidad > 10 && cantidad <= 20) descuento = total * 0.10;

    var totalPagar = total - descuento;

    alert("Total a pagar: $" + totalPagar);

}
function ejercicio6() {
    var horas = Number(prompt("¿Cuántas horas trabajó esta semana?"));
    var sueldo;

    if (horas <= 40) {
        sueldo = horas * 20;
    } else {
        var extras = horas - 40;
        sueldo = 40 * 20 + extras * 25;
    }

    alert("El sueldo semanal es: $" + sueldo);

}

function ejercicio7() {
    var tipo = prompt("Ingrese tipo de membresía (A, B o C)");
    var descuento = 0;


    if (tipo == "A" || tipo == "a") descuento = 0.10;
    else if (tipo == "B" || tipo == "b") descuento = 0.15;
    else if (tipo == "C" || tipo == "c") descuento = 0.20;
    else {
        alert("Tipo de membresía inválido. No se aplicará descuento.");
        descuento = 0;
    }


    var precioHelado = 50;
    var cantidad = Number(prompt("Ingrese la cantidad de helados a comprar"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida");
        return;
    }

    var montoTotal = precioHelado * cantidad;
    var montoDescuento = montoTotal * descuento;
    var montoPagar = montoTotal - montoDescuento;

    alert(
        "Monto total sin descuento: $" + montoTotal.toFixed(2) + "\n" +
        "Descuento aplicado: " + (descuento * 100) + "%\n" +
        "Descuento en monto: $" + montoDescuento.toFixed(2) + "\n" +
        "Monto total a pagar: $" + montoPagar.toFixed(2)
    );
}

function ejercicio8() {
    var n1 = Number(prompt("Ingrese nota 1"));
    var n2 = Number(prompt("Ingrese nota 2"));
    var n3 = Number(prompt("Ingrese nota 3"));

    var promedio = (n1 + n2 + n3) / 3;

    if (promedio >= 6) alert("Aprobado con promedio: " + promedio.toFixed(2));
    else alert("Reprobado con promedio: " + promedio.toFixed(2));

}
function ejercicio9() {
    var sueldo = Number(prompt("Ingrese sueldo actual"));

    var aumento;

    if (sueldo > 2000) aumento = sueldo * 0.05;
    else aumento = sueldo * 0.10;

    alert("El aumento es: $" + aumento);

}
function ejercicio10() {
    var num = Number(prompt("Ingrese un número"));

    if (num % 2 == 0) alert("El número es par");
    else alert("El número es impar");

}
function ejercicio11() {
    var a = Number(prompt("Ingrese primer número"));
    var b = Number(prompt("Ingrese segundo número"));
    var c = Number(prompt("Ingrese tercer número"));

    var mayor = a;

    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;

    alert("El mayor es: " + mayor);

}
function ejercicio12() {
    var a = Number(prompt("Ingrese primer número"));
    var b = Number(prompt("Ingrese segundo número"));

    if (a > b) alert("El mayor es: " + a);
    else if (b > a) alert("El mayor es: " + b);
    else alert("Ambos son iguales");

}
function ejercicio13() {
    var letra = prompt("Ingrese una letra");
    if (
        letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
        letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"
    ) {
        alert("Es una vocal");
    } else {
        alert("No es una vocal");
    }

}
function ejercicio14() {
    var num = Number(prompt("Ingrese un entero positivo entre 1 y 9"));

    var esPrimo = true;

    if (num == 1) esPrimo = false;
    else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) alert(num + " es primo");
    else alert(num + " no es primo");

}
function ejercicio15() {
    var cm = Number(prompt("Ingrese centímetros"));
    var lb = Number(prompt("Ingrese libras"));

    var pulgadas = cm / 2.54;
    var kilogramos = lb / 2.20462;

    alert(cm + " cm son " + pulgadas.toFixed(2) + " pulgadas");
    alert(lb + " libras son " + kilogramos.toFixed(2) + " kilogramos");

}
function ejercicio16() {
    var num = Number(prompt("Ingrese un número del 1 al 7"));

    if (num == 1) alert("Lunes");
    else if (num == 2) alert("Martes");
    else if (num == 3) alert("Miércoles");
    else if (num == 4) alert("Jueves");
    else if (num == 5) alert("Viernes");
    else if (num == 6) alert("Sábado");
    else if (num == 7) alert("Domingo");
    else alert("Número inválido");

}
function ejercicio17() {
    var hora = Number(prompt("Ingrese hora (0-23)"));
    var minuto = Number(prompt("Ingrese minuto (0-59)"));
    var segundo = Number(prompt("Ingrese segundo (0-59)"));


    segundo = segundo + 1;

    if (segundo == 60) {
        segundo = 0;
        minuto = minuto + 1;
        if (minuto == 60) {
            minuto = 0;
            hora = hora + 1;
            if (hora == 24) {
                hora = 0;
            }
        }
    }

    alert("Dentro de un segundo será: " + (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo));

}
function ejercicio18() {
    var cantidad = Number(prompt("Ingrese cantidad de CDs a vender"));
    var precio;

    if (cantidad <= 9) precio = 10;
    else if (cantidad >= 10 && cantidad <= 99) precio = 8;
    else if (cantidad >= 100 && cantidad <= 499) precio = 7;
    else if (cantidad >= 500) precio = 6;

    var total = cantidad * precio;
    var ganancia = total * 0.0825;

    alert("Total para el cliente: $" + total.toFixed(2));
    alert("Ganancia para el vendedor: $" + ganancia.toFixed(2));

}
function ejercicio19() {
    var id = Number(prompt("Ingrese número identificador del empleado (1-4)"));
    var dias = Number(prompt("Ingrese cantidad de días trabajados (max 6)"));
    var salarioDiario;

    if (id == 1) salarioDiario = 56;
    else if (id == 2) salarioDiario = 64;
    else if (id == 3) salarioDiario = 80;
    else if (id == 4) salarioDiario = 48;
    else salarioDiario = 0;

    var pago = salarioDiario * dias;
    alert("El pago al empleado es: $" + pago);

}
function ejercicio20() {
    var n1 = Number(prompt("Ingrese número 1"));
    var n2 = Number(prompt("Ingrese número 2"));
    var n3 = Number(prompt("Ingrese número 3"));
    var n4 = Number(prompt("Ingrese número 4"));


    var pares = 0;
    if (n1 % 2 == 0) pares++;
    if (n2 % 2 == 0) pares++;
    if (n3 % 2 == 0) pares++;
    if (n4 % 2 == 0) pares++;

    alert("Cantidad de números pares: " + pares);


    var mayor = n1;
    if (n2 > mayor) mayor = n2;
    if (n3 > mayor) mayor = n3;
    if (n4 > mayor) mayor = n4;

    alert("El mayor es: " + mayor);


    if (n3 % 2 == 0) {
        var cuadrado = n2 * n2;
        alert("El tercero es par. Cuadrado del segundo: " + cuadrado);
    }


    if (n1 < n4) {
        var media = (n1 + n2 + n3 + n4) / 4;
        alert("El primero es menor que el cuarto. Media: " + media);
    }


    if (n2 > n3) {
        if (n3 >= 50 && n3 <= 700) {
            var suma = n1 + n2 + n3 + n4;
            alert("Condición cumplida. Suma: " + suma);
        }
    }

}
function ejercicio21() {
    var num = Number(prompt("Ingrese un número entero"));
    var factorial = 1;

    if (num < 0) {
        alert("No existe factorial para números negativos");
    } else {
        for (var i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        alert("El factorial de " + num + " es " + factorial);
    }

}
function ejercicio22() {
    var n = Number(prompt("Ingrese un número entero positivo"));
    var suma = 0;

    for (var i = 1; i <= n; i++) {
        suma = suma + i;
    }

    alert("La suma de los primeros " + n + " números es " + suma);

}
function ejercicio23() {
    var n = Number(prompt("Ingrese un número entero positivo"));
    var suma = 0;

    for (var i = 1; i <= n; i += 2) {
        suma = suma + i;
    }

    alert("La suma de los números impares menores o iguales a " + n + " es " + suma);

}
function ejercicio24() {
    var suma = 0;

    for (var i = 2; i <= 1000; i += 2) {
        suma = suma + i;
    }

    alert("La suma de todos los números pares hasta 1000 es " + suma);

}
function ejercicio25() {
    var num = Number(prompt("Ingrese un número entero"));
    var factorial = 1;
    var i = 1;

    if (num < 0) {
        alert("No existe factorial para números negativos");
    } else {
        while (i <= num) {
            factorial = factorial * i;
            i++;
        }
        alert("El factorial de " + num + " es " + factorial);
    }

}
function ejercicio26() {
    var dividendo = Number(prompt("Ingrese dividendo (entero positivo)"));
    var divisor = Number(prompt("Ingrese divisor (entero positivo)"));
    var cociente = 0;

    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        cociente++;
    }

    alert("Cociente: " + cociente + "\nResto: " + dividendo);

}
function ejercicio27() {
    var suma = 0;
    var contador = 0;
    var num;

    while (true) {
        num = Number(prompt("Ingrese un número positivo (negativo para terminar)"));
        if (num < 0) break;
        suma = suma + num;
        contador++;
    }

    if (contador > 0) {
        var media = suma / contador;
        alert("La media es " + media);
    } else {
        alert("No se ingresaron números positivos");
    }

}
function ejercicio28() {
    var suma = 0;
    var i = 1;

    do {
        suma = suma + i;
        i++;
    } while (i <= 100);

    alert("La suma de los primeros 100 números es " + suma);

}
function ejercicio29() {
    var suma = 0;
    var i = 1;

    while (i <= 100) {
        suma = suma + i;
        i++;
    }

    alert("La suma de los primeros 100 números es " + suma);

}
function ejercicio30() {
    var suma = 0;

    for (var i = 1; i <= 100; i++) {
        suma = suma + i;
    }

    alert("La suma de los primeros 100 números es " + suma);

}
function ejercicio31() {
    var sumaPares = 0, cuentaPares = 0;
    var sumaImpares = 0, cuentaImpares = 0;

    for (var i = 1; i <= 10; i++) {
        var num = Number(prompt("Ingrese número " + i));
        if (num % 2 === 0) {
            sumaPares += num;
            cuentaPares++;
        } else {
            sumaImpares += num;
            cuentaImpares++;
        }
    }

    var mediaPares = cuentaPares > 0 ? sumaPares / cuentaPares : 0;
    var mediaImpares = cuentaImpares > 0 ? sumaImpares / cuentaImpares : 0;

    alert("Media pares: " + mediaPares.toFixed(2) + "\nMedia impares: " + mediaImpares.toFixed(2));

}
function ejercicio32() {
    var maxPoblacion = 0;
    var ciudadMax = "";
    var provinciaMax = "";

    for (var p = 1; p <= 3; p++) {
        for (var c = 1; c <= 11; c++) {
            var poblacion = Number(prompt("Ingrese población ciudad " + c + " de provincia " + p));
            if (poblacion > maxPoblacion) {
                maxPoblacion = poblacion;
                ciudadMax = "Ciudad " + c;
                provinciaMax = "Provincia " + p;
            }
        }
    }

    alert("La ciudad con mayor población es " + ciudadMax + " en " + provinciaMax + " con " + maxPoblacion + " habitantes");

}
function ejercicio33() {
    var continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();

    if (continuar === "si" || continuar === "sí") {
        alert("Continuando el programa...");
    } else {
        alert("Programa terminado.");
    }

}
function ejercicio34() {
    var resultado = "";

    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 10; j++) {
            resultado += i + " x " + j + " = " + (i * j) + "\n";
        }
        resultado += "\n";
    }

    alert(resultado);

}
function ejercicio35() {
    var mayor = Number.MIN_SAFE_INTEGER;
    var menor = Number.MAX_SAFE_INTEGER;

    for (var i = 1; i <= 20; i++) {
        var num = Number(prompt("Ingrese número " + i));
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }

    alert("El mayor es " + mayor + "\nEl menor es " + menor);

}
function ejercicio36() {
    var n = Number(prompt("Ingrese la cantidad de términos de Fibonacci"));
    var a = 0, b = 1, fibo = a + ", " + b;

    for (var i = 3; i <= n; i++) {
        var c = a + b;
        fibo += ", " + c;
        a = b;
        b = c;
    }

    alert("Serie Fibonacci: " + fibo);

}
function ejercicio37() {
    var a = Number(prompt("Ingrese primer número"));
    var b = Number(prompt("Ingrese segundo número"));

    while (b != 0) {
        var r = a % b;
        a = b;
        b = r;
    }

    alert("El M.C.D es " + a);

}
function ejercicio38() {
    var num = Number(prompt("Ingrese un número"));

    var sumaDivisores = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0) sumaDivisores += i;
    }

    if (sumaDivisores === num) alert(num + " es un número perfecto");
    else alert(num + " no es un número perfecto");

}
function ejercicio39() {
    var n = Number(prompt("Ingrese número de términos para aproximar Pi"));
    var pi = 0;
    var signo = 1;

    for (var i = 0; i < n; i++) {
        pi += signo * (4 / (2 * i + 1));
        signo = -signo;
    }

    alert("Aproximación de Pi: " + pi);

}
function ejercicio40() {
    var n = Number(prompt("Ingrese número de términos para aproximar Pi"));
    var pi = 3;
    var signo = 1;
    var denominador = 2;

    for (var i = 0; i < n; i++) {
        pi += signo * (4 / (denominador * (denominador + 1) * (denominador + 2)));
        signo = -signo;
        denominador += 2;
    }

    alert("Aproximación de Pi: " + pi);

}

function menuEjercicios() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido al Menú de Ejercicios\n" +
            "Opciones:\n" +
            "1. Verificar si un número tiene tres dígitos\n" +
            "2. Determinar si un número entero es negativo\n" +
            "3. Verificar si un número termina en 4\n" +
            "4. Mostrar tres números de menor a mayor\n" +
            "5. Calcular descuento en compra de zapatos\n" +
            "6. Calcular sueldo semanal con horas extras\n" +
            "7. Aplicar descuento según tipo de membresía de helados\n" +
            "8. Calcular promedio de tres notas y aprobar/reprobar\n" +
            "9. Calcular aumento de sueldo según salario\n" +
            "10. Determinar si un número es par o impar\n" +
            "11. Encontrar el mayor de tres números\n" +
            "12. Encontrar el mayor de dos números\n" +
            "13. Verificar si una letra es vocal\n" +
            "14. Determinar si un número entre 1 y 10 es primo\n" +
            "15. Convertir centímetros a pulgadas y libras a kilogramos\n" +
            "16. Mostrar día de la semana según número ingresado\n" +
            "17. Calcular la hora un segundo después\n" +
            "18. Calcular precio y ganancia en venta de CDs\n" +
            "19. Calcular pago semanal según tipo de empleado y días trabajados\n" +
            "20. Operaciones con cuatro números enteros positivos\n" +
            "0. Salir"
        );


        switch (opcion) {
            case "1": ejercicio1(); break;
            case "2": ejercicio2(); break;
            case "3": ejercicio3(); break;
            case "4": ejercicio4(); break;
            case "5": ejercicio5(); break;
            case "6": ejercicio6(); break;
            case "7": ejercicio7(); break;
            case "8": ejercicio8(); break;
            case "9": ejercicio9(); break;
            case "10": ejercicio10(); break;
            case "11": ejercicio11(); break;
            case "12": ejercicio12(); break;
            case "13": ejercicio13(); break;
            case "14": ejercicio14(); break;
            case "15": ejercicio15(); break;
            case "16": ejercicio16(); break;
            case "17": ejercicio17(); break;
            case "18": ejercicio18(); break;
            case "19": ejercicio19(); break;
            case "20": ejercicio20(); break;
            case "0":
                alert("Saliendo del menú. ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida, intente de nuevo.");
        }
    } while (opcion !== "0");
}

menuEjercicios();