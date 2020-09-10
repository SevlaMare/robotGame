import { Scene } from '../phaser.min';

export default class gameMain extends Scene {
  constructor() { super('startGame'); }

  create() {
    const viewportHeight = 600;
    const worldWidth = 1200;
    window.gS.playerDirection = 'right';
    window.gS.nextFire = 0;

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
      yoyo: true,
    });

    // platforms
    const platforms = this.physics.add.staticGroup();
    platforms.create(128, viewportHeight - 50, 'tile1');
    platforms.create(128 * 2, viewportHeight - 50, 'tile2');
    platforms.create(128 * 3, viewportHeight - 50, 'tile3');

    platforms.create(128 * 4, viewportHeight - 175, 'tile14');
    platforms.create(128 * 5, viewportHeight - 175, 'tile15');
    platforms.create(128 * 6, viewportHeight - 175, 'tile16');

    platforms.create(128 * 7, viewportHeight - 50, 'tile1');
    platforms.create(128 * 8, viewportHeight - 50, 'tile2');
    platforms.create(128 * 9, viewportHeight - 50, 'tile3');

    // SCORE
    // insert text
    window.gS.scoreText = this.add.text(20, 20, 'SCORE 0',
      { fontSize: '22px', fill: 'yellow' });
    // fix on camera
    window.gS.scoreText.setScrollFactor(0);

    // PLAYER
    window.gS.player = this.physics.add.sprite(200, 300, 'robot').setScale(0.38);
    window.gS.player.setBodySize(180, 400);
    window.gS.player.setOffset(75, 90);

    // // PHYSIC
    window.gS.player.setCollideWorldBounds(true);
    this.physics.add.collider(window.gS.player, platforms);
    this.physics.world.setBounds(0, 0, worldWidth, viewportHeight);

    // // CONTROL
    window.gS.cursors = this.input.keyboard.createCursorKeys();
  }

  shoot(direction) {
    const beam = this.physics.add.sprite(window.gS.player.x, window.gS.player.y, 'shot').setScale(0.4);
    beam.anims.play('fireBullet', true);
  }

  // CONTROLL ACTIONs
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["update"] }] */
  // this rule doesn't apply here, since a static method is not desire
  update() {
    const speed = 350;

    // directional movement
    if (window.gS.cursors.right.isDown) {
      window.gS.player.setVelocityX(speed);
      window.gS.player.anims.play('runRobot', true);
      window.gS.player.flipX = false;
      window.gS.playerDirection = 'right';
    } else if (window.gS.cursors.left.isDown) {
      window.gS.player.setVelocityX(-speed);
      window.gS.player.anims.play('runRobot', true);
      window.gS.player.flipX = true;
      window.gS.playerDirection = 'left';
    } else {
      window.gS.player.setVelocityX(0);
      window.gS.player.anims.play('stayRobot', true);
    }

    // jump
    if (window.gS.cursors.up.isDown && window.gS.player.body.touching.down) {
      window.gS.player.setVelocityY(-speed);
    };

    // shoot
    if ( window.gS.cursors.space.isDown && (this.time.now > window.gS.nextFire) ) {
      this.shoot(gS.playerDirection);
      window.gS.nextFire = this.time.now + 500;
      window.gS.player.anims.play('shotRobot', true);
    };
  }
}
