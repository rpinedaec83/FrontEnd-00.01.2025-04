const resultado = document.getElementById("resultado");

// ---------- CALLBACKS ----------
function verificarDisponibilidad(callback) {
    setTimeout(() => {
        resultado.innerText = "Verificando disponibilidad...";
        callback(true);
    }, 1000);
}

function procesarPago(callback) {
    setTimeout(() => {
        resultado.innerText = "Procesando pago...";
        callback(true);
    }, 1000);
}

function confirmarReserva() {
    setTimeout(() => {
        resultado.innerText = "¡Reserva confirmada con callbacks!";
    }, 1000);
}

document.getElementById("btnCallback").addEventListener("click", () => {
    resultado.innerText = "";
    verificarDisponibilidad((disponible) => {
        if (disponible) {
            procesarPago((pagado) => {
                if (pagado) {
                    confirmarReserva();
                }
            });
        }
    });
});


// ---------- PROMESAS ----------
function verificarDisponibilidadPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resultado.innerText = "Verificando disponibilidad...";
            resolve(true);
        }, 1000);
    });
}

function procesarPagoPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resultado.innerText = "Procesando pago...";
            resolve(true);
        }, 1000);
    });
}

function confirmarReservaPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resultado.innerText = "¡Reserva confirmada con promesas!";
            resolve();
        }, 1000);
    });
}

document.getElementById("btnPromesa").addEventListener("click", () => {
    resultado.innerText = "";
    verificarDisponibilidadPromesa()
        .then(() => procesarPagoPromesa())
        .then(() => confirmarReservaPromesa());
});


// ---------- ASYNC / AWAIT ----------
async function reservarAsync() {
    resultado.innerText = "Verificando disponibilidad...";
    await new Promise(resolve => setTimeout(resolve, 1000));

    resultado.innerText = "Procesando pago...";
    await new Promise(resolve => setTimeout(resolve, 1000));

    resultado.innerText = "¡Reserva confirmada con async/await!";
}

document.getElementById("btnAsync").addEventListener("click", () => {
    resultado.innerText = "";
    reservarAsync();
});