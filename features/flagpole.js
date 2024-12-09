function drawFlagpole() {
    fill(125);
    rect(flagpole.x_pos, floorPos_y - 400, 30, 400);
    fill(100);
    if (flagpole.isReached) {
        rect(flagpole.x_pos, floorPos_y - 400, 100, 50);
    } else {
        rect(flagpole.x_pos, floorPos_y - 50, 100, 50);
    }
}

function checkFlagpole() {
    if (flagpole.isReached == false) {
        let d = dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y);
        if (d < 10) {
            flagpole.isReached = true;
        }
    }
}