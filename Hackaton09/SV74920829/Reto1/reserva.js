// Valida que los datos ingresados sean correctos (no vacíos y mayores a 0)
function validarDatos(nombre, habitaciones, dias) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!nombre || isNaN(habitaciones) || isNaN(dias) || habitaciones <= 0 || dias <= 0) {
        reject("Error: Por favor, completa todos los campos correctamente.");
      } else {
        resolve({ nombre, habitaciones, dias });
      }
    }, 500); // Simula retardo
  });
}

// Calcula el total a pagar: habitaciones * días * 50
function calcularTotal(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = datos.habitaciones * datos.dias * 50;
      resolve({ ...datos, total }); // Retorna los datos con el total incluido
    }, 500);
  });
}

// Muestra la reserva en pantalla (dentro del historial)
function mostrarReserva(reserva) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const historial = document.getElementById("historialReservas");
      const div = document.createElement("div");
      div.className = "col-md-6";
      div.innerHTML = `
            <div class="card border-secondary">
              <div class="card-body">
                <h5 class="card-title">Reserva de ${reserva.nombre}</h5>
                <p class="card-text">
                  Habitaciones: ${reserva.habitaciones}<br />
                  Días: ${reserva.dias}<br />
                  Total a pagar: S/${reserva.total}
                </p>
              </div>
            </div>
          `;
      historial.appendChild(div); // Agrega la reserva al historial
      resolve();
    }, 500);
  });
}

// Ejecuta el proceso completo: validar, calcular y mostrar reserva
async function realizarReservaPromesa() {
  const nombre = document.getElementById("nombre").value.trim();
  const habitaciones = parseInt(document.getElementById("cantidadHabitaciones").value);
  const dias = parseInt(document.getElementById("numeroDias").value);

  try {
    const datosValidados = await validarDatos(nombre, habitaciones, dias);
    const reservaCompleta = await calcularTotal(datosValidados);
    await mostrarReserva(reservaCompleta);

    // Limpia el formulario después de reservar
    document.getElementById("nombre").value = "";
    document.getElementById("cantidadHabitaciones").value = "";
    document.getElementById("numeroDias").value = "";

  } catch (error) {
    alert(error); // Muestra mensaje si ocurre un error
  }
}

// Evento que inicia todo al hacer clic en el botón
document.getElementById("btnReservar").addEventListener("click", realizarReservaPromesa);
