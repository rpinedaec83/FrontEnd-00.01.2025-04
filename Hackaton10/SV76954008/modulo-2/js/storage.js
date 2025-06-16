const storage = {
    getTasks: () => {
        try {
            return JSON.parse(localStorage.getItem('tasks')) || [];
        } catch (error) {
            console.error('Error al obtener tareas del localStorage:', error);
            return [];
        }
    },

    saveTasks: (tasks) => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error al guardar tareas en localStorage:', error);
        }
    },

    deleteTask: (taskId) => {
        const tasks = storage.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        storage.saveTasks(updatedTasks);
    }
};
