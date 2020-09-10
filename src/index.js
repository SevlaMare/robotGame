import './css/style.css';
import './phaser.min';
import bootGame from './scenes/boot';

const config = {
  type: Phaser.AUTO,
  parent: 'canvas',
  width: 400,
  height: 600,
  audio: { disableWebAudio: true },
  scene: [
    bootGame
  ]
};

const game = new Phaser.Game(config);
