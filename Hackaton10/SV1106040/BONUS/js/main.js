const input = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const filtro = document.getElementById('filtroCompletadas');
const selectorIdioma = document.getElementById('selectorIdioma');
const estadoConexion = document.getElementById('estadoConexion');

// Diccionario de traducciones
const i18n = {
  es: {
    titulo: "Lista de Tareas",
    agregar: "Agregar",
    placeholder: "Escribe una tarea",
    filtro: "Mostrar solo completadas",
    id: "ID",
    tarea: "Tarea",
    completada: "Completada",
    acciones: "Acciones"
  },
  en: {
    titulo: "Task List",
    agregar: "Add",
    placeholder: "Write a task",
    filtro: "Show only completed",
    id: "ID",
    tarea: "Task",
    completada: "Completed",
    acciones: "Actions"
  }
};

// Traducir la interfaz
function traducir(idioma) {
  const t = i18n[idioma];
  document.querySelector('h2').textContent = t.titulo;
  btnAgregar.textContent = t.agregar;
  input.placeholder = t.placeholder;
  document.querySelector('label').lastChild.textContent = t.filtro;
  const ths = document.querySelectorAll('th');
  ths[0].textContent = t.id;
  ths[1].textContent = t.tarea;
  ths[2].textContent = t.completada;
  ths[3].textContent = t.acciones;
  localStorage.setItem('idioma', idioma);
}

// Detección de conexión
function actualizarEstadoConexion() {
  if (estadoConexion) {
    estadoConexion.textContent = navigator.onLine ? '🟢 Conectado' : '🔴 Sin conexión';
  }
}

window.addEventListener('online', actualizarEstadoConexion);
window.addEventListener('offline', actualizarEstadoConexion);

document.addEventListener('DOMContentLoaded', () => {
  const idioma = localStorage.getItem('idioma') || 'es';
  selectorIdioma.value = idioma;
  traducir(idioma);

  TaskManager.init();
  renderizar();
  actualizarEstadoConexion();
});

btnAgregar.addEventListener('click', () => {
  if (!input.value.trim()) return;
  TaskManager.agregar(input.value);
  input.value = '';
  renderizar();
});

filtro.addEventListener('change', renderizar);
selectorIdioma.addEventListener('change', () => traducir(selectorIdioma.value));

function renderizar() {
  const tareas = TaskManager.getFiltradas(filtro.checked);
  lista.innerHTML = '';

  tareas.forEach(t => {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = t.id;

    const tdTexto = document.createElement('td');
    const inputTexto = document.createElement('input');
    inputTexto.type = 'text';
    inputTexto.value = t.texto;
    inputTexto.disabled = true;
    if (t.completada) inputTexto.classList.add('completada');
    tdTexto.appendChild(inputTexto);

    const tdCheck = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = t.completada;
    checkbox.addEventListener('change', () => {
      TaskManager.toggleCompletada(t.id);
      renderizar();
    });
    tdCheck.appendChild(checkbox);

    const tdAcciones = document.createElement('td');
    const btnEditar = document.createElement('button');
    btnEditar.textContent = '✏️';
    btnEditar.onclick = () => {
      if (inputTexto.disabled) {
        inputTexto.disabled = false;
        inputTexto.focus();
        btnEditar.textContent = '💾';
      } else {
        TaskManager.actualizarTexto(t.id, inputTexto.value);
        inputTexto.disabled = true;
        btnEditar.textContent = '✏️';
      }
    };

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '🗑️';
    btnEliminar.onclick = () => {
      TaskManager.eliminar(t.id);
      renderizar();
    };

    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdId);
    tr.appendChild(tdTexto);
    tr.appendChild(tdCheck);
    tr.appendChild(tdAcciones);
    lista.appendChild(tr);
  });
}
