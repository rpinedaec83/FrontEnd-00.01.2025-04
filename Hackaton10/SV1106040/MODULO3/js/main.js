// Elementos del DOM
const form = document.getElementById('contactForm');
const inputId = document.getElementById('contactId');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputTelefono = document.getElementById('telefono');
const inputBuscar = document.getElementById('buscarInput');
const lista = document.getElementById('listaContactos');
const exportarBtn = document.getElementById('exportarBtn');
const importarInput = document.getElementById('importarInput');
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const toast = document.getElementById('toast');

document.addEventListener('DOMContentLoaded', () => {
  ContactManager.init();
  renderizar();
  restaurarModoOscuro();
});

// Agregar o actualizar contacto
form.addEventListener('submit', e => {
  e.preventDefault();
  const id = inputId.value;
  const datos = {
    nombre: inputNombre.value,
    email: inputEmail.value,
    telefono: inputTelefono.value
  };

  let exito = false;
  if (id) {
    exito = ContactManager.actualizar(id, datos);
    mostrarToast(exito ? 'Contacto actualizado ✅' : 'Datos inválidos ❌');
  } else {
    exito = ContactManager.crear(datos);
    mostrarToast(exito ? 'Contacto creado ✅' : 'Datos inválidos ❌');
  }

  if (exito) {
    form.reset();
    inputId.value = '';
    renderizar();
  }
});

// Buscar en tiempo real
inputBuscar.addEventListener('input', renderizar);

// Exportar contactos
exportarBtn.addEventListener('click', () => {
  ContactManager.exportarJSON();
  mostrarToast('Contactos exportados 💾');
});

// Importar contactos
importarInput.addEventListener('change', e => {
  const archivo = e.target.files[0];
  if (!archivo) return;

  ContactManager.importarJSON(archivo, (ok) => {
    mostrarToast(ok ? 'Importación exitosa ✅' : 'Archivo inválido ❌');
    if (ok) renderizar();
    importarInput.value = ''; // limpiar input
  });
});

// Alternar modo oscuro
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const oscuro = document.body.classList.contains('dark');
  localStorage.setItem('modoOscuro', oscuro);
  toggleDarkModeBtn.textContent = oscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});

// Restaurar modo oscuro
function restaurarModoOscuro() {
  const oscuro = localStorage.getItem('modoOscuro') === 'true';
  if (oscuro) document.body.classList.add('dark');
  toggleDarkModeBtn.textContent = oscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
}

// Renderizar lista de contactos
function renderizar() {
  const textoBuscar = inputBuscar.value;
  const contactos = textoBuscar
    ? ContactManager.buscar(textoBuscar)
    : ContactManager.obtenerOrdenados();

  lista.innerHTML = '';

  contactos.forEach(c => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${c.nombre}</td>
      <td>${c.email}</td>
      <td>${c.telefono}</td>
      <td>${formatearFecha(c.creado)}</td>
      <td>${formatearFecha(c.modificado)}</td>
      <td>
        <button onclick="editarContacto('${c.id}')">✏️</button>
        <button onclick="eliminarContacto('${c.id}')">🗑️</button>
      </td>
    `;
    lista.appendChild(tr);
  });
}

// Formatear fecha
function formatearFecha(isoStr) {
  const fecha = new Date(isoStr);
  return fecha.toLocaleDateString() + ' ' + fecha.toLocaleTimeString().slice(0, 5);
}

// Editar contacto (cargar al formulario)
function editarContacto(id) {
  const c = ContactManager.contactos.find(c => c.id === id);
  if (c) {
    inputId.value = c.id;
    inputNombre.value = c.nombre;
    inputEmail.value = c.email;
    inputTelefono.value = c.telefono;
    inputNombre.focus();
  }
}

// Eliminar contacto
function eliminarContacto(id) {
  if (confirm('¿Seguro que quieres eliminar este contacto?')) {
    ContactManager.eliminar(id);
    renderizar();
    mostrarToast('Contacto eliminado 🗑️');
  }
}

// Notificación tipo toast
function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
