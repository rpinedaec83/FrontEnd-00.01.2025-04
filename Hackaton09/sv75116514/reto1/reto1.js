//descomentar cada método y revisarlo en la consola

//CALLBACK - METODO1


function buscando() {
    console.log("Buscando habitación disponible");
  }
  
  function habitacionDisponible(callback, tiempo) {
    setTimeout(() => {
      callback();
    }, tiempo);
  }
  
  function reservaHabitacion(callback) {
    setTimeout(() => {
      console.log("Realizando reserva");
      callback();
    }, 1000); // Ejemplo: 1 segundo después de confirmar habitación
  }
  
  // INICIO DEL PROCESO
  buscando();
  
  habitacionDisponible(() => {
    console.log("...");
  }, 2000);
  
  habitacionDisponible(() => {
    console.log("Habitación disponible");
  
    // Luego de mostrar que está disponible, hacemos la reserva
    reservaHabitacion(() => {
      console.log("Reserva confirmada");
    });
  
  }, 4000);

  

//PROMESAS - METODO2
//   function buscando(){
//     console.log("Buscando habitación disponible");
//   }

//   function habitacionDisponible(tiempo){
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//             resolve();
//         },tiempo);
//     });
//   }

//   function reservaHabitacion() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Realizando reserva");
//         resolve();
//       }, 1000);
//     });
//   }

//   buscando();

//   habitacionDisponible(2000)
//   .then(()=>{
//     console.log("...");
//     return habitacionDisponible(2000);
//   })
//   .then(()=>{
//     console.log("Habitación disponible");
//     return reservaHabitacion();
//   })
//   .then(()=>{
//     console.log("...")
//     return (3000);
//   })
//   .then(()=>{
//     console.log("Reserva confirmada");
//   });



//asyn/await - METODO3
// function buscando() {
//     console.log("Buscando habitación disponible");
//   }
  
//   function habitacionDisponible(tiempo) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, tiempo);
//     });
//   }
  
//   function reservaHabitacion() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Realizando reserva");
//         resolve();
//       }, 1000);
//     });
//   }
  
//   async function iniciarProcesoReserva() {
//     buscando();
  
//     await habitacionDisponible(2000);
//     console.log("...");
  
//     await habitacionDisponible(2000);
//     console.log("Habitación disponible");
  
//     await reservaHabitacion();
//     console.log("Reserva confirmada");
//   }
// iniciarProcesoReserva();
  