$(document).ready(function () {
  const apiBase = 'https://rickandmortyapi.com/api/character';
  const $gallery = $('#gallery');
  const $loader = $('#loader');

  let currentPage = 1;
  let isLoading = false;
  let hasMore = true;

  function fetchCharacters(page) {
    isLoading = true;
    $loader.removeClass('hidden');

    fetch(`${apiBase}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
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

          if (!data.info.next) {
            hasMore = false;
          }

          currentPage++;
          isLoading = false;
          $loader.addClass('hidden');
        }, 2000); 
      })
      .catch(() => {
        hasMore = false;
        isLoading = false;
        $loader.addClass('hidden');
      });
  }

  
  fetchCharacters(currentPage);

  
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

    fetch(`${apiBase}/${id}`)
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

  
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const scrollHeight = $(document).height();
    const windowHeight = $(this).height();

    if (scrollTop + windowHeight >= scrollHeight - 100 && !isLoading && hasMore) {
      fetchCharacters(currentPage);
    }
  });
});
