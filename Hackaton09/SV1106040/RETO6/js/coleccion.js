function cargarColeccion() {
  const coleccion = JSON.parse(localStorage.getItem('coleccion') || '[]');
  $('#collection').html('');
  coleccion.forEach(poke => {
    $('#collection').append(`
      <div class="card" id="fav-${poke.id}">
        <h2>${poke.name.toUpperCase()}</h2>
        <img src="${poke.img}" alt="${poke.name}">
        <button class="remove-btn" data-id="${poke.id}">🗑️ Eliminar</button>
      </div>
    `);
  });
}
// agregar favoritos
function agregarAFavoritos(poke) {
  let coleccion = JSON.parse(localStorage.getItem('coleccion') || '[]');
  if (coleccion.find(p => p.id === poke.id)) return; // para evitar duplicados
  coleccion.push(poke);
  localStorage.setItem('coleccion', JSON.stringify(coleccion));
  cargarColeccion();
}
//eliminar favoritos
function eliminarFavorito(id) {
  let coleccion = JSON.parse(localStorage.getItem('coleccion') || '[]');
  coleccion = coleccion.filter(p => p.id != id);
  localStorage.setItem('coleccion', JSON.stringify(coleccion));
  cargarColeccion();
}

// Delegación de eventos
$(document).on('click', '.fav-btn', function () {
  const id = $(this).data('id');
  const name = $(this).data('name');
  const img = $(this).data('img');
  agregarAFavoritos({ id, name, img });
});

$(document).on('click', '.remove-btn', function () {
  const id = $(this).data('id');
  eliminarFavorito(id);
});

// Cargar colección al iniciar
$(document).ready(function () {
  cargarColeccion();
});
