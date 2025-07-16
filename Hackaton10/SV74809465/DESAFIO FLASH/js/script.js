const form = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const btnBorrar = document.getElementById('borrar');


window.addEventListener('DOMContentLoaded', () => {
  mostrarLista();
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const edad = document.getElementById('edad').value.trim();

  if (!nombre || !edad) return;

  const nuevoUsuario = { nombre, edad };
  
  let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  listaUsuarios.push(nuevoUsuario);
  
  localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

    mostrarLista();

  form.reset();
});

btnBorrar.addEventListener('click', () => {
  localStorage.removeItem('usuarios');
  resultado.innerHTML = '';
});

function mostrarLista() {
  const datos = localStorage.getItem('usuarios');
  resultado.innerHTML = '';

  if (datos) {
    const lista = JSON.parse(datos);
    lista.forEach((usuario, index) => {
      const p = document.createElement('p');
      p.textContent = `${index + 1}. Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
      resultado.appendChild(p);
    });
  }
}
