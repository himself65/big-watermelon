import 'phaser'

import { BootScene } from './scenes/boot-scene'
import { GameScene } from './scenes/game-scene'

const config: Phaser.Types.Core.GameConfig = {
  title: 'big-watermelon',
  url: 'https://github.com/Himself65/big-watermelon',
  version: '1.0',
  scene: [BootScene, GameScene],
  width: 420,
  height: 600,
  type: Phaser.AUTO,
  backgroundColor: '#24232e',
  parent: 'game',
  physics: {
    default: 'matter',
    matter: {
      enableSleeping: true,
      setBounds: {
        left: true,
        right: true,
        top: true,
        bottom: true
      },
      debug: true
    }
  },
  render: { pixelArt: true, antialias: false }
}

export class Game extends Phaser.Game {
  constructor (config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

window.addEventListener('load', () => {
  new Game(config)
})
