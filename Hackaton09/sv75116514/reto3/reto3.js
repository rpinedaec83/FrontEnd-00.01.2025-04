$(document).ready(function() {
    $.get('https://rickandmortyapi.com/api/character', function(data) {
      data.results.forEach(personaje => {
        $('#gallery').append(`
          <div class="card" data-id="${personaje.id}">
            <h3>${personaje.name}</h3>
            <img src="${personaje.image}" alt="${personaje.name}">
            <br>
            <button class="ver-mas">Ver más</button>
            <div class="details"></div>
          </div>
        `);
      });
    });
  
    $('#gallery').on('click', '.ver-mas', function() {
      const card = $(this).closest('.card');
      const id = card.data('id');
      const detailsDiv = card.find('.details');
  
      if (detailsDiv.children().length > 0) {
        detailsDiv.slideToggle();
      } else {
        $.get(`https://rickandmortyapi.com/api/character/${id}`, function(data) {
          detailsDiv.html(`
            <p><strong>Estado:</strong> ${data.status}</p>
            <p><strong>Especie:</strong> ${data.species}</p>
            <p><strong>Género:</strong> ${data.gender}</p>
          `).slideDown();
        });
      }
    });
  });
  