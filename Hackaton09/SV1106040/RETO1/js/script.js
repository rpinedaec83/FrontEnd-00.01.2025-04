function logSalida(mensaje) {
  const salida = document.getElementById("salida");
  salida.innerHTML += `<p>${mensaje}</p>`;
}

// FUNCIONES BASE
function verificarDisponibilidad(nombre, callback) {
  setTimeout(() => {
    logSalida(`✔️ [${nombre}] Habitación disponible`);
    callback();
  }, 1000);
}

function registrarCliente(nombre, callback) {
  setTimeout(() => {
    logSalida(`✔️✔️ [${nombre}] Datos del cliente registrados`);
    callback();
  }, 1000);
}

function confirmarReserva(nombre, callback) {
  setTimeout(() => {
    logSalida(`✅✔️✔️ [${nombre}] Reserva confirmada`);
    if (callback) callback();
    guardarEnLocalStorage(nombre);
    limpiarFormulario();
  }, 1000);
}

// ----------------------------CALLBACK HELL-----------------------------
function iniciarConCallbacks() {
  limpiarSalida();
  const nombre = obtenerNombre();
  logSalida("⭐⭐⭐ Iniciando reserva con CALLBACKS ⭐⭐⭐");
  verificarDisponibilidad(nombre, () => {
    registrarCliente(nombre, () => {
      confirmarReserva(nombre);
    });
  });
}

// ----------------------------PROMESAS-----------------------------------------
function verificarDisponibilidadPromise(nombre) {
  return new Promise(resolve => {
    setTimeout(() => {
      logSalida(`✔️ [${nombre}] Habitación disponible`);
      resolve();
    }, 1000);
  });
}

function registrarClientePromise(nombre) {
  return new Promise(resolve => {
    setTimeout(() => {
      logSalida(`✔️✔️ [${nombre}] Datos del cliente registrados`);
      resolve();
    }, 1000);
  });
}

function confirmarReservaPromise(nombre) {
  return new Promise(resolve => {
    setTimeout(() => {
      logSalida(`✅✔️✔️ [${nombre}] Reserva confirmada`);
      resolve();
    }, 1000);
  });
}

function iniciarConPromesas() {
  limpiarSalida();
  const nombre = obtenerNombre();
  logSalida("⭐⭐⭐ Iniciando reserva con PROMESAS ⭐⭐⭐");
  verificarDisponibilidadPromise(nombre)
    .then(() => registrarClientePromise(nombre))
    .then(() => confirmarReservaPromise(nombre))
    .then(() => {
      guardarEnLocalStorage(nombre);
      limpiarFormulario();
    });
}

// -----------------------------ASYNC/AWAIT------------------------------------
async function iniciarConAsyncAwait() {
  limpiarSalida();
  const nombre = obtenerNombre();
  logSalida("⭐⭐⭐Iniciando reserva con ASYNC/AWAIT ⭐⭐⭐");
  await verificarDisponibilidadPromise(nombre);
  await registrarClientePromise(nombre);
  await confirmarReservaPromise(nombre);
  guardarEnLocalStorage(nombre);
  limpiarFormulario();
}

// UTILIDADES
function obtenerNombre() {
  return document.getElementById("cliente").value.trim() || "Cliente sin nombre";
}

function limpiarSalida() {
  document.getElementById("salida").innerHTML = "";
}

function limpiarFormulario() {
  document.getElementById("cliente").value = "";
}

function guardarEnLocalStorage(nombre) {
  let historial = JSON.parse(localStorage.getItem("reservas")) || [];
  historial.push({
    nombre: nombre,
    fecha: new Date().toLocaleString()
  });
  localStorage.setItem("reservas", JSON.stringify(historial));
  logSalida(`💾 Datos guardados en localStorage.`);
}
