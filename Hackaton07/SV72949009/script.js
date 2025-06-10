function ejercicio01(){
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
let numero = parseInt(prompt("Ingresa un numero"));
if(!isNaN(numero)){
    if(numero<0){
        alert("Este numero es negativo")
    }
    else{
        alert("Este numero es positivo")
    }
}
else{
    alert("El numero ingresado no es valido")
}
}

function ejercicio03(){
let numero = parseInt(prompt("Ingresa un numero"));
if(!isNaN(numero)){
    if(numero.toString().at(-1)==4){
        alert("Este numero termina en 4")
    }
    else{
        alert("Este numero no termina en 4")
    }
}
else{
    alert("El numero ingresado no es valido")
}
}

function ejercicio04(){


}

function ejercicio05(){
const price = 80;
let descuento = 0;
let cantidad = parseInt(prompt("Ingresa la cantidad a comprar"));
if(!isNaN(cantidad)){
    if(cantidad>30){
        descuento = (cantidad * price) * 0.40;
        let precioFinal=(cantidad * price)-descuento;
        alert("Su precio total es: " + precioFinal)
    }
    else if(cantidad>20){
        descuento = (cantidad * price) * 0.20;
        let precioFinal=(cantidad * price)-descuento;
        alert("Su precio total es: " + precioFinal)
    }
    else if(cantidad>10){
        descuento = (cantidad * price) * 0.1;
        let precioFinal=(cantidad * price)-descuento;
        alert("Su precio total es: " + precioFinal)
    }
    else{
        descuento=0;
        let precioFinal=(cantidad * price)-descuento;
        alert("Su precio total es: " + precioFinal)
    }
}
else{
    alert("El numero ingresado no es valido")
}
}

function ejercicio06(){
let pago = 0;
    let horasTrabajadas = parseInt(prompt("Ingresa las horas que trabajo esta semana:"));
    if(!isNaN(horasTrabajadas)){
        if(horasTrabajadas<40){
            pago= horasTrabajadas * 20;
            alert("Su pago final es: " + pago)
        }
        else if(horasTrabajadas>39){
            pago= horasTrabajadas * 25;
            alert("Su pago final es: " + pago)
        }
    }
    else {
        alert("El numero igresado no es valido")
    }
}

function ejercicio07(){
    let montoFinal = 0;
    let descuento = 0;
    let montoPagar = parseFloat(prompt("Ingrese el monto total a pagar: "));
    if(!isNaN(montoPagar)){
        let tipoMembresia = prompt("Ingrese tipo de membresia (A, B o C): ");
        if(tipoMembresia === "A"){
            descuento = montoPagar * 0.10;
            montoFinal = montoPagar - descuento;
            alert("Su precio es de: " + montoFinal.toFixed(2)); 
        }      
        else if(tipoMembresia === "B"){
                descuento = montoPagar * 0.15;
                montoFinal = montoPagar - descuento;
                alert("Su precio es de: " + montoFinal.toFixed(2)); 
        }
        else if (tipoMembresia === "C"){
                descuento = montoPagar * 0.20;
                montoFinal = montoPagar - descuento;
                alert("Su precio es de: " + montoFinal.toFixed(2)); 
        }
        else{
            alert("Error");
        }

    }
}

function ejercicio08() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        let promedio = (nota1 + nota2 + nota3) / 3;
        let mensaje;
        if (promedio >= 11){
            mensaje = "Aprobado";
        }
        else{
            mensaje = "Reprobado";
        } 
        alert("Promedio: " + promedio.toFixed(2) + " - " + mensaje);
    } else {
        alert("Alguna de las notas no es valida.");
    }
}

function ejercicio09() {
    let salario = parseFloat(prompt("Ingrese el salario actual del trabajador:"));

    if (!isNaN(salario)) {
        let aumento = salario > 2000 ? salario * 0.05 : salario * 0.10;
        let nuevoSalario = salario + aumento;
        alert("El nuevo salario es: $" + nuevoSalario.toFixed(2));
    } else {
        alert("El salario ingresado no es valido.");
    }
}

function ejercicio10() {
    let numero = parseInt(prompt("Ingresa un numero:"));
    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("El numero es par.");
        } else {
            alert("El numero es impar.");
        }
    } else {
        alert("Numero invalido.");
    }
}

function ejercicio11() {
    let a = parseFloat(prompt("Ingresa el primer numero:"));
    let b = parseFloat(prompt("Ingresa el segundo numero:"));
    let c = parseFloat(prompt("Ingresa el tercer numero:"));
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let mayor = a;
        if (b > mayor) {
            mayor = b;
        }
        if (c > mayor) {
            mayor = c;
        }
        alert("El numero mayor es: " + mayor);
    } else {
        alert("Alguno de los valores no es valido.");
    }
}

function ejercicio12() {
    let a = parseFloat(prompt("Ingresa el primer numero:"));
    let b = parseFloat(prompt("Ingresa el segundo numero:"));
    if (!isNaN(a) && !isNaN(b)) {
        if (a > b) {
            alert("El mayor es: " + a);
        } else if (b > a) {
            alert("El mayor es: " + b);
        } else {
            alert("Ambos numeros son iguales.");
        }
    } else {
        alert("Numero invalido.");
    }
}

function ejercicio13() {
    let letra = prompt("Ingresa una letra:").toLowerCase();
    if (letra.length === 1) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            alert("Es una vocal.");
        } else {
            alert("No es una vocal.");
        }
    } else {
        alert("Ingresa solo una letra.");
    }
}

function ejercicio14() {
    let numero = parseInt(prompt("Ingresa un numero del 1 al 10:"));
    if (!isNaN(numero) && numero >= 1 && numero <= 10) {
        if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
            alert("Es un numero primo.");
        } else {
            alert("No es un numero primo.");
        }
    } else {
        alert("Lo que ingreso no es invalido.");
    }
}

function ejercicio15() {
    let cm = parseFloat(prompt("Ingresa la cantidad en centimetros:"));
    let lb = parseFloat(prompt("Ingresa la cantidad en libras:"));
    if (!isNaN(cm) && !isNaN(lb)) {
        let pulgadas = cm / 2.54;
        let kg = lb * 0.453592;
        alert(cm + " cm son " + pulgadas.toFixed(2) + " pulgadas.\n" +
              lb + " libras son " + kg.toFixed(2) + " kilogramos.");
    } else {
        alert("Datos invalidos.");
    }
}

function ejercicio16() {
    let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));
    let dia = "";
    if (!isNaN(numero)) {
        if (numero === 1){ dia = "Lunes";}
        else if (numero === 2){ dia = "Martes";}
        else if (numero === 3){ dia = "Miercoles";}
        else if (numero === 4){ dia = "Jueves";}
        else if (numero === 5){ dia = "Viernes";}
        else if (numero === 6){ dia = "Sabado";}
        else if (numero === 7){ dia = "Domingo";}
        else{ dia = "Numero fuera de rango.";}
        alert(dia);
    } else {
        alert("Dato invalido.");
    }
}

function ejercicio17() {
    let hora = parseInt(prompt("Ingresa la hora (0-23):"));
    let minuto = parseInt(prompt("Ingresa el minuto (0-59):"));
    let segundo = parseInt(prompt("Ingresa el segundo (0-59):"));

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >= 0 && segundo <= 59) {
        segundo++;
        if (segundo === 60) {
            segundo = 0;
            minuto++;
        }
        if (minuto === 60) {
            minuto = 0;
            hora++;
        }
        if (hora === 24) {
            hora = 0;
        }
        alert("Hora en un segundo sera: " + hora + ":" + minuto + ":" + segundo);
    } else {
        alert("Hora invalida.");
    }
}

function ejercicio18() {
    let cantidad = parseInt(prompt("Ingresa la cantidad de CDs a vender:"));
    if (!isNaN(cantidad) && cantidad > 0) {
        let precioUnitario = 10;
        if (cantidad >= 10 && cantidad < 100) {
            precioUnitario = 8;
        } else if (cantidad >= 100 && cantidad < 500) {
            precioUnitario = 7;
        } else if (cantidad >= 500) {
            precioUnitario = 6;
        }
        let total = cantidad * precioUnitario;
        let ganancia = total * 0.0825;
        alert("Precio total: $" + total + "\nGanancia del vendedor: $" + ganancia.toFixed(2));
    } else {
        alert("Cantidad invalida.");
    }
}

function ejercicio19() {
    let tipo = parseInt(prompt("Ingresa el numero identificador del empleado (1:Cajero, 2:Servidor, 3:Preparador, 4:Mantenimiento):"));
    let dias = parseInt(prompt("Ingresa la cantidad de días trabajados (máx 6):"));
    let salario = 0;

    if (dias >= 0 && dias <= 6) {
        if (tipo === 1) salario = 56;
        else if (tipo === 2) salario = 64;
        else if (tipo === 3) salario = 80;
        else if (tipo === 4) salario = 48;
        else {
            alert("Tipo de empleado invalido.");
            return;
        }
        let total = salario * dias;
        alert("Total a pagar: $" + total);
    } else {
        alert("Dias invalidos.");
    }
}

function ejercicio20() {
    let n1 = parseInt(prompt("Ingresa el primer numero:"));
    let n2 = parseInt(prompt("Ingresa el segundo numero:"));
    let n3 = parseInt(prompt("Ingresa el tercer numero:"));
    let n4 = parseInt(prompt("Ingresa el cuarto numero:"));

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
        let pares = 0;
        if (n1 % 2 === 0) pares++;
        if (n2 % 2 === 0) pares++;
        if (n3 % 2 === 0) pares++;
        if (n4 % 2 === 0) pares++;

        let mayor = n1;
        if (n2 > mayor) mayor = n2;
        if (n3 > mayor) mayor = n3;
        if (n4 > mayor) mayor = n4;

        alert("Cantidad de numeros pares: " + pares);
        alert("El numero mayor es: " + mayor);

        if (n3 % 2 === 0) {
            alert("El cuadrado del segundo numero es: " + (n2 * n2));
        }

        if (n1 < n4) {
            let media = (n1 + n2 + n3 + n4) / 4;
            alert("La media de los 4 numeros es: " + media);
        }

        if (n2 > n3) {
            if (n3 >= 50 && n3 <= 700) {
                let suma = n1 + n2 + n3 + n4;
                alert("La suma de los numeros es: " + suma);
            }
        }
    } else {
        alert("Datos invalidos.");
    }
}

function ejercicio21() {
    let num = parseInt(prompt("Ingresa un numero para calcular su factorial:"));
    if (!isNaN(num) && num >= 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        alert("El factorial de " + num + " es: " + factorial);
    } else {
        alert("Numero inválido.");
    }
}

function ejercicio22() {
    let n = parseInt(prompt("Ingresa un numero n:"));
    if (!isNaN(n) && n >= 1) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
            suma += i;
        }
        alert("La suma de los primeros " + n + " numeros es: " + suma);
    } else {
        alert("Numero invalido.");
    }
}

function ejercicio23() {
    let n = parseInt(prompt("Ingresa un numero n:"));
    if (!isNaN(n) && n >= 1) {
        let suma = 0;
        for (let i = 1; i <= n; i += 2) {
            suma += i;
        }
        alert("La suma de los numeros impares menores o iguales a " + n + " es: " + suma);
    } else {
        alert("Numero invalido.");
    }
}

function ejercicio24() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }
    alert("La suma de todos los numeros pares hasta 1000 es: " + suma);
}

function ejercicio25() {
    let num = parseInt(prompt("Ingresa un numero para calcular su factorial:"));

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    if (!isNaN(num) && num >= 0) {
        alert("El factorial de " + num + " es: " + factorial(num));
    } else {
        alert("Numero invalido.");
    }
}

function ejercicio26() {
    let dividendo = parseInt(prompt("Ingresa el dividendo:"));
    let divisor = parseInt(prompt("Ingresa el divisor:"));
    if (!isNaN(dividendo) && !isNaN(divisor) && divisor > 0) {
        let cociente = 0;
        while (dividendo >= divisor) {
            dividendo -= divisor;
            cociente++;
        }
        alert("Cociente: " + cociente + ", Resto: " + dividendo);
    } else {
        alert("Datos invalidos.");
    }
}

function ejercicio27() {
    let suma = 0, contador = 0, numero;
    do {
        numero = parseFloat(prompt("Ingresa un numero positivo (negativo para terminar):"));
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } while (numero >= 0);
    if (contador > 0) {
        let media = suma / contador;
        alert("La media es: " + media);
    } else {
        alert("No se ingresaron numeros positivos.");
    }
}

function ejercicio28() {
    let suma = 0, i = 1;
    do {
        suma += i;
        i++;
    } while (i <= 100);
    alert("La suma de los primeros 100 numeros es: " + suma);
}

function ejercicio29() {
    let suma = 0, i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert("La suma de los primeros 100 numeros es: " + suma);
}

function ejercicio30() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma de los primeros 100 numeros es: " + suma);
}

function ejercicio31() {
    let sumaPar = 0, sumaImpar = 0, contPar = 0, contImpar = 0;
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt("Ingresa el numero " + (i + 1) + ":"));
        if (num % 2 === 0) {
            sumaPar += num;
            contPar++;
        } else {
            sumaImpar += num;
            contImpar++;
        }
    }
    let mediaPar = contPar > 0 ? (sumaPar / contPar) : 0;
    let mediaImpar = contImpar > 0 ? (sumaImpar / contImpar) : 0;
    alert("Media de pares: " + mediaPar + "\nMedia de impares: " + mediaImpar);
}

function ejercicio32() {
    let mayor = 0;
    let ciudadMayor = "";
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 11; j++) {
            let poblacion = parseInt(prompt("Poblacion de la ciudad " + j + " de la provincia " + i + ":"));
            if (poblacion > mayor) {
                mayor = poblacion;
                ciudadMayor = "Provincia " + i + ", Ciudad " + j;
            }
        }
    }
    alert("La ciudad mas poblada es: " + ciudadMayor + " con " + mayor + " personas.");
}

function ejercicio33() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Deseas continuar? (si/no):").toLowerCase();
        if (opcion !== "sí" && opcion !== "si") {
            continuar = false;
        } else {
            alert("Programa corriendo");
        }
    }
    alert("GG");
}

function ejercicio34() {
    let resultado = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            resultado += i + " x " + j + " = " + (i * j) + "\n";
        }
        resultado += "\n";
    }
    alert("Tablas: \n" + resultado);
}

function ejercicio35() {
    let mayor;
    let menor;
    for (let i = 0; i < 20; i++) {
        let num = parseFloat(prompt("Ingresa el numero " + (i + 1) + ":"));
        if (i === 0 || num > mayor) {
            mayor = num;
        }
        if (i === 0 || num < menor) {
            menor = num;
        }
    }
    alert("Mayor: " + mayor + "\nMenor: " + menor);
}

function ejercicio36() {
    let n = parseInt(prompt("¿Cuantos terminos de Fibonacci deseas?"));
    let a = 0, b = 1, serie = "";
    for (let i = 0; i < n; i++) {
        serie += a + " ";
        let temp = a;
        a = b;
        b = temp + b;
    }
    alert("Serie de Fibonacci:\n" + serie);
}

function ejercicio37() {
    let a = parseInt(prompt("Ingresa el primer numero:"));
    let b = parseInt(prompt("Ingresa el segundo numero:"));
    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        alert("El MCD es: " + a);
    } else {
        alert("Datos inválidos.");
    }
}

function ejercicio38() {
    let num = parseInt(prompt("Ingresa un numero para verificar si es perfecto:"));
    let suma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }
    if (suma === num) {
        alert(num + " es un numero perfecto.");
    } else {
        alert(num + " no es un numero perfecto.");
    }
}

function ejercicio39() {
    let terminos = parseInt(prompt("¿Cuantos terminos deseas usar para aproximar PI?"));
    let pi = 0;
    for (let i = 0; i < terminos; i++) {
        if (i % 2 === 0) {
            pi += 4 / (2 * i + 1);
        } else {
            pi -= 4 / (2 * i + 1);
        }
    }
    alert("Aproximacion de PI: " + pi);
}

function ejercicio40() {
    let terminos = parseInt(prompt("¿Cuantos terminos deseas usar para aproximar PI?"));
    let pi = 3;
    let signo = 1;
    for (let i = 2, count = 0; count < terminos; i += 2, count++) {
        let termino = 4 / (i * (i + 1) * (i + 2));
        if (signo === 1) {
            pi += termino;
        } else {
            pi -= termino;
        }
        signo *= -1;
    }
    alert("Aproximacion de PI con nilakantha: " + pi);
}