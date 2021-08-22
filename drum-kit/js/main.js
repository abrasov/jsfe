const keys = document.querySelectorAll('.key')

const playing = (src) => {
  const audio = new Audio()
  audio.src = src
  audio.currentTime = 0
  audio.play()
}

const startSound = (event) => {
  const letter = event.target.dataset.letter
  const src = `assets/sounds/${letter}.wav`
  playing(src)

  event.target.classList.add('key-active')
}
const stopSound = (event) => {
  event.target.classList.remove('key-active')
}
const startMouse = (event) => {
  if (event.target.classList.contains('key')) {
    startSound(event)
  }
  keys.forEach((key) => {
    key.addEventListener('mouseover', startSound)
    key.addEventListener('mouseout', stopSound)
  })
}
const stopMouse = () => {
  keys.forEach((key) => {
    key.classList.remove('key-active')
    key.removeEventListener('mouseover', startSound)
    key.removeEventListener('mouseout', stopSound)
  })
}
const handleKeyDown = (event) => {
  if (event.repeat) return
  const pressedKey = event.code.slice(-1)
  keys.forEach((key) => {
    if (key.dataset.letter === pressedKey) {
      key.classList.add('key-active')
      const letter = key.dataset.letter
      const src = `assets/sounds/${letter}.wav`
      playing(src)
    }
  })
}

const handleKeyUp = (event) => {
  keys.forEach((key) => {
    key.classList.remove('key-active')
  })
}

document.addEventListener('mousedown', startMouse)
document.addEventListener('mouseup', stopMouse)

window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keyup', handleKeyUp)
