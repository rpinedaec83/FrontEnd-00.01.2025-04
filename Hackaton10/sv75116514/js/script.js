document.addEventListener("DOMContentLoaded", () => {
    class Libro {
      constructor(titulo, autor, genero, anio, calificacion, portada) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
        this.calificacion = calificacion;
        this.portada = portada;
      }
    }
    let librosPorPagina = 5;
    let paginaActual = parseInt(localStorage.getItem("paginaActual")) || 1;

    let libros = JSON.parse(localStorage.getItem("Libros")) || [];
    let indiceEditar=null;
  
    const form = document.getElementById("formLibro");
    const tabla = document.getElementById("tablaLibros");
  
    form.addEventListener("submit", (e) => {
        e.preventDefault();
      
        const titulo = document.getElementById("titulo").value.trim();
        const autor = document.getElementById("autor").value.trim();
        const genero = document.getElementById("genero").value.trim();
        const anio = parseInt(document.getElementById("anio").value);
        const calificacion = parseFloat(document.getElementById("calificacion").value);
        let portadaInput = document.getElementById("portada").value.trim();
let portada = portadaInput.startsWith("http://") || portadaInput.startsWith("https://") ? portadaInput : "";

        if (!titulo || !autor || !genero || isNaN(anio)) {
          Swal.fire("Campos obligatorios", "Por favor completa todos los campos obligatorios.", "warning");
          return;
        }
      
        if (anio < 1000 || anio > new Date().getFullYear()) {
          Swal.fire("Año inválido", "Por favor ingresa un año válido.", "error");
          return;
        }
      
        if (!isNaN(calificacion) && (calificacion < 1 || calificacion > 10)) {
          Swal.fire("Calificación inválida", "Debe estar entre 1 y 10.", "error");
          return;
        }
      
        const nuevoLibro = new Libro(titulo, autor, genero, anio, calificacion, portada);
      
        if (indiceEditar !== null) {
          libros[indiceEditar] = nuevoLibro;
          indiceEditar = null;
          Swal.fire("Editado", "El libro ha sido actualizado correctamente.", "success");
        } else {
          libros.push(nuevoLibro);
          Swal.fire("Agregado", "El libro ha sido añadido al catálogo.", "success");
        }
      
        localStorage.setItem("Libros", JSON.stringify(libros));
        mostrarLibros();
        form.reset();
      
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalLibro"));
        modal.hide();
      });
      
  
    window.eliminarLibro = function(index) {
      if (confirm("¿Eliminar este libro?")) {
        libros.splice(index, 1);
        localStorage.setItem("Libros", JSON.stringify(libros));
        mostrarLibros();
      }
    };
  
    window.eliminarTodasLasTareas = function() {
      if (confirm("¿Estás seguro de eliminar todos los libros?")) {
        libros = [];
        localStorage.removeItem("Libros");
        mostrarLibros();
      }
    };

    window.editarLibro = function(index) {
        const libro = libros[index];
      
        document.getElementById("titulo").value = libro.titulo;
        document.getElementById("autor").value = libro.autor;
        document.getElementById("genero").value = libro.genero;
        document.getElementById("anio").value = libro.anio;
        document.getElementById("calificacion").value = libro.calificacion;
        document.getElementById("portada").value =
        libro.portada && (libro.portada.startsWith("http://") || libro.portada.startsWith("https://"))
          ? libro.portada
          : "";
            
        indiceEditar = index;
      
        const modal = new bootstrap.Modal(document.getElementById("modalLibro"));
        modal.show();
      };
      
      function mostrarLibros() {
        tabla.innerHTML = "";
        libros.sort((a, b) => a.titulo.localeCompare(b.titulo));
      
        const inicio = (paginaActual - 1) * librosPorPagina;
        const fin = inicio + librosPorPagina;
        const librosPagina = libros.slice(inicio, fin);
      
        librosPagina.forEach((libro, index) => {
          const realIndex = inicio + index;
          tabla.innerHTML += `
            <tr>
              <td>${libro.titulo}</td>
              <td>${libro.autor}</td>
              <td>${libro.genero}</td>
              <td>${libro.anio}</td>
              <td>${libro.calificacion || "-"}</td>
                <td>
                ${
                    libro.portada
                    ? `<img src="${libro.portada}" width="50" height="75" style="object-fit: cover;" 
                            onerror="this.remove()" alt="Portada" />`
                    : ""
                }
                </td>

              <td>
                <button class="btn btn-warning btn-sm" onclick="editarLibro(${realIndex})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${realIndex})">Eliminar</button>
              </td>
            </tr>
          `;
        });
      
        renderizarPaginacion();
      }
      
      function renderizarPaginacion() {
        const totalPaginas = Math.ceil(libros.length / librosPorPagina);
        const paginacion = document.getElementById("paginacion");
        paginacion.innerHTML = "";
      
        for (let i = 1; i <= totalPaginas; i++) {
          paginacion.innerHTML += `
            <li class="page-item ${i === paginaActual ? 'active' : ''}">
              <button class="page-link" onclick="cambiarPagina(${i})">${i}</button>
            </li>
          `;
        }
      }
      
      window.cambiarPagina = function(nuevaPagina) {
        paginaActual = nuevaPagina;
        localStorage.setItem("paginaActual", paginaActual);
        mostrarLibros();
      };
      mostrarLibros();
  });



  