const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
]

const BODY = document.querySelector("body");
function randomBackground() {
    const BGI = images[Math.floor(Math.random() * images.length)];
}

randomBackground();