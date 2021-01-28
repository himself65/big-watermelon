import 'phaser'

import { GameScene } from './scenes/game-scenes'

const config: Phaser.Types.Core.GameConfig = {
  title: 'big-watermelon',
  url: 'https://github.com/Himself65/big-watermelon',
  version: '1.0',
  scene: [GameScene],
  width: 750,
  height: 1080
}

export class Game extends Phaser.Game {
  constructor (config: Phaser.Types.Core.GameConfig) {
    super(config)
  }
}

window.addEventListener('load', () => {
  new Game(config)
})
