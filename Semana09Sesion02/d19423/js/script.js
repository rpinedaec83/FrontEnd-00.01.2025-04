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
      incluirPasajero().then(data=>{
        console.log("Recien llega la dara de pasajero");
        objResevacion.asignarAvionIda(new Aviones("JA7701","Airbus 320 Neo",194, 97));
        objResevacion.asignarAvionVuelta(new Aviones("JA7702", "Airbus 318", 134, 67));
        objResevacion.avionIda.agregarPasajero(data);
        objResevacion.avionVuelta.agregarPasajero(data);
        dibujaReserva(objResevacion);
      })
    }

  }

  async function incluirPasajero() {
    console.log("Inicio de incluir pasajero");
    const {value: formValues} = await Swal.fire({
      title: "Ingresa tus datos personales",
      icon: "info",
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      html: `
      <div class="form-group">
        <input type="text" id="nombres" placeholder="Escribe tus nombres" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="apellidos" placeholder="Escribe tus apellidos" class="form-control input-md">
    </div>
    <div class="form-group">
        <input type="text" id="documento" placeholder="Escribe tu documento" class="form-control input-md">
    </div>
      `,
      preConfirm:()=>{
        return {
          nombres: $("#nombres").val(),
          apellidos: $("#apellidos").val(),
          documento: $("#documento").val()
        }
      }
    });
    console.log(formValues);
    if(formValues){
      let pasajero = new Pasajero(formValues.nombres, formValues.apellidos, formValues.documento)
      return pasajero;
    }

  }

  function dibujaReserva(reservacion){
    console.log(reservacion);
    
    $("#idanombre").val(reservacion.avionIda.arrPasajeros[0].nombres);
    $("#idaapellidos").val(reservacion.avionIda.arrPasajeros[0].apellidos);
    $("#idafecha").val(reservacion.fechaIda);
    $("#idaVuelo").val(reservacion.avionIda.matricula);
    $("#idaOrigen").val(reservacion.origen);

    $("#retnombre").val(reservacion.avionVuelta.arrPasajeros[0].nombres);
    $("#retapellidos").val(reservacion.avionVuelta.arrPasajeros[0].apellidos);
    $("#retfecha").val(reservacion.fechaVuelta);
    $("#retDestino").val(reservacion.destino);
    $("#retVuelo").val(reservacion.avionVuelta.matricula);
    
    $(".reservacion").css('display', 'inline');
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
    this.arrPasajeros.push(pasajero);
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