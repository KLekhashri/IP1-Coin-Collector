function createPlatform(x, y, length) {
    let p = {
        x: x,
        y: y,
        length: length,
        draw: function () {
            fill(0);
            rect(this.x, this.y, this.length, 20);
        },
        checkContact: function (gc_x, gc_y) {
            if (gc_x + 20 > this.x && gc_x < this.x + 20 + this.length) {
                let d = this.y - gc_y;
                if (d >= 0 && d < 1) {
                    return true;
                }
            }
            return false;
        }
    }
    return p;
}

function drawPlatforms() {
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
}

function checkIfCharIsUnderAnyPlatforms() {
    if (isFalling) {
        let isContact = false;
        onPlatform = false;
        for (let i = 0; i < platforms.length; i++) {
            isContact = platforms[i].checkContact(gameChar_world_x, gameChar_y);
            if (isContact) {
                onPlatform = true;
                break;
            }
        }
        if (!isContact) {
            gameChar_y += 2;
        }
    }
}