const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".to-do-list");

let toDos = [];

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== li.id);
    li.remove();
}

function addToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    addToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(localStorage.getItem("todos"));
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}