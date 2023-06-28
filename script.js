const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value;
  if (todoText) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const todoTextSpan = document.createElement("span");
    todoTextSpan.innerText = todoText;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed");
    });

    li.appendChild(checkbox);
    li.appendChild(todoTextSpan);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
}
}