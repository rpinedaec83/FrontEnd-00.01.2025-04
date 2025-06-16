jQuery(document).ready(function () {
    jQuery("#buscarBtn").click(function () {
        const nombre = $("#pokemonInput").val().toLowerCase().trim();

        jQuery("#resultado").hide();
        jQuery("#error").hide();

        if (nombre === "") {
            jQuery("#error").text("Por favor ingresa un nombre.").show();
            return;
        }

        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokémon no encontrado");
                }
                return response.json();
            })
            .then(data => {
                jQuery("#nombrePokemon").text(capitalize(data.name));

                jQuery("#imagenPokemon").attr("src", data.sprites.front_default);

                jQuery("#habilidades").empty();
                data.abilities.forEach(hab => {
                    jQuery("#habilidades").append(`<li>${capitalize(hab.ability.name)}</li>`);
                });

                jQuery("#resultado").fadeIn();
            })
            .catch(error => {
                jQuery("#error").text("Pokémon no encontrado. Intenta con otro nombre.").fadeIn();
            });
    });

    function capitalize(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }
});