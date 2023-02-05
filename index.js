const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const FPS = 7;
const tileCount = 20;
const tileSize = canvas.width / tileCount;
const objectSize = tileSize - 2;
let snakeHeadX = 10;
let snakeHeadY = 10;
let snakeXSpeed = 0;
let snakeYSpeed = 0;
let appleX = 4;
let appleY = 4;

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowUp") {
    if (snakeYSpeed == 1) {
      return;
    }
    snakeXSpeed = 0;
    snakeYSpeed = -1;
  }
  if (event.code == "ArrowDown") {
    if (snakeYSpeed == -1) {
      return;
    }
    snakeXSpeed = 0;
    snakeYSpeed = 1;
  }
  if (event.code == "ArrowLeft") {
    if (snakeXSpeed == 1) {
      return;
    }
    snakeXSpeed = -1;
    snakeYSpeed = 0;
  }
  if (event.code == "ArrowRight") {
    if (snakeXSpeed == -1) {
      return;
    }
    snakeXSpeed = 1;
    snakeYSpeed = 0;
  }
});

function changeSnakePosition() {
  snakeHeadX = snakeHeadX + snakeXSpeed;
  snakeHeadY = snakeHeadY + snakeYSpeed;
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkAppleCollision() {
  if (snakeHeadX == appleX && snakeHeadY == appleY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
  }
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileSize, appleY * tileSize, objectSize, objectSize);
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
  changeSnakePosition();
  clearScreen();

  checkAppleCollision();

  drawApple();
  drawSnake();
  setTimeout(drawGame, 1000 / FPS);
}

drawGame();
