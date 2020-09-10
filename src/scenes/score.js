import { Scene } from '../phaser.min';

export default class gameScores extends Scene {
  constructor() { super('scoresGame'); }

  create() {
    this.bg = this.add.tileSprite(200, 300, 400, 600, 'bgForest');

    // title
    this.add.text(120, 30, 'Leadboard', {
      fill: '#345',
      fontSize: 'bold 36px',
      fontFamily: 'Georgias, Times, serif',
    });
  }
}