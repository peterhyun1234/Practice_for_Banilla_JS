const title = document.querySelector("#title");

const BASE_COLOR = "blue";
const OTHER_COLOR = "red";

//console.dir(title);
/* 
function handleResize() {
    console.log("I have been resized");
};*/

// resize 이벤트가 오는 것을 기다림!
//window.addEventListener("resize", handleResize()); // handleResize()라고 넣으면 바로 함수가 호출됨
//window.addEventListener("resize", handleResize); // resize되면 호출


//console.dir(title); 

function handleClick() {
    const currentColor = title.style.color;
    console.log("Title have been Clicked: " + currentColor);
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
};

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // click되면 호출
}

init();