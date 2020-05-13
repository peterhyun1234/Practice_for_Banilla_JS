//const title = document.getElementById("title");
//console.log(title);

//title.innerHTML = "asdasd";

//console.dir(title); // 이거 유용할 듯!!!

//console.log(title.clientHeight);

const Title = document.querySelector("title"); // title tag 찾기

const title2 = document.querySelector("#title"); // #은 id 찾을 수 있음!

console.log(title);
console.log(title2);

testFunction1 = function(arr) {
    console.log(arr.name);
    console.log(arr.age);
};

function testFunction2(arr) {
    console.log(arr.name);
    console.log(arr.age);
};

testFunction3 = (arr) => {
    console.log(arr.name);
    console.log(arr.age);
};

let TestArray = {
    name: "HB",
    age: 26,
};

//testFunction1(TestArray);
//testFunction2(TestArray);
//testFunction3(TestArray);


const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(2, 5);

// 템플릿 리터럴
//console.log(`${plus} ${minus} ${multiply} ${divide} ${power}`);