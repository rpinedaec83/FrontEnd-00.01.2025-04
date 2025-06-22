import { UI } from './ui.js';
import { ContactManager } from './contactManager.js';
import { Storage } from './storage.js';

const ui = new UI();
const manager = new ContactManager();
const storage = new Storage();

function actualizarVista() {
  const contactos = storage.obtenerContactos();
  const filtro = document.getElementById('filtro').value.toLowerCase();
  const ordenados = manager.ordenarContactos(contactos);
  const filtrados = ordenados.filter(c => c.nombre.toLowerCase().includes(filtro));
  ui.renderTabla(filtrados);
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarVista();

  document.getElementById('btnNuevo').addEventListener('click', async () => {
    const datos = await ui.mostrarFormulario();
    if (datos) {
      storage.agregarContacto(datos);
      actualizarVista();
      ui.toast('Contacto agregado');
    }
  });

  document.getElementById('filtro').addEventListener('input', actualizarVista);

  document.getElementById('btnOrdenar').addEventListener('click', () => {
    manager.toggleOrden();
    actualizarVista();
  });

  document.getElementById('btnExportar').addEventListener('click', () => {
    const dataStr = JSON.stringify(storage.obtenerContactos(), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contactos.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('btnImportar').addEventListener('click', () => {
    document.getElementById('importarArchivo').click();
  });

  document.getElementById('importarArchivo').addEventListener('change', (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const datos = JSON.parse(reader.result);
          storage.importarContactos(datos);
          actualizarVista();
          ui.toast('Contactos importados');
        } catch {
          ui.toast('Archivo inválido');
        }
      };
      reader.readAsText(archivo);
    }
  });

  document.getElementById('toggleModo').addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
  });

  document.getElementById('tablaContactos').addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains('editar')) {
      const contacto = storage.obtenerContacto(id);
      const nuevos = await ui.mostrarFormulario(contacto);
      if (nuevos) {
        storage.actualizarContacto(id, nuevos);
        actualizarVista();
        ui.toast('Contacto actualizado');
      }
    }
    if (e.target.classList.contains('eliminar')) {
      const confirmado = await ui.confirmar('¿Eliminar contacto?');
      if (confirmado) {
        storage.eliminarContacto(id);
        actualizarVista();
        ui.toast('Contacto eliminado');
      }
    }
  });
});