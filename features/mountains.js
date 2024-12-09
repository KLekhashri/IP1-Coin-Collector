function initMountains() {
    while (mountains.length < 10) {
        let x = random(-100, 1000);
        let mountain = { x_pos: x, y_pos: 288, width: 60 };
        mountains.push(mountain);
    }
}

function drawMountains() {
    fill(0, 0, 0);
    for (let i = 0; i < mountains.length; i++) {
        let mountain = mountains[i];
        drawMountain(mountain);
    }
}

function drawMountain(s_mountain) {
    strokeWeight(0.5);
    stroke(210, 210, 210);
    fill(46, 89, 132);
    triangle(s_mountain.x_pos - 70, s_mountain.y_pos + 144,
        s_mountain.x_pos + 30, s_mountain.y_pos - 150,
        s_mountain.x_pos + 140, s_mountain.y_pos + 144);
    fill(200, 200, 200);
    triangle(s_mountain.x_pos + 3, s_mountain.y_pos - 70,
        s_mountain.x_pos + 30, s_mountain.y_pos - 150,
        s_mountain.x_pos + 60, s_mountain.y_pos - 70);


}






