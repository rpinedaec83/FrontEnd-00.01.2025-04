// Utilidad para imprimir en pantalla
function log(mensaje) {
  const logDiv = document.getElementById('log');
  logDiv.innerHTML += `➡️ ${mensaje}<br>`;
}

// Resetear log
function resetLog() {
  document.getElementById('log').innerHTML = '';
}

// ----------------- VERSION CALLBACKS -----------------

function verificarDisponibilidadCallback(cb) {
  setTimeout(() => {
    log("✅ Habitación disponible");
    cb();
  }, 1000);
}

function procesarPagoCallback(cb) {
  setTimeout(() => {
    log("💳 Pago procesado");
    cb();
  }, 1000);
}

function confirmarReservaCallback(cb) {
  setTimeout(() => {
    log("📩 Reserva confirmada");
    cb();
  }, 1000);
}

function reservarConCallbacks() {
  resetLog();
  log("🔁 Iniciando reserva con Callbacks...");
  verificarDisponibilidadCallback(() => {
    procesarPagoCallback(() => {
      confirmarReservaCallback(() => {
        log("🏁 Reserva completada con Callbacks");
      });
    });
  });
}

// ----------------- VERSION PROMESAS -----------------

function verificarDisponibilidad() {
  return new Promise(resolve => {
    setTimeout(() => {
      log("✅ Habitación disponible");
      resolve();
    }, 1000);
  });
}

function procesarPago() {
  return new Promise(resolve => {
    setTimeout(() => {
      log("💳 Pago procesado");
      resolve();
    }, 1000);
  });
}

function confirmarReserva() {
  return new Promise(resolve => {
    setTimeout(() => {
      log("📩 Reserva confirmada");
      resolve();
    }, 1000);
  });
}

function reservarConPromesas() {
  resetLog();
  log("🔁 Iniciando reserva con Promesas...");
  verificarDisponibilidad()
    .then(procesarPago)
    .then(confirmarReserva)
    .then(() => {
      log("🏁 Reserva completada con Promesas");
    });
}

// ----------------- VERSION ASYNC/AWAIT -----------------

async function reservarConAsync() {
  resetLog();
  log("🔁 Iniciando reserva con Async/Await...");
  await verificarDisponibilidad();
  await procesarPago();
  await confirmarReserva();
  log("🏁 Reserva completada con Async/Await");
}

// ----------------- EVENTOS -----------------

document.getElementById("btnCallbacks").addEventListener("click", reservarConCallbacks);
document.getElementById("btnPromises").addEventListener("click", reservarConPromesas);
document.getElementById("btnAsync").addEventListener("click", reservarConAsync);

// ----------- 🔹 FUNCIONES DE POKÉMON (con jQuery) -----------
function showLoader(target) {
  $(target).html('<div class="loader"></div>');
}

function hideLoader(target) {
  $(target).find('.loader').remove();
}

$(document).ready(function () {
  $('#buscarBtn').click(function () {
    const nombre = $('#pokemonInput').val().toLowerCase().trim();
    if (nombre === '') {
      alert('Por favor ingresa un nombre de Pokémon.');
      return;
    }
    $('#pokemonCard').hide();
    showLoader('#pokemonCard');
    $('#buscarBtn').prop('disabled', true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => {
        if (!response.ok) throw new Error('Pokémon no encontrado');
        return response.json();
      })
      .then(data => {
        const nombre = data.name;
        const imagen = data.sprites.front_default;
        const habilidades = data.abilities.map(h => h.ability.name).join(', ');

        $('#pokemonCard').hide().html(`
          <h2>${nombre.toUpperCase()}</h2>
          <img src="${imagen}" alt="${nombre}" />
          <p><strong>Habilidades:</strong> ${habilidades}</p>
        `).fadeIn();
      })
      .catch(error => {
        $('#pokemonCard').hide().html(`<p style="color: red;">❌ ${error.message}</p>`).fadeIn();
      })
      .finally(() => {
        $('#buscarBtn').prop('disabled', false);
      });
  });

  $('#mostrarTopBtn').click(function () {
    const $btn = $(this);
    const $grid = $('#topPokemonList');
    $btn.prop('disabled', true);
    $grid.empty();
    showLoader($grid);

    const promises = [];

    for (let i = 1; i <= 50; i++) {
      const p = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(pokemon => {
          return `
            <div class="pokemon-item">
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
              <p>${pokemon.name}</p>
            </div>
          `;
        });
      promises.push(p);
    }

    Promise.all(promises)
      .then(cards => {
        $grid.hide().html(cards.join('')).fadeIn(500);
      })
      .catch(() => {
        $grid.hide().html('<p style="color:red">❌ Error al cargar la lista de Pokémon.</p>').fadeIn(500);
      })
      .finally(() => {
        $btn.prop('disabled', false);
      });
  });

  // 🔹 Rick & Morty - carga de personajes con delegación
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(personaje => {
        $('#personajes').append(`
          <div class="card" data-id="${personaje.id}">
            <h3>${personaje.name}</h3>
            <img src="${personaje.image}" alt="${personaje.name}" />
            <button class="ver-mas">Ver más</button>
            <div class="details"></div>
          </div>
        `);
      });
    });

  $('#personajes').on('click', '.ver-mas', function () {
    const card = $(this).closest('.card');
    const id = card.data('id');
    const detailsDiv = card.find('.details');

    if (detailsDiv.text().trim() !== '') {
      detailsDiv.slideToggle();
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(p => {
        detailsDiv.html(`
          <p><strong>Estado:</strong> ${p.status}</p>
          <p><strong>Especie:</strong> ${p.species}</p>
          <p><strong>Género:</strong> ${p.gender}</p>
          <p><strong>Origen:</strong> ${p.origin.name}</p>
        `).slideDown();
      });
  });

  // 🔹 Comparación de Pokémon
  $('#compararBtn').click(function () {
    const nombre1 = $('#poke1').val().trim().toLowerCase();
    const nombre2 = $('#poke2').val().trim().toLowerCase();
    const $btn = $(this);
    const $container = $('#comparacion');

    if (!nombre1 || !nombre2) {
      alert('Debes ingresar dos nombres de Pokémon.');
      return;
    }

    $btn.prop('disabled', true);
    $container.html('<div class="loader"></div>');

    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${nombre1}`).then(res => {
        if (!res.ok) throw new Error(`${nombre1} no encontrado`);
        return res.json();
      }),
      fetch(`https://pokeapi.co/api/v2/pokemon/${nombre2}`).then(res => {
        if (!res.ok) throw new Error(`${nombre2} no encontrado`);
        return res.json();
      })
    ])
      .then(([poke1, poke2]) => {
        const card = (poke) => `
          <div class="poke-card">
            <h3>${poke.name}</h3>
            <img src="${poke.sprites.front_default}" alt="${poke.name}" />
            <p><strong>HP:</strong> ${poke.stats.find(s => s.stat.name === 'hp').base_stat}</p>
            <p><strong>Tipos:</strong> ${poke.types.map(t => t.type.name).join(', ')}</p>
            <p><strong>Habilidades:</strong></p>
            <ul>
              ${poke.abilities.map(a => `<li class="highlight">${a.ability.name}</li>`).join('')}
            </ul>
          </div>
        `;

        $container.hide().html(`${card(poke1)}${card(poke2)}`).fadeIn(600);
      })
      .catch(err => {
        $container.html(`<p style="color:red">❌ ${err.message}</p>`).hide().fadeIn(500);
      })
      .finally(() => {
        $btn.prop('disabled', false);
      });
  });
});

