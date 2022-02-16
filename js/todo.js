const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

delteToDo = (e) => {
  const li = e.target.parentElement; //해당 요소 삭제
  li.remove();
};

paintToDo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "x";
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  button.addEventListener("click", delteToDo);
  toDoList.appendChild(li);
};

handleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
};

toDoForm.addEventListener("submit", handleToDoSubmit);
