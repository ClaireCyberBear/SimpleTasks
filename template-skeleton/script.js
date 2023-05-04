const btn = document.querySelector(".sidebar-open");
const sidebar = document.querySelector(".btn-sidebar");
const tasklist = document.querySelector(".tasklist-btn");
const newtask = document.querySelector(".newtask");
const taskform = document.querySelector(".taskform");
const add = document.querySelector(".add-btn");

btn.addEventListener("click", function () {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    sidebar.classList.add("hidden");
    btn.textContent = "Open";
  }
});

newtask.addEventListener("click", function () {
  taskform.classList.remove("hidden");
});

add.addEventListener("click", function () {
  taskform.classList.add("hidden");
});
