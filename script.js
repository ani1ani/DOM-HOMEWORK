const form = document.getElementById("form");
const results = document.querySelector("#results");

const TASKS_KEY = "task";

function renderTask() {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));

  if (results.hasChildNodes()) {
    results.replaceChildren();
  }

  tasks &&
    tasks.forEach((task) => {
      if (task.isCompleted) {
        const div = document.createElement("div");
        div.classList = "task";

        const label = document.createElement("label");
        label.setAttribute("for", task.id);
        label.innerText = task.task;

        const checkbox = document.createElement("input");
        checkbox.setAttribute("id", task.id);
        checkbox.setAttribute("checked", true);
        checkbox.setAttribute("type", "checkbox");

        div.append(checkbox, label);
        results.appendChild(div);
      }
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = e.target.detail;

  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));

  let newTasks = tasks
    ? [{ id: (Math.random() * 1000000).toFixed(), task: input.value, isCompleted: true }, ...tasks]
    : [{ id: (Math.random() * 1000000).toFixed(), task: input.value, isCompleted: false }];

  localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));

  renderTask();

  input.value = "";
});

renderTask();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const allTasksBtn = document.getElementById("all-tasks-btn");
const activeTasksBtn = document.getElementById("active-tasks-btn");
const completedTasksBtn = document.getElementById("completed-tasks-btn");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const task = { text: taskText, completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
const nextPageBtn = document.getElementById("all-tasks-btn");

nextPageBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const nextPageBtn1 = document.getElementById("active-tasks-btn");

nextPageBtn1.addEventListener("click", function () {
  window.location.href = "index1.html";
});

const nextPageBtn2 = document.getElementById("completed-tasks-btn");

nextPageBtn2.addEventListener("click", function () {
  window.location.href = "index2.html";
});
