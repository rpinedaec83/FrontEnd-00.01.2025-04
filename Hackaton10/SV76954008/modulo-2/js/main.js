document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const loadTasks = () => {
        taskList.innerHTML = '';
        const tasks = storage.getTasks();
        tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.setAttribute('data-id', task.id);
            taskElement.innerHTML = `
                ${task.text}
                <button class="edit">Editar</button>
                <button class="delete">Eliminar</button>
            `;
            taskList.appendChild(taskElement);

            taskElement.querySelector('.edit').addEventListener('click', () => editTask(task.id));
            taskElement.querySelector('.delete').addEventListener('click', () => deleteTask(task.id));
        });
    };

    const deleteTask = (taskId) => {
        taskManager.deleteTask(taskId);
        loadTasks();
    };

    const editTask = (taskId) => {
        const tasks = storage.getTasks();
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            taskInput.value = task.text;
            addTaskButton.textContent = 'Guardar Cambios';

            addTaskButton.onclick = () => {
                taskManager.editTask(taskId, taskInput.value);
                taskInput.value = '';
                addTaskButton.textContent = 'Agregar Tarea';
                loadTasks();
            };
        }
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        if (taskText) {
            taskManager.createTask(taskText);
            taskInput.value = '';
            loadTasks();
        }
    });

    loadTasks();
});
