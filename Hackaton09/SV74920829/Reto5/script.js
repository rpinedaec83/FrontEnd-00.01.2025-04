// Espera a que el documento esté completamente cargado
$(document).ready(function () {

  // Al hacer clic en el botón de búsqueda
  $('#searchBtn').click(function () {
    const nombre1 = $('#pokemon1').val().toLowerCase().trim();
    const nombre2 = $('#pokemon2').val().toLowerCase().trim();
    $('#result').html(''); // Limpia resultados anteriores

    // Valida que ambos campos estén completos
    if (!nombre1 || !nombre2) {
      $('#result').html('<p class="error">Por favor, ingresa ambos nombres de Pokémon.</p>');
      return;
    }

    // URLs para consultar la API de PokéAPI
    const url1 = `https://pokeapi.co/api/v2/pokemon/${nombre1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${nombre2}`;

    // Realiza ambas solicitudes al mismo tiempo
    Promise.all([
      fetch(url1).then(res => {
        if (!res.ok) throw new Error(`Pokémon "${nombre1}" no encontrado.`);
        return res.json();
      }),
      fetch(url2).then(res => {
        if (!res.ok) throw new Error(`Pokémon "${nombre2}" no encontrado.`);
        return res.json();
      })
    ])
    .then(([poke1, poke2]) => {
      // Muestra comparación si ambas respuestas son exitosas
      mostrarComparacion(poke1, poke2);
    })
    .catch(error => {
      // Muestra mensaje si ocurre un error en cualquiera de las dos peticiones
      $('#result').html(`<p class="error">${error.message}</p>`);
    });
  });

  // Botón para limpiar campos y resultados
  $('#clearBtn').click(function () {
    $('#pokemon1').val('');
    $('#pokemon2').val('');
    $('#result').html('');
  });

  // Función para mostrar comparación entre dos Pokémon
  function mostrarComparacion(p1, p2) {
    const result = $('#result');

    // Extrae el HP (vida base) de cada Pokémon
    const hp1 = p1.stats.find(stat => stat.stat.name === "hp")?.base_stat || 0;
    const hp2 = p2.stats.find(stat => stat.stat.name === "hp")?.base_stat || 0;

    // Tipos (agua, fuego, etc.)
    const tipos1 = p1.types.map(t => t.type.name);
    const tipos2 = p2.types.map(t => t.type.name);

    // Habilidades
    const hab1 = p1.abilities.map(h => h.ability.name);
    const hab2 = p2.abilities.map(h => h.ability.name);

    // Resalta HP si es mayor o menor que el del otro
    const resaltarHP = (pokemonHP, otroHP) => {
      if (pokemonHP > otroHP) return 'style="color: green; font-weight: bold"';
      if (pokemonHP < otroHP) return 'style="color: red;"';
      return '';
    };

    // Destaca diferencias entre tipos o habilidades
    const destacarDiferencias = (arr1, arr2) => {
      return arr1.map(item => {
        if (!arr2.includes(item)) {
          return `<span style="color: red; font-weight: bold">${item}</span>`;
        }
        return item;
      }).join(', ');
    };

    // Crea la tarjeta HTML para mostrar un Pokémon
    const crearCard = (poke, hp, tipos, habs, otroHP, otrosTipos, otrasHabs) => {
      return `
        <div class="pokemon-card">
          <img src="${poke.sprites.front_default}" alt="${poke.name}">
          <h2>${poke.name.toUpperCase()}</h2>
          <p><strong>HP:</strong> <span ${resaltarHP(hp, otroHP)}>${hp}</span></p>
          <p><strong>Tipos:</strong> ${destacarDiferencias(tipos, otrosTipos)}</p>
          <p><strong>Habilidades:</strong> ${destacarDiferencias(habs, otrasHabs)}</p>
        </div>
      `;
    };

    // Genera y muestra ambas tarjetas comparadas
    const cards = crearCard(p1, hp1, tipos1, hab1, hp2, tipos2, hab2) +
                  crearCard(p2, hp2, tipos2, hab2, hp1, tipos1, hab1);

    result.html(cards);
  }
});
