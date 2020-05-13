// 이런식으로 click 시 css class 변경 가능!
const CLICKED_CLASS = "clicked";
/*
function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
};
*/
/*
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
};
*/

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
};

function init() {
    //title.style.color = BASE_COLOR;
    //title.addEventListener("mouseenter", handleClick); // mouse 들어가면 호출
    title.addEventListener("click", handleClick); // click되면 호출
}

init();