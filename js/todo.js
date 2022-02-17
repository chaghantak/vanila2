const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //새로고침할때마다 덮어써지는이유->toDos가 고정적으로 []를 반환

function saveToDos() {
  //localStorage에 string형태로 저장하는 function
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 어떤 object나 array를 다 string으로 변환
} //JSON.parse는 string을 배열 형태로 가져오는것

deleteToDo = (e) => {
  const li = e.target.parentElement; //해당 요소 삭제
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

paintToDo = (newTodo) => {
  //Form태그에서 받아온 정보로 잡기능 (삭제 저장 리스트 등등)
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "x";

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
};

handleToDoSubmit = (e) => {
  //Form태그에 정보 담는 기능
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(), //ms단위로 숫자 출력
  };
  toDos.push(newToDoObj); //정보담기 ->localstorage(only text만 담을 수 있다)에 넣어보자
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}
