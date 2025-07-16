document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';
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

    const saveTask = (task) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const deleteTask = (taskId) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        loadTasks();
    };

    const editTask = (taskId) => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const task = tasks.find(task => task.id === taskId);
        taskInput.value = task.text;
        addTaskButton.textContent = 'Guardar Cambios';

        addTaskButton.onclick = () => {
            task.text = taskInput.value;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskInput.value = '';
            addTaskButton.textContent = 'Agregar Tarea';
            loadTasks();
        };
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        if (taskText) {
            const task = {
                id: Date.now(),
                text: taskText
            };
            saveTask(task);
            taskInput.value = '';
            loadTasks();
        }
    });

    loadTasks();
});
