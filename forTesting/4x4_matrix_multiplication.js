var matrixSize = 4

// let age = prompt('나이를 입력해주세요.', 100);

// alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.

// let isBoss = confirm("당신이 주인인가요?");

// alert(isBoss); // 확인 버튼을 눌렀다면 true가 출력됩니다.

// const nullValue = null;

// let UDValue;

// if (nullValue === null) {
//     alert(`nullValue는 ${nullValue} 입니다.`);
// } else {
//     alert(`nullValue는 ${nullValue}가 아닙니다.`);
// }

// if (UDValue === undefined) {
//     alert(`UDValue는 ${UDValue} 입니다.`);
// } else {
//     alert(`UDValue는 ${UDValue}가 아닙니다.`);
// }

// function sayHi1() {
//     alert('Hello');
// }

// setTimeout(sayHi1, 1000);

// function sayHi2(phrase, who) {
//     alert(phrase + ', ' + who);
// }

// setTimeout(sayHi2, 5000, "Hello", "John");

// // 2초 간격으로 메시지를 보여줌
// let timerId = setInterval(() => alert('tick'), 2000);

// // 10초 후에 정지
// setTimeout(() => { clearInterval(timerId);
//     alert('stop'); }, 10000);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


function getRandomMatrix(e) {

    //console.dir(e);

    var target = e.parentNode.parentNode.parentNode;

    //console.dir(target);

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            target.rows[i].cells[j].childNodes[0].value = getRandomInt(1, 10);
        }
    }
}

function getMultipleMatrix() {
    var firstMatrix = document.getElementById("firstMatrix");
    var secondMatrix = document.getElementById("secondMatrix");
    var resultMatrix = document.getElementById("resultMatrix");

    //console.log(firstMatrix);

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            var sum = 0;
            for (let z = 0; z < matrixSize; z++) {
                sum += firstMatrix.rows[i].cells[z].childNodes[0].value * secondMatrix.rows[z].cells[j].childNodes[0].value;
            }
            resultMatrix.rows[i].cells[j].childNodes[0].value = sum;
        }
    }
}