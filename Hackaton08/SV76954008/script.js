const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");

let tareas = []; 

function renderizarTareas() {
  listaTareas.innerHTML = ""; 

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${tarea}
      <button class="eliminar" onclick="eliminarTarea(${index})">X</button>
    `;
    listaTareas.appendChild(li);
  });
}

agregarBtn.addEventListener("click", () => {
  const texto = tareaInput.value.trim();
  if (texto !== "") {
    tareas.push(texto);
    tareaInput.value = "";
    renderizarTareas();
  }
});

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  renderizarTareas();
}
