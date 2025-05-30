const calculadora = () => {

    let bandera = true;
    while (bandera) {

        let operacion = parseInt(prompt(`
    Digita la operacion a ejecutar:
        1 ---> Sumar
        2 ---> Restar
        3 ---> Multiplicar
        4 ---> Dividir
        0 ---> SALIR
    `));

        if(operacion === 0){
            bandera = false;
            return;
        }

        let primerNumero = parseInt(prompt("Digita el Primer Numero"));
        let segundoNumero = parseInt(prompt("Digita el Segundo Numero"));
        
        //RP 22/05/2525 se agrega la validacion de division para 0
        if (segundoNumero === 0 && operacion === 4) {
            alert("El resultado es indefinido")
            return;
        }
        if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(operacion)) {

            try {
                let resultado;
                switch (operacion) {
                    case 1:
                        resultado = primerNumero + segundoNumero;
                        break;
                    case 2:
                        resultado = primerNumero - segundoNumero;
                        break;
                    case 3:
                        resultado = primerNumero * segundoNumero;
                        break;
                    default:
                        resultado = primerNumero / segundoNumero
                        break;
                };
                alert(`El resultado es ${resultado}`);
            } catch (error) {
                console.error(error);
            } finally {
                console.log("Por ultimo termina el programa")
            }

        }
        else {
            alert("Parametros incorrectos")
        };
        console.log(primerNumero);
    }
}


document.getElementById("calculadora").addEventListener("click", calculadora);