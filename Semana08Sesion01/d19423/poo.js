//Proceso de venta de electrodomesticos

//Abstraccion

//Vendedor
//Comprador
//Electrodomestico

//Vendedor:
// Nombre
// Apellido
// NumeroDocumento
// FechaNacimiento
// Sexo
// Experiencia
// idVendedor
// vender
// cotizar

//personas
// Nombre
// Apellido
// NumeroDocumento
// FechaNacimiento
// Sexo


//Comprador:
// Nombre
// Apellido
// NumeroDocumento
// FechaNacimiento
// Sexo
// idCliente
//comprar

//Automovil
//marca
//placa
//modelo
//color
//tipocombustible
//numeroPuertas
//acelerar
//frenar
//encender
//apagar

//Motos
//marca
//placa
//modelo
//color
//tipoCombustible

//gato
//color
//raza
//nombre
//sexo
//especie
//ignorar
//comer
//dormir


// Abstraccion
// Electrodomesticos

//marca: JVC
//color: negro
//modelo: EcoTV1 Plus
//tamaño: 55
//pantalla: UHD



//encender
//apagar
//cambiarNivelVolumen
//reproducir audio/video
//navegarInternet



let objTV = {
    marca: "JVC",
    color: "Negro",
    modelo: "EcoTV1 Plus",
    tamaño: 55,
    pantalla: "UHD",
    encender(){
        console.log("Se encendio")
    },
    apagar(){
        console.log("Se apago")
    },
    vender(){
        return "Se vendio";
    }
};

objTV.encender();
objTV.vender();
console.log(objTV.marca)

document.getElementById("vender").addEventListener("click",e=>{
    e.preventDefault();
   alert( objTV.vender());
})


let objTV2 = {
    marca: "Samsung",
    color: "Negro",
    modelo: "Crstal",
    tamaño: 55,
    pantalla: "UHD",
    encender(){
        console.log("Se encendio")
    },
    apagar(){
        console.log("Se apago")
    },
    vender(){
        return "Se vendio";
    }
};


class Electrodomestico {
    constructor(marca, color, modelo){
        this.marca = marca,
        this.color = color,
        this.modelo = modelo
    }
    encender(){
        return `El Electrodomestico ${this.modelo} se esta  encendiendo`
    }
}

let tv1 = new Electrodomestico("JVC","Negro","MD1");
let tv2 = new Electrodomestico("Samsung", "Gris", "Crystal 1");

console.log(tv1.encender())

console.log(tv2.encender())

class Persona{
    constructor(nombre, apellido, numeroIdentificacion, sexo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.numeroIdentificacion = numeroIdentificacion,
        this.sexo = sexo
    }
    comer(plato){
        return `${this.nombre} ${this.apellido}  esta comiendo ${plato}`
    }
}

let objPersona = new Persona("Roberto", "Pineda", "001575291", "Masculino");

console.log(objPersona.comer("Seco de Pollo"))