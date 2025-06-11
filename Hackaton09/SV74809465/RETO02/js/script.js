$(document).ready(function () {
  $('#pokemonForm').on('submit', function (e) {
    e.preventDefault();

    const nombre = $('#pokemonInput').val().toLowerCase().trim();
    if (!nombre) return;

    $('#pokemonCard').addClass('hidden').empty();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => {
        if (!response.ok) throw new Error('Pokémon no encontrado');
        return response.json();
      })
      .then(data => {
        const nombre = data.name;
        const imagen = data.sprites.other.home.front_default;
        const habilidades = data.abilities.map(hab => hab.ability.name).join(', ');

        const cardHtml = `
          <img src="${imagen}" alt="${nombre}" />
          <h2>${nombre}</h2>
          <p><strong>Habilidades:</strong> ${habilidades}</p>
        `;

        $('#pokemonCard').html(cardHtml).removeClass('hidden');
      })
      .catch(err => {
        $('#pokemonCard').html(`<p>❌ ${err.message}</p>`).removeClass('hidden');
      });
  });
});