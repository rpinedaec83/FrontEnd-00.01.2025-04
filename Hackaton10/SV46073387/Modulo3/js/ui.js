export class UI {
  renderTabla(contactos) {
    const tbody = document.querySelector('#tablaContactos tbody');
    tbody.innerHTML = contactos.map(c => `
      <tr>
        <td>${c.nombre}</td>
        <td>${c.email}</td>
        <td>${c.telefono}</td>
        <td>${c.modificado}</td>
        <td>
          <button class="editar" data-id="${c.id}">✏️</button>
          <button class="eliminar" data-id="${c.id}">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  async mostrarFormulario(contacto = {}) {
    const { value: formValues } = await Swal.fire({
      title: contacto.id ? 'Editar Contacto' : 'Nuevo Contacto',
      html:
        `<input id="swal-nombre" class="swal2-input" placeholder="Nombre" value="${contacto.nombre || ''}">` +
        `<input id="swal-email" class="swal2-input" placeholder="Email" value="${contacto.email || ''}">` +
        `<input id="swal-telefono" class="swal2-input" placeholder="Teléfono" value="${contacto.telefono || ''}">`,
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('swal-nombre').value.trim();
        const email = document.getElementById('swal-email').value.trim();
        const telefono = document.getElementById('swal-telefono').value.trim();
        if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\+?[0-9]{7,15}$/.test(telefono)) {
          Swal.showValidationMessage('Datos inválidos');
          return;
        }
        return { nombre, email, telefono };
      }
    });
    return formValues;
  }

  toast(msg) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      title: msg,
      icon: 'success'
    });
  }

  confirmar(msg) {
    return Swal.fire({
      title: msg,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(r => r.isConfirmed);
  }
}
