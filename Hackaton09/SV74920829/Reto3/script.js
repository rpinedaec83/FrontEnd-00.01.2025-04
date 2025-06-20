// Espera a que el documento esté completamente cargado
$(document).ready(function () {

  const apiURL = 'https://rickandmortyapi.com/api/character';

  // Hace una solicitud GET para obtener los personajes
  $.get(apiURL, function (respuesta) {
    const personajes = respuesta.results;

    // Recorre cada personaje y crea una tarjeta HTML
    personajes.forEach(function (personaje) {
      const tarjeta = `
        <div class="card" data-id="${personaje.id}">
          <h3>${personaje.name}</h3>
          <img src="${personaje.image}" alt="${personaje.name}">
          <button class="view-more">Ver más</button>
          <div class="details" style="display: none;"></div> <!-- Detalles ocultos al inicio -->
        </div>
      `;
      // Agrega cada tarjeta al contenedor #gallery
      $('#gallery').append(tarjeta);
    });
  });

  // Evento para mostrar/ocultar detalles al hacer clic en "Ver más"
  $('#gallery').on('click', '.view-more', function () {
    const tarjeta = $(this).closest('.card'); // Obtiene la tarjeta clickeada
    const personajeId = tarjeta.data('id');   // ID del personaje
    const contenedorDetalles = tarjeta.find('.details'); // Div donde se mostrarán detalles

    // Si los detalles ya están visibles, los oculta
    if (contenedorDetalles.is(':visible')) {
      contenedorDetalles.slideUp();
      $(this).text('Ver más'); // Cambia texto del botón
      return;
    }

    // Si los detalles están ocultos, hace una nueva solicitud con el ID del personaje
    $.get(`https://rickandmortyapi.com/api/character/${personajeId}`, function (personaje) {

      // Crea el contenido HTML con los detalles del personaje
      const htmlDetalles = `
        <strong>Estado:</strong> ${personaje.status}<br>
        <strong>Especie:</strong> ${personaje.species}<br>
        <strong>Género:</strong> ${personaje.gender}<br>
        <strong>Origen:</strong> ${personaje.origin.name}
      `;

      // Inserta los detalles y los muestra con animación
      contenedorDetalles.html(htmlDetalles).slideDown();
      tarjeta.find('.view-more').text('Ocultar'); // Cambia texto del botón
    });
  });

});
