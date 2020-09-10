import './css/style.css';
import { Game } from './phaser.min';
import bootGame from './scenes/boot';
import startGame from './scenes/main';
import endGame from './scenes/end';

const config = {
  WebGL: true,
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
    endGame,
  ],
};

window.gS = { score: 0 };
window.game = new Game(config);
