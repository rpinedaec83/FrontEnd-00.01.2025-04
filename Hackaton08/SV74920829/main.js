// Clase que representa una tarea individual
class Task {
  constructor(text) {
    this.text = text; // Guarda el texto de la tarea
  }

  // Crea el elemento <li> que representa la tarea en la lista
  createElement() {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = this.text; // Inserta el texto de la tarea

    li.appendChild(p);
    li.appendChild(this.createDeleteButton(li)); // Agrega botón de eliminar
    return li;
  }

  // Crea el botón de eliminar con su funcionalidad
  createDeleteButton(li) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    // Evento: al hacer clic, elimina la tarea y actualiza el mensaje vacío
    deleteBtn.addEventListener("click", () => {
      li.remove();
      TaskList.updateEmptyMessage();
    });

    return deleteBtn;
  }
}

// Clase encargada de manejar la lista de tareas
class TaskList {
  // Referencias a elementos del DOM
  static ul = document.querySelector("ul");
  static input = document.querySelector("input");
  static addBtn = document.querySelector(".btn-add");
  static empty = document.querySelector(".empty");

  // Inicializa el evento del botón agregar
  static init() {
    TaskList.addBtn.addEventListener("click", TaskList.handleAddTask);
  }

  // Maneja el evento de agregar tarea
  static handleAddTask(e) {
    e.preventDefault(); // Previene el envío del formulario
    const text = TaskList.input.value.trim(); // Obtiene y limpia el texto

    if (text !== "") {
      const task = new Task(text); // Crea una nueva tarea
      TaskList.ul.appendChild(task.createElement()); // La agrega a la lista
      TaskList.input.value = ""; // Limpia el input
      TaskList.empty.style.display = "none"; // Oculta mensaje "sin tareas"
    }
  }

  // Muestra el mensaje vacío si ya no hay tareas
  static updateEmptyMessage() {
    if (TaskList.ul.children.length === 0) {
      TaskList.empty.style.display = "block";
    }
  }
}

// Inicia la aplicación
TaskList.init();
