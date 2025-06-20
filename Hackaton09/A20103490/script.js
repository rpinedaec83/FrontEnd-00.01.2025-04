$('#buscarBtn').on('click', function () {
    const nombre = $('#pokemonInput').val().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    $('#resultado').empty(); // limpia resultados previos

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Pokémon no encontrado");
            return response.json();
        })
        .then(data => {
            const habilidades = data.abilities.map(h => h.ability.name).join(', ');
            const card = `
            <div class="pokemon-card">
              <h2>${data.name.toUpperCase()}</h2>
              <img src="${data.sprites.front_default}" alt="${data.name}" />
              <p><strong>Habilidades:</strong> ${habilidades}</p>
            </div>
          `;
            $('#resultado').html(card);
        })
        .catch(error => {
            $('#resultado').html(`<p class="error">❌ ${error.message}</p>`);
        });
});




$(document).ready(function () {
    fetch('https://rickandmortyapi.com/api/character?page=1')
        .then(res => res.json())
        .then(data => {
            const personajes = data.results;
            personajes.forEach(p => {
                $('#galeria').append(`
              <div class="personaje" data-id="${p.id}">
                <h3>${p.name}</h3>
                <img src="${p.image}" alt="${p.name}">
                <button class="btn-vermas">Ver más</button>
                <div class="detalles" style="display:none;"></div>
              </div>
            `);
            });
        });


    $('#galeria').on('click', '.btn-vermas', function () {
        const card = $(this).closest('.personaje');
        const id = card.data('id');
        const detalles = card.find('.detalles');

        if (detalles.is(':empty')) {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(res => res.json())
                .then(p => {
                    detalles.html(`
                <p><strong>Estado:</strong> ${p.status}</p>
                <p><strong>Especie:</strong> ${p.species}</p>
                <p><strong>Género:</strong> ${p.gender}</p>
                <p><strong>Origen:</strong> ${p.origin.name}</p>
              `).slideDown();
                });
        } else {
            detalles.slideToggle();
        }
    });
});



$('#compararBtn').on('click', function () {
    const nombre1 = $('#poke1').val().toLowerCase().trim();
    const nombre2 = $('#poke2').val().toLowerCase().trim();
    const url1 = `https://pokeapi.co/api/v2/pokemon/${nombre1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${nombre2}`;
    $('#resultado').empty();

    Promise.all([fetch(url1), fetch(url2)])
        .then(responses => {
            if (!responses[0].ok || !responses[1].ok) throw new Error("Uno o ambos Pokémons no encontrados");
            return Promise.all(responses.map(r => r.json()));
        })
        .then(([data1, data2]) => {
            const getHP = p => p.stats.find(stat => stat.stat.name === 'hp').base_stat;

            const hp1 = getHP(data1);
            const hp2 = getHP(data2);

            const tipos1 = data1.types.map(t => t.type.name).join(', ');
            const tipos2 = data2.types.map(t => t.type.name).join(', ');

            const habilidades1 = data1.abilities.map(a => a.ability.name).join(', ');
            const habilidades2 = data2.abilities.map(a => a.ability.name).join(', ');

            const diferencia = (val1, val2) => val1 !== val2 ? 'diferente' : '';

            const card1 = `
            <div class="pokemon">
              <h2>${data1.name.toUpperCase()}</h2>
              <img src="${data1.sprites.front_default}" alt="${data1.name}">
              <p class="${diferencia(hp1, hp2)}"><strong>HP:</strong> ${hp1}</p>
              <p class="${diferencia(tipos1, tipos2)}"><strong>Tipos:</strong> ${tipos1}</p>
              <p class="${diferencia(habilidades1, habilidades2)}"><strong>Habilidades:</strong> ${habilidades1}</p>
            </div>
          `;

            const card2 = `
            <div class="pokemon">
              <h2>${data2.name.toUpperCase()}</h2>
              <img src="${data2.sprites.front_default}" alt="${data2.name}">
              <p class="${diferencia(hp2, hp1)}"><strong>HP:</strong> ${hp2}</p>
              <p class="${diferencia(tipos2, tipos1)}"><strong>Tipos:</strong> ${tipos2}</p>
              <p class="${diferencia(habilidades2, habilidades1)}"><strong>Habilidades:</strong> ${habilidades2}</p>
            </div>
          `;

            $('#resultado').html(card1 + card2);
        })
        .catch(err => {
            $('#resultado').html(`<p style="color:red;">❌ ${err.message}</p>`);
        });
});