const loginForm = document.querySelector(".login-form")
const loginBtn = loginForm.querySelector(".login-btn")
const loginInput = loginForm.querySelector(".login-input")
const h1 = document.querySelector(".paint-username")

function paintUserName(userName) {
    h1.innerText = `Hello ${userName} :) `
    loginForm.classList.add("hidden")
}

function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("username",userName)
    paintUserName(userName);
}

const saveUser = localStorage.getItem("username")

if (saveUser === null){
    loginForm.addEventListener("submit", loginSubmit)
}else{
    paintUserName(saveUser)
}




