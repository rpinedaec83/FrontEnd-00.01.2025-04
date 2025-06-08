$(document).ready(function () {
  // Función para mostrar el formulario
  function mostrarFormulario() {
    $('#log').html('');       // limpiar mensajes previos
    $('#formularioReserva').slideDown();
  }

  function mostrarFormulario() {
  $('#log').html('');       // limpiar mensajes previos
  // Limpiar campos de entrada
  $('#nombre').val('');
  $('#fecha').val('');
  $('#personas').val('');
  $('#formularioReserva').slideDown();
}
  // --- FUNCIONES CALLBACK ---
  function pedirDatosCallback(callback) {
    setTimeout(() => {
      const datos = {
        nombre: $('#nombre').val().trim(),
        fecha: $('#fecha').val(),
        personas: $('#personas').val()
      };
      callback(datos);
    }, 500);
  }

  function validarDatosCallback(datos, callbackError, callbackSuccess) {
    setTimeout(() => {
      if (!datos.nombre || !datos.fecha || !datos.personas) {
        callbackError('Faltan datos para la reserva.');
      } else {
        callbackSuccess(datos);
      }
    }, 500);
  }

  function confirmarReservaCallback(datos, callback) {
    setTimeout(() => {
      const partes = datos.fecha.split('-');
      const fechaFormateada = `${partes[2]}-${partes[1]}-${partes[0]}`;
      const mensaje = `
        <h3>✅ Reserva Confirmada (Callbacks)</h3>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Fecha de ingreso:</strong> ${fechaFormateada}</p>
        <p><strong>Personas:</strong> ${datos.personas}</p>
      `;
      callback(mensaje);
    }, 500);
  }

  function reservarConCallbacks() {
    pedirDatosCallback(function (datos) {
      validarDatosCallback(datos, 
        function (error) {
          alert(error);
        },
        function (datosValidos) {
          confirmarReservaCallback(datosValidos, function (mensaje) {
            $('#log').html(mensaje);
          });
        }
      );
    });
  }

  // --- FUNCIONES PROMESAS ---
  function pedirDatos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const datos = {
          nombre: $('#nombre').val().trim(),
          fecha: $('#fecha').val(),
          personas: $('#personas').val()
        };
        resolve(datos);
      }, 500);
    });
  }

  function validarDatos(datos) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!datos.nombre || !datos.fecha || !datos.personas) {
          reject('Faltan datos para la reserva.');
        } else {
          resolve(datos);
        }
      }, 500);
    });
  }

  function confirmarReserva(datos) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const partes = datos.fecha.split('-');
        const fechaFormateada = `${partes[2]}-${partes[1]}-${partes[0]}`;
        const mensaje = `
          <h3>✅ Reserva Confirmada (Promesas)</h3>
          <p><strong>Nombre:</strong> ${datos.nombre}</p>
          <p><strong>Fecha de ingreso:</strong> ${fechaFormateada}</p>
          <p><strong>Personas:</strong> ${datos.personas}</p>
        `;
        resolve(mensaje);
      }, 500);
    });
  }

  function reservarConPromesas() {
    pedirDatos()
      .then(validarDatos)
      .then(confirmarReserva)
      .then(mensaje => {
        $('#log').html(mensaje);
      })
      .catch(error => {
        alert(error);
      });
  }

  // --- FUNCIONES ASYNC/AWAIT ---
  async function reservarConAsync() {
    try {
      const datos = await pedirDatos();
      await validarDatos(datos);
      const mensaje = await confirmarReserva(datos);
      $('#log').html(mensaje);
    } catch (error) {
      alert(error);
    }
  }
  $('#btnCallbacks').click(function () {
    mostrarFormulario();
    $('#reservarBtn').off('click').on('click', function (e) {
      e.preventDefault();
      reservarConCallbacks();
    });
  });

  $('#btnPromises').click(function () {
    mostrarFormulario();
    $('#reservarBtn').off('click').on('click', function (e) {
      e.preventDefault();
      reservarConPromesas();
    });
  });

  $('#btnAsync').click(function () {
    mostrarFormulario();
    $('#reservarBtn').off('click').on('click', function (e) {
      e.preventDefault();
      reservarConAsync();
    });
  });

});
// ----------- 🔹 FUNCIONES DE POKÉMON  -----------
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
        const id = data.id;
        const svgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
        const fallbackUrl = data.sprites.front_default;
        const habilidades = data.abilities.map(h => h.ability.name).join(', ');

        // Intentar cargar el sprite SVG, con fallback si no existe
        const img = new Image();
        img.onload = function () {
          mostrarPokemon(nombre, img.src, habilidades);
        };
        img.onerror = function () {
          mostrarPokemon(nombre, fallbackUrl, habilidades);
        };
        img.src = svgUrl;
      })
      .catch(error => {
        $('#pokemonCard').hide().html(`<p style="color: red;">❌ ${error.message}</p>`).fadeIn();
      })
      .finally(() => {
        $('#buscarBtn').prop('disabled', false);
      });

    function mostrarPokemon(nombre, imagenUrl, habilidades) {
      $('#pokemonCard').hide().html(`
        <h2>${nombre.toUpperCase()}</h2>
        <img src="${imagenUrl}" alt="${nombre}" />
        <p><strong>Habilidades:</strong> ${habilidades}</p>
      `).fadeIn();
    }
  });


  // Rick & Morty - carga de personajes
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
            <img src="${poke.sprites.other['official-artwork'].front_default}" alt="${poke.name}" style="width: 200px;" />
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

