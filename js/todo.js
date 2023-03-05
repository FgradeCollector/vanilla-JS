const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".to-do-list");

let toDos = [];

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function addToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    addToDo(newTodo);
    saveTodos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(localStorage.getItem("todos"));
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}