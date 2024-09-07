/**
FLEAS!
By: Keven Vaillancourt

The platformer portion of the project, was based on code from the phaser 3 tutorial https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
The timer code used was modified from https://phaser.discourse.group/t/countdown-timer/2471/2
*/

"use strict";
// configurate
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#dd9d50',
    physics: {
        default: `matter`,
        matter: {
            gravity: { y: 2 },
            debug: false
        }
    },
    scene: [Boot, Play]
  };
  
let game = new Phaser.Game(config);
// initialize the input system
let cursors;
// initialize the delay time
let delayTime = 1000;
// initialize the rotation amount
let rotationAmount = 0.001;
// set game state to the title screen once the game boots
let gameState = 'title';
// initialize the player
let player;
// set grid size
let gridSize = 32;
// initialize background colors
let level0BgColor = '#dd9d50';
let level1BgColor = '#df8fab';
let level2BgColor = '#8a9abc';
let level3BgColor = '#30060c';
// initialize vigniette tint colors
let level0VignitteColor = 0xdd9d50;
let level1VignitteColor = 0xdf8fab;
let level2VignitteColor = 0x8a9abc;
let level3VignitteColor = 0x30060c;
// initialize text/button colors
let level0TextColor = 0xaa6f36;
let level1TextColor = 0xb06176;
let level2TextColor = 0x5e7198;
let level3TextColor = 0xecd0d3;
// initialize player tints
let playerLight = 0xffffff;
let playerDark = 0x882f25;
