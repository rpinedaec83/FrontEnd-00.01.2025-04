document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista");

  // Mostrar datos guardados al cargar
  mostrarPersonas();

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();

    if (!nombre || !edad) return;

    const persona = { nombre, edad };
    let personas = JSON.parse(localStorage.getItem("personas")) || [];
    personas.push(persona);
    localStorage.setItem("personas", JSON.stringify(personas));

    formulario.reset();
    mostrarPersonas();
  });

  function mostrarPersonas() {
    const personas = JSON.parse(localStorage.getItem("personas")) || [];
    lista.innerHTML = "";

    personas.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = `${p.nombre}, ${p.edad} años`;
      lista.appendChild(li);
    });
  }
});
