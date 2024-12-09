function drawCanyons() {
    for (let i = 0; i < canyons.length; i++) {
        let canyon = canyons[i];
        drawCanyon(canyon);
    }
}

function drawCanyon(canyon) {
    fill(210, 180, 140);
    rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);
}

function checkIfGameCharFallIntoCanyon() {
    for (let i = 0; i < canyons.length; i++) {
        let canyon = canyons[i];
        //check if game character is over the canyon
        if ((gameChar_world_x > canyon.x_pos + gameChar_width / 2 && gameChar_y == floorPos_y) && (gameChar_world_x < canyon.x_pos + canyon.width - gameChar_width / 2 && gameChar_y == floorPos_y)) {
            isPlummeting = true;
            lives--;
            //fallSound. play();
        }
    }
}


