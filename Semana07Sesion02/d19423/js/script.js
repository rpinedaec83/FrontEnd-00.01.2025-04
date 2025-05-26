
function saludar(){
    alert("Hola desde la funcion Saludar")
}

//saludar();

function sumar(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    return resultado;
}


let resultadoSuma = sumar(22,33);
console.log(resultadoSuma)

let strNombre = 'Roberto';
console.log(strNombre.toUpperCase());

const restar = function(primerNumero, segundoNumero){
    return primerNumero - segundoNumero;
}

console.log(restar(44,55));

const multiplicar = (primerNumero,segundoNumero=1)=>{
    return primerNumero * segundoNumero 
}

const sd = (x, y) => x * y;

console.log(multiplicar(33  ));

function sum(...args) {
  let sum = 0;
  sum = '0';
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);