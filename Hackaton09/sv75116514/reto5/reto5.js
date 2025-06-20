document.getElementById('compareBtn').addEventListener('click', () => {
    const name1 = document.getElementById('pokemon1').value.toLowerCase();
    const name2 = document.getElementById('pokemon2').value.toLowerCase();
  
    const url1 = `https://pokeapi.co/api/v2/pokemon/${name1}`;
    const url2 = `https://pokeapi.co/api/v2/pokemon/${name2}`;
  
    Promise.all([fetch(url1), fetch(url2)])
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(([poke1, poke2]) => {
        displayComparison(poke1, poke2);
      })
      .catch(error => {
        document.getElementById('results').innerHTML = `<p>Error</p>`;
      });
  });
  
  function displayComparison(p1, p2) {
    const hp1 = p1.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const hp2 = p2.stats.find(stat => stat.stat.name === 'hp').base_stat;
  
    const types1 = p1.types.map(t => t.type.name).join(', ');
    const types2 = p2.types.map(t => t.type.name).join(', ');
  
    const abilities1 = p1.abilities.map(a => a.ability.name).join(', ');
    const abilities2 = p2.abilities.map(a => a.ability.name).join(', ');
  
    document.getElementById('results').innerHTML = `
      <div style="display: flex; gap: 2rem;">
        <div>
          <h3>${p1.name}</h3>
          <img src="${p1.sprites.front_default}" alt="${p1.name}">
          <p><strong>HP:</strong> ${hp1}</p>
          <p><strong>Tipos:</strong> ${types1}</p>
          <p><strong>Habilidades:</strong> ${abilities1}</p>
        </div>
        <div>
          <h3>${p2.name}</h3>
          <img src="${p2.sprites.front_default}" alt="${p2.name}">
          <p><strong>HP:</strong> ${hp2}</p>
          <p><strong>Tipos:</strong> ${types2}</p>
          <p><strong>Habilidades:</strong> ${abilities2}</p>
        </div>
      </div>
    `;
  }
  