$('#searchBtn').on('click', function() {
  const pokemonName = $('#pokemonInput').val().toLowerCase();
  if (pokemonName) {
    $('#spinner').show();
    $('#searchBtn').prop('disabled', true);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(data => {
        $('#pokemonCard').html(`
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <h3>Habilidades:</h3>
          <ul>
            ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
          </ul>
        `);
      })
      .catch(() => {
        $('#pokemonCard').html('<p>Pokémon no encontrado.</p>');
      })
      .finally(() => {
        $('#spinner').hide();
        $('#searchBtn').prop('disabled', false);
      });
  }
});

$.get('https://rickandmortyapi.com/api/character', function(data) {
  data.results.forEach(character => {
    $('#charactersList').append(`
      <div class="character">
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <button class="viewMore" data-id="${character.id}">Ver más</button>
      </div>
    `);
  });
});

$(document).on('click', '.viewMore', function() {
  const characterId = $(this).data('id');
  $.get(`https://rickandmortyapi.com/api/character/${characterId}`, function(character) {
    alert(`Estado: ${character.status}\nEspecie: ${character.species}`);
  });
});

$('#compareBtn').on('click', function() {
  const pokemon1Name = $('#pokemon1Input').val().toLowerCase();
  const pokemon2Name = $('#pokemon2Input').val().toLowerCase();

  Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1Name}`).then(res => res.json()),
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2Name}`).then(res => res.json())
  ])
  .then(([pokemon1, pokemon2]) => {
    const comparison = `
      <h2>Comparando ${pokemon1.name} y ${pokemon2.name}</h2>
      <ul>
        <li>HP: ${pokemon1.stats[0].base_stat} vs ${pokemon2.stats[0].base_stat}</li>
        <li>Tipo: ${pokemon1.types[0].type.name} vs ${pokemon2.types[0].type.name}</li>
        <li>Habilidades: ${pokemon1.abilities.map(ability => ability.ability.name).join(', ')} vs ${pokemon2.abilities.map(ability => ability.ability.name).join(', ')}</li>
      </ul>
    `;
    $('#comparisonResult').html(comparison);
  })
  .catch(() => {
    $('#comparisonResult').html('<p>Error al comparar los Pokémons.</p>');
  });
});
