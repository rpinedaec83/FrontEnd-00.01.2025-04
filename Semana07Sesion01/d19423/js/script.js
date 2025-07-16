console.log("Inicio");

document.getElementById("btnArchivo").addEventListener("click", function () {
    alert("Hola desde el archivo externo");
});

var nombre = "Roberto David";
var apellido = 'Pineda Lopez';

var nombre = "David";
var segundoApellido = `Hola 
${nombre} ${apellido}`;

let edad = 41;
{
    let edad = 20;
}

const PI = 3.1416;
// PI = 3.14; // Esto generará un error porque PI es una constante

let isCasado = false;
let isSoltero = true;


let arrHobies = ["Musica", "Aeromodelismo", "Programacion"];

console.log(arrHobies[2]);


let arrNumeros = [1, 2, 3, 4, 5];

let arrDatos = [1, "Roberto", true, 3.14, arrHobies];

console.log(arrDatos);
console.log(arrDatos[4][1]); // Accediendo a un elemento dentro de un arreglo anidado


let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 41,
    isCasado: false,
    arrHobies: ["Musica", "Aeromodelismo", "Programacion"],
    padres:{
        padre: "Rene",
        madre: "Miriam"
    }
};

console.log(objPersona.nombre);
console.log(objPersona["apellido"]);

console.log(objPersona.arrHobies[1]);
console.log(objPersona.padres.padre);


let variableNoUsada = "Hola Mundo"; // Variable no utilizada

//PI = 3.14; // Esto generará un error porque PI es una constante

console.log(segundoApellido);

console.log("Hola " + nombre);


let edad1 = 18;
let edad2 = "41";

//if

if (edad1 == edad2) {
    console.log("Son iguales");
}

if (edad1 === edad2) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}

if (edad1 != edad2 && edad1 > 18) {
    console.log("Edad 1 es diferente de Edad 2 y mayor a 18");
}

console.log(typeof edad1);


// Switch
let dia = 1;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Fin de semana");
}


console.log(arrDatos[0]);
console.log(arrDatos[1]);
console.log(arrDatos[2]);
console.log(arrDatos[3]);
console.log(arrDatos[4]);

for (let i = 0; i < arrDatos.length; i++) {
    console.log(arrDatos[i]);
}

arrDatos.forEach(element => {console.log(element);});

let bandera = true;


while (bandera) {
    alert("Hola adivina el numero que estoy pensando");
    let numero = prompt("Ingresa un numero entre 1 y 10");
    if (numero == 5) {
        alert("Ganaste");
        bandera = false;
    } else {
        alert("Perdiste");
    }

}

// do {
    
// } while (condition);

console.log("Fin");