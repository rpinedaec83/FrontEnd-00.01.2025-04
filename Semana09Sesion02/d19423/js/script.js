$(document).ready(function(){

  console.log("Is Ready")

});

const Reserva = function(){
  let empresa = "";
  let ciudad = "";


  function configurar(){
    console.log("Inicio de la configuracion");
    let pEmpresa = document.getElementById("pEmpresa");
    pEmpresa.innerText = empresa;

    $("#pCiudad").text(ciudad);
    // $(".clsH1").text("Desde el class");

  // let elementos =   document.getElementsByClassName("clsH1");
  // console.log(elementos);


  // for (let index = 0; index < elementos.length; index++) {
  //   const element = elementos[index];
  //   element.innerText = "Modificado de la manera tradicional"
  // }
  }

  function eventos(){
    // document.getElementById("btnReservar").addEventListener("click",(e)=>{
    //   e.preventDefault();
    //   console.log("Hizo click")
    // })
    // $("#btnReservar").click((e)=>{
    //   e.preventDefault();
    //   console.log("Hizo click")
    // })
    $("#btnReservar").on("click", reservar);

  }

  async function reservar(e){
    e.preventDefault();
    console.log("Inicio del proceso de reserva")
    const {value: formValues} = await Swal.fire({
      title: "Ingresa tus datos",
      icon: "info",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      html: `
      <div class="form-group">
        <input type="text" id="origen" placeholder="Escribe el Origen" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="destino" placeholder="Escribe el Destino" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="fechaIda" placeholder="Escribe la fecha de ida" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="fechaVuelta" placeholder="Escribe la fecha de vuelta" class="form-control input-md">
    </div>
      `,
      preConfirm:()=>{
        return {
          origen: $("#origen").val(),
          destino: $("#destino").val(),
          fechaIda: $("#fechaIda").val(),
          fechaVuelta: $("#fechaVuelta").val()
        }
      }
    });
    console.log(formValues);
    if(formValues){
      let objResevacion = new Reservacion(formValues.origen, formValues.destino,formValues.fechaIda,formValues.fechaVuelta);
      console.log("Inicio de incluir pasajero");
    }

  }

  return {
    init: function(parametros){
      empresa = parametros.empresa;
      ciudad = parametros.ciudad;
      configurar();
      eventos();
      console.log(parametros)
    }
  }


}();

class Aviones {
  constructor(matricula, modelo, nroAsientos,capacidadMinima){
    this.matricula = matricula;
    this.modelo = modelo;
    this.nroAsientos = nroAsientos;
    this.capacidadMinima = capacidadMinima;

    this.arrPasajeros = [];
    this.habilitado = false;
    this.reservado = 0;
  }

  agregarPasajero(pasajero){
    if(this.reservado >= this.capacidadMinima){
      this.habilitado = true;
    }
    this.agregarPasajero.push(pasajero);
    this.reservado++;
  }
}

class Pasajero {
  constructor(nombres, apellidos, documento){
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.documento = documento;
  }
}

class Reservacion {
  constructor(origen, destino, fechaIda, fechaVuelta){
    this.origen = origen;
    this.destino = destino;
    this.fechaIda = fechaIda;
    this.fechaVuelta = fechaVuelta;

    this.avionIda = null;
    this.avionVuelta = null;
  }
  asignarAvionIda(avion){
    this.avionIda = avion;
  }
  asignarAvionVuelta(avion){
    this.avionVuelta = avion;
  }
}