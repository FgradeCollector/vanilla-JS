const LOCATION = document.querySelector(".location");
const API_KEY = "e49309bfb8d1d669d3438afb9dde5394";

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    function CWT() {fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        const CITY = data.name;
        const WEATHER = data.weather[0].main;
        const TEMPERATURE = data.main.temp;
        LOCATION.innerText = `${CITY} ${WEATHER} ${TEMPERATURE}°C`;});
    }
    CWT();
    setInterval(CWT, 60000);
}
function geoError() {
    LOCATION.innerText = `Error`;
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);