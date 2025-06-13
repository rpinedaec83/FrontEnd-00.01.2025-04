const Storage = {
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error guardando en localStorage:", e);
    }
  },

  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error leyendo de localStorage:", e);
      return [];
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  }
};