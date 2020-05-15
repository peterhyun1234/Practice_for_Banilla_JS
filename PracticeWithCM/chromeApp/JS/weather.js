const API_KEY = "9b38968c4db375258beb52fbc59fcd1f";
const COORDS = "coords";
const weatherContainer = document.querySelector(".js-weather");

// http://api.openweathermap.org/data/2.5/weather?lat=37.2834304&lon=127.04481279999999&appid=9b38968c4db375258beb52fbc59fcd1f&units=metric

function getWeather(coordsObj) {
    const lat = coordsObj.latitude;
    const lon = coordsObj.longitude;

    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        //console.log(json);
        const temperature = json.main.temp;
        const country = json.sys.country;
        const location = json.name;

        weatherContainer.innerText = `temperature: ${temperature} @ ${country}-${location}`;
    });
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(coordsObj);

}

function handleGeoError() {
    console.log("can access geolocation");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoord = localStorage.getItem(COORDS);
    if (loadedCoord === null) {
        askForCoords();
    } else {
        const parseCoord = JSON.parse(loadedCoord);
        getWeather(loadedCoord);
    }
}

function init() {
    askForCoords();
    //console.log(randomNum);
};

init();