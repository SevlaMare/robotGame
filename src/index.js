/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import './css/style.css';
import './phaser.min';
import bootGame from './scenes/boot';
import startGame from './scenes/main';

const config = {
  type: Phaser.AUTO,
  parent: 'canvas',
  width: 400,
  height: 600,
  audio: { disableWebAudio: true },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      enableBody: true,
      debug: false,
    },
  },
  dom: { createContainer: true },
  scene: [
    bootGame,
    startGame,
  ],
};

const game = new Phaser.Game(config);
