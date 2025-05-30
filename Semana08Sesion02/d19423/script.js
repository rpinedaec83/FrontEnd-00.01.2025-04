class Electrodomestico {
    constructor(serie, marca, color, modelo, voltaje = 220, imagen) {
        this.serie = serie,
            this.marca = marca,
            this.color = color,
            this.modelo = modelo,
            this.voltaje = voltaje,
            this.imagen = imagen
    }
    encender() {
        if (this.voltaje !== 220) {
            console.log("Verifica tu voltaje antes de encenderlo")
        }
        return `El Electrodomestico ${this.modelo} se esta  encendiendo`
    }
    apagar() {
        return `El Electrodomestico ${this.modelo} se esta apagando`
    }
}


class LineaMarron extends Electrodomestico {
    constructor(serie, marca, color, modelo, voltaje = 220, imagen, audio) {
        super(serie, marca, color, modelo, voltaje, imagen);
        this.audio = audio
    }
    cambiarVolumen(nivel) {
        return `El nivel de el dispositivo ${this.audio} es ${nivel}`
    }
}

class Televisiones extends LineaMarron {
    constructor(serie, marca, color, modelo, voltaje = 220, imagen, audio, tamañoPantalla, entradas, conectividad, so) {
        super(serie, marca, color, modelo, voltaje = 220, imagen, audio)
        this.tamañoPantalla = tamañoPantalla,
            this.entradas = entradas,
            this.conectividad = conectividad,
            this.so = so
    }
    cambiarEntrada(entrada) {
        return `Se ha cambiado la entrada del dispositivo a ${entrada}`
    }
    navegar(url) {
        //validar conectividad
    }
    vincular(cuenta) {
        //validar
    }
    cambiarCanal(canal) {
        //validar
    }
}

class Persona {
    constructor(nombre, apellido, numeroIdentificacion, sexo) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.numeroIdentificacion = numeroIdentificacion,
            this.sexo = sexo
    }
    comer(plato) {
        return `${this.nombre} ${this.apellido}  esta comiendo ${plato}`
    }
}

let tv1 = new Televisiones("0001", "JVC", "Negro", "EcoTV 1 Plus", 220, "LG.jpg", "dolbyAtmos", 55, ["HDMI1", "HDMI2", "CATV"], [{ wifi: "192.168.1.20" }, { lan: "192.168.1.21" }, { BT: "BTTVECO" }], "GoogleTV");
let tv2 = new Televisiones("0002", "Samsung", "Gris", "Crystal", 110, "SG.jpg", "dolbyAtmos2.0", 50, ["HDMI1", "HDMI2", "CATV"], [{ wifi: "192.168.1.22" }, { BT: "BTTVECO" }], "Tizen");

console.log(tv1.encender())
console.log(tv1)
console.log(tv2)

let arrTV = [];
arrTV.push(tv1)
arrTV.push(tv2)

console.log(arrTV)

$(document).ready(function () {

    let strHtml = "";
    arrTV.forEach(e => {
        console.log(e)
        let strItems = ``;
        for (const [key, value] of Object.entries(e)) {
            console.log(key, value);
            strItems+=`
            <li>
                                <strong>${key}</strong>  ${value}
                            </li>
            `
        }
        strHtml += `
        <div class="col-md-4">
                <div class="card mb-4">
                    <img class="card-img-top" src="img/${e.imagen}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${e.modelo}</h5>
                        <p class="card-text">
                        <ul>
                            ${strItems}
                        </ul>
                        </p>
                        <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-dark btn-sm">Go somewhere</a>
                    </div>
                </div>
            </div>
        `
    })
    console.log(strHtml)

    $("#products").html(strHtml)
});