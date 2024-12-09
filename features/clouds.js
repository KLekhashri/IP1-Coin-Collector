function drawClouds() {
    fill(255);
    for (let i in clouds) {
        drawCloud(clouds[i]);
    }
}

function drawCloud(t_cloud) {
    ellipse(t_cloud.x_pos, t_cloud.y_pos, t_cloud.width, t_cloud.width);
    ellipse(t_cloud.x_pos - 30, t_cloud.y_pos, t_cloud.width, t_cloud.width - 10);
    ellipse(t_cloud.x_pos + 30, t_cloud.y_pos, t_cloud.width, t_cloud.width - 10);
}

function initClouds() {
    for (let i = 0; i < 10; i++) {
        let x = random(10, width - 10);
        let y = random(20, 80);
        let w = random(40, 70);
        let s = random(0.5, 1.5);
        let cloud = { x_pos: x, y_pos: y, width: w, speed: s };
        clouds.push(cloud);
    }
}

function animateClouds() {
    for (i in clouds) {
        let cloud = clouds[i];
        cloud.x_pos += cloud.speed;

        if (cloud.x_pos > width + 100) {
            cloud.x_pos = -random(-100, 1500);
        }
    }
}