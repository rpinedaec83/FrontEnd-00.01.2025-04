// Valida los datos ingresados por el usuario (nombre, habitaciones, días)
function validarDatos(nombre, habitaciones, dias) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Verifica que todos los campos sean válidos
      if (!nombre || isNaN(habitaciones) || isNaN(dias) || habitaciones <= 0 || dias <= 0) {
        reject("Por favor, completa todos los campos correctamente.");
      } else {
        resolve({ nombre, habitaciones, dias });
      }
    }, 500); // Simula un pequeño retardo
  });
}

// Calcula el total de la reserva multiplicando habitaciones x días x 50
function calcularTotal(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = datos.habitaciones * datos.dias * 50;
      resolve({ ...datos, total }); // Devuelve el objeto original más el total
    }, 500);
  });
}

// Muestra la reserva como una tarjeta dentro del historial de reservas
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
      historial.appendChild(div); // Agrega la tarjeta al historial
      resolve();
    }, 500);
  });
}

// Función principal que gestiona todo el flujo de la reserva
async function realizarReservaPromesa() {
  // Obtiene referencias a los elementos del formulario e interfaz
  const nombreInput = document.getElementById("nombre");
  const habitacionesInput = document.getElementById("cantidadHabitaciones");
  const diasInput = document.getElementById("numeroDias");
  const btnReservar = document.getElementById("btnReservar");
  const loader = document.getElementById("loader");
  const errorDiv = document.getElementById("error");

  // Limpia errores anteriores y muestra el loader
  errorDiv.classList.add("d-none");
  loader.style.display = "block";
  btnReservar.disabled = true;

  // Obtiene y prepara los valores ingresados
  const nombre = nombreInput.value.trim();
  const habitaciones = parseInt(habitacionesInput.value);
  const dias = parseInt(diasInput.value);

  try {
    // Valida los datos, calcula el total y muestra la reserva
    const datosValidados = await validarDatos(nombre, habitaciones, dias);
    const reservaCompleta = await calcularTotal(datosValidados);
    await mostrarReserva(reservaCompleta);

    // Limpia los campos del formulario después de guardar la reserva
    nombreInput.value = "";
    habitacionesInput.value = "";
    diasInput.value = "";

  } catch (error) {
    // Si hay error, lo muestra en pantalla
    errorDiv.textContent = error;
    errorDiv.classList.remove("d-none");
  } finally {
    // Oculta el loader y vuelve a habilitar el botón
    loader.style.display = "none";
    btnReservar.disabled = false;
  }
}

// Evento que se ejecuta al hacer clic en el botón "Reservar"
document.getElementById("btnReservar").addEventListener("click", realizarReservaPromesa);
