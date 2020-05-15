const btnContainer = document.querySelector(".jsBtns");
const nameContainer = document.querySelector(".jsName");
const ageContainer = document.querySelector(".jsAge");
const boxContainer = document.querySelector(".box1");

function getOperation() {
    //const url = `http://15.164.225.191:3000/users`;
    const url = `https://reqres.in/api/users/2`;


    fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        })
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            //console.log(json.data);
            const returnObj = JSON.stringify(json.data);
            boxContainer.innerText = `${returnObj}`;
        });
}

function postOperation(content) {
    const url = `https://reqres.in/api/users`;
    const data = { name: 'peter', job: 'coder' };

    console.log(data);
    console.log(content);

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(content), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(json) {
        console.log(json);
        const returnObj = JSON.stringify(json);
        boxContainer.innerText = `${returnObj}`;
    });

    //.then(res => res.json())
    //.then(response => console.log(response))
    //.catch(error => console.error('Error:', error));
}

function getContent() {
    const content = {};

    //console.dir(nameContainer);
    content.name = nameContainer.firstChild.value;
    content.job = ageContainer.firstChild.value;

    //console.log(content);
    return content;
}

function sudmitHandler(event) {
    //console.log(event.target.id);
    const witchBtn = event.target.id;

    const content = getContent();

    if (witchBtn === "jsGet") {
        getOperation();
    } else {
        postOperation(content);
    }
};

function init() {
    btnContainer.addEventListener("click", sudmitHandler);
};

init();