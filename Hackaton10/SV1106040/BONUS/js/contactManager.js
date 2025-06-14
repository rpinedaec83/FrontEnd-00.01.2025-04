const TaskManager = {
  tareas: [],

  init() {
    this.tareas = Storage.get(); // <-- Aquí necesita que Storage esté bien definido
  },

  sync() {
    Storage.set(this.tareas);
  },

  generarID() {
    return crypto.randomUUID();
  },

  getFiltradas(soloCompletadas = false) {
    let filtradas = [...this.tareas];
    if (soloCompletadas) {
      filtradas = filtradas.filter(t => t.completada);
    }
    return filtradas.sort((a, b) => a.texto.localeCompare(b.texto));
  },

  agregar(texto) {
    const tarea = {
      id: this.generarID(),
      texto: texto.trim(),
      completada: false
    };
    this.tareas.push(tarea);
    this.sync();
  },

  eliminar(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.sync();
  },

  actualizarTexto(id, nuevoTexto) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.texto = nuevoTexto.trim();
      this.sync();
    }
  },

  toggleCompletada(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.sync();
    }
  }
};