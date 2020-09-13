import { Scene } from '../phaser.min';
import { getScore } from '../connector';
import { renderScores, displayError } from '../helpers/render';

export default class gameScores extends Scene {
  constructor() { super('scoresGame'); }

  create() {
    // background
    this.bg = this.add.tileSprite(200, 300, 400, 600, 'bgForest');

    // title
    this.add.text(145, 30, 'TOP 10', {
      fill: '#345',
      fontSize: 'bold 36px',
      fontFamily: 'Georgias, Times, serif',
    });

    // error box
    const errorBox = `<p style="
      color: red;
      padding: 3px 5px;
      border-radius: 5px;
      background: #fff;
      " id="error"></p>`;
    this.add.dom(150, 55).setOrigin(0).createFromHTML(errorBox);

    // fetch scores
    const hash = 'XzHsDGhBgMOmUU8gUgdd';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${hash}/scores/`;

    getScore(url)
      .then((body) => {
        this.add.dom(70, 105).setOrigin(0)
          .createFromHTML(renderScores(body.result));
      })
      .catch(err => displayError(err));

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