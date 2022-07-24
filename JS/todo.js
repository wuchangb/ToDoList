const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoFormInput = document.querySelector("#todo-form input");
let todos = [];

function saveTodos(){
    localStorage.setItem("Todos", JSON.stringify(todos));
}

function removeTodo(event){
const li = event.target.parentElement;
li.remove();
todos = todos.filter((todo) => todo.id !== parseInt(li.id));
saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    li.appendChild(span);
    todoList.appendChild(li);
    li.appendChild(button);
    button.addEventListener("click", removeTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoFormInput.value;
    const newTodoObj = {
        text: todoFormInput.value,
        id: Date.now(),
    };
    todoFormInput.value="";
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("Todos");

if(savedTodos !== null){
const parseTodos = JSON.parse(savedTodos);
todos = parseTodos;
parseTodos.forEach(paintTodo);
}


