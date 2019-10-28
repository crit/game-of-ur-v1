class Components {
  static active() {
    return {
      name: 'active'
    }
  }

  static renderer(callback) {
    return {
      name: 'renderer',
      run: callback
    }
  }

  static type(value) {
    return {
      name: 'type',
      value: value
    }
  }

  static position(x, y) {
    return {
      name: 'position',
      x: x,
      y: y
    }
  }

  static size(w, h) {
    return {
      name: 'size',
      w: w,
      h: h
    }
  }

  static velocity(vx, vy) {
    return {
      name: 'velocity',
      vx: vx,
      vy: vy
    }
  }
}
