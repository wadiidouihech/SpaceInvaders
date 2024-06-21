//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardheight = tileSize * rows; // 32 * 16
let context;

//ship
let shipWidth = tileSize * 2;
let shipHeight = tileSize;
let shipX = (tileSize * columns) / 2 - tileSize;
let shipY = tileSize * rows - tileSize * 2;

let ship = {
  x: shipX,
  y: shipY,
  width: shipWidth,
  height: shipHeight,
};

let shipImg;

shipVelocityX = tileSize; //ship moving speed

window.onload = function () {
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardheight;
  context = board.getContext("2d"); //used for drawing on the board

  //draw initial ship
  //context.fillStyle = "green";
  //context.fillRect(ship.x, ship.y, ship.width, ship.height);

  //load images
  shipImg = new Image();
  shipImg.src = "./assets/ship.png";
  shipImg.onload = function () {
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
  };

  requestAnimationFrame(update);
  document.addEventListener("keydown", moveShip);
};

//drawing the ship over and over again
function update() {
  requestAnimationFrame(update);

  context.clearRect(0, 0, board.width, board.height);

  //ship
  context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
}

function moveShip(e) {
  if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
    ship.x -= shipVelocityX; //move left one tile
  } else if (
    e.code == "ArrowRight" &&
    ship.x + shipVelocityX + ship.width <= board.width
  ) {
    ship.x += shipVelocityX; //move right one tile
  }
}
