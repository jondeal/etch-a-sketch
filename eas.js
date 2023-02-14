const viewHeight = window.innerHeight;
const sideSquares = 16;
const squareSize = viewHeight/ (sideSquares + 4);
console.log(squareSize);
const container = document.getElementById("container");

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

leftKnob = document.getElementById("left-knob");

function rotateKnob() {
    // const rotation = leftKnob.style.transform;
    // console.log(rotation);
    leftKnob.style.transform = "rotate(45deg)";

}
container.style.margin = (squareSize * 2) + "px";
container.addEventListener("mousemove", rotateKnob);