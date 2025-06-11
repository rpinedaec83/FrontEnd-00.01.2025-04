$(document).ready(function () {
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  const $gallery = $('#gallery');

  
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(character => {
        const card = `
          <div class="card" data-id="${character.id}">
            <img src="${character.image}" alt="${character.name}" />
            <h3>${character.name}</h3>
            <button class="ver-mas">Ver más</button>
            <div class="details hidden"></div>
          </div>
        `;
        $gallery.append(card);
      });
    });

  
  $gallery.on('click', '.ver-mas', function () {
  const $btn = $(this);
  const $card = $btn.closest('.card');
  const id = $card.data('id');
  const $details = $card.find('.details');

  if ($details.html().trim() !== '') {
    $details.removeClass('hidden');
    $btn.hide();
    return;
  }

  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(character => {
      const info = `
        <p><strong>Estado:</strong> ${character.status}</p>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Género:</strong> ${character.gender}</p>
        <p><strong>Origen:</strong> ${character.origin.name}</p>     
      `;
      $details.html(info).removeClass('hidden');
      $btn.hide();
    });
});
});