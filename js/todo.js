const todoForm = document.querySelector(".todo")
const todoInput = todoForm.querySelector(".todo_input")
const ul = document.querySelector(".todo-list")
const clearUl = document.querySelector(".clear-todo-list")


let toDos = []

function saveTodo() {
    localStorage.setItem("todo_list", JSON.stringify(toDos))
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter((todo) => todo.id != li.id)
    saveTodo()
}
let claerTodos = []

function clearTodo(event){
    const li2 = event.target.parentElement;
    console.log(event);
    const li = li2
    console.log(li);
    clearUl.appendChild(li2)
    saveTodo()

}
function paintTodo(todoObj){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    span.innerText = todoObj.text
    btn1.innerText = "❌"
    btn2.innerText = "👍"
    li.id = todoObj.id
    li.appendChild(span)
    li.appendChild(btn1)
    li.appendChild(btn2)
    ul.appendChild(li)
    btn1.addEventListener("click", deleteTodo)
    btn2.addEventListener("click", clearTodo)
}




function todoSubmit(event) {
    event.preventDefault()
    const todo = todoInput.value
    todoInput.value = "";
    const todoObj = {
        text : todo,
        id : Math.random()
    }
    claerTodos.push(todoObj)
    toDos.push(todoObj)
    console.log(todoObj);
    paintTodo(todoObj)
    saveTodo()
}

todoForm.addEventListener("submit", todoSubmit)

const saveTodoList = localStorage.getItem("todo_list")

if(saveTodoList) {
    const parseTodo = JSON.parse(saveTodoList)
    toDos = parseTodo
    parseTodo.forEach(paintTodo)
}