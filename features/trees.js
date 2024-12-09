function drawTrees() {
    for (let i = 0; i < trees.length; i++) {
        let tree = trees[i];
        drawTree(tree);
    }
}

function drawTree(tree) {
    strokeWeight(0.5);
    stroke(200, 200, 200);

    //branch
    fill(120, 100, 40);
    rect(tree.x_pos, tree.y_pos, tree.width, 145);

    //leaves
    fill(16, 94, 38);
    triangle(tree.x_pos - 40, tree.y_pos + 80,
        tree.x_pos + 20, tree.y_pos - 20,
        tree.x_pos + 80, tree.y_pos + 80);
    triangle(tree.x_pos - 40, tree.y_pos + 50,
        tree.x_pos + 20, tree.y_pos - 50,
        tree.x_pos + 80, tree.y_pos + 50);

}

function initTrees() {
    while (trees.length < 10) {
        let x = random(-100, 1000);
        let tree = { x_pos: x, y_pos: 287, width: 40 };
        trees.push(tree);

    }
}


