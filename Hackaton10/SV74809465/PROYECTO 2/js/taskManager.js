let tasks = loadTasks();

function syncToLocalStorage() {
  saveTasks(tasks);
}

function getTasks() {
  return tasks;
}

function addTask(text) {
  const newTask = {
    id: Date.now(),
    text: text.trim()
  };
  tasks.push(newTask);
  syncToLocalStorage();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  syncToLocalStorage();
}

function updateTask(id, newText) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.text = newText.trim();
    syncToLocalStorage();
  }
}
