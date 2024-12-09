function enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.currentX = x;
  this.inc = 1;

  this.update = function () {
    this.currentX += this.inc;
    if (this.currentX > this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
  };

  this.draw = function () {
    this.update();
    fill(255, 0, 0);
    ellipse(this.currentX, this.y, 20, 20);
  };

  this.checkContact = function (gc_x, gc_y) {
    let d = dist(gc_x, gc_y, this.currentX, this.y);
    if (d < 20) {
      return true;
    }
    return false;
  };
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
  }
}

function checkIfGameCharInContactWithEnemies() {
  if (checkIsGameOver()) {
    return;
  }

  for (let i = 0; i < enemies.length; i++) {
    let isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
    if (isContact) {
      hitByEnemy = true;
      lives--;
      break;
    }
  }
}
