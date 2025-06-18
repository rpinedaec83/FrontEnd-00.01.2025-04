// Importo funciones del gestor de contactos y del manejo de localStorage
import { getContacts, saveContact, deleteContact } from './contactManager.js';
import { saveToStorage, loadFromStorage } from './storage.js';

// Obtengo elementos del DOM
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const searchInput = document.getElementById('search');
const contactList = document.getElementById('contact-list');
const themeBtn = document.getElementById('toggle-theme');
const exportBtn = document.getElementById('export-btn');
const importFileInput = document.getElementById('import-file');
const toast = document.getElementById('toast');

// Variable para saber si estamos editando un contacto
let editingId = null;

// Evento para guardar o actualizar contacto
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !phone) {
    showToast("Completa todos los campos");
    return;
  }

  const contact = {
    id: editingId,
    name,
    email,
    phone,
    updatedAt: new Date().toISOString(),
  };

  saveContact(contact);
  form.reset();
  editingId = null;
  showToast(editingId ? "Contacto actualizado" : "Contacto guardado");
  renderContacts();
});

// Evento para buscar contactos en tiempo real
searchInput.addEventListener('input', () => {
  renderContacts();
});

// Muestra la lista de contactos filtrados y ordenados
function renderContacts() {
  const searchTerm = searchInput.value.toLowerCase();
  const contacts = getContacts()
    .filter(c => c.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => a.name.localeCompare(b.name));

  contactList.innerHTML = '';

  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${contact.name}</strong><br />
        <small>${contact.email} | ${contact.phone}</small>
      </div>
      <div class="actions">
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;

    // Botón para editar contacto
    li.querySelector('.edit-btn').addEventListener('click', () => {
      nameInput.value = contact.name;
      emailInput.value = contact.email;
      phoneInput.value = contact.phone;
      editingId = contact.id;
    });

    // Botón para eliminar contacto
    li.querySelector('.delete-btn').addEventListener('click', () => {
      if (confirm("¿Eliminar contacto?")) {
        deleteContact(contact.id);
        showToast("Contacto eliminado");
        renderContacts();
      }
    });

    contactList.appendChild(li);
  });
}

// Cambia el modo oscuro y guarda la preferencia
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const current = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', current);
});

// Aplica el modo oscuro si ya estaba activado
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Exporta los contactos a un archivo JSON
exportBtn.addEventListener('click', () => {
  const contacts = getContacts();
  const blob = new Blob([JSON.stringify(contacts, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contactos.json';
  a.click();
  showToast("Archivo exportado");
});

// Importa contactos desde un archivo JSON
importFileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const importedContacts = JSON.parse(event.target.result);
      if (!Array.isArray(importedContacts)) throw new Error("Formato no válido");

      const existing = getContacts();
      const merged = [...existing, ...importedContacts];
      saveToStorage('contacts', merged);
      renderContacts();
      showToast("Contactos importados correctamente");
    } catch (error) {
      showToast("Error al importar contactos");
    }
  };
  reader.readAsText(file);
});

// Muestra un mensaje tipo toast por unos segundos
function showToast(message) {
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// Mostrar contactos al cargar la página
renderContacts();
