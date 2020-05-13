const clockContainer = document.querySelector("#js-clock"); //id는 #으로
const clockTitle = clockContainer.querySelector(".js-title"); //class는 .으로


//console.log(clockContainer);
//console.log(clockTitle);

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;


}

function init() {
    setInterval(getTime, 1000);
};

init();