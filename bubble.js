function Bubble(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.lifespan = 220;

    this.display = function () {
        stroke(240);
        fill(200, 220, 255, this.lifespan--);
        ellipse(this.x, this.y, this.r * 2, this.r *2);
    }

    this.move = () => {
        var vibration = 1;
        if (this.lifespan < 70) {
            vibration = 5;
        }
        this.x += random(-vibration, vibration);
        this.y += random(-vibration, vibration);
    }

    this.inside = (x, y) => {
        return dist(mouseX, mouseY, this.x, this.y) < this.r;
    }

    this.isFinished = ()=>{
        return this.lifespan <= 0;
    }
}