import { saveToStorage, loadFromStorage } from './storage.js';

// Clave para guardar los contactos en localStorage
const STORAGE_KEY = 'contacts';

// Obtiene todos los contactos almacenados
export function getContacts() {
  return loadFromStorage(STORAGE_KEY);
}

// Guarda un contacto nuevo o actualiza uno existente
export function saveContact(contact) {
  const contacts = getContacts();

  if (contact.id) {
    // Si el contacto ya existe, lo actualizo en el array
    const index = contacts.findIndex(c => c.id === contact.id);
    contacts[index] = contact;
  } else {
    // Si es nuevo, genero un id único y agrego fecha de creación
    contact.id = Date.now().toString();
    contact.createdAt = new Date().toISOString();
    contacts.push(contact);
  }

  // Guardo el array actualizado en localStorage
  saveToStorage(STORAGE_KEY, contacts);
}

// Elimina un contacto por su id
export function deleteContact(id) {
  let contacts = getContacts();
  // Filtro el contacto que quiero eliminar
  contacts = contacts.filter(c => c.id !== id);
  // Guardo el array actualizado sin el contacto eliminado
  saveToStorage(STORAGE_KEY, contacts);
}
