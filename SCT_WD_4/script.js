let taskList = document.getElementById("taskList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");

  const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="task-text">
      <strong>${taskText}</strong><br/>
      <small>${taskDateTime ? "⏰ " + new Date(taskDateTime).toLocaleString() : ""}</small>
    </div>
    <div class="task-actions">
      <button onclick="toggleComplete(this)">✔</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}

function toggleComplete(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}

function editTask(button) {
  const li = button.closest("li");
  const textDiv = li.querySelector(".task-text");
  const currentText = textDiv.querySelector("strong").innerText;

  const newTask = prompt("Edit your task:", currentText);
  if (newTask !== null && newTask.trim() !== "") {
    textDiv.querySelector("strong").innerText = newTask.trim();
  }
}
