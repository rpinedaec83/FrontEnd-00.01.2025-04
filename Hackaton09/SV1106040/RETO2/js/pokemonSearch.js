$(document).ready(function () {
  $('#search-btn').click(function () {
    const nombre = $('#pokemon-input').val().trim().toLowerCase();
    if (!nombre) return;

    $('#error').text('');
    $('#pokemon-card').hide();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado, ingresar nombre correcto del pokemon');
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
      });
  });
});

