import { Scene } from '../phaser.min';

export default class gameEnd extends Scene {
  constructor() { super('endGame'); }

  create() {
    this.bg = this.add.image(80, 300, 'bgEnd').setScale(0.6);

    // title
    this.add.text(120, 80, 'Game Over', {
      fill: 'red',
      fontSize: 'bold 36px',
      fontFamily: 'Georgias, Times, serif'
    })

    // score
    const score = `<p>SCORE ${gS.score}<p>`
    this.add.dom(165, 140).setOrigin(0).createFromHTML(score);
  }
}
