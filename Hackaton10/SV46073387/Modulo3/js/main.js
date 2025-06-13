import * as Manager from './contactManager.js';
import * as UI from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  inicializar();
});

function inicializar() {
  Manager.cargarContactos();
  UI.renderizarContactos(Manager.obtenerContactos());
  asignarEventos();
}

function asignarEventos() {
  document.getElementById("btnNuevo").addEventListener("click", UI.mostrarFormulario);
  document.getElementById("formContacto").addEventListener("submit", manejarEnvioFormulario);
  document.getElementById("filtro").addEventListener("input", filtrarContactos);
  document.getElementById("btnExportar").addEventListener("click", exportarContactos);
  document.getElementById("btnImportar").addEventListener("click", () =>
    document.getElementById("importarArchivo").click()
  );
  document.getElementById("importarArchivo").addEventListener("change", importarContactos);
  document.getElementById("toggleModo").addEventListener("click", UI.toggleModoOscuro);
  document.getElementById("btnOrdenar").addEventListener("click", () => {
    const ordenados = Manager.ordenarPorNombre();
    UI.renderizarContactos(ordenados);
  });
}

function manejarEnvioFormulario(e) {
  e.preventDefault();
  const datos = UI.obtenerDatosFormulario();

  try {
    if (datos.id) {
      Manager.editarContacto(datos);
      UI.mostrarToast("Contacto actualizado ✅");
    } else {
      Manager.agregarContacto(datos);
      UI.mostrarToast("Contacto agregado ✅");
    }
    UI.resetFormulario();
    UI.renderizarContactos(Manager.obtenerContactos());
  } catch (error) {
    UI.mostrarToast(error.message, true);
  }
}

function filtrarContactos(e) {
  const texto = e.target.value;
  const resultados = Manager.filtrarContactos(texto);
  UI.renderizarContactos(resultados);
}

function exportarContactos() {
  const datos = Manager.exportarJSON();
  const blob = new Blob([datos], { type: 'application/json' });
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "contactos.json";
  enlace.click();
}

function importarContactos(e) {
  const archivo = e.target.files[0];
  if (!archivo) return;

  const lector = new FileReader();
  lector.onload = function (event) {
    try {
      Manager.importarJSON(event.target.result);
      UI.mostrarToast("Contactos importados correctamente 🥳");
      UI.renderizarContactos(Manager.obtenerContactos());
    } catch (err) {
      UI.mostrarToast("Error al importar: " + err.message, true);
    }
  };
  lector.readAsText(archivo);
}
