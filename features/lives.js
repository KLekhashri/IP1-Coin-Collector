function drawLifeTokens() {
  fill(0);
  for (let i = 0; i < lives; i++) {
    rect(40 * i + 900, 10, 30, 30);
  }
}

function checkPlayerDie() {
  if (gameChar_y > height || hitByEnemy == true) {
    if (lives > 0) {
      startGame();
    }
  }
}

function checkIsGameOver() {
  let gameOver = false;

  if (lives < 1 || flagpole.isReached) {
    gameOver = true;
  }
  return gameOver;
}

function drawGameOver() {
  fill(0);
  textSize(100);
  text("Game Over", 250, height / 2 - 100);

  if (lives > 0) {
    text("You Win!", 300, height / 2);
    winSound.play();
  } else {
    text("You lose!", 300, height / 2);
    //        loseSound.play();
  }
}
