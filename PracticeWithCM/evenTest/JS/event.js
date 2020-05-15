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

function init() {
    title.style.color = BASE_COLOR;
    //title.addEventListener("mouseenter", handleClick); // mouse 들어가면 호출
    title.addEventListener("click", handleClick); // click되면 호출
}

init();