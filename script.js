// DOM references
const mainContainer = document.querySelector("#container");
const newSketchButton = document.querySelector(".newGrid");
const whiteColor = document.querySelector(".white");
const blackColor = document.querySelector(".black");
const redColor = document.querySelector(".red");
const rgbColor = document.querySelector(".RGB");
const eraseGrid = document.querySelector(".erase");

let currentColor = "black";
let currentGridSize = 10;

whiteColor.addEventListener("click", () => {
    currentColor = "white"
});
blackColor.addEventListener("click", () => {
    currentColor = "black"
});
redColor.addEventListener("click", () => {
    currentColor = "red"
});
rgbColor.addEventListener("click", () => {
    currentColor = "rgb"
})



let isMouseDown = false;
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.addEventListener("mouseup", () => {
    isMouseDown = false;
})



// creating divs using DOM
function createGrid(columns) {
    mainContainer.replaceChildren(); // clear any existing grid cells (e.g while creating new grid)

    const containerSize = 750; // #container height
    const rows = columns; // set grid to square
    const singleDivSize = containerSize / columns; // as grid set to square


    for (let i = 0; i < columns * rows; i++) {
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("singleDiv");
        singleDiv.style.width = `${singleDivSize}px`;
        singleDiv.style.height = `${singleDivSize}px`;

        singleDiv.addEventListener("mousedown", () => {
            singleDiv.style.backgroundColor = setColor();
        });
        singleDiv.addEventListener("mouseover", () => {
            if (isMouseDown) {
                singleDiv.style.backgroundColor = setColor();
            }
        });

        mainContainer.appendChild(singleDiv);
    };
};

createGrid(currentGridSize);

newSketchButton.addEventListener("click", () => {
    const userRequest = +prompt("How many columns do you want?", "10");
    if (userRequest < 1 || userRequest > 100 || !Number.isInteger(userRequest)) {
        alert("Wrong input, please use number between 1 and 100");
        return;
    };
    currentGridSize = userRequest;
    createGrid(currentGridSize);
});

eraseGrid.addEventListener("click", () => {
    createGrid(currentGridSize);
})

function setColor() {
    if (currentColor === "rgb") {
        return `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
    }
    return currentColor;
}
