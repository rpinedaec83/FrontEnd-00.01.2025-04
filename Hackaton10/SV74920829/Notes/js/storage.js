// Guarda datos en localStorage como string JSON
export function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Carga datos desde localStorage y los convierte a objeto/array
// Si no hay datos, devuelve un array vacío para evitar errores
export function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
