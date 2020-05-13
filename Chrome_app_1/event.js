const title = document.querySelector("#title");

//console.dir(title); 
function handleResize() {
    console.log("I have been resized");
};

// resize 이벤트가 오는 것을 기다림!
//window.addEventListener("resize", handleResize()); // handleResize()라고 넣으면 바로 함수가 호출됨
window.addEventListener("resize", handleResize); // resize되면 호출


//console.dir(title); 
function handleClick() {
    console.log("Title have been Clicked");
    title.style.color = "blue";
};

title.addEventListener("click", handleClick); // click되면 호출