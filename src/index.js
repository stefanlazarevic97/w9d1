console.log("Webpack is working!")

import MovingObject from "./moving-object.js";
import GameView from "./game-view.js"
import Game from "./game.js"

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    window.ctx = ctx;
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

    const game = new GameView(ctx);
    game.start();

    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // mo.draw(ctx);
    // mo.move();
    // mo.draw(ctx);

    // const ast = new Asteroid({ pos: [60, 60] });
    // ast.draw(ctx);
    // ast.move();
    // ast.draw(ctx);
})

window.MovingObject = MovingObject;