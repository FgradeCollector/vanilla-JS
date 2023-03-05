const loginForm = document.querySelector(".log-in-form");
const loginInput = document.querySelector(".name-input");
const greeting = document.querySelector(".greeting");

function loginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`;
}

loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmit);
} else {
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedUsername}`;
}