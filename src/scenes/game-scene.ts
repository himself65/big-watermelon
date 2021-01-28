export class GameScene extends Phaser.Scene {
  static key = 'GameScene'

  private balls: Phaser.Physics.Matter.Image[]

  constructor () {
    super({
      key: GameScene.key
    })
    this.balls = []
  }

  create () {
    this.matter.world.setBounds(0, 0, 420, 600, 32, true, true, true, true)
    for (let i = 0; i < 20; i++) {
      let ball = this.matter.add.image(Phaser.Math.Between(100, 200), Phaser.Math.Between(100, 0), 'ball')
      ball.setCircle(Phaser.Math.Between(10, 40))
      ball.setFriction(0.8)
      ball.setFrictionAir(0.05)
      ball.setFrictionStatic(1)
      ball.setBounce(1)
      this.balls.push(ball)
    }
  }

  update () {
    this.balls.forEach(ball => ball.update())
    this.handleInput()
  }

  private handleInput = () => {
    if (this.input.activePointer.isDown) {
      const x = this.input.activePointer.x
      const y = this.input.activePointer.y
    }
  }
}
