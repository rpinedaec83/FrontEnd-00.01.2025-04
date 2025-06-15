export class ContactManager {
  constructor() {
    this.ordenAsc = true;
  }

  ordenarContactos(contactos) {
    return contactos.slice().sort((a, b) => {
      return this.ordenAsc ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
    });
  }

  toggleOrden() {
    this.ordenAsc = !this.ordenAsc;
  }
}