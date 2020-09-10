export default class gameMain extends Phaser.Scene {
  constructor() { super('startGame'); }

  create() {
    this.bg = this.add.image(0, 0, 'bg')
      .setOrigin(0, 0)
      .setScale(0.65)
      .setScrollFactor(0);
  }
}
