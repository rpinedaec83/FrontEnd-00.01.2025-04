$(document).ready(function () {
    const contenedor = $("#contenedor");

    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            data.results.forEach(personaje => {
                const tarjeta = `
                    <div class="tarjeta" data-id="${personaje.id}">
                        <h3>${personaje.name}</h3>
                        <img src="${personaje.image}" alt="${personaje.name}">
                        <button class="btn-ver">Ver más</button>
                        <div class="detalles"></div>
                    </div>
                `;
                contenedor.append(tarjeta);
            });
        });

    contenedor.on("click", ".btn-ver", function () {
        const tarjeta = $(this).closest(".tarjeta");
        const id = tarjeta.data("id");
        const detallesDiv = tarjeta.find(".detalles");

        if (detallesDiv.text().trim() !== "") {
            detallesDiv.toggle();
            return;
        }

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => {
                const html = `
                    <strong>Estado:</strong> ${data.status}<br>
                    <strong>Especie:</strong> ${data.species}<br>
                    <strong>Género:</strong> ${data.gender}<br>
                    <strong>Origen:</strong> ${data.origin.name}
                `;
                detallesDiv.html(html).slideDown();
            });
    });
});