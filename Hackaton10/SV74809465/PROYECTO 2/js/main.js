const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

function createTaskElement(task) {
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
  deleteBtn.onclick = () => {
    deleteTask(task.id);
    renderTasks();
  };

  li.appendChild(input);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}

function toggleEdit(id, input, button) {
  if (input.disabled) {
    input.disabled = false;
    input.focus();
    button.textContent = "💾";
  } else {
    input.disabled = true;
    updateTask(id, input.value);
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  getTasks().forEach(task => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;
  addTask(text);
  taskInput.value = "";
  renderTasks();
});

window.addEventListener("DOMContentLoaded", renderTasks);
