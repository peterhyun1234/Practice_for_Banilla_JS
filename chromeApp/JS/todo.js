const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".js-toDoInput");

const toDoList = document.querySelector(".js-toDoList");

const toDoArray = [];
//console.log(toDoForm);
//console.log(toDoInput);
//console.log(toDoList);

function sudmitHandler(event) {
    event.preventDefault();
    const inputToDo = toDoInput.value;

    console.log(inputToDo);
    printTodo(inputToDo);
    saveToDo(inputToDo);
    toDoInput.value = "";
}

function deleteToDo(event) {
    console.log(event.target.parentNode);
}

function saveToDo() {
    localStorage.setItem("storedToDo", JSON.stringify(toDoArray)); // localstorage에는 string으로 저장해야 함
}


function printTodo(text) {
    const newId = toDoArray.length + 1;

    //console.log(text);
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", deleteToDo); //지우기 버튼 이벤트 핸들러
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    toDoList.appendChild(li);

    //List에 저장

    const toDoOdj = {
        text: text,
        id: newId
    };
    toDoArray.push(toDoOdj);

}

function loadToDo() {
    const storedToDo = localStorage.getItem("storedToDo");
    const parsedToDo = JSON.parse(storedToDo); // string 다시 JSON으로

    if (storedToDo !== null) {
        parsedToDo.forEach(function(element) {
            printTodo(element.text);
        });
    }
}


function init() {
    loadToDo();
    toDoForm.addEventListener("submit", sudmitHandler);
};

init();