console.log("Inicio de la aplicacion");

// let strObjJSON =`

// {
//   "nombre" : "Roberto",
//   "apellido" : "Pineda",
//   "edad" : 41,
//   "peso": 75.85
// }


// `;

// let objPersona = 
// {
//   nombre: "David",
//   apellido: "Lopez",
//   edad: 35,
//   peso: 69.90  
// };

// console.log(JSON.stringify(objPersona));

// console.log(JSON.parse(strObjJSON))

// let objPerseado = JSON.parse(strObjJSON);

// console.log(objPerseado.edad);


// localStorage.setItem("persona", "Roberto");

// $("#nombre").text(localStorage.getItem("persona"));

// localStorage.removeItem("persona");


//  sessionStorage.setItem("idCliente", 123456789)

// console.log(sessionStorage.getItem("idCliente"))

// localStorage.setItem("usuario", JSON.stringify(objPersona))


class Gundam {
  constructor(nombre,descripcion,imagen, escala, isCustom=false, custom= "" ){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.escala = escala;
    this.isCustom = isCustom;
    this.custom = custom;
  }
  toJSON(){
    return JSON.stringify(this);
  }
}