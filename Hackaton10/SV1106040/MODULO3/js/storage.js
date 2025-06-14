const Storage = {
  key: 'contactos',

  get() {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error leyendo localStorage", e);
      return [];
    }
  },

  set(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      console.error("Error guardando en localStorage", e);
    }
  }
};