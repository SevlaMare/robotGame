import { Scene } from '../phaser.min';

export default class gameLoad extends Scene {
  constructor() { super('bootGame'); }

  preload() {
    // BACKGROUND
    this.load.image('bg', 'assets/background.png');
    this.load.image('bgForest', 'assets/startgame.png');
    this.load.image('bgEnd', 'assets/end.png');

    this.load.image('tree', 'assets/tree.png');
    this.load.image('bush', 'assets/bush.png');
    this.load.image('skull', 'assets/skull.png');
    this.load.image('cloud', 'assets/cloud.png');

    // PLATFORM - regular
    this.load.image('tile1', 'assets/tile/1.png');
    this.load.image('tile2', 'assets/tile/2.png');
    this.load.image('tile3', 'assets/tile/3.png');

    // PLATFORM - float
    this.load.image('tile14', 'assets/tile/14.png');
    this.load.image('tile15', 'assets/tile/15.png');
    this.load.image('tile16', 'assets/tile/16.png');

    // PLAYER
    this.load.spritesheet('robot', 'assets/robot.png',
      { frameWidth: 326, frameHeight: 492 });

    this.load.spritesheet('shot', 'assets/shot.png',
      { frameWidth: 175, frameHeight: 139 });

    // ENEMY
    this.load.spritesheet('ninja', 'assets/ninja.png',
      { frameWidth: 350, frameHeight: 440 });
  }

  create() {
    // --- BOOT LOAD ---
    // background
    this.bg = this.add.tileSprite(200, 300, 400, 600, 'bgForest');

    // title
    this.add.text(80, 70, 'Robot  vs  Ninja', {
      fill: '#345',
      fontSize: 'bold 36px',
      fontFamily: 'Georgias, Times, serif',
    });

    // message
    this.add.text(55, 220,
      'Press Button to Start!',
      { fill: 'red', fontSize: '22px' });

    // information
    this.add.text(50, 535,
      'CONTROLS: \nArrows and spacebar',
      { fill: '#345', fontSize: '22px' });

    // scores button
    const scoresBtn = `<h2 style="color: #345;
      padding: 3px 5px;
      border: 2px solid #345;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;
    " id="scoreBtn">Global Scores</h2>`;
    this.add.dom(120, 300).setOrigin(0).createFromHTML(scoresBtn);

    // --- MAIN GAME LOAD ---

    // --- START GAME ACTION ---
    this.input.keyboard.on('keydown', () => {
      this.scene.stop('gameLoad');
      this.scene.start('gameMain');
    });

    this.input.on('pointerup', () => {
      this.scene.stop('bootGame');
      this.scene.start('startGame');
    });

    // --- LEADBOARD BUTTON ---
  }
}
