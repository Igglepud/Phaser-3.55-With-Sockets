// set game configuration
import { gameScene } from "./game.js";

let config = {
  
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
  scene: [ gameScene, ],
  pixelArt: false,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      //debug: true,
    },
  },
};

//create new game and send configuration
let game = new Phaser.Game(config);
