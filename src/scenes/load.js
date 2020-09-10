export default class Load extends Phaser.Scene {
  constructor () { super('Load'); }

  preload () {
    // this.load.image('bgForest', 'assets/startgame.png');
  }

  create() {
    this.bg = this.add.tileSprite(200, 300, 400, 600, 'bgForest');
  }
};
