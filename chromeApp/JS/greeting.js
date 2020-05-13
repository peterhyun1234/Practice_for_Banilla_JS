const formContainer = document.querySelector(".js-nameForm");
const input = formContainer.querySelector(".js-nameInput");

const greetingContainer = document.querySelector(".js-greeting");

function sudmitHandler(event) {
    event.preventDefault();
    const inputName = input.value;

    printGreeting(inputName);
    saveName(inputName);
}

function saveName(text) {
    localStorage.setItem("name", text);
}

function askForName() {
    formContainer.classList.add("showing");
    formContainer.addEventListener("submit", sudmitHandler);
}

function printGreeting(text) {
    formContainer.classList.remove("showing");
    greetingContainer.classList.add("showing");
    greetingContainer.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem("name");

    console.log("currentUser: " + currentUser);
    if (currentUser === null) {
        askForName();
    } else {
        printGreeting(currentUser);
    }
}

function init() {
    loadName();
    //setInterval(getTime, 1000);
};

init();