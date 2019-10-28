class Input {
  constructor(entity, game) {
    this.game = game
    this.entity = entity
  }

  bind(codes = []) {
    const key = {
      codes: codes,
      isDown: false,
      isUp: true,
      press: undefined,
      release: undefined
    }

    window.addEventListener('keydown', (event) => {
      if (event.defaultPrevented) return
      if (!key.codes.includes(event.code)) return
      if (key.isUp && key.press) key.press()
      key.isDown = true
      key.isUp = false
      event.preventDefault()
    }, false)
    
    window.addEventListener('keyup', (event) => {
      if (event.defaultPrevented) return
      if (!key.codes.includes(event.code)) return
      if (key.isDown && key.release) key.release()
      key.isDown = false
      key.isUp = true
      event.preventDefault()
    }, false)

    return key
  }
}