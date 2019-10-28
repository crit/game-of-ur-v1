class Game {
  constructor(config) {
    this.stage = config.stage.getContext('2d')
    this.width = config.stage.width
    this.height = config.stage.height

    this.entities = []

    this.entities.push(...Level.basic())
    // this.entities.push(...this.grid())

    assets.download(() => this.loop())
  }

  loop() {
    this.entities.forEach(entity => {
      // todo: movement, animation, etc
      if (entity.has(['active', 'position', 'velocity'])) this.move(entity)
    })

    this.render()

    window.requestAnimationFrame(() => this.loop())
  }

  render() {
    const updates = []

    this.entities.forEach(entity => {
      if (entity.has(['active', 'renderer'])) updates.push(entity.com('renderer'))
    })

    if (!updates.length) return

    this.stage.clearRect(0, 0, this.width, this.height)
    updates.forEach(update => update.run(this.stage))
  }

  move(entity) {
    if (!entity.com('velocity').vx && !entity.com('velocity').vy) return

    // todo: collision detection

    entity.com('position').x += entity.com('velocity').vx
    entity.com('position').y += entity.com('velocity').vy
  }

  grid() {
    const entities = []

    for (let col = 0; col < 8; col++) {
      for (let row = 0; row < 8; row++) {
        const entity = new Entity()
        entity.set(Components.active())
        entity.set(Components.renderer(context => {
          context.strokeStyle = 'red'
          context.strokeRect(col * 64, row * 64, 64, 64)
        }))

        entities.push(entity)
      }
    }

    return entities
  }

  roll() {
    return between(0, 4)
  }
}
