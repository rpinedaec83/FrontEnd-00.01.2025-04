//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01() {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (!isNaN(numero)) {
        if (numero >= 100 && numero <= 999) {
            alert("Este número tiene 3 digitos")
        }
        else {
            alert("Este número no tiene 3 digitos")
        }
    } else {
        alert("No ingresaste un número válido");
    }
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
    let numero = parseInt(prompt("Ingrese un número:"));

    if (!isNaN(numero)) {
        if (numero < 0) {
            alert("Este número es negativo");
        }
        else {
            alert("Este número es entero");
        }
    } else {
        alert("No ingresaste un número válido");
    }
}

// 3.Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03() {
    let numero = parseInt(prompt("Ingrese un número:"));

    if (!isNaN(numero)) {
        let ultimoDigito = Math.abs(numero) % 10;

        if (ultimoDigito === 4) {
            alert("El número termina en 4");
        }
        else {
            alert("El número NO termina en 4");
        }
    }
    else {
        alert("No ingresaste un número valido");
    }
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04() {
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));
    let numero3 = parseInt(prompt("Ingrese el tercer número:"));

    if (isNaN(numero1) || (isNaN(numero2)) || (isNaN(numero3))) {
        alert("Uno o más valores no son números validos");
        return;
    }

    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);

    alert("Números ordenados de menor a mayor: " + numeros.join(", "))
}

//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
function ejercicio05() {
    const precioZapato = 80;
    let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos que va a comprar"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad valida")
        return;
    }

    let totalSinDescuento = cantidad * precioZapato;
    let descuento;

    if (cantidad > 30) {
        descuento = 0.40;
    } else if (cantidad > 20 && cantidad <= 30) {
        descuento = 0.20;
    } else if (cantidad > 10) {
        descuento = 0.10;
    }

    let montoDescuento = totalSinDescuento * descuento;
    let totalConDescuento = totalSinDescuento - montoDescuento;

    alert("Cantidad de zapatos: " + cantidad +
        "\nPrecio sin descuento: $" + totalSinDescuento +
        "\nDescuento aplicado: " + (descuento * 100) + "%" +
        "\nTotal a pagar: $" + totalConDescuento
    )
}

//6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
function ejercicio06() {
    let horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas trabajadas en la semana"));

    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
        alert("Ingrese una cantidad valida")
        return;
    }
    let sueldo;
    let horasExtras = horasTrabajadas - 40;

    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * 20;
    } else {
        let horasNormales = 40;
        sueldo = (horasNormales * 20) + (horasExtras * 25);
    }
    alert("Horas trabajadas: " + horasTrabajadas +
        "\nHoras Extras: " + horasExtras +
        "\nSueldo Semanal: $" + sueldo
    )
}

//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
function ejercicio07() {
    let tipoMenbresia = prompt("Ingrese su tipo de menbresia (A, B o C):");
    tipoMenbresia = tipoMenbresia.toUpperCase();

    let montoCompra = parseFloat(prompt("Ingrese el monto de compra"));

    if (isNaN(montoCompra) || montoCompra <= 0) {
        alert("Ingrese un monto valido");
        return;
    }

    let descuento;

    if (tipoMenbresia === "A") {
        descuento = 0.10;
    } else if (tipoMenbresia === "B") {
        descuento = 0.15;
    } else if (tipoMenbresia === "C") {
        descuento = 0.20;
    } else {
        alert("Tipo de menbresia invalido. Use A, B o C.");
        return;
    }

    let montoDescuento = montoCompra * descuento;
    let totalPagar = montoCompra - montoDescuento;

    alert("Tipo de menbresia: " + tipoMenbresia +
        "\nPorcentaje de descuento: " + (descuento * 100) + "%" +
        "\nDescuento aplicado: $" + montoDescuento +
        "\nTotal a pagar: $" + totalPagar
    )
}
// 8.Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio08() {
    let nota1 = parseInt(prompt("Ingrese la primera nota del 0 al 20:"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota del 0 al 20:"));
    let nota3 = parseInt(prompt("Ingrese la tercera nota del 0 al 20:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 > 20 ||
        nota2 < 0 || nota2 > 20 ||
        nota3 < 0 || nota3 > 20
    ) {
        alert("Ingrese solo notas validas del 0 al 20.");
    }
    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = promedio > 10 ? "Aprobado" : "Desaprobado";

    alert("Promedio: " + promedio +
        "\nEstado: " + estado
    );
}
// .9 Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function ejercicio09() {
    let sueldo = parseInt(prompt("Ingrese el sueldo del trabajador"));

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Ingrese un sueldo valido.");
    }

    let aumento;
    let porcentaje;

    if (sueldo > 2000) {
        aumento = sueldo * 0.05;
        porcentaje = 5;
    } else {
        aumento = sueldo * 0.10;
        porcentaje = 10;
    }

    let nuevoSueldo = aumento + sueldo;

    alert("Sueldo: $" + sueldo +
        "\nPorcentaje Aplicado: " + porcentaje + "%" +
        "\nAumento: $" + aumento +
        "\nNuevo sueldo: $" + nuevoSueldo
    )
}
// 10.Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10() {
    let numero = parseInt(prompt("Ingrese un número"));

    if (isNaN(numero)) {
        alert("Ingrese un número valido.");
        return;
    }

    if (numero % 2 === 0) {
        alert("El número " + numero + " es PAR");
    } else {
        alert("El número " + numero + " es IMPAR");
    }
}

// 11.Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11() {
    let entradaNum = (prompt("Ingrese 3 números separados por comas.\nEjemplo: 5, 7, 10"));

    let numeros = entradaNum.split(", ").map(numero => parseFloat(numero.trim()));

    if (numeros.length !== 3 || numeros.some(isNaN)) {
        alert("Ingrese números validos");
        return;
    }

    let numeroMayor = Math.max(numeros[0], numeros[1], numeros[2]);

    alert("El número mayor es: " + numeroMayor)
}

// 12.Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12() {
    let entradaNum = (prompt("Ingrese 2 números separados por comas.\nEjemplo: 7, 12"));

    let numero = entradaNum.split(", ").map(numero => parseFloat(numero.trim()));

    if (numero.length !== 2 || numero.some(isNaN)) {
        alert("Ingrese números validos");
        return;
    }
    let numeroMayor = Math.max(numero[0], numero[1]);

    alert("El número mayor es: " + numeroMayor);
}

// 13.Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13() {
    let letra = prompt("Ingrese una letra.\nEjemplo: a").toLowerCase();

    if (letra.length !== 1 || !isNaN(letra)) {
        alert("Debe ingresar solo una letra (no un número)")
        return;
    }
    if ("aeiou".includes(letra)) {
        alert("La letra ingresada es una vocal ");
    } else {
        alert("La letra ingresada es una consonante");
    }
}

// 14.Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio14() {
    let numero = parseInt(prompt("Ingrese un número entero del 1 al 9."));

    if (isNaN(numero) || numero < 1 || numero > 9) {
        alert("Ingresa un número valido entre 1 y 9");
        return;
    }

    if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
        alert("El número " + numero + " es primo.")
    } else {
        alert("El número " + numero + " no es primo.")
    }
}

// 15.Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15() {
    let convertir = parseFloat(prompt("Ingrese un número según la operación que desea realizar:" +
        "\n1. Centimetros a Pulgadas" +
        "\n2. Libras a Kilogramos"
    ))

    if (isNaN(convertir) || !Number.isInteger(convertir) || convertir < 1 || convertir > 2) {
        alert("Ingrese un número valido: 1 o 2")
        return;
    }

    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad invalida");
    }

    let resultado;

    if (convertir === 1) {
        resultado = cantidad / 2.54; //centimetro a pulgada
        alert(`${cantidad} cm son ${resultado.toFixed(2)} pulgadas`);
    } else {
        resultado = cantidad / 0.4536 //libras a kilogramos
        alert(`${cantidad} lbs son ${resultado.toFixed(2)} kilogramos`);
    }
}

// 16.Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16() {
    let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7"));

    if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
        alert("Ingrese un número valido: 1 al 7");
        return;
    }
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let dia = dias[numeroDia - 1];

    alert(`El día que corresponde al número ${numeroDia} es ${dia}`);
}
// 17.Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17() {
    let entrada = prompt("Ingrese la hora en formato: HH:MM:SS");

    let partes = entrada.split(":");
    if (partes.length !== 3) {
        alert("Formato invalido. Use HH:MM:SS");
        return;
    }
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);

    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos) ||
        horas < 0 || horas > 23 || minutos < 0 || minutos > 59 ||
        segundos < 0 || segundos > 59) {
        alert("Hora invalida. Use el formato correcto");
        return;
    }
    segundos = segundos + 1;

    if (segundos === 60) {
        segundos = 0;
        minutos = minutos + 1;

        if (minutos === 60) {
            minutos = 0;
            horas = horas + 1;

            if (horas === 24) {
                horas = 0;
            }
        }
    }
    let horaFinal = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

    alert("La hora dentro de un segundo será: " + horaFinal);
}
// 18.Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.
// $8. Si se compran entre 10 unidades hasta 99.
// $7. Entre 100 y 499 unidades.
// $6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
function ejercicio18() {
    let cdCantidad = parseFloat(prompt("Ingrese la cantidad de CDs que desea comprar:"));

    if (isNaN(cdCantidad) || !Number.isInteger(cdCantidad) || cdCantidad < 0) {
        alert("Ingrese un número valido");
        return;
    }
    let precioTotal;
    const porcentajeGanancia = 0.0825;
    let gananciaVendedor;

    if (cdCantidad >= 1 && cdCantidad <= 9) {
        precioTotal = cdCantidad * 10;
    } else if (cdCantidad >= 10 && cdCantidad <= 99) {
        precioTotal = cdCantidad * 8;
    } else if (cdCantidad >= 100 && cdCantidad <= 499) {
        precioTotal = cdCantidad * 7;
    } else if (cdCantidad >= 500) {
        precioTotal = cdCantidad * 6;
    }

    gananciaVendedor = precioTotal * porcentajeGanancia;

    alert(`Cantidad de CDs: ${cdCantidad}\nPrecio total: $${precioTotal.toFixed(2)}\nGanancia del vendedor: $${gananciaVendedor.toFixed(2)}`);
}

// 19.Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

// Cajero (56$/día).

// Servidor (64$/día).

// Preparador de mezclas (80$/día).

// Mantenimiento (48$/día).

// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
function ejercicio19() {
    let idEmpleado = (prompt("Ingrese el ID del empleado.\nEjemplo: 01\n01 - Cajero\n02 - Servidor\n03 - Preparador de mezclas\n04 - Mantenimiento:"));

    if (!["01", "02", "03", "04"].includes(idEmpleado)) {
        alert("ID invalido. Ingrese uno de los siguientes: 01, 02, 03, 04.");
        return;
    }

    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (maximo 6):"));

    if (isNaN(diasTrabajados) || !Number.isInteger(diasTrabajados) || diasTrabajados < 0 || diasTrabajados > 6) {
        alert("La cantidad de días debe ser un número entero entre 0 y 6.");
    }

    let salarioPorDia;
    let puestoEmpleado;

    switch (idEmpleado) {
        case "01":
            salarioPorDia = 56;
            puestoEmpleado = "Cajero";
            break;
        case "02":
            salarioPorDia = 64;
            puestoEmpleado = "Servidor";
            break;
        case "03":
            salarioPorDia = 80;
            puestoEmpleado = "Preparador de mezclas";
            break;
        case "04":
            salarioPorDia = 48;
            puestoEmpleado = "Mantenimiento";
            break;
    }
    let total = salarioPorDia * diasTrabajados;

    alert("Empleado: " + puestoEmpleado +
        "\nDías trabajados: " + diasTrabajados +
        "\nPago total: $" + total
    )
}

// 20.Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
// ¿Cuántos números son Pares?
// ¿Cuál es el mayor de todos?
// Si el tercero es par, calcular el cuadrado del segundo.
// Si el primero es menor que el cuarto, calcular la media de los 4 números.
// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
function ejercicio20() {
    let posiciones = ["primer", "segundo", "tercero", "cuarto"];
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let num = parseInt(prompt(`Ingrese el ${posiciones[i]} número:`));
        if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
            alert("Debe ingresar solo números enteros positivos.");
            return;
        }
        numeros.push(num);
    }

    let [n1, n2, n3, n4] = numeros;

    let pares = numeros.filter(n => n % 2 === 0).length;
    alert(`Cantidad de números pares: ${pares}`);

    let mayor = Math.max(...numeros);
    alert(`El mayor número es: ${mayor}`);

    if (n3 % 2 === 0) {
        let cuadrado = n2 ** 2;
        alert(`El tercero es par. El cuadrado del segundo es: ${cuadrado}`);
    }

    if (n1 < n4) {
        let media = (n1 + n2 + n3 + n4) / 4;
        alert(`El primero es menor que el cuarto. La media es: ${media}`);
    }

    if (n2 > n3) {
        if (n3 >= 50 && n3 <= 700) {
            let suma = n1 + n2 + n3 + n4;
            alert(`El segundo es mayor que el tercero y el tercero está entre 50 y 700. La suma es: ${suma}`);
        } else {
            alert("El segundo es mayor que el tercero, pero el tercero no está entre 50 y 700.");
        }
    }
}

// 21.Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21() {
    let numero = parseInt(prompt("Ingrese un número entero positivo"));

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero positivo que sea válido.");
        return;
    }
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    alert("El factorial de " + numero + " es " + factorial);
}

//22.Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22() {
    let numero = parseInt(prompt("Ingrese un número entero positivo"));

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero positivo que sea valido.");
        return;
    }
    let suma = (numero * (numero + 1)) / 2;

    alert(`La suma de los primeros ${numero} números es: ${suma}`);
}

//23.Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23() {
    let numero = parseInt(prompt("Ingrese un número entero positivo"));

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero positivo que sea válido.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= numero; i += 2) {
        suma += i;
    }

    alert(`La suma de los números impares menores o iguales a ${numero} es: ${suma}`);
}

//24.Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24() {
    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    alert("La suma de todos los números pares hasta el 1000 es " + suma);
}

//25.Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function ejercicio25() {
    let numero = parseInt(prompt("Ingrese un número entero positivo"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número válido y no negativo.");
        return;
    }

    let resultado = factorial(numero);
    alert(`El factorial de ${numero} es: ${resultado}`);
}

//26.Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26() {
    let dividendo = parseInt(prompt("Ingrese el dividendo (número a dividir):"));
    let divisor = parseInt(prompt("Ingrese el divisor (número que divide):"));

    if (isNaN(dividendo) || isNaN(divisor) || divisor <= 0) {
        alert("Ingrese valores válidos. El divisor debe ser mayor que cero.");
        return;
    }

    let cociente= 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }
    alert(`Cociente: ${cociente} \nResto: ${resto}`);
}

//27.Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function ejercicio27(){
    let suma = 0;
    let contador = 0;

    while (true) {
        let numero = parseFloat(prompt("Ingrese un número positivo (o un número negativo para terminar):"));
        
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            continue; // vuelve a pedir número
        }
        
        if (numero < 0) {
            break; // termina el ciclo si es negativo
        }
        
        suma += numero;
        contador++;
    }

     if (contador === 0) {
        alert("No se ingresaron números positivos para calcular la media.");
    } else {
        let media = suma / contador;
        alert(`La media de los números ingresados es: ${media}`);
    }
}
//28.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28(){
    let suma= 0;
    let i= 0;

    do {
        suma += i;
        i++;
    } while (i <= 100);

    alert("La suma de los primeros 100 números es: " + suma);
}
//29.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29(){
      let suma = 0;
    let i = 1;

    while (i<= 100) {
        suma += i;
        i++;
    }

    alert("La suma de los primeros 100 números es: " + suma);
}
//30.Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30(){
     let suma = 0;

    for (let i= 1;i <= 100; i++) {
        suma += i;
    }

    alert(`La suma de los primeros 100 números es: ${suma}`);
}

//31.Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function ejercicio31(){
   let sumaPares = 0, sumaImpares = 0;
    let contPares = 0, contImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}:`));

        if (isNaN(numero)) {
            alert("Debe ingresar un número válido.");
            return;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
            contPares++;
        } else {
            sumaImpares += numero;
            contImpares++;
        }
    }

    let mediaPares = contPares > 0 ? (sumaPares / contPares) : 0;
    let mediaImpares = contImpares > 0 ? (sumaImpares / contImpares) : 0;

    alert(`Media de pares: ${mediaPares}\nMedia de impares: ${mediaImpares}`);
}

//32.Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
function ejercicio32() {
    const provincias = 3;
    const ciudadesPorProvincia = 11;
    let ciudadMax = "";
    let maxPoblacion = -1;
    let provinciaMax = "";

    for (let p = 1; p <= provincias; p++) {
        for (let c = 1; c <= ciudadesPorProvincia; c++) {
            let poblacion;

            while (true) {
                poblacion = parseInt(prompt(`Ingrese la población de la ciudad ${c} de la provincia ${p}:`));

                if (!isNaN(poblacion) && poblacion >= 0 && Number.isInteger(poblacion)) {
                    break;
                }

                alert("Ingrese un número entero válido y no negativo.");
            }

            if (poblacion > maxPoblacion) {
                maxPoblacion = poblacion;
                ciudadMax = `Ciudad ${c}`;
                provinciaMax = `Provincia ${p}`;
          }
        }
    }

    alert(`La ciudad con más población es ${ciudadMax} en ${provinciaMax} con ${maxPoblacion} habitantes.`);
}


//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33(){
    let continuar= "si"

     while (continuar.toLowerCase() === "si") {
        alert("El programa está ejecutándose...");
        continuar = prompt("¿Desea continuar? (si/no)");
    }
    alert("Programa finalizado.");
}

//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
function ejercicio34(){
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

//35.Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function ejercicio35() {
    let numero = parseFloat(prompt("Ingrese el número 1 de 20:"));
    let mayor = numero;
    let menor = numero;

    for (let i = 2; i <= 20; i++) {
        numero = parseFloat(prompt(`Ingrese el número ${i} de 20:`));

        if (numero > mayor) {
            mayor = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);
}

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function ejercicio36(){
    let n = parseInt(prompt("¿Cuántos números de la serie Fibonacci deseas?"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero.");
        return;
    }
    let a = 0, b = 1;
    let resultado = [a];

      for (let i = 1; i < n; i++) {
        resultado.push(b);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    alert("Serie Fibonacci:\n" + resultado.join(", "));
}

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejecutarMCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function ejercicio37() {
        let num1 = parseInt(prompt("Ingrese el primer número:"));
        let num2 = parseInt(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            alert("Por favor ingrese números enteros positivos válidos.");
        } else {
            let mcd = ejecutarMCD(num1, num2);
            alert(`El M.C.D. de ${num1} y ${num2} es: ${mcd}`);
        }
    }

// 38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38(){
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));

    if (isNaN(numero) || numero <= 0) {
    alert("Debe ingresar un número entero positivo.");
    return;
    }
    let sumaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      sumaDivisores += i;
    }
  }

  if (sumaDivisores === numero) {
    alert(`${numero} es un número perfecto.`);
  } else {
    alert(`${numero} no es un número perfecto.`);
  }
} 

//39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
function ejercicio39(){
    let terminos = parseInt(prompt("¿Cuántas iteraciones quieres de la aproximación?"));

    if (isNaN(terminos) || terminos <= 0) {
        alert("Por favor ingresa un número valido.");
        return;
    }

    let pi = 0;
    let signo = 1;

    for (let i = 0; i < terminos; i++) {
        let denominador = 2 * i + 1;
        pi += signo * (4 / denominador);
        signo *= -1;
    }

    alert("Aproximación de π con " + terminos + " términos:\n" + pi);
}
    
//40.Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La fórmula que se debe aplicar es:
//Pi = = 3 + 4/(2 3 4) - 4/(4 5 6) + 4/(6 7 8) - 4/(8 9 10) + 4/(10 11 12) - 4/(12 13 14) ...
function ejercicio40() {
    let terminos = parseInt(prompt("¿Cuántas iteraciones quieeres de la aproximación de π con la serie de Nilakantha?"));

    if (isNaN(terminos) || terminos <= 0) {
        alert("Por favor ingresa un número entero positivo.");
        return;
    }

    let pi = 3;
    let signo = 1;

    for (let i = 2, contador = 0; contador < terminos; i += 2, contador++) {
        let denominador = i * (i + 1) * (i + 2);
        pi += signo * (4 / denominador);
        signo *= -1;  
    }

    alert(`Aproximación de π con ${terminos} términos:\n${pi}`);
}
