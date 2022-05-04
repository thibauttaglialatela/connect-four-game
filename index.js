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

const squares = document.querySelectorAll(".grid div");
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');
let currentPlayer = 1;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        //si le square en dessous a la classe taken vous pouvez mettre jeton au dessus
        if (squares[i + 7].classList.contains('taken')) {
            if (currentPlayer === 1) {
                squares[i].classList.add('taken');
                squares[i].classList.add('player-one');
                currentPlayer = 2;
                displayCurrentPlayer.innerHTML = currentPlayer;
            } else if (currentPlayer === 2){
                squares[i].classList.add('taken');
                squares[i].classList.add('player-two');
                currentPlayer = 1;
                displayCurrentPlayer.innerHTML = currentPlayer;
            } else alert('you can go here');
        }
    })
}