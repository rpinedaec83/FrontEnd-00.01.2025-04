document.addEventListener("DOMContentLoaded", () => {
  const listaTareas = document.getElementById("listaTareas");
  const btnAgregar = document.getElementById("btnAgregar");
  const btnBorrarTodo = document.getElementById("btnBorrarTodo");

  TaskManager.loadTareas();
  render();

  btnAgregar.addEventListener("click", async () => {
    const { value: texto } = await Swal.fire({
      title: "Nueva tarea",
      input: "text",
      inputPlaceholder: "Escribe una tarea",
      showCancelButton: true,
    });

    if (texto && texto.trim()) {
      TaskManager.addTarea(texto.trim());
      render();
    }
  });

  btnBorrarTodo.addEventListener("click", () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esto eliminará todas las tareas",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar todo"
    }).then((result) => {
      if (result.isConfirmed) {
        TaskManager.clearTareas();
        render();
      }
    });
  });

  function render() {
    listaTareas.innerHTML = "";
    const tareas = TaskManager.getTareas();

    tareas.forEach(t => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${t.descripcion}
        <button onclick="editarTarea(${t.id})">Editar</button>
        <button onclick="eliminarTarea(${t.id})">Eliminar</button>
      `;
      listaTareas.appendChild(li);
    });
  }

  window.editarTarea = async (id) => {
    const tareas = TaskManager.getTareas();
    const tarea = tareas.find(t => t.id === id);
    const { value: nuevoTexto } = await Swal.fire({
      title: "Editar tarea",
      input: "text",
      inputValue: tarea.descripcion,
      showCancelButton: true,
    });

    if (nuevoTexto && nuevoTexto.trim()) {
      TaskManager.editTarea(id, nuevoTexto.trim());
      render();
    }
  };

  window.eliminarTarea = (id) => {
    TaskManager.deleteTarea(id);
    render();
  };
});