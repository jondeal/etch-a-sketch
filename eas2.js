let cellsPerSide = 16;

let completedRows = 0;

const grid = document.getElementById("grid");



function createWindow(cellsPerSide) {
    const viewHeight = window.innerHeight;
    let frameSize = viewHeight / 2;
    let sketchAreaHeight = viewHeight - frameSize;
    let cellSize = sketchAreaHeight / cellsPerSide;


    while (completedRows < cellsPerSide) {
        for (i = 0; i < sideSquares; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.height = cellSize + "px";
        newDiv.style.width = cellSize + "px";
        newDiv.addEventListener("mouseover", changeColor);
        grid.append(newDiv);
        }
        completedRows++;
    }

}

createWindow();