console.log("Webpack is working!")

import MovingObject from "./moving-object.js";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    window.ctx = ctx;

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    window.mo = mo;
})

window.MovingObject = MovingObject;