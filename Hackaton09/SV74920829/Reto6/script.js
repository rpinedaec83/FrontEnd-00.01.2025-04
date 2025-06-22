$(document).ready(function () {
  // Cargar la colección de Pokémon favoritos desde localStorage al iniciar
  let coleccion = JSON.parse(localStorage.getItem('miColeccionPokemon')) || [];
  renderColeccion();

  // Evento clic en botón de búsqueda: obtiene los nombres y realiza peticiones a la API
  $('#searchBtn').click(function () {
    const nombre1 = $('#pokemon1').val().toLowerCase().trim();
    const nombre2 = $('#pokemon2').val().toLowerCase().trim();

    if (!nombre1 || !nombre2) {
      $('#result').html('<p class="error">Por favor, ingresa ambos nombres de Pokémon.</p>');
      return;
    }

    const url1 = `https://pokeapi.co/api/v2/pokemon/${nombre1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${nombre2}`;

    // Realiza ambas peticiones en paralelo y maneja errores
    Promise.all([
      fetch(url1).then(res => { if (!res.ok) throw new Error(`Pokémon "${nombre1}" no encontrado.`); return res.json(); }),
      fetch(url2).then(res => { if (!res.ok) throw new Error(`Pokémon "${nombre2}" no encontrado.`); return res.json(); })
    ])
    .then(([poke1, poke2]) => {
      mostrarComparacion(poke1, poke2);
    })
    .catch(error => {
      $('#result').html(`<p class="error">${error.message}</p>`);
    });
  });

  // Función que muestra la comparación entre dos Pokémon (stats, tipos, habilidades)
  function mostrarComparacion(p1, p2) {
    const result = $('#result');

    // Extrae HP, tipos y habilidades de cada Pokémon
    const hp1 = p1.stats.find(stat => stat.stat.name === "hp")?.base_stat || 0;
    const hp2 = p2.stats.find(stat => stat.stat.name === "hp")?.base_stat || 0;
    const tipos1 = p1.types.map(t => t.type.name);
    const tipos2 = p2.types.map(t => t.type.name);
    const hab1 = p1.abilities.map(h => h.ability.name);
    const hab2 = p2.abilities.map(h => h.ability.name);

    // Funciones para resaltar diferencias visualmente
    const resaltarHP = (pokemonHP, otroHP) => {
      if (pokemonHP > otroHP) return 'style="color: green; font-weight: bold"';
      if (pokemonHP < otroHP) return 'style="color: red;"';
      return '';
    };
    const destacarDiferencias = (arr1, arr2) => {
      return arr1.map(item => {
        if (!arr2.includes(item)) {
          return `<span style="color: red; font-weight: bold">${item}</span>`;
        }
        return item;
      }).join(', ');
    };

    // Crea la tarjeta de cada Pokémon con botón para añadir a favoritos
    const crearCard = (poke, hp, tipos, habs, otroHP, otrosTipos, otrasHabs) => {
      const estaFavorito = coleccion.some(p => p.id === poke.id);
      return `
        <div class="pokemon-card">
          <button class="fav-btn" data-id="${poke.id}" data-nombre="${poke.name}" data-img="${poke.sprites.front_default}">
            ${estaFavorito ? '❤️' : '➕'}
          </button>
          <img src="${poke.sprites.front_default}" alt="${poke.name}" />
          <h2>${poke.name.toUpperCase()}</h2>
          <p><strong>HP:</strong> <span ${resaltarHP(hp, otroHP)}>${hp}</span></p>
          <p><strong>Tipos:</strong> ${destacarDiferencias(tipos, otrosTipos)}</p>
          <p><strong>Habilidades:</strong> ${destacarDiferencias(habs, otrasHabs)}</p>
        </div>
      `;
    };

    // Muestra ambas tarjetas lado a lado
    result.html(crearCard(p1, hp1, tipos1, hab1, hp2, tipos2, hab2) +
                crearCard(p2, hp2, tipos2, hab2, hp1, tipos1, hab1));
  }

  // Evento para agregar Pokémon a favoritos desde el resultado de comparación
  $('#result').on('click', '.fav-btn', function () {
    const id = parseInt($(this).data('id'));
    const nombre = $(this).data('nombre');
    const img = $(this).data('img');

    const existe = coleccion.some(p => p.id === id);
    if (!existe) {
      coleccion.push({ id, nombre, img });
      localStorage.setItem('miColeccionPokemon', JSON.stringify(coleccion));
      $(this).text('❤️');
    } else {
      alert('Este Pokémon ya está en tu colección.');
    }
    renderColeccion();
  });

  // Renderiza la colección de Pokémon favoritos en pantalla
  function renderColeccion() {
    const container = $('#coleccion');
    container.empty();

    if (coleccion.length === 0) {
      container.html('<p>No tienes Pokémons favoritos guardados.</p>');
      return;
    }

    coleccion.forEach(poke => {
      const card = $(`
        <div class="coleccion-card" data-id="${poke.id}">
          <button class="remove-btn" title="Eliminar">×</button>
          <img src="${poke.img}" alt="${poke.nombre}" />
          <h3>${poke.nombre.toUpperCase()}</h3>
        </div>
      `);
      container.append(card);
    });
  }

  // Permite eliminar Pokémon de la colección y actualizar vista y botones
  $('#coleccion').on('click', '.remove-btn', function () {
    const card = $(this).closest('.coleccion-card');
    const id = parseInt(card.data('id'));
    coleccion = coleccion.filter(p => p.id !== id);
    localStorage.setItem('miColeccionPokemon', JSON.stringify(coleccion));
    renderColeccion();

    // Actualiza botón favorito si Pokémon eliminado está en comparación
    $('#result .fav-btn').each(function () {
      if (parseInt($(this).data('id')) === id) {
        $(this).text('➕');
      }
    });
  });
});
