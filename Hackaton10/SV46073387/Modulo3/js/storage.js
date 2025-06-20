export class Storage {
  obtenerContactos() {
    return JSON.parse(localStorage.getItem('contactos') || '[]');
  }

  guardarContactos(contactos) {
    localStorage.setItem('contactos', JSON.stringify(contactos));
  }

  agregarContacto(contacto) {
    const contactos = this.obtenerContactos();
    const ahora = new Date().toLocaleString();
    contacto.id = crypto.randomUUID();
    contacto.modificado = ahora;
    contacto.creado = ahora;
    contactos.push(contacto);
    this.guardarContactos(contactos);
  }

  actualizarContacto(id, nuevosDatos) {
    const contactos = this.obtenerContactos();
    const ahora = new Date().toLocaleString();
    const index = contactos.findIndex(c => c.id === id);
    if (index !== -1) {
      contactos[index] = { ...contactos[index], ...nuevosDatos, modificado: ahora };
      this.guardarContactos(contactos);
    }
  }

  eliminarContacto(id) {
    const contactos = this.obtenerContactos().filter(c => c.id !== id);
    this.guardarContactos(contactos);
  }

  obtenerContacto(id) {
    return this.obtenerContactos().find(c => c.id === id);
  }

  importarContactos(contactosImportados) {
    const actuales = this.obtenerContactos();
    const nuevos = contactosImportados.map(c => ({
      ...c,
      id: crypto.randomUUID(),
      modificado: new Date().toLocaleString(),
      creado: new Date().toLocaleString()
    }));
    this.guardarContactos([...actuales, ...nuevos]);
  }
}