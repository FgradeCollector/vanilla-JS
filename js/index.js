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

const BGI = document.querySelector(".bgi");
const radomBgi = images[Math.floor(Math.random() * images.length)];
BGI.src = `jpg/${radomBgi}`;