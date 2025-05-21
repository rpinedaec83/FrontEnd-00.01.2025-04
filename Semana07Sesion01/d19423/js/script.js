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
PI = 3.14; // Esto generará un error porque PI es una constante

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

console.log("Fin");