function loadTasks() {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error al leer tareas:", error);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error al guardar tareas:", error);
  }
}
