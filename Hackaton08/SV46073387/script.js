class Tarea {
  constructor(descripcion) {
    this.descripcion = descripcion;
    this.id = Date.now() + Math.random();
  }
}

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(descripcion) {
    if (!descripcion || descripcion.trim() === '') {
      throw new Error('La descripción no puede estar vacía');
    }
    const tarea = new Tarea(descripcion.trim());
    this.tareas.push(tarea);
    return tarea;
  }

  eliminarTarea(id) {
    const index = this.tareas.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('No se encontró la tarea con id ' + id);
    }
    this.tareas.splice(index, 1);
  }

  listarTareas() {
    return this.tareas;
  }
}

const gestor = new GestorTareas();
const formTarea = document.getElementById('formTarea');
const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.getElementById('listaTareas');

function renderizarTareas() {
  listaTareas.innerHTML = '';

  gestor.listarTareas().forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea.descripcion;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('btn-eliminar');
    btnEliminar.onclick = () => {
      try {
        gestor.eliminarTarea(tarea.id);
        renderizarTareas();
      } catch (error) {
        alert(error.message);
      }
    };

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);
  });
}

formTarea.addEventListener('submit', (e) => {
  e.preventDefault();
  try {
    gestor.agregarTarea(inputTarea.value);
    inputTarea.value = '';
    renderizarTareas();
  } catch (error) {
    alert(error.message);
  }
});

renderizarTareas();