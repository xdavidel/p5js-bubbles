var bubbles = [];

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(0);
    for (var i = bubbles.length -1; i >= 0; i--) {
        bubbles[i].move();
        bubbles[i].display();
        if (bubbles[i].isFinished()) {
            bubbles.splice(i, 1);
        }
    }
}

function mousePressed() {
    var needAdd = true;
    for (var i = bubbles.length -1; i >= 0; i--) {
        if (bubbles[i].inside(mouseX, mouseY)) {
            needAdd = false;
            bubbles.splice(i, 1);
        }
    }

    if (needAdd) {
        bubbles.push(new Bubble(mouseX, mouseY, 15));
    }
}