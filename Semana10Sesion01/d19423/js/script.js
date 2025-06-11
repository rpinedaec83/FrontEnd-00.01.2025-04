console.log("Inicio de la aplicacion");

let strObjJSON =`

{
  "nombre" : "Roberto",
  "apellido" : "Pineda",
  "edad" : 41,
  "peso": 75.85
}


`;

let objPersona = 
{
  nombre: "David",
  apellido: "Lopez",
  edad: 35,
  peso: 69.90  
};

console.log(JSON.stringify(objPersona));

console.log(JSON.parse(strObjJSON))

let objPerseado = JSON.parse(strObjJSON);

console.log(objPerseado.edad)