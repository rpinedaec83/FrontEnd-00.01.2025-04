const tareas = [];

    const input = document.getElementById('tareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const lista = document.getElementById('listaTareas');

    agregarBtn.addEventListener('click', () => {
      const texto = input.value.trim();
      if (texto !== "") {
        tareas.push(texto);
        console.log(`Tarea agregada: "${texto}"`);
        mostrarTareas();
        input.value = "";
      }
    });

    function eliminarTarea(index) {
      const eliminar = tareas.splice(index, 1);
      console.log(`Tarea eliminada: "${eliminar}"`);
      mostrarTareas();
    }

    function mostrarTareas() {
      lista.innerHTML = "";
      tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('eliminar');
        btnEliminar.onclick = () => eliminarTarea(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
      });

      console.log("Lista actual de tareas:");
      tareas.forEach((t, i) => {
        console.log(`${i + 1}. ${t}`);
      });
    }