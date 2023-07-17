import MovingObject from "./moving-object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {
    static COLOR = "gray";
    static RADIUS = 30;
    static SPEED = 4;

    constructor(options) {
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        options.pos = options.pos;
        options.vel = Util.randomVec(Asteroid.SPEED);
           
        super(options);
    }
}

export default Asteroid;