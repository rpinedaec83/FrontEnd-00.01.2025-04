import { guardarKits, obtenerKits, borrarStorage } from './storage.js';

export class Tarea {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

let arrKits = obtenerKits();

export function getKits() {
  return arrKits;
}

export function agregarKit(tarea) {
  arrKits.push(tarea);
  guardarKits(arrKits);
}

export function borrarTodo() {
  arrKits = [];
  borrarStorage();
  return arrKits;
}

export function borrarKit(index) {
  arrKits.splice(index, 1);
  guardarKits(arrKits);
  return arrKits;
}

export function editarKit(index, nombre, descripcion) {
  arrKits[index].nombre = nombre;
  arrKits[index].descripcion = descripcion;
  guardarKits(arrKits);
  return arrKits;
}

export function buscarKit(row) {
  return arrKits.indexOf(row);
}