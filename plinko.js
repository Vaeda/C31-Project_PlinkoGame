class Plinkos {

    constructor (x, y) {

        var options = {
            isStatic: true,

        }

        this.body = Bodies.circle(x, y, 15, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display() {

        ellipseMode(CENTER);
        fill("white");
        ellipse(this.x, this.y, 15);
    }

}