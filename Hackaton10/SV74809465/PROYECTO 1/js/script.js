let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    input.value = task.text;
    input.disabled = true;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => toggleEdit(task.id, input, editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const newTask = { id: Date.now(), text };
  tasks.push(newTask);
  saveTasks();
  input.value = "";
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleEdit(id, input, button) {
  if (input.disabled) {
    input.disabled = false;
    input.focus();
    button.textContent = "💾";
  } else {
    input.disabled = true;
    const updatedText = input.value.trim();
    const task = tasks.find(t => t.id === id);
    if (task) task.text = updatedText;
    saveTasks();
    renderTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = renderTasks;
