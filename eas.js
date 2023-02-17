const viewHeight = window.innerHeight;
const frameSize = viewHeight/10
const frameThickness = 2 * frameSize;
let sideSquares = 16;
const squareSize = (viewHeight - frameThickness) / sideSquares;
const container = document.getElementById("container");
const frame = document.getElementById("frame");

frame.style.height = viewHeight + "px";
frame.style.width = frame.style.height;
container.style.width = sideSquares * squareSize + "px";

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
    container.append(newDiv);
    }
    columns++;
}

// leftKnob = document.getElementById("left-knob");
// rightKnob = document.getElementById("right-knob");

// let leftKnobRotation = 0;
// let rightKnobRotation = 0;

// let oldX = 0;
// let oldY = 0;

// function rotateKnobs(event) {
//     if (event.clientX > oldX) {
//         leftKnobRotation += 5;
//     } else if (event.clientX < oldX) {
//         leftKnobRotation -= 5;
//     } else {
//         leftKnobRotation += 0;
//     }

//     if (event.clientY < oldY) {
//         rightKnobRotation += 5;
//     } else if (event.clientY > oldY) {
//         rightKnobRotation -= 5;
//     } else {
//         rightKnobRotation += 0;
//     }

//     leftKnob.style.transform = "rotate(" + leftKnobRotation + "deg)";
//     rightKnob.style.transform = "rotate(" + rightKnobRotation + "deg)";

//     oldX = event.clientX;
//     oldY = event.clientY;
// }

// container.style.margin = (frameSize) + "px";
// container.addEventListener("mousemove", rotateKnobs);