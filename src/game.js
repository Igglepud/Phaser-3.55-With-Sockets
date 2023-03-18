export class gameScene extends Phaser.Scene {
  constructor(config) {
    super("Game");
  }
  init = function () {};
  preload = function () {};
  create = function () {
    console.log("game scene live on client");

    let count = 0;//count number of marco's sent
    const socket = window.socket;
   //begin connection test
    socket.emit("Marco");
    console.log("Marco");
    socket.on("Polo", () => {
      console.log("Marco");
      socket.emit("Marco");
      count++;
      console.log(count);

    });
    //end connection test
  };

  update = function () {};
}
