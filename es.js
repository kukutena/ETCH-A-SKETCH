let color = "black";
let click = true;
function gridBoard(usersize) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
 // board.style.gridTemplateColumns = `repeat(${usersize} , 1fr)`;
  //board.style.gridTemplateRows = `repeat(${usersize}, 1fr)`;

  let squarenumbers = usersize * usersize;
  for (let i = 0; i < squarenumbers; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover" , colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

gridBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    gridBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(newcolor) {
  color = newcolor;
}

function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  gridBoard(16);

}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = " start Coloring";
    } else {
      document.querySelector(".mode").textContent = "stop Coloring";
    }
  }
});