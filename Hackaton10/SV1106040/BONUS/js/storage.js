const Storage = {
  key: 'tareas',

  get() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : []; // 👈 sin atob()
    } catch (e) {
      console.error("Error al leer localStorage:", e);
      return [];
    }
  },

  set(tareas) {
    try {
      localStorage.setItem(this.key, JSON.stringify(tareas)); // 👈 sin btoa()
    } catch (e) {
      console.error("Error al guardar en localStorage:", e);
    }
  }
};
