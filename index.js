const grid = document.querySelector(".grid");
//créer un élement div
//le rajouter à grid

for (let i = 1; i <= 49; i++) {
  let cell = document.createElement("div");
  grid.appendChild(cell);
}

for (let i = 1; i < 8; i++) {
  let cell = document.createElement("div");
  cell.classList.add("taken");
  grid.appendChild(cell);
}
