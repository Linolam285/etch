let container = document.querySelector(".container");
let body = document.querySelector("body");
initialNumber = 6;


for (let i = 0; i < initialNumber; i++) {
    let row = document.createElement('div');
    row.className = "row";
    row.style.height = `calc(100%/${initialNumber+0.1})`;
    for (let i = 0; i < initialNumber; i++) {
        let grid = document.createElement('div');
        grid.className = "grid";
        grid.style.width = `calc(100%/${initialNumber+0.1})`;
        row.appendChild(grid);
    }
    container.appendChild(row);
} 

let grids = document.querySelectorAll(".grid");

choice = document.querySelector("#choice");



choice.addEventListener("click",(e) => {
    let numberGrids = prompt("Enter the number of grids*grids");
    body.removeChild(container);
    container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);
    numberGrids = parseInt(numberGrids);
    for (let i = 0; i < numberGrids; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.style.height = `calc(100%/${numberGrids+0.1})`;
        for (let i = 0; i < numberGrids; i++) {
            let grid = document.createElement('div');
            grid.className = "grid";
            grid.style.width = `calc(100%/${numberGrids+0.1})`;
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "green";
        })
    })
})

grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "green";
    })
})