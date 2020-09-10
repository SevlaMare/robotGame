export default class gameMain extends Phaser.Scene {
  constructor () { super('startGame'); }

  create() {
    this.bg = this.add.image(165, 357, 'tree');
  }
};
