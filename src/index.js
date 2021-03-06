import './css/style.css';
import { Game } from './phaser.min';
import bootGame from './scenes/boot';
import startGame from './scenes/main';
import endGame from './scenes/end';
import scoresGame from './scenes/score';

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
    scoresGame,
  ],
};

window.gS = { score: 10 };
window.game = new Game(config);
