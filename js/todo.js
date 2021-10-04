const todoForm = document.querySelector(".todo")
const todoInput = todoForm.querySelector(".todo_input")
const ul = document.querySelector("ul")

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


function paintTodo(todoObj){
    const li = document.createElement("li")
    const span = document.createElement("span")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    span.innerText = todoObj.text
    btn1.innerText = "❌"
    li.id = todoObj.id
    li.appendChild(span)
    li.appendChild(btn1)
    ul.appendChild(li)
    btn1.addEventListener("click", deleteTodo)

}


function todoSubmit(event) {
    event.preventDefault()
    const todo = todoInput.value
    console.log(event);
    todoInput.value = "";
    const todoObj = {
        text : todo,
        id : Math.random(),
    }
    toDos.push(todoObj)
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