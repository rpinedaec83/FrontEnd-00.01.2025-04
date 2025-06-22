// Ejecuta el código cuando el documento esté completamente cargado
$(document).ready(function () {

    // Al hacer clic en el botón de buscar Pokémon
    $('#searchBtn').click(function () {

        // Obtiene el nombre ingresado, lo convierte a minúsculas y elimina espacios
        let nombrePokemon = $('#pokemonName').val().toLowerCase().trim();

        // Limpia el área de resultados
        $('#result').html('');

        // Si no se escribió ningún nombre, muestra un mensaje de error
        if (nombrePokemon === '') {
            $('#result').html('<p class="error">Por favor, ingresa un nombre de Pokémon.</p>');
            return;
        }

        // Realiza una solicitud a la API de PokéAPI con el nombre ingresado
        fetch('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon)
            .then(function (respuesta) {
                // Si la respuesta no es válida (por ejemplo, Pokémon no encontrado), lanza un error
                if (!respuesta.ok) {
                    throw new Error('Pokémon no encontrado');
                }

                // Convierte la respuesta a formato JSON
                return respuesta.json();
            })
            .then(function (data) {
                // Extrae nombre, imagen y habilidades del Pokémon
                let nombre = data.name;
                let imagen = data.sprites.front_default;
                let habilidades = data.abilities.map(function (hab) {
                    return hab.ability.name;
                }).join(', '); // Une las habilidades en una sola cadena

                // Crea la tarjeta HTML con la información del Pokémon
                let tarjeta = `
                    <div class="pokemon-card">
                      <img src="${imagen}" alt="${nombre}">
                      <h2>${nombre.toUpperCase()}</h2>
                      <p><strong>Habilidades:</strong> ${habilidades}</p>
                    </div>
                `;

                // Muestra la tarjeta en el contenedor de resultados
                $('#result').html(tarjeta);
            })
            .catch(function (error) {
                // Si ocurre un error (como Pokémon no encontrado), se muestra un mensaje
                $('#result').html('<p class="error">' + error.message + '</p>');
            });
    });

    // Al hacer clic en el botón "Limpiar"
    $('#clearBtn').click(function () {
        // Limpia el campo de entrada y los resultados
        $('#pokemonName').val('');
        $('#result').html('');
    });
});
