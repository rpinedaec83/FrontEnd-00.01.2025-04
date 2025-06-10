let tarea = [];

function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const tareaTexto = input.value.trim();
    if (tareaTexto !== "") {
        tarea.push(tareaTexto);
        input.value = "";
        mostrarTareas();
    }
}

function mostrarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    tarea.forEach(function (tareaTexto, i) {
        const li = document.createElement("li");
        li.textContent = tareaTexto + " ";
        const btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.onclick = function () { eliminarTarea(i); };
        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarTarea(indice) {
    tarea.splice(indice, 1);
    mostrarTareas();
}