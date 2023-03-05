const CLOCK = document.querySelector(".clock");

function CLOCKTIME() {
    const TIME = new Date();
    const hour = String (TIME.getHours());
    const minute = String (TIME.getMinutes());
    CLOCK.innerText = `${hour.padStart(2,"0")}:${minute.padStart(2,"0")}`;
}

CLOCKTIME();
setInterval(CLOCKTIME, 1000);