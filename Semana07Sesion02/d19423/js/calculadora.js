const calculadora = () => {
    let primerNumero = parseInt(prompt("Digita el Primer Numero"));
    let segundoNumero = parseInt(prompt("Digita el Segundo Numero"));
    let operacion = parseInt(prompt(`
    Digita la operacion a ejecutar:
        1 ---> Sumar
        2 ---> Restar
        3 ---> Multiplicar
        4 ---> Dividir
    `));
    if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(operacion)) {
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
    }
    else {
        alert("Parametros incorrectos")
    };
    console.log(primerNumero);

}


document.getElementById("calculadora").addEventListener("click", calculadora);