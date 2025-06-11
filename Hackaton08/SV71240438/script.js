//inicio//

const formulario = document.querySelector("#formulario");
const tituloForm = document.querySelector("#titulo-formulario");
const task = document.querySelector(".tareas");
const total = document.querySelector("#total");
const completadas = document.querySelector("#completadas");
2;
let tareas = [];

function eventos() {
  formulario.addEventListener("submit", validarFormulario);
  task.addEventListener("click", eliminarTarea);
  task.addEventListener("click", tareaCompletada);
}
eventos();

function validarFormulario(e) {
  e.preventDefault();
  const tarea = document.querySelector("#tarea").value;
  if (!tarea.trim()) {
    tituloForm.textContent = "Sin Nuevas Tareas";

    setTimeout(() => {
      tituloForm.textContent = "Nueva Tarea";
    }, 2000);
    return;
  }

  const obtTarea = {
    id: Date.now(),
    tarea: tarea,
    estado: false,
  };
  tareas = [...tareas, obtTarea];
  formulario.reset();
  mostarHTML();
}

function mostarHTML() {
  task.innerHTML = "";

  if (tareas.length < 1) {
    const mensaje = document.createElement("h5");
    mensaje.textContent = "Sin Tareas";
    return;
  }

  tareas.forEach((item) => {
    const itemTarea = document.createElement("div");
    itemTarea.classList.add("item-tarea");
    itemTarea.innerHTML = `
    ${
      item.estado
        ? `<p class="completa">${item.tarea}</p>`
        : `<p>${item.tarea}</p>`
    }
    <div class="botones">
         <button data-id="${item.id}" class="eliminar">X</button>
        <button data-id="${item.id}" class="completada">✓</button>
    </div>`;
    task.appendChild(itemTarea);
  });

  const totalTareas = tareas.length;
  total.textContent = `Total tareas: ${totalTareas}`;
  const tareasCompletadas = tareas.filter(
    (item) => item.estado === true
  ).length;
  completadas.textContent = `Completadas: ${tareasCompletadas}`;
}

function eliminarTarea(e) {
  if (e.target.classList.contains("eliminar")) {
    const tareaID = Number(e.target.getAttribute("data-id"));
    const newTask = tareas.filter((item) => item.id !== tareaID);
    tareas = newTask;
    mostarHTML();
  }
}

function tareaCompletada(e) {
  if (e.target.classList.contains("completada")) {
    const tareaID = Number(e.target.getAttribute("data-id"));
    const newTask = tareas.map((item) => {
      if (item.id === tareaID) {
        item.estado = !item.estado;
        return item;
      } else {
        return item;
      }
    });
    tareas = newTask;
    mostarHTML();
  }
}
