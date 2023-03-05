const LOCATION = document.querySelector(".geolocation");
const API_KEY = "e49309bfb8d1d669d3438afb9dde5394";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    function CWT() {fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        const CITY = data.name;
        const WEATHER = data.weather[0].main;
        const TEMPERATURE = Math.floor(data.main.temp);
        LOCATION.querySelector(".weather").innerText = `${WEATHER}`;
        LOCATION.querySelector(".temp").innerText = `${TEMPERATURE}°C`;
        LOCATION.querySelector(".loc").innerText = `${CITY}`;});
    }
    CWT();
    setInterval(CWT, 60000);
}
function geoError() {
    LOCATION.innerText = `Error`;
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);