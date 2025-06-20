// Mostrar datos guardados al cargar
window.onload = function () {
  const datos = localStorage.getItem('usuario');
  if (datos) {
    const usuario = JSON.parse(datos);
    document.getElementById('infoGuardada').innerText =
      `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
  }
};

// Guardar al enviar formulario
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;

  const usuario = {
    nombre: nombre,
    edad: edad
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));

  document.getElementById('infoGuardada').innerText =
    `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;

  // Limpia el formulario
  document.getElementById('userForm').reset();
});
