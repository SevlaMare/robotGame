export default class gameMain extends Phaser.Scene {
  constructor() { super('startGame'); }

  create() {
    const gS = { score: 0 };
    const viewportHeight = 600;

    // background
    this.bg = this.add.image(0, 0, 'bg')
      .setOrigin(0, 0)
      .setScale(0.65)
      .setScrollFactor(0);

    // stage decoration
    this.bg = this.add.image(165, 357, 'tree');
    this.bush = this.add.image(550, 340, 'bush');
    this.skull = this.add.image(1000, 465, 'skull');
    this.cloud = this.add.image(350, 80, 'cloud').setScale(0.4);

    this.moveCloud = this.tweens.add({
      targets: this.cloud,
      x: 500,
      ease: 'Linear',
      duration: 2600,
      repeat: -1,
      yoyo: true
    });

    // platforms
    const platforms = this.physics.add.staticGroup();
    platforms.create(128, viewportHeight-50, 'tile1');
    platforms.create(128*2, viewportHeight-50, 'tile2');
    platforms.create(128*3, viewportHeight-50, 'tile3');

    platforms.create(128*4, viewportHeight-175, 'tile14');
    platforms.create(128*5, viewportHeight-175, 'tile15');
    platforms.create(128*6, viewportHeight-175, 'tile16');

    platforms.create(128*7, viewportHeight-50, 'tile1');
    platforms.create(128*8, viewportHeight-50, 'tile2');
    platforms.create(128*9, viewportHeight-50, 'tile3');

    // --- SCORE ---
    gS.scoreText = this.add.text(20, 20, 'SCORE 0',
      { fontSize: '22px', fill: 'yellow' });
    gS.scoreText.setScrollFactor(0);
  }
}
