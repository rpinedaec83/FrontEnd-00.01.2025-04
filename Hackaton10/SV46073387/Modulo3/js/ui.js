import * as Manager from './contactManager.js';

// Mostrar notificaciones tipo "toast"
function mostrarToast(mensaje, error = false) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    icon: error ? 'error' : 'success',
    title: mensaje
  });
}

// Renderizar contactos en la tabla
function renderizarContactos(lista) {
  const tbody = document.querySelector("#tablaContactos tbody");
  tbody.innerHTML = "";

  lista.forEach(contacto => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${contacto.nombre}</td>
      <td>${contacto.email}</td>
      <td>${contacto.telefono}</td>
      <td>${contacto.modificado}</td>
      <td>
        <button class="editar" data-id="${contacto.id}">✏️</button>
        <button class="eliminar" data-id="${contacto.id}">🗑️</button>
      </td>
    `;
    tbody.appendChild(fila);
  });

  document.querySelectorAll(".editar").forEach(btn => {
    btn.addEventListener("click", () => {
      const contacto = Manager.obtenerContactos().find(c => c.id == btn.dataset.id);
      mostrarFormulario(contacto);
    });
  });

  document.querySelectorAll(".eliminar").forEach(btn => {
    btn.addEventListener("click", () => {
      Swal.fire({
        title: '¿Eliminar contacto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar'
      }).then(result => {
        if (result.isConfirmed) {
          Manager.eliminarContacto(Number(btn.dataset.id));
          mostrarToast("Contacto eliminado 🗑️");
          renderizarContactos(Manager.obtenerContactos());
        }
      });
    });
  });
}

// Mostrar el formulario emergente para agregar o editar
function mostrarFormulario(contacto = null) {
const nombre = contacto?.nombre ?? "";
const email = contacto?.email ?? "";
const telefono = contacto?.telefono ?? "";

  Swal.fire({
    title: contacto ? "Editar contacto" : "Nuevo contacto",
    html: `
      <input id="nombre" class="swal2-input" placeholder="Nombre" value="${nombre}">
      <input id="email" class="swal2-input" placeholder="Email" value="${email}">
      <input id="telefono" class="swal2-input" placeholder="Teléfono" value="${telefono}">
    `,
    confirmButtonText: contacto ? "Guardar cambios" : "Agregar",
    showCancelButton: true,
    focusConfirm: false,
    preConfirm: () => {
      const datos = {
        id: contacto ? contacto.id : null,
        nombre: document.getElementById("nombre").value.trim(),
        email: document.getElementById("email").value.trim(),
        telefono: document.getElementById("telefono").value.trim()
      };

      try {
        if (datos.id) {
          Manager.editarContacto(datos.id, datos);
        } else {
          Manager.agregarContacto(datos);
        }
        renderizarContactos(Manager.obtenerContactos());
        mostrarToast("Contacto guardado ✅");
      } catch (err) {
        Swal.showValidationMessage(err.message);
      }
    }
  });
}

// Alternar modo oscuro
function toggleModoOscuro() {
  document.body.classList.toggle("dark-mode");
}

export {
  renderizarContactos,
  mostrarFormulario,
  mostrarToast,
  toggleModoOscuro
};