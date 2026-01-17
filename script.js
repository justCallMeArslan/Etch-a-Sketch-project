// DOM references
const mainContainer = document.querySelector("#container");
const cell = document.querySelector(".singleDiv");

let isMouseDown = false;
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

// creating divs using DOM
function createGrid(columns) {
    mainContainer.replaceChildren(); // clear any existing grid cells (e.g while 
    // creating new grid as per user input)

    const containerSize = 750;  // same as container's height in CSS
    const rows = columns; // making grid square, more readable
    const singleDivSize = containerSize / columns; // divides height of each element equally


    for (let i = 0; i < columns * rows; i++) { // we set 10 columns , rows = columns, so to fully 
        // fill container we need maximum of 100 boxes, i<100 
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("singleDiv");
        // set singleDiv size dynamically
        singleDiv.style.width = `${750 / columns}px`; // dividing 100% width to numbers of columns to 
        // fill all boxes precisely in % of total width
        singleDiv.style.height = `${singleDivSize}px`; // same as width but for height in px

        // setting up effect to paint each singleDiv

        const randomColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;


        singleDiv.addEventListener("mousedown", () => {
            singleDiv.style.backgroundColor = randomColor;
        });
        singleDiv.addEventListener("mouseover", () => {
            if (isMouseDown) {
                singleDiv.style.backgroundColor = randomColor;
            }
        });

        mainContainer.appendChild(singleDiv);

    }
}

createGrid(25);