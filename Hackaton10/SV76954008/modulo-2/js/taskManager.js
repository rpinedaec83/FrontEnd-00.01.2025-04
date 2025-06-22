const taskManager = {
    createTask: (taskText) => {
        const tasks = storage.getTasks();
        const task = {
            id: Date.now(),
            text: taskText
        };
        tasks.push(task);
        storage.saveTasks(tasks);
        return task;
    },

    deleteTask: (taskId) => {
        storage.deleteTask(taskId);
    },

    editTask: (taskId, newText) => {
        const tasks = storage.getTasks();
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.text = newText;
            storage.saveTasks(tasks);
        }
    },

    syncToLocalStorage: () => {
        const tasks = storage.getTasks();
        storage.saveTasks(tasks);
    }
};
