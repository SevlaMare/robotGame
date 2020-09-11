import { Scene } from '../phaser.min';
import { getScore } from '../connector';
import renderScores from '../helpers/render';

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

    // fetch scores
    const hash = 'XzHsDGhBgMOmUU8gUgdd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

    getScore(url).then((body) => {
      this.add.dom(70, 105)
        .setOrigin(0)
        .createFromHTML(
          renderScores(body.result.sort((a, b) => b.score - a.score)),
        );
    });

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
    document.querySelector('#backBtn').onclick = () => {
      this.scene.stop('scoresGame');
      this.scene.start('bootGame');
    };
  }
}