function ejercicio01() {
  //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
  let numero = parseInt(prompt("Ingresa un numero"));
  if (!isNaN(numero)) {
    if (numero > 99 && numero < 1000) {
      alert("Este numero tiene 3 digitos");
    } else {
      alert("Este numero no tiene 3 digitos");
    }
  } else {
    alert("El numero ingresado no es valido");
  }
}

function ejercicio02() {
  //2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
  let numero = parseInt(prompt("Ingresa un número"));
  if (!isNaN(numero)) {
    if (numero < 0) {
      alert("Este numero es negativo");
    } else {
      alert("Este numero no es negativo");
    }
  } else {
    alert("El numero ingresado no es valido");
  }
}

function ejercicio03() {
  //3.Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
  let numero = parseInt(prompt("Ingresa el número"));
  if (!isNaN(numero)) {
    if (numero % 10 === 4) {
      alert("Este número termina en 4");
    } else {
      alert("Este número no termina en 4");
    }
  } else {
    alert("El numero ingresado no es valido");
  }
}

function ejercicio04() {
  //4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
  let primerNumero = parseInt(prompt("Ingresa el primer numero"));
  let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
  let tercerNumero = parseInt(prompt("Ingrese el tercer numero"));
  if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
    let numeros = [primerNumero, segundoNumero, tercerNumero];
    numeros.sort(function (a, b) {
      return a - b;
    });
    alert("Los numeros ordenados de menor a mayor son: " + numeros.join(", "));
  } else {
    alert("Alguno de los valores ingresados no es un numero valido");
  }
}

function ejercicio05() {
  //5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
  const precioPorZapato = 80;
  let numero = parseInt(prompt("Ingrese el numero de zapatos a comprar"));
  if (!isNaN(numero) && numero > 0) {
    let descuento = 0;
    if (numero > 10 && numero <= 20) {
      descuento = 0.1;
    } else if (numero > 20 && numero <= 30) {
      descuento = 0.2;
    } else if (numero > 30) {
      descuento = 0.4;
    }
    let totalSinDescuento = numero * precioPorZapato;
    let totalConDescuento = totalSinDescuento * (1 - descuento);
    alert(
      `El costo total es ${totalConDescuento}. Corresponde a ${numero} pares.`
    );
  } else {
    alert("Valor no valido. Por favor ingrese un numero mayor a 0.");
  }
}

function ejercicio06() {
  //6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
  let numero = parseInt(prompt("Ingrese el numero de horas que trabajo."));
  if (!isNaN(numero) && numero >= 0) {
    const pagoPorHora = 20;
    const pagoHoraExtra = 25;
    let sueldo;
    if (numero <= 40) {
      sueldo = numero * pagoPorHora;
    } else {
      let horasNormales = 40;
      let horasExtras = numero - 40;
      sueldo = horasNormales * pagoPorHora + horasExtras * pagoHoraExtra;
    }
    alert(`Sueldo semanal: $${sueldo}`);
  } else {
    ("Ingrese un numero valido de horas");
  }
}

function ejercicio07() {
  //7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
  let numero = parseInt(prompt("Ingrese el monto de consumo"));
  let membresía = prompt(
    "Ingrese su tipo de membresia (A, B o C)."
  ).toUpperCase();
  if (!isNaN(numero) && numero > 0) {
    let descuento = 0;

    switch (membresía) {
      case "A":
        descuento = 0.1;
        break;

      case "B":
        descuento = 0.15;
        break;

      case "C":
        descuento = 0.2;
        break;
    }
    let totalDescuento = numero * descuento;
    let totalFinal = numero - totalDescuento;
    alert(`El monto total a pagar es $${totalFinal}`);
  } else {
    alert("Monto de compra no valido.");
  }
}

function ejercicio08() {
  //8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
  let primerNumero = parseInt(prompt("Ingresa la primera nota"));
  let segundoNumero = parseInt(prompt("Ingrese la segunda nota"));
  let tercerNumero = parseInt(prompt("Ingrese la tercera nota"));
  if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
    let promedio = (primerNumero + segundoNumero + tercerNumero) / 3;
    let estado = "";
    if (promedio <= 20 && promedio >= 11) {
      estado = "aprobado";
    } else if (promedio <= 10 && promedio >= 0) {
      estado = "desaprobado";
    }
    alert(`El promedio es ${promedio} y el estado es ${estado}.`);
  } else {
    alert("Notas no validas");
  }
}

function ejercicio09() {
  //Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
  let numero = parseInt(prompt("Ingresa tu sueldo"));
  if (!isNaN(numero) && numero > 0) {
    let aumento;
    if (numero >= 2000) {
      aumento = 0.05;
    } else if (numero < 2000) {
      aumento = 0.1;
    }
    let totalAumento = numero * aumento;
    let sueldoFinal = numero + totalAumento;
    alert(`El sueldo total el ${sueldoFinal}.`);
  } else {
    alert("Montos no válidos");
  }
}

function ejercicio10() {
  //Hacer un algoritmo en JavaScript que diga si un número es par o impar.
  let numero = parseInt(prompt("Ingresa un numero"));
  if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      alert("Este numero es par");
    } else {
      alert("Este numero es impar");
    }
  } else {
    alert("Ingrese digitos validos");
  }
}

function ejercicio11() {
  // 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
  let primerNumero = parseInt(prompt("Ingresa el primer numero"));
  let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
  let tercerNumero = parseInt(prompt("Ingrese el tercer numero"));
  if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
    let numeros = [primerNumero, segundoNumero, tercerNumero];
    numeros.sort(function (a, b) {
      return b - a;
    });
    alert("Los numeros ordenados de mayor a menor son: " + numeros.join(", "));
  } else {
    alert("Alguno de los valores ingresados no es un numero valido");
  }
}

function ejercicio12() {
  // Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
  let primerNumero = parseInt(prompt("Ingresa el primer numero"));
  let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
  if (!isNaN(primerNumero) && !isNaN(segundoNumero)) {
    if (primerNumero > segundoNumero) {
      alert(`El numero mayor es: ${primerNumero}`);
    } else if (segundoNumero > primerNumero) {
      alert(`El numero mayor es: ${segundoNumero}`);
    }
  } else {
    alert("Ingrese numeros validos");
  }
}

function ejercicio13() {
  //13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
  let letra = prompt("Ingrese una letra");
  if (isNaN(letra)) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      alert("La letra ingresada es una vocal");
    } else {
      alert("La letra ingresada no es una vocal");
    }
  } else {
    alert("Entrada no valida. Ingrese solo una letra.");
  }
}

function ejercicio14() {
  //14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
  let numero = parseInt(prompt("Ingresa un número entero entre 1 y 10"));
  if (!isNaN(numero) && numero >= 1 && numero <= 10) {
    if (esPrimo(numero)) {
      alert(`El número ${numero} es primo.`);
    } else {
      alert(`El número ${numero} no es primo.`);
    }
  } else {
    alert("Numero no valido. Debe ser uno entre 1 y 10");
  }
  function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i = i + 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function ejercicio15() {
  //Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
  let numeroPrimero = parseInt(
    prompt("Ingrese los centimetros a convertir a pulgadas")
  );
  let numeroSegundo = parseInt(
    prompt("Ingrese las libras a convertir a kilogramos")
  );
  if (!isNaN(numeroPrimero) && !isNaN(numeroSegundo)) {
    const pulgadas = 0.393701;
    const kilogramos = 0.4536;
    let equivalencia1 = numeroPrimero * pulgadas;
    let equivalencia2 = numeroSegundo * kilogramos;
    alert(
      `La equivalencia de ${numeroPrimero} cm es ${equivalencia1.toFixed(
        2
      )} pulgadas y ${numeroSegundo} libras es ${equivalencia2.toFixed(2)} kg.`
    );
  } else {
    alert("Ingrese datos validos para la operacion");
  }
}

function ejercicio16() {
  //Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
  let numero = parseInt(
    prompt("Ingrese un numero del 1 al 7 para conocer el dia que corresponde")
  );
  if (!isNaN(numero) && numero >= 1 && numero <= 7) {
    let dia;
    switch (numero) {
      case 1:
        dia = "Domingo";
        break;
      case 2:
        dia = "Lunes";
        break;
      case 3:
        dia = "Martes";
        break;
      case 4:
        dia = "Miercoles";
        break;
      case 5:
        dia = "Jueves";
        break;
      case 6:
        dia = "Viernes";
        break;
      case 7:
        dia = "Sabado";
        break;
    }
    alert(`El numero seleccionado corresponde al dia ${dia}.`);
  } else {
    alert("Ingrese un numero valido del 1 al 7");
  }
}

function ejercicio17() {
  // 17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
  let horas = parseInt(prompt("Ingresa la hora (0-23):"));
  let minutos = parseInt(prompt("Ingresa los minutos (0-59):"));
  let segundos = parseInt(prompt("Ingresa los segundos (0-59):"));
  if (
    !isNaN(horas) &&
    horas >= 0 &&
    horas <= 23 &&
    !isNaN(minutos) &&
    minutos >= 0 &&
    minutos <= 59 &&
    !isNaN(segundos) &&
    segundos >= 0 &&
    segundos <= 59
  ) {
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
    alert(`La hora dentro de un segundo será: ${horas}:${minutos}:${segundos}`);
  } else {
    alert("Por favor, ingresa valores válidos.");
  }
}

function ejercicio18() {
  // Solicitar al usuario el número de CDs a vender
  let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender"));
  if (!isNaN(cantidad) && cantidad > 0) {
    let precioUnitario;
    if (cantidad < 10) {
      precioUnitario = 10;
    } else if (cantidad >= 10 && cantidad < 100) {
      precioUnitario = 8;
    } else if (cantidad >= 100 && cantidad < 500) {
      precioUnitario = 7;
    } else {
      precioUnitario = 6;
    }
    let totalVenta = cantidad * precioUnitario;
    let ganancia = totalVenta * 0.0825;
    alert(
      `Cantidad: ${cantidad} CDs\nPrecio unitario: $${precioUnitario}\nTotal a pagar: $${totalVenta}\nGanancia del vendedor: $${ganancia.toFixed(
        2
      )}`
    );
  } else {
    alert("Por favor, ingrese una cantidad válida mayor que cero.");
  }
}

function ejercicio19() {
  // Solicitar el número identificador del empleado
  let idEmpleado = parseInt(
    prompt(
      "Ingrese el número identificador del empleado:\n1. Cajero\n2. Servidor\n3. Preparador de mezclas\n4. Mantenimiento"
    )
  );
  let diasTrabajados = parseInt(
    prompt("Ingrese la cantidad de días trabajados (máximo 6)")
  );
  if (
    !isNaN(idEmpleado) &&
    idEmpleado >= 1 &&
    idEmpleado <= 4 &&
    !isNaN(diasTrabajados) &&
    diasTrabajados >= 0 &&
    diasTrabajados <= 6
  ) {
    let salarioDiario;
    let nombreEmpleado;
    switch (idEmpleado) {
      case 1:
        nombreEmpleado = "Cajero";
        salarioDiario = 56;
        break;
      case 2:
        nombreEmpleado = "Servidor";
        salarioDiario = 64;
        break;
      case 3:
        nombreEmpleado = "Preparador de mezclas";
        salarioDiario = 80;
        break;
      case 4:
        nombreEmpleado = "Mantenimiento";
        salarioDiario = 48;
        break;
    }
    let salarioTotal = salarioDiario * diasTrabajados;
    alert(
      `El empleado ${nombreEmpleado} trabajó ${diasTrabajados} días.\nDebe recibir $${salarioTotal}.`
    );
  } else {
    alert(
      "Entrada no válida. Verifique el ID del empleado (1-4) y los días trabajados (0-6)."
    );
  }
}

function ejercicio20() {
  // Leer 4 números enteros positivos
  let num1 = parseInt(prompt("Ingrese el primer número entero positivo"));
  let num2 = parseInt(prompt("Ingrese el segundo número entero positivo"));
  let num3 = parseInt(prompt("Ingrese el tercer número entero positivo"));
  let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo"));
  if (
    !isNaN(num1) &&
    num1 > 0 &&
    !isNaN(num2) &&
    num2 > 0 &&
    !isNaN(num3) &&
    num3 > 0 &&
    !isNaN(num4) &&
    num4 > 0
  ) {
    let resultados = "";
    let numeros = [num1, num2, num3, num4];
    let pares = numeros.filter((n) => n % 2 === 0).length;
    resultados += `Cantidad de números pares: ${pares}\n`;
    let mayor = Math.max(num1, num2, num3, num4);
    resultados += `El número mayor es: ${mayor}\n`;
    if (num3 % 2 === 0) {
      let cuadradoSegundo = num2 * num2;
      resultados += `El tercero es par, el cuadrado del segundo es: ${cuadradoSegundo}\n`;
    }
    if (num1 < num4) {
      let media = (num1 + num2 + num3 + num4) / 4;
      resultados += `El primero es menor que el cuarto, la media es: ${media}\n`;
    }
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
      let suma = num1 + num2 + num3 + num4;
      resultados += `Se cumplen las condiciones, la suma de los números es: ${suma}\n`;
    }
    alert(resultados);
  } else {
    alert("Por favor, ingrese solo números enteros positivos.");
  }
}

function ejercicio21() {
  //21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
  let numero = parseInt(
    prompt("Ingresa un número entero positivo para calcular su factorial:")
  );
  if (!isNaN(numero) && numero >= 0) {
    let factorial = 1;
    for (let i = 1; i <= numero; i = i + 1) {
      factorial = factorial * i;
    }
    alert(`El factorial de ${numero} es ${factorial}`);
  } else {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
}

function ejercicio22() {
  //22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
  let n = parseInt(prompt("Ingresa un número entero positivo:"));
  if (!isNaN(n) && n > 0) {
    let suma = (n * (n + 1)) / 2;
    alert(`La suma de los primeros ${n} números es: ${suma}`);
  } else {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
}

function ejercicio23() {
  //23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
  let n = parseInt(prompt("Ingresa un número entero positivo:"));
  if (!isNaN(n) && n > 0) {
    let suma = 0;
    for (let i = 1; i <= n; i = i + 1) {
      if (i % 2 !== 0) {
        suma = suma + i;
      }
    }
    alert(
      `La suma de los números impares menores o iguales a ${n} es: ${suma}`
    );
  } else {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
}

function ejercicio24() {
  //24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
  let n = parseInt(prompt("Ingresa un número entero positivo entre 1 y 1000:"));
  if (!isNaN(n) && n > 0 && n <= 1000) {
    let suma = 0;
    for (let i = 1; i <= n; i = i + 1) {
      if (i % 2 === 0) {
        suma = suma + i;
      }
    }
    alert(`La suma de los números pares hasta ${n} es: ${suma}`);
  } else {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
}

function ejercicio25() {
  //25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
  let numero = parseInt(prompt("Ingresa un número entero positivo:"));
  if (!isNaN(numero) && numero >= 0) {
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
      factorial = factorial * i;
      i = i + 1;
    }
    alert(`El factorial de ${numero} es ${factorial}`);
  } else {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
}

function ejercicio26() {
  //26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
  let dividendo = parseInt(prompt("Ingresa el dividendo (número mayor):"));
  let divisor = parseInt(prompt("Ingresa el divisor (número menor):"));
  if (!isNaN(dividendo) && !isNaN(divisor) && divisor > 0 && dividendo >= 0) {
    let cociente = 0;
    let resto = dividendo;
    while (resto >= divisor) {
      resto = resto - divisor;
      cociente = cociente + 1;
    }
    alert(`El cociente es ${cociente} y el resto es ${resto}`);
  } else {
    alert("Ingresa valores válidos: dividendo ≥ 0 y divisor > 0");
  }
}

function ejercicio27() {
  //27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
  let suma = 0;
  let cantidad = 0;
  while (true) {
    let numero = parseInt(
      prompt("Ingresa un número positivo (o uno negativo para terminar):")
    );
    if (numero < 0) {
      break;
    }
    if (!isNaN(numero)) {
      suma += numero;
      cantidad++;
    } else {
      alert("Valor no válido, intenta de nuevo.");
    }
  }
  if (cantidad > 0) {
    let media = suma / cantidad;
    alert(`La media de los ${cantidad} números es: ${media}`);
  } else {
    alert("No se ingresaron números válidos.");
  }
}

function ejercicio28() {
  //28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
  let suma = 0;
  let i = 1;
  do {
    suma = suma + i;
    i = i + 1;
  } while (i <= 100);
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio29() {
  //29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
  let suma = 0;
  let i = 1;
  while (i <= 100) {
    suma = suma + i;
    i = i + 1;
  }
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio30() {
  //30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
  let suma = 0;
  for (let i = 1; i <= 100; i = i + 1) {
    suma = suma + i;
  }
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio31() {
  //31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
  let sumaPares = 0;
  let contadorPares = 0;
  let sumaImpares = 0;
  let contadorImpares = 0;
  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingresa el número ${i} de 10:`));
    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
      } else {
        sumaImpares += numero;
        contadorImpares++;
      }
    } else {
      alert("Por favor, ingresa un número válido.");
      i--;
    }
  }
  let mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
  let mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
  alert(
    `Media de números pares: ${mediaPares.toFixed(
      2
    )}\nMedia de números impares: ${mediaImpares.toFixed(2)}`
  );
}

function ejercicio32() {
  let maxPoblacion = 0;
  let provinciaMax = 0;
  let ciudadMax = 0;
  for (let p = 1; p <= 3; p++) {
    for (let c = 1; c <= 11; c++) {
      let poblacion = parseInt(
        prompt(`Ingresa la población para la provincia ${p}, ciudad ${c}:`)
      );
      while (isNaN(poblacion) || poblacion < 0) {
        poblacion = parseInt(
          prompt(
            `Dato inválido. Ingresa la población para la provincia ${p}, ciudad ${c} (número positivo):`
          )
        );
      }
      if (poblacion > maxPoblacion) {
        maxPoblacion = poblacion;
        provinciaMax = p;
        ciudadMax = c;
      }
    }
  }
  alert(
    `La ciudad con mayor población es la ciudad ${ciudadMax} de la provincia ${provinciaMax}, con ${maxPoblacion} habitantes.`
  );
}

function ejercicio33() {
  //33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
  let continuar = true;
  while (continuar) {
    alert("Ejecutando el programa...");
    let respuesta = prompt("¿Quieres continuar? (s/n)").toLowerCase();
    if (respuesta !== "s" && respuesta !== "si") {
      continuar = false;
      alert("Programa terminado.");
    }
  }
}

function ejercicio34() {
  //34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.
  for (let i = 1; i <= 9; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("");
  }
}

function ejercicio35() {
  //35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
  let mayor = null;
  let menor = null;
  for (let i = 1; i <= 20; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i} de 20:`));
    if (isNaN(num)) {
      alert("Por favor, ingresa un número válido");
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
  alert(`El número mayor es: ${mayor}\nEl número menor es: ${menor}`);
}

function ejercicio36() {
  //36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
  let n = parseInt(
    prompt("¿Cuántos términos de la serie Fibonacci deseas ver?")
  );
  if (isNaN(n) || n <= 0) {
    alert("Por favor, ingresa un número entero positivo.");
    return;
  }
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  alert(
    `Los primeros ${n} términos de la serie Fibonacci son:\n${fib
      .slice(0, n)
      .join(", ")}`
  );
}

function ejercicio37() {
  //37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
  let a = parseInt(prompt("Ingresa el primer número:"));
  let b = parseInt(prompt("Ingresa el segundo número:"));
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("Por favor, ingresa dos números enteros positivos.");
    return;
  }
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  alert(`El M.C.D. de los números ingresados es: ${a}`);
}

function ejercicio38() {
  //38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
  let numero = parseInt(prompt("Ingresa un número entero positivo:"));
  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingresa un número válido mayor que 0.");
    return;
  }
  let suma = 0;
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) {
      suma += i;
    }
  }
  if (suma === numero) {
    alert(`${numero} es un número perfecto.`);
  } else {
    alert(`${numero} no es un número perfecto.`);
  }
}
