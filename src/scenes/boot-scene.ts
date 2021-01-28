import { GameScene } from './game-scene'

export class BootScene extends Phaser.Scene {
  static key = 'BootScene'

  // graphics
  private loadingBar: Phaser.GameObjects.Graphics
  private progressBar: Phaser.GameObjects.Graphics

  constructor () {
    super({
      key: BootScene.key
    })
  }

  preload () {
    this.cameras.main.setBackgroundColor(0)
    this.createLoadingGraphics()

    // pass value to change the loading bar fill
    this.load.on(
      'progress',
      (value: number) => {
        this.progressBar.clear()
        this.progressBar.fillStyle(0x88e453, 1)
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        )
      },
      this
    )

    // delete bar graphics, when loading complete
    this.load.on(
      'complete',
      () => {
        this.progressBar.destroy()
        this.loadingBar.destroy()
      },
      this
    )
    this.load.pack('preload', './assets/pack.json', 'preload')
  }

  update () {
    console.log('Load finished')
    this.scene.start(GameScene.key)
  }

  private createLoadingGraphics (): void {
    this.loadingBar = this.add.graphics()
    this.loadingBar.fillStyle(0xffffff, 1)
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    )
    this.progressBar = this.add.graphics()
  }
}
