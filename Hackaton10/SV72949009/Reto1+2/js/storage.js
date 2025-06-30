export function guardarKits(kits) {
  localStorage.setItem("kits", JSON.stringify(kits));
}

export function obtenerKits() {
  const data = localStorage.getItem("kits");
  return data ? JSON.parse(data) : [];
}

export function borrarStorage() {
  localStorage.removeItem("kits");
}