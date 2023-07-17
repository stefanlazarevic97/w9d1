import Asteroid from "./asteroid.js"

class Game {
    static DIM_X = 1200;
    static DIM_Y = 600;
    static NUM_ASTEROIDS = 10;
    static BG_COLOR = "black";

    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid({ pos: this.randomPosition() }))
        }
    }

    randomPosition() {
        return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()]
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach((asteroid => asteroid.draw(ctx)));
    }

    moveObjects() {
        this.asteroids.forEach((asteroid => asteroid.move()));
    }

    wrap(pos) {
        
    }
}

export default Game;