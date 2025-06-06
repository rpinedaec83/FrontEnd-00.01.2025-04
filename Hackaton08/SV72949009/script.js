const tareas = [];

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = ""; 

  for (let i = 0; i < tareas.length; i++) {
    const li = document.createElement("li");
    li.textContent = tareas[i];

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
      eliminarTarea(i);
    };

    li.appendChild(botonEliminar);
    lista.appendChild(li);
  }
}

function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const tarea = input.value.trim();

  if (tarea !== "") {
    tareas.push(tarea); 
    input.value = "";   
    mostrarTareas();    
  } else {
    alert("Por favor escribe una tarea");
  }
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1); 
  mostrarTareas();         
}