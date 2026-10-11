const container = document.querySelector(".container");
document.querySelector("button").addEventListener("click", () => {
    Array.from(container.children).forEach((child) => child.remove());
    gridSize = + prompt("What grid size would you like?");
    createGrid(gridSize > 100 ? 100 : gridSize);
});

createGrid(16);

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for(let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("box");
            newDiv.addEventListener("mouseenter", () => newDiv.classList.add("hover"));
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
}
