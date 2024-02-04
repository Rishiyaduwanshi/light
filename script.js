

console.log("Script.js initializing");
let intervalId;

function setRandomColor() {
    let boxes = document.querySelector(".div").children;

    function getRandomColor() {
        let val1 = Math.ceil(0 + Math.random() * 255);
        let val2 = Math.ceil(0 + Math.random() * 255);
        let val3 = Math.ceil(0 + Math.random() * 255);
        return `rgb(${val1}, ${val2}, ${val3})`;
    }

    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
        e.style.borderColor = getRandomColor();
    });

    document.body.style.backgroundColor = getRandomColor();
}

function startColorChange() {
    intervalId = setInterval(setRandomColor, 50);
    document.getElementById("song").play();

}

function stopColorChange() {
    clearInterval(intervalId);
    document.getElementById("song").pause();
}
