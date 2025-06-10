$(document).ready(function () {
  $('#search-btn').click(function () {
    const nombre = $('#pokemon-input').val().trim().toLowerCase();
    if (!nombre) return;

    // UX: limpiar estados previos
    $('#error').text('');
    $('#pokemon-card').hide();
    $('#poke-name').text('');
    $('#poke-img').attr('src', '');
    $('#poke-abilities').empty();

    // UX: mostrar loader y desactivar botón
    $('#loader').show();
    $('#search-btn').prop('disabled', true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado, nuevamente ingresar nombre correcto');
        }
        return response.json();
      })


      .then(data => {
        $('#poke-name').text(data.name.toUpperCase());
        $('#poke-img').attr('src', data.sprites.front_default);

        const habilidades = data.abilities.map(h => `<li>${h.ability.name}</li>`).join('');
        $('#poke-abilities').html(habilidades);

        $('#pokemon-card').fadeIn();
      })
      .catch(error => {
        $('#error').text('⚠️ ' + error.message);
      })
      .finally(() => {
                                        // UX: ocultar loader y activar botón
        $('#loader').hide();
        $('#search-btn').prop('disabled', false);
      });
  });
});
