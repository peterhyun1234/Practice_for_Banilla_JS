const body = document.querySelector("body");

function paintImage(imgNum) {
    const img = new Image();

    img.src = `./images/${imgNum}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function init() {
    const randomNum = Math.floor(Math.random() * 3 + 1);
    paintImage(randomNum);
    //console.log(randomNum);
};

init();