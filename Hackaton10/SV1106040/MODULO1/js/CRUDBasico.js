const input = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const filtro = document.getElementById('filtroCompletadas');

document.addEventListener('DOMContentLoaded', mostrarTareas);
btnAgregar.addEventListener('click', agregarTarea);
filtro.addEventListener('change', mostrarTareas);

function generarID() {
  return crypto.randomUUID(); // ID seguro y único
}

function obtenerTareas() {
  const data = localStorage.getItem('tareas');
  return data ? JSON.parse(data) : [];
}

function guardarTareas(tareas) {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;

  const nueva = {
    id: generarID(),
    texto,
    completada: false
  };

  const tareas = obtenerTareas();
  tareas.push(nueva);
  guardarTareas(tareas);
  input.value = '';
  mostrarTareas();
}

function mostrarTareas() {
  const tareas = obtenerTareas();
  const soloCompletadas = filtro.checked;
  const tareasFiltradas = soloCompletadas
    ? tareas.filter(t => t.completada)
    : tareas;

  const tareasOrdenadas = tareasFiltradas.sort((a, b) => a.texto.localeCompare(b.texto));

  lista.innerHTML = '';

  tareasOrdenadas.forEach(t => {
    const fila = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = t.id;

    const tdTexto = document.createElement('td');
    const inputTexto = document.createElement('input');
    inputTexto.type = 'text';
    inputTexto.value = t.texto;
    inputTexto.disabled = true;
    if (t.completada) inputTexto.classList.add('completada');
    tdTexto.appendChild(inputTexto);

    const tdEstado = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = t.completada;
    checkbox.addEventListener('change', () => {
      t.completada = checkbox.checked;
      guardarTareas(tareas);
      mostrarTareas();
    });
    tdEstado.appendChild(checkbox);

    const tdAcciones = document.createElement('td');
    const btnEditar = document.createElement('button');
    btnEditar.textContent = '✏️';
    btnEditar.onclick = () => {
      if (inputTexto.disabled) {
        inputTexto.disabled = false;
        inputTexto.focus();
        btnEditar.textContent = '💾';
      } else {
        t.texto = inputTexto.value.trim();
        inputTexto.disabled = true;
        btnEditar.textContent = '✏️';
        guardarTareas(tareas);
        mostrarTareas();
      }
    };

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '🗑️';
    btnEliminar.onclick = () => {
      const nuevas = tareas.filter(x => x.id !== t.id);
      guardarTareas(nuevas);
      mostrarTareas();
    };

    tdAcciones.appendChild(btnEditar);
    tdAcciones.appendChild(btnEliminar);

    fila.appendChild(tdId);
    fila.appendChild(tdTexto);
    fila.appendChild(tdEstado);
    fila.appendChild(tdAcciones);

    lista.appendChild(fila);
  });
}
