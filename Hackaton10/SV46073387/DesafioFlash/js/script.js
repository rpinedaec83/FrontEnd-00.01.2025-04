document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPersona");
  const info = document.getElementById("infoGuardada");

  // Mostrar info guardada al cargar
  const personaGuardada = localStorage.getItem("persona");
  if (personaGuardada) {
    const persona = JSON.parse(personaGuardada);
    info.innerHTML = `
      <p><strong>Nombre:</strong> ${persona.nombre}</p>
      <p><strong>Edad:</strong> ${persona.edad}</p>
    `;
  }

  // Guardar info en localStorage
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value.trim());

    const persona = { nombre, edad };

    localStorage.setItem("persona", JSON.stringify(persona));

    info.innerHTML = `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Edad:</strong> ${edad}</p>
    `;

    form.reset();
  });
});