document.getElementById('comparar').addEventListener('click', () => {
  const p1 = document.getElementById('pokemon1').value.toLowerCase().trim();
  const p2 = document.getElementById('pokemon2').value.toLowerCase().trim();

  if (!p1 || !p2) {
    alert('Por favor ingresa ambos nombres de Pokémon.');
    return;
  }

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  Promise.all([
    fetch(apiUrl + p1).then(res => res.json()),
    fetch(apiUrl + p2).then(res => res.json())
  ])
    .then(([poke1, poke2]) => {
      mostrarComparacion(poke1, poke2);
    })
    .catch(() => {
      alert('Error al buscar uno de los Pokémons. Verifica los nombres.');
    });
});

function mostrarComparacion(p1, p2) {
  const resultado = document.getElementById('resultado');
  resultado.classList.remove('hidden');

  const hp1 = p1.stats.find(stat => stat.stat.name === 'hp').base_stat;
  const hp2 = p2.stats.find(stat => stat.stat.name === 'hp').base_stat;

  const habilidades1 = p1.abilities.map(a => a.ability.name).join(', ');
  const habilidades2 = p2.abilities.map(a => a.ability.name).join(', ');

  const tipos1 = p1.types.map(t => t.type.name).join(', ');
  const tipos2 = p2.types.map(t => t.type.name).join(', ');

  const hpClass1 = hp1 > hp2 ? 'highlight' : '';
  const hpClass2 = hp2 > hp1 ? 'highlight' : '';

  resultado.innerHTML = `
    <div class="card">
      <h3>${p1.name.toUpperCase()}</h3>
      <img src="${p1.sprites.other.home.front_default}" alt="${p1.name}" />
      <p class="${hpClass1}">HP: ${hp1}</p>
      <p>Tipos: ${tipos1}</p>
      <p>Habilidades: ${habilidades1}</p>
    </div>

    <div class="card">
      <h3>${p2.name.toUpperCase()}</h3>
      <img src="${p2.sprites.other.home.front_default}" alt="${p2.name}" />
      <p class="${hpClass2}">HP: ${hp2}</p>
      <p>Tipos: ${tipos2}</p>
      <p>Habilidades: ${habilidades2}</p>
    </div>
  `;
}
