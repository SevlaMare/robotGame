import { Scene } from '../phaser.min';

export default class gameEnd extends Scene {
  constructor() { super('endGame'); }

  create() {
    this.bg = this.add.image(80, 300, 'bgEnd').setScale(0.6);
  }
}
