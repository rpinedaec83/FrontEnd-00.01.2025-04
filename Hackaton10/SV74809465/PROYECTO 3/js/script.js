let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
const lista = document.getElementById('listaContactos');
const formulario = document.getElementById('formulario');
const toast = document.getElementById('toast');
const busqueda = document.getElementById('busqueda');
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.style.display = 'block';
  setTimeout(() => (toast.style.display = 'none'), 3000);
}

function renderizarContactos(listaMostrar = contactos) {
  lista.innerHTML = '';
  const ordenados = listaMostrar.sort((a, b) => a.nombre.localeCompare(b.nombre));
  ordenados.forEach((c, i) => {
    const li = document.createElement('li');
    li.className = document.body.classList.contains('dark') ? 'dark' : '';
    li.innerHTML = `
      <strong>${c.nombre}</strong><br/>
      ${c.email} | ${c.telefono}<br/>
      <small>Creado: ${new Date(c.fechaCreacion).toLocaleString()}</small><br/>
      <small>Modificado: ${new Date(c.fechaModificacion).toLocaleString()}</small><br/>
      <button onclick="editarContacto(${i})">✏️</button>
      <button onclick="eliminarContacto(${i})">🗑️</button>
    `;
    lista.appendChild(li);
  });
}

formulario.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();

  if (!/^\S+@\S+\.\S+$/.test(email)) return mostrarToast("Correo inválido");
  if (!/^\d{7,15}$/.test(telefono)) return mostrarToast("Teléfono inválido");

  const nuevo = {
    nombre,
    email,
    telefono,
    fechaCreacion: new Date().toISOString(),
    fechaModificacion: new Date().toISOString()
  };

  contactos.push(nuevo);
  localStorage.setItem('contactos', JSON.stringify(contactos));
  renderizarContactos();
  formulario.reset();
  mostrarToast("Contacto guardado");
});

function eliminarContacto(index) {
  if (confirm("¿Eliminar este contacto?")) {
    contactos.splice(index, 1);
    localStorage.setItem('contactos', JSON.stringify(contactos));
    renderizarContactos();
    mostrarToast("Contacto eliminado");
  }
}

function editarContacto(index) {
  const c = contactos[index];
  document.getElementById('nombre').value = c.nombre;
  document.getElementById('email').value = c.email;
  document.getElementById('telefono').value = c.telefono;
  contactos.splice(index, 1); // eliminar y volver a agregar con nueva fecha
  renderizarContactos();
  mostrarToast("Edita y guarda para actualizar");
}

busqueda.addEventListener('input', e => {
  const filtro = e.target.value.toLowerCase();
  const resultados = contactos.filter(c => c.nombre.toLowerCase().includes(filtro));
  renderizarContactos(resultados);
});

function exportarContactos() {
  const data = JSON.stringify(contactos, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = 'contactos.json';
  enlace.click();
}

document.getElementById('importar').addEventListener('change', function(e) {
  const archivo = e.target.files[0];
  const lector = new FileReader();
  lector.onload = function(evt) {
    try {
      const datos = JSON.parse(evt.target.result);
      if (Array.isArray(datos)) {
        contactos.push(...datos.map(c => ({
          ...c,
          fechaCreacion: c.fechaCreacion || new Date().toISOString(),
          fechaModificacion: new Date().toISOString()
        })));
        localStorage.setItem('contactos', JSON.stringify(contactos));
        renderizarContactos();
        mostrarToast("Contactos importados");
      } else {
        mostrarToast("Archivo inválido");
      }
    } catch (err) {
      mostrarToast("Error al importar");
    }
  };
  lector.readAsText(archivo);
});

modoOscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  renderizarContactos();
});

renderizarContactos();
