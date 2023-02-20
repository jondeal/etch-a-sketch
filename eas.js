const viewHeight = window.innerHeight;
const frameSize = viewHeight/10
const frameThickness = 2 * frameSize;
let sideSquares = 16;
const squareSize = (viewHeight - frameThickness) / sideSquares;
const container = document.getElementById("container");
const frame = document.getElementById("frame");
const knobs = document.getElementById("knobs");
const leftKnob = document.getElementById("left-knob");
const rightKnob = document.getElementById("right-knob");
const shakeButton = document.getElementById("shake-button");
const squares = document.getElementsByClassName("square");
const resolutionButton = document.getElementById("resolution")

frame.style.maxHeight = viewHeight + "px";
frame.style.width = frame.style.maxHeight;
container.style.width = sideSquares * squareSize + "px";
container.style.marginTop = frameSize + "px";
knobs.style.width = frame.style.width;
leftKnob.style.height = frameSize + "px";
leftKnob.style.width = frameSize + "px";
rightKnob.style.height = frameSize + "px";
rightKnob.style.width = frameSize + "px";

function changeColor() {
    this.style.backgroundColor = "black";
}

let columns = 0;

while (columns < sideSquares) {
    for (i = 0; i < sideSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.height = squareSize + "px";
    newDiv.style.width = squareSize + "px";
    newDiv.addEventListener("mouseover", changeColor);
    newDiv.classList.add("square");
    container.append(newDiv);
    }
    columns++;
}



let leftKnobRotation = 0;
let rightKnobRotation = 0;

let oldX = 0;
let oldY = 0;

function rotateKnobs(event) {
    if (event.clientX > oldX) {
        leftKnobRotation += 5;
    } else if (event.clientX < oldX) {
        leftKnobRotation -= 5;
    } else {
        leftKnobRotation += 0;
    }

    if (event.clientY < oldY) {
        rightKnobRotation += 5;
    } else if (event.clientY > oldY) {
        rightKnobRotation -= 5;
    } else {
        rightKnobRotation += 0;
    }

    leftKnob.style.transform = "rotate(" + leftKnobRotation + "deg)";
    rightKnob.style.transform = "rotate(" + rightKnobRotation + "deg)";

    oldX = event.clientX;
    oldY = event.clientY;
}

function shakeSketch() {
    frame.classList.remove("shake");
    setTimeout(function(){
        frame.classList.add("shake");}, 10);
}

function fadeSquares() {
    for (const square of squares) {
        square.classList.add("fade");
        setTimeout(function(){
            square.style.backgroundColor = "transparent";
            square.classList.remove("fade");
        }, 500);
        }
    }


container.addEventListener("mousemove", rotateKnobs);

shakeButton.addEventListener("click", shakeSketch);
shakeButton.addEventListener("click", fadeSquares);