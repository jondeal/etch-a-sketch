const viewHeight = window.innerHeight;
const frameSize = viewHeight/10
const frameThickness = 2 * frameSize;

const container = document.getElementById("container");
const container2 = document.getElementById("container-2");
const frame = document.getElementById("frame");
const knobs = document.getElementById("knobs");
const leftKnob = document.getElementById("left-knob");
const rightKnob = document.getElementById("right-knob");
const shakeButton = document.getElementById("shake-button");
const resolutionButton = document.getElementById("resolution")

frame.style.maxHeight = viewHeight + "px";
frame.style.width = frame.style.maxHeight;
knobs.style.width = frame.style.width;
leftKnob.style.height = frameSize + "px";
leftKnob.style.width = frameSize + "px";
rightKnob.style.height = frameSize + "px";
rightKnob.style.width = frameSize + "px";

function changeColor() {
    this.style.backgroundColor = "black";
}

function drawBoard(sideSquares) {
    container.replaceChildren();
    const squareSize = (viewHeight - frameThickness) / sideSquares;
    container.style.width = sideSquares * squareSize + "px";
    container.style.height = container.style.width;
    container.style.marginTop = frameSize + "px";
    container2.style.width = container.style.width;
    container2.style.height = container.style.height;

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
    squares = document.getElementsByClassName("square");
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
    container.classList.remove("fade");
    setTimeout(function(){
        container.classList.add("fade");}, 10);
    for (const square of squares) {
        setTimeout(function(){
            square.style.backgroundColor = "transparent";
        }, 300);
        }
    }

function drawPrompt() {
    let sideSquares = prompt("Enter grid dimension (16 - 100)");
    if (Number(sideSquares) >= 16 && Number(sideSquares) <= 100) {
        drawBoard(sideSquares);
    } else {
        drawPrompt();
    }

}

container.addEventListener("mousemove", rotateKnobs);

shakeButton.addEventListener("click", shakeSketch);
shakeButton.addEventListener("click", fadeSquares);
resolutionButton.addEventListener("click", drawPrompt);

drawBoard(16);