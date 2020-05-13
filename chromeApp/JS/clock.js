const clockContainer = document.querySelector("#js-clock"); //id는 #으로
const clockTitle = clockContainer.querySelector(".js-title"); //class는 .으로


//console.log(clockContainer);
//console.log(clockTitle);

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // 10초보다 작으면 0을 넣는 삼항연산자


}

function init() {
    setInterval(getTime, 1000);
};

init();