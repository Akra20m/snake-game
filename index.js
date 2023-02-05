const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const FPS = 7;
const tileCount = 20;
const tileSize = canvas.width / tileCount;
const objectSize = tileSize - 2;
let snakeHeadX = 10;
let snakeHeadY = 10;

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "green";
  ctx.fillRect(
    snakeHeadX * tileSize,
    snakeHeadY * tileSize,
    objectSize,
    objectSize
  );
}

function drawGame() {
  clearScreen();

  drawSnake();
  setTimeout(drawGame, 1000 / FPS);
}

drawGame();
