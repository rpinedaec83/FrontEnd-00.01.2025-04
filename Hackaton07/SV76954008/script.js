
        function ejercicio1() {
            const numero = parseInt(prompt("Ingrese un número:"));
            const resultado = numero >= 100 && numero <= 999 ? "Tiene tres dígitos" : "No tiene tres dígitos";
            mostrarResultado(`<p>Número ingresado: ${numero}</p><p>${resultado}</p>`);
        }

        function ejercicio2() {
            const numero = parseInt(prompt("Ingrese un número entero:"));
            const resultado = numero < 0 ? "Es negativo" : "No es negativo";
            mostrarResultado(`<p>Número ingresado: ${numero}</p><p>${resultado}</p>`);
        }

        function ejercicio3() {
            const numero = parseInt(prompt("Ingrese un número:"));
            const resultado = numero % 10 === 4 ? "Termina en 4" : "No termina en 4";
            mostrarResultado(`<p>Número ingresado: ${numero}</p><p>${resultado}</p>`);
        }

        function ejercicio4() {
            const num1 = parseInt(prompt("Ingrese el primer número:"));
            const num2 = parseInt(prompt("Ingrese el segundo número:"));
            const num3 = parseInt(prompt("Ingrese el tercer número:"));
            
            const numeros = [num1, num2, num3];
            numeros.sort((a, b) => a - b);
            
            mostrarResultado(`<p>Números ordenados: ${numeros.join(", ")}</p>`);
        }

        function ejercicio5() {
            const cantidad = parseInt(prompt("Ingrese la cantidad de zapatos a comprar:"));
            const precioUnitario = 80;
            let total = cantidad * precioUnitario;
            let descuento = 0;
            
            if (cantidad > 30) {
                descuento = total * 0.4;
            } else if (cantidad > 20) {
                descuento = total * 0.2;
            } else if (cantidad > 10) {
                descuento = total * 0.1;
            }
            
            const totalPagar = total - descuento;
            
            mostrarResultado(`
                <p>Cantidad de zapatos: ${cantidad}</p>
                <p>Precio unitario: $${precioUnitario}</p>
                <p>Total sin descuento: $${total}</p>
                <p>Descuento aplicado: $${descuento}</p>
                <p>Total a pagar: $${totalPagar}</p>
            `);
        }

        function ejercicio6() {
            const horas = parseInt(prompt("Ingrese las horas trabajadas esta semana:"));
            const pagoNormal = 20;
            const pagoExtra = 25;
            let sueldo = 0;
            
            if (horas <= 40) {
                sueldo = horas * pagoNormal;
            } else {
                sueldo = (40 * pagoNormal) + ((horas - 40) * pagoExtra);
            }
            
            mostrarResultado(`
                <p>Horas trabajadas: ${horas}</p>
                <p>Sueldo semanal: $${sueldo}</p>
            `);
        }

        function ejercicio7() {
            const tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();
            const montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));
            let descuento = 0;
            
            switch(tipoMembresia) {
                case 'A': descuento = 0.1; break;
                case 'B': descuento = 0.15; break;
                case 'C': descuento = 0.2; break;
                default: descuento = 0;
            }
            
            const totalPagar = montoCompra * (1 - descuento);
            
            mostrarResultado(`
                <p>Tipo de membresía: ${tipoMembresia}</p>
                <p>Monto de compra: $${montoCompra}</p>
                <p>Descuento aplicado: ${descuento * 100}%</p>
                <p>Total a pagar: $${totalPagar.toFixed(2)}</p>
            `);
        }

        function ejercicio8() {
            const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
            const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
            const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
            
            const promedio = (nota1 + nota2 + nota3) / 3;
            const resultado = promedio >= 3.0 ? "Aprobó" : "Reprobó";
            
            mostrarResultado(`
                <p>Notas ingresadas: ${nota1}, ${nota2}, ${nota3}</p>
                <p>Promedio: ${promedio.toFixed(2)}</p>
                <p>Resultado: ${resultado}</p>
            `);
        }

        function ejercicio9() {
            const salario = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
            const aumento = salario > 2000 ? 0.05 : 0.1;
            const nuevoSalario = salario * (1 + aumento);
            
            mostrarResultado(`
                <p>Salario actual: $${salario}</p>
                <p>Aumento aplicado: ${aumento * 100}%</p>
                <p>Nuevo salario: $${nuevoSalario.toFixed(2)}</p>
            `);
        }

        function ejercicio10() {
            const numero = parseInt(prompt("Ingrese un número:"));
            const resultado = numero % 2 === 0 ? "Par" : "Impar";
            mostrarResultado(`<p>Número ingresado: ${numero}</p><p>${resultado}</p>`);
        }

        function ejercicio11() {
            const num1 = parseFloat(prompt("Ingrese el primer número:"));
            const num2 = parseFloat(prompt("Ingrese el segundo número:"));
            const num3 = parseFloat(prompt("Ingrese el tercer número:"));
            
            const mayor = Math.max(num1, num2, num3);
            
            mostrarResultado(`
                <p>Números ingresados: ${num1}, ${num2}, ${num3}</p>
                <p>El mayor es: ${mayor}</p>
            `);
        }

        function ejercicio12() {
            const num1 = parseFloat(prompt("Ingrese el primer número:"));
            const num2 = parseFloat(prompt("Ingrese el segundo número:"));
            
            const mayor = num1 > num2 ? num1 : num2;
            
            mostrarResultado(`
                <p>Números ingresados: ${num1}, ${num2}</p>
                <p>El mayor es: ${mayor}</p>
            `);
        }

        function ejercicio13() {
            const letra = prompt("Ingrese una letra:").toLowerCase();
            const esVocal = ['a', 'e', 'i', 'o', 'u'].includes(letra);
            
            mostrarResultado(`
                <p>Letra ingresada: ${letra}</p>
                <p>${esVocal ? "Es una vocal" : "No es una vocal"}</p>
            `);
        }

        function ejercicio14() {
            const numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
            let esPrimo = true;
            
            if (numero < 2) {
                esPrimo = false;
            } else {
                for (let i = 2; i < numero; i++) {
                    if (numero % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }
            }
            
            mostrarResultado(`
                <p>Número ingresado: ${numero}</p>
                <p>${esPrimo ? "Es primo" : "No es primo"}</p>
            `);
        }

        function ejercicio15() {
            const centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
            const libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
            
            const pulgadas = centimetros / 2.54;
            const kilogramos = libras * 0.453592;
            
            mostrarResultado(`
                <p>${centimetros} cm = ${pulgadas.toFixed(2)} pulgadas</p>
                <p>${libras} lb = ${kilogramos.toFixed(2)} kg</p>
            `);
        }

        function ejercicio16() {
            const numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
            let dia;
            
            switch(numero) {
                case 1: dia = "Lunes"; break;
                case 2: dia = "Martes"; break;
                case 3: dia = "Miércoles"; break;
                case 4: dia = "Jueves"; break;
                case 5: dia = "Viernes"; break;
                case 6: dia = "Sábado"; break;
                case 7: dia = "Domingo"; break;
                default: dia = "Número inválido";
            }
            
            mostrarResultado(`<p>Día correspondiente: ${dia}</p>`);
        }

        function ejercicio17() {
            let hora = parseInt(prompt("Ingrese la hora (0-23):"));
            let minuto = parseInt(prompt("Ingrese los minutos (0-59):"));
            let segundo = parseInt(prompt("Ingrese los segundos (0-59):"));
            
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
            
            mostrarResultado(`
                <p>Hora ingresada: ${hora}:${minuto}:${segundo - 1}</p>
                <p>Un segundo después: ${hora}:${minuto}:${segundo}</p>
            `);
        }

        function ejercicio18() {
            const cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender:"));
            let precioUnitario;
            
            if (cantidad >= 500) precioUnitario = 6;
            else if (cantidad >= 100) precioUnitario = 7;
            else if (cantidad >= 10) precioUnitario = 8;
            else precioUnitario = 10;
            
            const totalVenta = cantidad * precioUnitario;
            const gananciaVendedor = totalVenta * 0.0825;
            
            mostrarResultado(`
                <p>Cantidad de CDs: ${cantidad}</p>
                <p>Precio unitario: $${precioUnitario}</p>
                <p>Total venta: $${totalVenta}</p>
                <p>Ganancia vendedor: $${gananciaVendedor.toFixed(2)}</p>
            `);
        }

        function ejercicio19() {
            const idEmpleado = parseInt(prompt("Ingrese el ID del empleado (1-4):"));
            const diasTrabajados = parseInt(prompt("Ingrese los días trabajados (1-6):"));
            
            let salarioDiario;
            
            switch(idEmpleado) {
                case 1: salarioDiario = 56; break; 
                case 2: salarioDiario = 64; break; 
                case 3: salarioDiario = 80; break; 
                case 4: salarioDiario = 48; break; 
                default: salarioDiario = 0;
            }
            
            const totalPagar = salarioDiario * diasTrabajados;
            
            mostrarResultado(`
                <p>ID Empleado: ${idEmpleado}</p>
                <p>Días trabajados: ${diasTrabajados}</p>
                <p>Salario diario: $${salarioDiario}</p>
                <p>Total a pagar: $${totalPagar}</p>
            `);
        }

        function ejercicio20() {
            const num1 = parseInt(prompt("Ingrese el primer número:"));
            const num2 = parseInt(prompt("Ingrese el segundo número:"));
            const num3 = parseInt(prompt("Ingrese el tercer número:"));
            const num4 = parseInt(prompt("Ingrese el cuarto número:"));
            
            // 1. Cuántos números son pares
            const numeros = [num1, num2, num3, num4];
            const pares = numeros.filter(n => n % 2 === 0).length;
            
            // 2. Mayor de todos
            const mayor = Math.max(...numeros);
            
            // 3. Si el tercero es par, calcular el cuadrado del segundo
            let cuadradoSegundo = "";
            if (num3 % 2 === 0) {
                cuadradoSegundo = `Cuadrado del segundo: ${num2 * num2}`;
            }
            
            // 4. Si el primero es menor que el cuarto, calcular la media
            let media = "";
            if (num1 < num4) {
                media = `Media de los 4 números: ${(num1 + num2 + num3 + num4) / 4}`;
            }
            
            // 5. Si el segundo > tercero, verificar si tercero está entre 50 y 700
            let suma = "";
            if (num2 > num3 && num3 >= 50 && num3 <= 700) {
                suma = `Suma de los 4 números: ${num1 + num2 + num3 + num4}`;
            }
            
            mostrarResultado(`
                <p>Números ingresados: ${num1}, ${num2}, ${num3}, ${num4}</p>
                <p>1. Cantidad de números pares: ${pares}</p>
                <p>2. Mayor de todos: ${mayor}</p>
                <p>3. ${cuadradoSegundo || "El tercero no es par"}</p>
                <p>4. ${media || "El primero no es menor que el cuarto"}</p>
                <p>5. ${suma || "No se cumplieron las condiciones para la suma"}</p>
            `);
        }

        function ejercicio21() {
            const numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
            let factorial = 1;
            
            for (let i = 2; i <= numero; i++) {
                factorial *= i;
            }
            
            mostrarResultado(`<p>Factorial de ${numero}: ${factorial}</p>`);
        }

        function ejercicio22() {
            const n = parseInt(prompt("Ingrese un número para calcular la suma de los primeros n números:"));
            let suma = 0;
            
            for (let i = 1; i <= n; i++) {
                suma += i;
            }
            
            mostrarResultado(`<p>Suma de los primeros ${n} números: ${suma}</p>`);
        }

        function ejercicio23() {
            const n = parseInt(prompt("Ingrese un número para calcular la suma de los impares menores o iguales a n:"));
            let suma = 0;
            
            for (let i = 1; i <= n; i += 2) {
                suma += i;
            }
            
            mostrarResultado(`<p>Suma de los números impares ≤ ${n}: ${suma}</p>`);
        }

        function ejercicio24() {
            let suma = 0;
            
            for (let i = 2; i <= 1000; i += 2) {
                suma += i;
            }
            
            mostrarResultado(`<p>Suma de todos los números pares hasta 1000: ${suma}</p>`);
        }

        function ejercicio25() {
            const numero = parseInt(prompt("Ingrese un número para calcular su factorial (método alternativo):"));
            let factorial = 1;
            let i = numero;
            
            while (i > 1) {
                factorial *= i;
                i--;
            }
            
            mostrarResultado(`<p>Factorial de ${numero}: ${factorial}</p>`);
        }

        function ejercicio26() {
            const dividendo = parseInt(prompt("Ingrese el dividendo:"));
            const divisor = parseInt(prompt("Ingrese el divisor:"));
            
            if (divisor === 0) {
                mostrarResultado("<p>Error: No se puede dividir por cero</p>");
                return;
            }
            
            let cociente = 0;
            let resto = dividendo;
            
            while (resto >= divisor) {
                resto -= divisor;
                cociente++;
            }
            
            mostrarResultado(`
                <p>División de ${dividendo} / ${divisor}</p>
                <p>Cociente: ${cociente}</p>
                <p>Resto: ${resto}</p>
            `);
        }

        function ejercicio27() {
            let suma = 0;
            let contador = 0;
            let numero;
            
            do {
                numero = parseFloat(prompt("Ingrese un número positivo (negativo para terminar):"));
                
                if (numero >= 0) {
                    suma += numero;
                    contador++;
                }
            } while (numero >= 0);
            
            const media = contador > 0 ? suma / contador : 0;
            
            mostrarResultado(`
                <p>Cantidad de números ingresados: ${contador}</p>
                <p>Suma total: ${suma}</p>
                <p>Media: ${media.toFixed(2)}</p>
            `);
        }

        function ejercicio28() {
            let suma = 0;
            let i = 1;
            
            do {
                suma += i;
                i++;
            } while (i <= 100);
            
            mostrarResultado(`<p>Suma de los primeros 100 números (con ciclo repetir): ${suma}</p>`);
        }

        function ejercicio29() {
            let suma = 0;
            let i = 1;
            
            while (i <= 100) {
                suma += i;
                i++;
            }
            
            mostrarResultado(`<p>Suma de los primeros 100 números (con ciclo mientras): ${suma}</p>`);
        }

        function ejercicio30() {
            let suma = 0;
            
            for (let i = 1; i <= 100; i++) {
                suma += i;
            }
            
            mostrarResultado(`<p>Suma de los primeros 100 números (con ciclo para): ${suma}</p>`);
        }

        function ejercicio31() {
            let sumaPares = 0;
            let sumaImpares = 0;
            let contadorPares = 0;
            let contadorImpares = 0;
            
            for (let i = 1; i <= 10; i++) {
                const numero = parseFloat(prompt(`Ingrese el número ${i} de 10:`));
                
                if (numero % 2 === 0) {
                    sumaPares += numero;
                    contadorPares++;
                } else {
                    sumaImpares += numero;
                    contadorImpares++;
                }
            }
            
            const mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
            const mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
            
            mostrarResultado(`
                <p>Números pares ingresados: ${contadorPares}</p>
                <p>Media de números pares: ${mediaPares.toFixed(2)}</p>
                <p>Números impares ingresados: ${contadorImpares}</p>
                <p>Media de números impares: ${mediaImpares.toFixed(2)}</p>
            `);
        }

        function ejercicio32() {
         
            const poblaciones = [
                { provincia: "Provincia A", ciudad: "Ciudad A1", poblacion: 50000 },
                { provincia: "Provincia A", ciudad: "Ciudad A2", poblacion: 75000 },
                { provincia: "Provincia A", ciudad: "Ciudad A3", poblacion: 60000 },
                
                { provincia: "Provincia B", ciudad: "Ciudad B1", poblacion: 120000 },
                { provincia: "Provincia B", ciudad: "Ciudad B2", poblacion: 80000 },
                { provincia: "Provincia B", ciudad: "Ciudad B3", poblacion: 95000 },
                { provincia: "Provincia B", ciudad: "Ciudad B4", poblacion: 110000 },
                
                { provincia: "Provincia C", ciudad: "Ciudad C1", poblacion: 150000 },
                { provincia: "Provincia C", ciudad: "Ciudad C2", poblacion: 180000 },
                { provincia: "Provincia C", ciudad: "Ciudad C3", poblacion: 130000 },
                { provincia: "Provincia C", ciudad: "Ciudad C4", poblacion: 160000 }
            ];
            
            let ciudadMayor = poblaciones[0];
            
            for (const ciudad of poblaciones) {
                if (ciudad.poblacion > ciudadMayor.poblacion) {
                    ciudadMayor = ciudad;
                }
            }
            
            mostrarResultado(`
                <p>La ciudad con mayor población es:</p>
                <p>${ciudadMayor.ciudad} (${ciudadMayor.provincia})</p>
                <p>Población: ${ciudadMayor.poblacion} habitantes</p>
            `);
        }

        function ejercicio33() {
            let continuar;
            
            do {
                const respuesta = prompt("¿Desea continuar con el programa? (s/n)").toLowerCase();
                continuar = respuesta === 's';
                
                if (respuesta !== 's' && respuesta !== 'n') {
                    alert("Por favor ingrese 's' para sí o 'n' para no");
                }
            } while (continuar);
            
            mostrarResultado("<p>Programa terminado por el usuario.</p>");
        }

        function ejercicio34() {
            let tablas = "";
            
            for (let i = 1; i <= 9; i++) {
                tablas += `<h3>Tabla del ${i}</h3><ul>`;
                
                for (let j = 1; j <= 10; j++) {
                    tablas += `<li>${i} x ${j} = ${i * j}</li>`;
                }
                
                tablas += "</ul>";
            }
            
            mostrarResultado(tablas);
        }

        function ejercicio35() {
            let mayor = -Infinity;
            let menor = Infinity;
            
            for (let i = 1; i <= 20; i++) {
                const numero = parseFloat(prompt(`Ingrese el número ${i} de 20:`));
                
                if (numero > mayor) mayor = numero;
                if (numero < menor) menor = numero;
            }
            
            mostrarResultado(`
                <p>De los 20 números ingresados:</p>
                <p>Número mayor: ${mayor}</p>
                <p>Número menor: ${menor}</p>
            `);
        }

        function ejercicio36() {
            const n = parseInt(prompt("Ingrese cuántos términos de la serie Fibonacci desea ver:"));
            let serie = [0, 1];
            
            for (let i = 2; i < n; i++) {
                serie[i] = serie[i-1] + serie[i-2];
            }
            
            mostrarResultado(`
                <p>Serie Fibonacci (primeros ${n} términos):</p>
                <p>${serie.join(", ")}</p>
            `);
        }

        function ejercicio37() {
            const num1 = parseInt(prompt("Ingrese el primer número:"));
            const num2 = parseInt(prompt("Ingrese el segundo número:"));
            
            let a = Math.abs(num1);
            let b = Math.abs(num2);
            
            while (b !== 0) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            
            mostrarResultado(`<p>MCD de ${num1} y ${num2}: ${a}</p>`);
        }

        function ejercicio38() {
            const numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
            let sumaDivisores = 0;
            
            for (let i = 1; i < numero; i++) {
                if (numero % i === 0) {
                    sumaDivisores += i;
                }
            }
            
            const esPerfecto = sumaDivisores === numero;
            
            mostrarResultado(`
                <p>Número ingresado: ${numero}</p>
                <p>Suma de sus divisores propios: ${sumaDivisores}</p>
                <p>${esPerfecto ? "ES un número perfecto" : "NO es un número perfecto"}</p>
            `);
        }

        function ejercicio39() {
            const iteraciones = parseInt(prompt("Ingrese el número de iteraciones para aproximar Pi:"));
            let piAprox = 0;
            let signo = 1;
            
            for (let i = 0; i < iteraciones; i++) {
                const denominador = 2 * i + 1;
                piAprox += signo * (4 / denominador);
                signo *= -1;
            }
            
            mostrarResultado(`
                <p>Aproximación de Pi con ${iteraciones} iteraciones:</p>
                <p>${piAprox.toFixed(10)}</p>
                <p>Valor real de Pi: ${Math.PI.toFixed(10)}</p>
                <p>Diferencia: ${Math.abs(Math.PI - piAprox).toFixed(10)}</p>
            `);
        }

        function ejercicio40() {
            const iteraciones = parseInt(prompt("Ingrese el número de iteraciones para aproximar Pi (mínimo 1):"));
            let piAprox = 3;
            let signo = 1;
            
            for (let i = 1; i <= iteraciones; i++) {
                const denominador = (2 * i) * (2 * i + 1) * (2 * i + 2);
                piAprox += signo * (4 / denominador);
                signo *= -1;
            }
            
            mostrarResultado(`
                <p>Aproximación de Pi con ${iteraciones} iteraciones (Nilakantha  ):</p>
                <p>${piAprox.toFixed(10)}</p>
                <p>Valor real de Pi: ${Math.PI.toFixed(10)}</p>
                <p>Diferencia: ${Math.abs(Math.PI - piAprox).toFixed(10)}</p>
            `);
        }

        function mostrarResultado(contenido) {
            document.getElementById('resultado').innerHTML = `<h2>Resultado</h2>${contenido}`;
        }