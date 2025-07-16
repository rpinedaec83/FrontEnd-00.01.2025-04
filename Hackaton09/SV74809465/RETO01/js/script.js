const logDiv = document.getElementById('log');

function clearLog() {
  logDiv.classList.remove('visible');
  logDiv.innerHTML = '';
}

function log(msg) {
  if (!logDiv.classList.contains('visible')) {
    logDiv.classList.add('visible');
  }
  const p = document.createElement('p');
  p.textContent = msg;
  logDiv.appendChild(p);
}

function getFormData() {
  const nombre = document.getElementById('nombre').value.trim();
  const fechaInicio = document.getElementById('fechaInicio').value;
  const fechaFin = document.getElementById('fechaFin').value;

  if (!nombre || !fechaInicio || !fechaFin) {
    log("⚠️ Por favor completa todos los campos del formulario.");
    throw new Error("Formulario incompleto");
  }

  return { nombre, fechaInicio, fechaFin };
}


function btnCallbackHell() {
  clearLog();
  let data;

  try {
    data = getFormData();
  } catch {
    return;
  }

  function buscarHotel(callback) {
    setTimeout(() => {
      log(`Hotel encontrado para ${data.nombre}`);
      callback(null, "Hotel Paraíso");
    }, 1000);
  }

  function verificarDisponibilidad(hotel, callback) {
    setTimeout(() => {
      log(`Verificando disponibilidad en ${hotel} del ${data.fechaInicio} al ${data.fechaFin}`);
      callback(null, true);
    }, 1000);
  }

  function reservarHabitacion(disponible, callback) {
    setTimeout(() => {
      if (disponible) {
        log("Habitación reservada exitosamente");
        callback(null, "✅ Reserva confirmada");
      } else {
        callback("❌ No hay habitaciones disponibles");
      }
    }, 1000);
  }

  buscarHotel((err, hotel) => {
    if (err) return log(err);
    verificarDisponibilidad(hotel, (err, disponible) => {
      if (err) return log(err);
      reservarHabitacion(disponible, (err, mensaje) => {
        if (err) return log(err);
        log(mensaje);
      });
    });
  });
}


function btnPromises() {
  clearLog();
  let data;

  try {
    data = getFormData();
  } catch {
    return;
  }

  function buscarHotel() {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(`Hotel encontrado para ${data.nombre}`);
        resolve("Hotel Paraíso");
      }, 1000);
    });
  }

  function verificarDisponibilidad(hotel) {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(`Verificando disponibilidad en ${hotel} del ${data.fechaInicio} al ${data.fechaFin}`);
        resolve(true);
      }, 1000);
    });
  }

  function reservarHabitacion(disponible) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (disponible) {
          log("Habitación reservada exitosamente");
          resolve("✅ Reserva confirmada");
        } else {
          reject("❌ No hay habitaciones disponibles");
        }
      }, 1000);
    });
  }

  buscarHotel()
    .then(verificarDisponibilidad)
    .then(reservarHabitacion)
    .then((mensaje) => log(mensaje))
    .catch((err) => log(err));
}


async function btnAsyncAwait() {
  clearLog();
  let data;

  try {
    data = getFormData();
  } catch {
    return;
  }

  function buscarHotel() {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(`Hotel encontrado para ${data.nombre}`);
        resolve("Hotel Paraíso");
      }, 1000);
    });
  }

  function verificarDisponibilidad(hotel) {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(`Verificando disponibilidad en ${hotel} del ${data.fechaInicio} al ${data.fechaFin}`);
        resolve(true);
      }, 1000);
    });
  }

  function reservarHabitacion(disponible) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (disponible) {
          log("Habitación reservada exitosamente");
          resolve("✅ Reserva confirmada");
        } else {
          reject("❌ No hay habitaciones disponibles");
        }
      }, 1000);
    });
  }

  try {
    const hotel = await buscarHotel();
    const disponible = await verificarDisponibilidad(hotel);
    const mensaje = await reservarHabitacion(disponible);
    log(mensaje);
  } catch (err) {
    log(err);
  }
}
