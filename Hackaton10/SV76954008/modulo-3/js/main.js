document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const contactForm = document.getElementById('contactForm');
    const searchInput = document.getElementById('searchInput');
    const contactList = document.getElementById('contactList');
    const exportBtn = document.getElementById('exportBtn');
    const importInput = document.getElementById('importInput');
    const toast = document.getElementById('toast');
    const toggleTheme = document.getElementById('toggleTheme');

    const showToast = (message) => {
        toast.textContent = message;
        toast.style.display = 'block';
        setTimeout(() => toast.style.display = 'none', 3000);
    };

    const renderContacts = () => {
        contactList.innerHTML = '';
        const contacts = storage.getContacts();
        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `${contact.name} - ${contact.email} - ${contact.phone} 
                <button class="delete">Eliminar</button>
                <button class="edit">Editar</button>`;
            contactList.appendChild(li);

            li.querySelector('.delete').addEventListener('click', () => {
                contactManager.deleteContact(contact.id);
                renderContacts();
                showToast('Contacto eliminado');
            });

            li.querySelector('.edit').addEventListener('click', () => {
                nameInput.value = contact.name;
                emailInput.value = contact.email;
                phoneInput.value = contact.phone;
                contactManager.deleteContact(contact.id);
                renderContacts();
                showToast('Editando contacto');
            });
        });
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Correo inválido');
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert('Teléfono inválido');
            return;
        }

        contactManager.createContact(name, email, phone);
        nameInput.value = emailInput.value = phoneInput.value = '';
        renderContacts();
        showToast('Contacto guardado');
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const filteredContacts = contactManager.filterContacts(query);
        renderFilteredContacts(filteredContacts);
    });

    exportBtn.addEventListener('click', () => {
        contactManager.exportContacts();
    });

    importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            contactManager.importContacts(file);
            renderContacts();
            showToast('Contactos importados');
        }
    });

    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    contactManager.sortContacts();
    renderContacts();
});
