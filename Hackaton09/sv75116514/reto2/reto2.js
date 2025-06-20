$(document).ready(function () {
  $('#resultado').hide(); // Ocultar cuadro al inicio

  $('#buscar').click(function () {
    const nombre = $('#pokemon-nombre').val().toLowerCase().trim();

    if (!nombre) {
      alert('Por favor, ingresa un nombre de Pokémon');
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => {
        if (!response.ok) throw new Error("Pokémon no encontrado");
        return response.json();
      })
      .then(data => {
        const nombre = data.name;
        const imagen = data.sprites.front_default;
        const habilidades = data.abilities.map(h => h.ability.name).join(', ');

        $('#resultado').html(`
          <h2>${nombre}</h2>
          <img src="${imagen}" alt="${nombre}">
          <p><strong>Habilidades:</strong> ${habilidades}</p>
        `).show(); // Mostrar cuadro cuando hay resultados
      })
      .catch(error => {
        $('#resultado').html(`<p style="color:red;">${error.message}</p>`).show(); // Mostrar también si hay error
      });
  });
});
