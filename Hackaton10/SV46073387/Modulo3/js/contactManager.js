// contactManager.js
import * as Storage from './storage.js';

let contactos = [];

/**
 * Carga los contactos desde localStorage al arreglo en memoria.
 */
export function cargarContactos() {
  contactos = Storage.leer("contactos") || [];
}

/**
 * Devuelve una copia del arreglo de contactos actual.
 */
export function obtenerContactos() {
  return [...contactos];
}

/**
 * Agrega un nuevo contacto después de validar y actualizar el almacenamiento.
 * @param {{nombre: string, email: string, telefono: string}} contacto 
 */
export function agregarContacto(contacto) {
  validarContacto(contacto);
  const nuevo = {
    ...contacto,
    id: Date.now(),
    creado: new Date().toLocaleString(),
    modificado: new Date().toLocaleString()
  };
  contactos.push(nuevo);
  syncToLocalStorage();
}

/**
 * Edita un contacto por ID.
 * @param {number} id 
 * @param {{nombre: string, email: string, telefono: string}} cambios 
 */
export function editarContacto(id, cambios) {
  validarContacto(cambios);
  const index = contactos.findIndex(c => c.id === id);
  if (index === -1) throw new Error("Contacto no encontrado");

  contactos[index] = {
    ...contactos[index],
    ...cambios,
    modificado: new Date().toLocaleString()
  };
  syncToLocalStorage();
}

/**
 * Elimina un contacto por ID.
 * @param {number} id 
 */
export function eliminarContacto(id) {
  contactos = contactos.filter(c => c.id !== id);
  syncToLocalStorage();
}

/**
 * Devuelve una lista de contactos que coincidan con un texto.
 * @param {string} texto 
 */
export function filtrarContactos(texto) {
  return contactos.filter(c =>
    c.nombre.toLowerCase().includes(texto.toLowerCase()) ||
    c.email.toLowerCase().includes(texto.toLowerCase()) ||
    c.telefono.includes(texto)
  );
}

/**
 * Devuelve la lista ordenada alfabéticamente por nombre.
 */
export function ordenarPorNombre() {
  return [...contactos].sort((a, b) => a.nombre.localeCompare(b.nombre));
}

/**
 * Exporta todos los contactos como una cadena JSON.
 */
export function exportarJSON() {
  return JSON.stringify(contactos, null, 2);
}

/**
 * Importa contactos desde una cadena JSON válida.
 * @param {string} json 
 */
export function importarJSON(json) {
  let importados;
  try {
    importados = JSON.parse(json);
  } catch {
    throw new Error("Archivo JSON inválido");
  }

  if (!Array.isArray(importados)) throw new Error("Formato incorrecto");

  contactos = importados.map(c => ({
    ...c,
    creado: c.creado || new Date().toLocaleString(),
    modificado: new Date().toLocaleString()
  }));
  syncToLocalStorage();
}

/**
 * Valida la estructura y datos de un contacto.
 * @param {*} contacto 
 */
function validarContacto(contacto) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^[0-9]{6,15}$/;

  if (!contacto.nombre || contacto.nombre.trim().length === 0) {
    throw new Error("El nombre es obligatorio");
  }
  if (!emailRegex.test(contacto.email)) {
    throw new Error("Email inválido");
  }
  if (!telefonoRegex.test(contacto.telefono)) {
    throw new Error("Teléfono inválido");
  }
}

/**
 * Guarda el arreglo de contactos en localStorage.
 */
function syncToLocalStorage() {
  Storage.guardar("contactos", contactos);
}