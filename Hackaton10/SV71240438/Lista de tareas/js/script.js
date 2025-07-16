document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-tarea");
  const input = document.getElementById("input-tarea");
  const lista = document.getElementById("lista-tareas");

  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  renderTareas();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (!texto) return;

    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
    };

    tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    renderTareas();
  });

  function renderTareas() {
    lista.innerHTML = "";
    tareas.forEach((tarea) => {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = tarea.texto;

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.addEventListener("click", () => {
        const nuevoTexto = prompt("Editar tarea:", tarea.texto);
        if (nuevoTexto !== null) {
          tarea.texto = nuevoTexto.trim();
          localStorage.setItem("tareas", JSON.stringify(tareas));
          renderTareas();
        }
      });

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        tareas = tareas.filter((t) => t.id !== tarea.id);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        renderTareas();
      });

      li.appendChild(span);
      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);
      lista.appendChild(li);
    });
  }
});
