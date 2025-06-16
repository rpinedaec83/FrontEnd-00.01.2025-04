const storage = {
    getContacts: () => {
        try {
            return JSON.parse(localStorage.getItem('contacts')) || [];
        } catch (error) {
            console.error('Error al obtener contactos:', error);
            return [];
        }
    },

    saveContacts: (contacts) => {
        try {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        } catch (error) {
            console.error('Error al guardar contactos:', error);
        }
    }
};
