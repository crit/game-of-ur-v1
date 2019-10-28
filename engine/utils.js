const genDecoder = () => {
  const codes = {}
  const letters = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ'.split('')

  letters.forEach((letter, i) => {
    codes[letter] = i * 32
  })

  return codes
}

const decoder = genDecoder()

function decode(letters) {
  const x = letters.charAt(0), y = letters.charAt(1)

  return {x: decoder[x], y: decoder[y]}
}

function between(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
