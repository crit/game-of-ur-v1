class Assets {
  constructor() {
    this.success = 0
    this.error = 0
    this.paths = []
    this.cache = {}
  }

  add(paths) {
    this.paths = this.paths.concat(paths)
  }

  get(path) {
    return this.cache[path]
  }

  loaded() {
    return this.paths.length === (this.success + this.error)
  }

  download(callback) {
    this.paths.forEach(path => {
      const image = new Image()

      image.addEventListener('load', () => {
        this.success += 1
        if (this.loaded()) callback()
      }, false)

      image.addEventListener('error', () => {
        this.error += 1
        if (this.loaded()) callback()
      }, false)

      image.src = path
      this.cache[path] = image
    })
  }
}