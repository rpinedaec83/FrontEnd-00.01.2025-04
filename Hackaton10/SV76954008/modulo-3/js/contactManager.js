const contactManager = {
    createContact: (name, email, phone) => {
        const contacts = storage.getContacts();
        const newContact = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        contacts.push(newContact);
        storage.saveContacts(contacts);
        return newContact;
    },

    deleteContact: (contactId) => {
        const contacts = storage.getContacts();
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        storage.saveContacts(updatedContacts);
    },

    editContact: (contactId, updatedData) => {
        const contacts = storage.getContacts();
        const contact = contacts.find(contact => contact.id === contactId);
        if (contact) {
            Object.assign(contact, updatedData, { updatedAt: new Date().toISOString() });
            storage.saveContacts(contacts);
        }
    },

    filterContacts: (query) => {
        const contacts = storage.getContacts();
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.email.toLowerCase().includes(query.toLowerCase()) ||
            contact.phone.includes(query)
        );
    },

    sortContacts: () => {
        const contacts = storage.getContacts();
        contacts.sort((a, b) => a.name.localeCompare(b.name));
        storage.saveContacts(contacts);
    },

    exportContacts: () => {
        const contacts = storage.getContacts();
        const blob = new Blob([JSON.stringify(contacts, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contacts.json';
        link.click();
    },

    importContacts: (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const importedContacts = JSON.parse(reader.result);
            const contacts = storage.getContacts();
            contacts.push(...importedContacts);
            storage.saveContacts(contacts);
        };
        reader.readAsText(file);
    }
};

