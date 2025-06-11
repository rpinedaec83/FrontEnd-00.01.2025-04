$(document).ready(function () {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  // Obtener personajes
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const characters = data.results;
      characters.forEach(personaje => {
        $('#gallery').append(`
          <div class="card" data-id="${personaje.id}">
            <h3>${personaje.name}</h3>
            <img src="${personaje.image}" alt="${personaje.name}">
            <button class="ver-mas">Ver más</button>
            <div class="details" style="display: none;"></div>
          </div>
        `);
      });
    });

  // Delegación de eventos para los botones "Ver más"
  $('#gallery').on('click', '.ver-mas', function () {
    const card = $(this).closest('.card');
    const id = card.data('id');
    const detailsDiv = card.find('.details');

    // Evitar recarga si ya están visibles
    if (detailsDiv.is(':visible')) {
      detailsDiv.slideUp();
      return;
    }

    // Cargar detalles desde la API
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        detailsDiv.html(`
          <strong>Estado:</strong> ${data.status}<br>
          <strong>Especie:</strong> ${data.species}<br>
          <strong>Género:</strong> ${data.gender}<br>
          <strong>Origen:</strong> ${data.origin.name}
        `).slideDown();
      });
  });
});
