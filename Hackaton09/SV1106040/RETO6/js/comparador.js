function crearCard(poke, isFavoritable = true) {
  const hp = poke.stats.find(stat => stat.stat.name === "hp").base_stat;
  const tipos = poke.types.map(t => t.type.name).join(', ');
  const habilidades = poke.abilities.map(h => h.ability.name).join(', ');

  const btnFav = isFavoritable
    ? `<button class="fav-btn" data-id="${poke.id}" data-name="${poke.name}" data-img="${poke.sprites.front_default}">💖 Guardar</button>`//boton guardar
    : `<button class="remove-btn" data-id="${poke.id}">🗑️ Eliminar</button>`;//boton eliminar

  return `
    <div class="card" id="poke-${poke.id}">
      <h2>${poke.name.toUpperCase()}</h2>
      <img src="${poke.sprites.front_default}" alt="${poke.name}">
      <p><span class="label">HP:</span> ${hp}</p>
      <p><span class="label">Tipos:</span> ${tipos}</p>
      <p><span class="label">Habilidades:</span> ${habilidades}</p>
      ${btnFav}
    </div>
  `;
}

$('#compare-btn').click(function () {
  const p1 = $('#pokemon1').val().trim().toLowerCase();
  const p2 = $('#pokemon2').val().trim().toLowerCase();
  $('#error').text('');
  $('#comparison').html('');

  if (!p1 || !p2) {
    $('#error').text('⚠️ Escribe los nombres de ambos Pokémon.');
    return;
  }

  const url1 = `https://pokeapi.co/api/v2/pokemon/${p1}`;
  const url2 = `https://pokeapi.co/api/v2/pokemon/${p2}`;

  Promise.all([fetch(url1), fetch(url2)])
    .then(responses => {
      if (!responses[0].ok || !responses[1].ok) {
        throw new Error('Uno o ambos Pokémons no fueron encontrados');
      }
      return Promise.all(responses.map(r => r.json()));
    })
    .then(([poke1, poke2]) => {
      $('#comparison').html(`
        ${crearCard(poke1)}
        ${crearCard(poke2)}
      `);
    })
    .catch(error => {
      $('#error').text('❌ ' + error.message);
    });
});
