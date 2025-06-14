const ContactManager = {
  contactos: [],

  init() {
    this.contactos = Storage.get();
  },

  syncToLocalStorage() {
    Storage.set(this.contactos);
  },

  generarID() {
    return crypto.randomUUID();
  },

  validar(email, telefono) {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const telValido = /^[0-9\s\-\+]{7,15}$/.test(telefono);
    return emailValido && telValido;
  },

  crear(contacto) {
    const { nombre, email, telefono } = contacto;
    if (!this.validar(email, telefono)) return false;

    const nuevo = {
      id: this.generarID(),
      nombre: nombre.trim(),
      email: email.trim(),
      telefono: telefono.trim(),
      creado: new Date().toISOString(),
      modificado: new Date().toISOString()
    };

    this.contactos.push(nuevo);
    this.syncToLocalStorage();
    return true;
  },

  actualizar(id, nuevosDatos) {
    const contacto = this.contactos.find(c => c.id === id);
    if (!contacto || !this.validar(nuevosDatos.email, nuevosDatos.telefono)) return false;

    contacto.nombre = nuevosDatos.nombre.trim();
    contacto.email = nuevosDatos.email.trim();
    contacto.telefono = nuevosDatos.telefono.trim();
    contacto.modificado = new Date().toISOString();

    this.syncToLocalStorage();
    return true;
  },

  eliminar(id) {
    this.contactos = this.contactos.filter(c => c.id !== id);
    this.syncToLocalStorage();
  },

  obtenerOrdenados() {
    return [...this.contactos].sort((a, b) => a.nombre.localeCompare(b.nombre));
  },

  buscar(texto) {
    const filtro = texto.toLowerCase();
    return this.obtenerOrdenados().filter(c =>
      c.nombre.toLowerCase().includes(filtro) ||
      c.email.toLowerCase().includes(filtro) ||
      c.telefono.toLowerCase().includes(filtro)
    );
  },

  exportarJSON() {
    const dataStr = JSON.stringify(this.contactos, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'contactos.json';
    enlace.click();
    URL.revokeObjectURL(url);
  },

  importarJSON(archivo, callback) {
    const lector = new FileReader();
    lector.onload = (e) => {
      try {
        const datos = JSON.parse(e.target.result);
        if (Array.isArray(datos)) {
          this.contactos = datos;
          this.syncToLocalStorage();
          callback(true);
        } else {
          callback(false);
        }
      } catch {
        callback(false);
      }
    };
    lector.readAsText(archivo);
  }
};
