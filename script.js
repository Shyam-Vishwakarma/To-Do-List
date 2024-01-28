const taskInputEl = document.querySelector(".taskInput");
const addBtnEl = document.querySelector(".add");
const listsEl = document.querySelector(".lists");
var tasks = [];
const addTask = function () {
  const task = taskInputEl.value;
  if (task.length === 0) {
    alert("Task cannot be empty!");
    return;
  }
  const i = tasks.length;
  tasks.push(task);
  const html = `<div class="list" id="list${i}">${i + 1}: ${task}</div>
  <button type="button" class="btn remove" id="${i}">Remove</button>`;
  listsEl.insertAdjacentHTML("beforeend", html);
  taskInputEl.value = taskInputEl.ariaPlaceholder;
  setStyle();
};

const removeTask = function (i) {
  if (i >= tasks.length) return;
  tasks.splice(i, 1);
  console.log(tasks);
  renderTasks();
};

const renderTasks = function () {
  listsEl.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const html = `<div class="list" id="list${i}">${i + 1}: ${tasks[i]}</div>
  <button type="button" class="btn remove" id="${i}">Remove</button>`;
    listsEl.insertAdjacentHTML("beforeend", html);
  }
  setStyle();
};

const setStyle = function () {
  const lists = document.querySelectorAll(".list");
  for (let i = 0; i < lists.length; i++) {
    if (i % 2) lists[i].style.backgroundColor = "#f8d5ab";
    else lists[i].style.backgroundColor = "#f4c181";
  }
};
addBtnEl.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

listsEl.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove")) {
    removeTask(parseInt(e.target.id));
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
