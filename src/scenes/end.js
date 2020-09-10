import { Scene } from '../phaser.min';

export default class gameEnd extends Scene {
  constructor() { super('endGame'); }

  create() {
    this.bg = this.add.image(80, 300, 'bgEnd').setScale(0.6);

    // title
    this.add.text(120, 80, 'Game Over', {
      fill: 'red',
      fontSize: 'bold 36px',
      fontFamily: 'Georgias, Times, serif',
    });

    // score
    const score = `<p>SCORE ${window.gS.score}<p>`;
    this.add.dom(165, 140).setOrigin(0).createFromHTML(score);

    // SUBMIT SCORE
    const inputName = `<form>
    <input style="color: #333;
      width: 160px;
      padding: 10px;
      background: #fff;
    " id="fieldName">
    <input type="button" value="GO" 
      id="sendName"
      style="color: #333;
      padding: 8px;
      background: #fff;
      border: solid 2px #333;
      cursor: pointer;
      font-size: 16px0">
    </form>`;
    this.add.dom(85, 270).setOrigin(0).createFromHTML(inputName);

    // RESET BUTTON
    const restartBtn = `<h2 style="color: #fff;
      padding: 3px 5px;
      border: 2px solid #fff;
      border-radius: 5px;
      background: #333;
      cursor: pointer;"
      id="resetBtn">Play Again</h2>`;
    this.add.dom(140, 400).setOrigin(0).createFromHTML(restartBtn);

    // RESET ACTION
    const resetBtn = document.querySelector('#resetBtn');

    resetBtn.onclick = () => {
      window.gS.score = 0;

      this.scene.stop('endGame');
      this.scene.start('startGame');
    };
  }
}
