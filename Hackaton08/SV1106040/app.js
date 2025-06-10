// Array 
let tareas = [];                          // Se crea una lista vacía para guardar las tareas 

// Agregar una tarea
function addTask() {                      // Se define una función que se ejecuta al hacer clic en "Agregar"
  const input = document.getElementById("taskInput");     // Se obtiene el campo de entrada de texto (input)
  const tareaTexto = input.value.trim();                  // Se guarda el texto ingresado, quitando espacios al inicio y al final

  if (tareaTexto !== "") {                // Si el usuario escribió algo (no está vacío)...
    tareas.push(tareaTexto);              // ...se agrega esa tarea al array 'tareas'
    input.value = "";                     // Se limpia el campo de texto para escribir una nueva tarea
    renderTasks();                        // Se llama a la función que muestra las tareas actualizadas en la pantalla
    console.log("tareas", tareas);        // Muestra en la consola cómo está el array de tareas
  } else {                                // Si el campo estaba vacío...
    alert("Por favor no se olvide, escribe una tarea.");   // ...se muestra una alerta al usuario
  }
}

// Eliminar una tarea
function deleteTask(index) {              // Recibe el número de la tarea que se quiere eliminar
  tareas.splice(index, 1);                // Elimina 1 tarea del array, desde la posición indicada (index)
  renderTasks();                          // Llama a la función para volver a mostrar la lista actualizada
}

// Mostrar las tareas en pantalla
function renderTasks() {
  const lista = document.getElementById("todo-list");     // Obtiene el <ul> donde se mostrarán las tareas
  lista.innerHTML = "";                   // Limpia la lista actual para no duplicar elementos

  tareas.forEach((tarea, index) => {      // Recorre cada tarea en el array, junto con su posición (index)
    const li = document.createElement("li");  // Crea un nuevo elemento de lista (<li>) para mostrar la tarea
    li.textContent = tarea;                  // Pone el texto de la tarea dentro del <li>

    const btn = document.createElement("button"); // Crea un botón
    btn.textContent = "Eliminar";                // El texto del botón será "Eliminar"
    btn.onclick = () => deleteTask(index);       // Cuando se haga clic, se llamará a deleteTask con el número de tarea

    li.appendChild(btn);                 // Se añade el botón dentro del <li>
    lista.appendChild(li);              // Se añade el <li>  a la lista <ul>
  });
}
