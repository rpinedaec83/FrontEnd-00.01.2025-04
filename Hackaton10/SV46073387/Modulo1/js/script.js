class Tarea {
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
  }
}

let tareas = [];
const $lista = document.getElementById("listaTareas");

// Cargar al iniciar
document.addEventListener("DOMContentLoaded", () => {
  const guardadas = localStorage.getItem("tareas");
  tareas = guardadas ? JSON.parse(guardadas) : [];
  renderizar();
});

document.getElementById("btnAgregar").addEventListener("click", async () => {
  const { value: texto } = await Swal.fire({
    title: "Nueva tarea",
    input: "text",
    inputLabel: "Escribe tu tarea",
    inputPlaceholder: "Ej: Hacer compras",
    showCancelButton: true,
  });

  if (texto) {
    const nueva = new Tarea(Date.now(), texto.trim());
    tareas.push(nueva);
    guardar();
    renderizar();
  }
});

document.getElementById("btnBorrarTodo").addEventListener("click", () => {
  tareas = [];
  guardar();
  renderizar();
});

function renderizar() {
  $lista.innerHTML = "";
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${tarea.descripcion}
      <button onclick="editarTarea(${tarea.id})">Editar</button>
      <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
    `;
    $lista.appendChild(li);
  });
}

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardar();
  renderizar();
}

async function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  const { value: nuevoTexto } = await Swal.fire({
    title: "Editar tarea",
    input: "text",
    inputValue: tarea.descripcion,
    showCancelButton: true,
  });

  if (nuevoTexto) {
    tarea.descripcion = nuevoTexto.trim();
    guardar();
    renderizar();
  }
}