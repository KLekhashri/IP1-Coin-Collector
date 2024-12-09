function drawCollectables() {
    for (let i = 0; i < collectables.length; i++) {
        let collectable = collectables[i];
        drawCollectable(collectable);
    }
}

function drawCollectable(collectable) {
    if (collectable.isFound == false) {
        fill(255, 215, 0);
        strokeWeight(6);
        stroke(220, 185, 0);
        ellipse(collectable.x_pos, collectable.y_pos - 20, collectable.size, collectable.size);
        fill(255, 0, 255);
        stroke(255);
        strokeWeight(1);
    }

}

function collectCollectables() {
    for (let i = 0; i < collectables.length; i++) {
        if (collectables[i].isFound == false) {
            //check if game character is in the range of the collectable
            if (dist(gameChar_world_x, gameChar_y, collectables[i].x_pos + 15, collectables[i].y_pos) < 20) {
                collectables[i].isFound = true;
                game_score++;
                collectSound.play();
            }
        }
    }
}

//return true if Collectable is On a Canyon, else false
function isCollectableOnCanyon(c_c) {
    let onCanyon = false;

    for (i in canyons) {
        let x1_limit = canyons[i].x_pos - c_c.size;
        let x2_limit = canyons[i].x_pos + canyons[i].width;
        if (c_c.x_pos > x1_limit && c_c.x_pos < x2_limit) {
            onCanyon = true;
            break; //exit the for loop
        }
    }
    return onCanyon; // true or false
}

function drawGameScore() {
    fill(0);
    noStroke();
    textSize(40);
    text("score:" + game_score, 20, 20);
}