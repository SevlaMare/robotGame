import { Scene } from '../phaser.min';
import { getScore } from '../connector';

export default class gameScores extends Scene {
  constructor() { super('scoresGame'); }

  create() {
    // background
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
    const containerClose = '</div>';

    // fetch scores
    const allScores = getScore();

    const keys = Object.keys(allScores);
    const values = Object.values(allScores);

    for (let i = 0; i < keys.length; i += 1) {
      const player = keys[i];
      const { score } = values[i];

      playersScores += `<p>${score} by ${player}</p>`;
    }

    // string list of players scores
    const scoreBoard = containerOpen + playersScores + containerClose;

    // display scores
    this.add.dom(70, 105).setOrigin(0).createFromHTML(scoreBoard);

    // button back title
    const backBtn = `<h2 style="color: #333;
      padding: 3px 5px;
      border: 2px solid #345;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;
      " id="backBtn">Back to title</h2>`;
    this.add.dom(130, 500).setOrigin(0).createFromHTML(backBtn);

    // back action
    document.querySelector('#backBtn').onclick = () => window.location.reload();
  }
}