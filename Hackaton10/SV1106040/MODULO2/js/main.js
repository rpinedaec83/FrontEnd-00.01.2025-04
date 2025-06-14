const input = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const filtro = document.getElementById('filtroCompletadas');

document.addEventListener('DOMContentLoaded', () => {
  TaskManager.init();
  renderizar();
});

btnAgregar.addEventListener('click', () => {
  if (!input.value.trim()) return;
  TaskManager.agregar(input.value);
  input.value = '';
  renderizar();
});

filtro.addEventListener('change', renderizar);

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
