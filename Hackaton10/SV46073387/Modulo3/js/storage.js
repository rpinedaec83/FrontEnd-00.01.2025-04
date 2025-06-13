// js/storage.js actualizado para corregir el error "Storage.guardar is not a function"

export function guardar(clave, datos) {
  try {
    localStorage.setItem(clave, JSON.stringify(datos));
  } catch (error) {
    console.error("Error al guardar en localStorage", error);
  }
}

export function leer(clave) {
  try {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    console.error("Error al leer de localStorage", error);
    return [];
  }
}

export function borrar(clave) {
  try {
    localStorage.removeItem(clave);
  } catch (error) {
    console.error("Error al borrar de localStorage", error);
  }
}
