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

    // leadboard
    const containerOpen = `<div id="scoresBoard" style="
      height: 350px;
      width: 250px;
      padding: 3px 5px;
      font-size: 16xpx;
      border: 3px solid #333;
      border-radius: 5px;
      color: #333;
      background: #fff;>
    "`;
    let playersScores = '';
    const containerClose = `</div>`;
  }
}