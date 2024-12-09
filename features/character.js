function drawGameChar() {

    if (onPlatform && isLeft || isLeft && isFalling || isLeft) {
        drawWalkingLeft();
    }
    else if (onPlatform && isRight || isRight && isFalling || isRight) {
        drawWalkingRight();
    }
    else if (onPlatform) {
        drawStandingFrontFacing();
    }
    else if (isFalling || isPlummeting) {
        drawJumpingFacingForwards();
    }
    else {
        drawStandingFrontFacing();
    }
}

function drawJumpingLeft() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 57, 30, 30);
    fill(125, 225, 125);
    rect(gameChar_x - 3, gameChar_y - 42, 5, 30);
    fill(204, 153, 255);
    rect(gameChar_x - 8, gameChar_y - 22, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x - 8, gameChar_y - 52, 10, 15, 50, 10, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x - 7, gameChar_y - 62, 5, 10);
}

function drawJumpingRight() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 57, 30, 30);
    fill(125, 225, 125);
    rect(gameChar_x - 3, gameChar_y - 42, 5, 30);
    fill(204, 153, 255);
    rect(gameChar_x - 3, gameChar_y - 22, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x + 8, gameChar_y - 52, 10, 15, 50, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x + 9, gameChar_y - 62, 5, 10);
}

function drawWalkingLeft() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 50, 30, 30);
    fill(125, 225, 125);
    rect(gameChar_x - 3, gameChar_y - 35, 5, 30);
    fill(204, 153, 255);
    rect(gameChar_x - 8, gameChar_y - 10, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x - 8, gameChar_y - 45, 10, 15, 50, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x - 8, gameChar_y - 55, 10, 10);
}

function drawWalkingRight() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 50, 30, 30);
    fill(125, 225, 125);
    rect(gameChar_x - 2, gameChar_y - 35, 5, 30);
    fill(204, 153, 255);
    rect(gameChar_x - 3, gameChar_y - 10, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x + 8, gameChar_y - 45, 10, 15, 50, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x + 8, gameChar_y - 55, 10, 10);
}

function drawJumpingFacingForwards() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 57, 30, 30);
    fill(125, 225, 125);
    rect(gameChar_x - 10, gameChar_y - 42, 20, 30);
    fill(204, 153, 255);
    rect(gameChar_x + 5, gameChar_y - 17, 10, 10);
    rect(gameChar_x - 15, gameChar_y - 17, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x, gameChar_y - 52, 10, 15, 50, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x - 5, gameChar_y - 62, 10, 10);
    ellipse(gameChar_x + 5, gameChar_y - 62, 10, 10);
}

function drawStandingFrontFacing() {
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(125, 225, 125);
    rect(gameChar_x - 10, gameChar_y - 35, 20, 30);
    fill(280, 200, 150);
    ellipse(gameChar_x, gameChar_y - 45, 30, 30);
    fill(204, 153, 255);
    rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
    rect(gameChar_x + 6, gameChar_y - 10, 10, 10);

    fill(255, 255, 255);
    arc(gameChar_x, gameChar_y - 40, 10, 15, 50, PI + QUARTER_PI, CHORD);
    ellipse(gameChar_x - 5, gameChar_y - 50, 10, 10);
    ellipse(gameChar_x + 6, gameChar_y - 50, 10, 10);

}
