function drawGround() {
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
}

function drawSky() {
    background(100, 155, 255); //fill the sky blue  
}