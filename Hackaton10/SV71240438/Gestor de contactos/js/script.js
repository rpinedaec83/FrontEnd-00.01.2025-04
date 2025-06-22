document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const lista = document.getElementById("lista-contactos");
  const buscar = document.getElementById("buscar");
  const toast = document.getElementById("toast");

  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  renderContactos();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (!validarEmail(email) || !validarTelefono(telefono)) {
      mostrarToast("Email o teléfono inválido");
      return;
    }

    const nuevoContacto = { id: Date.now(), nombre, email, telefono };
    contactos.push(nuevoContacto);
    guardarYRenderizar();
    form.reset();
    mostrarToast("Contacto agregado");
  });

  buscar.addEventListener("input", () =>
    renderContactos(buscar.value.trim().toLowerCase())
  );

  function renderContactos(filtro = "") {
    lista.innerHTML = "";

    const ordenados = [...contactos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

    ordenados
      .filter((c) => c.nombre.toLowerCase().includes(filtro))
      .forEach((contacto) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${contacto.nombre}</strong><br>
            ${contacto.email} | ${contacto.telefono}<br>
            <button onclick="editar(${contacto.id})">Editar</button>
            <button onclick="eliminar(${contacto.id})">Eliminar</button>
          `;
        lista.appendChild(li);
      });
  }

  function guardarYRenderizar() {
    localStorage.setItem("contactos", JSON.stringify(contactos));
    renderContactos(buscar.value.trim().toLowerCase());
  }

  window.eliminar = (id) => {
    contactos = contactos.filter((c) => c.id !== id);
    guardarYRenderizar();
    mostrarToast("Contacto eliminado");
  };

  window.editar = (id) => {
    const contacto = contactos.find((c) => c.id === id);
    const nuevoNombre = prompt("Editar nombre:", contacto.nombre);
    const nuevoEmail = prompt("Editar email:", contacto.email);
    const nuevoTel = prompt("Editar teléfono:", contacto.telefono);

    if (nuevoNombre && validarEmail(nuevoEmail) && validarTelefono(nuevoTel)) {
      contacto.nombre = nuevoNombre.trim();
      contacto.email = nuevoEmail.trim();
      contacto.telefono = nuevoTel.trim();
      guardarYRenderizar();
      mostrarToast("Contacto actualizado");
    } else {
      mostrarToast("Datos inválidos al editar");
    }
  };

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarTelefono(telefono) {
    return /^[0-9]{7,15}$/.test(telefono);
  }

  function mostrarToast(mensaje) {
    toast.textContent = mensaje;
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 2000);
  }
});
