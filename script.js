// Default values

let click = true;
let color = 'black';
let size = 32;

// A function that fills the board with squares

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    board.appendChild(square);
    if (click) {
      square.addEventListener('mouseover', paintSquare);
    }
  }
}

populateBoard(size);

// A function that paints the squares when hovering

function paintSquare() {
  this.style.backgroundColor = color;
}

// Change size button

function changeSize() {
  let size = prompt('Enter a number between 2 and 100', '');
  size = parseInt(size);
  if (typeof(size) !== 'number' || size < 2 || size > 100) {
    alert('Invalid input');
    changeSize();
  } else {
      populateBoard(size);
  }
}

let csButton = document.querySelector("#changeSize");

csButton.addEventListener('click', changeSize);

// Reset button

let rsButton = document.querySelector("#reset");

rsButton.addEventListener('click', () => {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = 'white');
});

//

let bcButton = document.querySelector("#black");

bcButton.addEventListener('click', () => {
  color = 'black';
})

//

let rcButton = document.querySelector("#randomColor");

rcButton.addEventListener('click', () => {
  color = `hsl(${Math.random() * 360}, 100%, 50%)`;
})



