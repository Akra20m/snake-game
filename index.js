const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const FPS = 7;

function drawGame() {
  setTimeout(drawGame, 1000 / FPS);
}

drawGame();
