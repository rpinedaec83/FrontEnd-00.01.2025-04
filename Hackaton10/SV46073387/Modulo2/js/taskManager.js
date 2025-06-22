class Tarea {
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
  }
}

const TaskManager = (() => {
  let tareas = [];

  const loadTareas = () => {
    tareas = Storage.load("tareas");
  };

  const getTareas = () => tareas;

  const addTarea = (descripcion) => {
    const nueva = new Tarea(Date.now(), descripcion);
    tareas.push(nueva);
    syncToLocalStorage();
  };

  const editTarea = (id, nuevaDescripcion) => {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
      tarea.descripcion = nuevaDescripcion;
      syncToLocalStorage();
    }
  };

  const deleteTarea = (id) => {
    tareas = tareas.filter(t => t.id !== id);
    syncToLocalStorage();
  };

  const clearTareas = () => {
    tareas = [];
    Storage.remove("tareas");
  };

  const syncToLocalStorage = () => {
    Storage.save("tareas", tareas);
  };

  return {
    loadTareas,
    getTareas,
    addTarea,
    editTarea,
    deleteTarea,
    clearTareas
  };
})();