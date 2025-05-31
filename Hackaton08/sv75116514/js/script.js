let tareas = [];

function agregarTarea() {
    let input = document.getElementById("nuevaTarea");
    let nuevaTareaTexto = input.value.trim();

    if (nuevaTareaTexto === "") {
        alert("Por favor, ingrese una tarea");
        return;
    }

    tareas.push(nuevaTareaTexto);

    let nuevaTarea = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        botonEliminar.style.display = this.checked ? "inline" : "none";
        nuevaTarea.style.backgroundColor = this.checked ? "#e3c6ff" : ""; // verde oscuro al marcar
    });


    let texto = document.createTextNode(" " + nuevaTareaTexto + " ");

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.display = "none";
    botonEliminar.classList.add("eliminar");

    checkbox.addEventListener("change", function () {
        botonEliminar.style.display = this.checked ? "inline" : "none";
    });

    botonEliminar.onclick = function () {
        nuevaTarea.remove();
        // También eliminar del array si lo deseas:
        const index = tareas.indexOf(nuevaTareaTexto);
        if (index > -1) tareas.splice(index, 1);
    };

    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(texto);
    nuevaTarea.appendChild(botonEliminar);

    document.getElementById("listaTareas").appendChild(nuevaTarea);
    input.value = "";
}
