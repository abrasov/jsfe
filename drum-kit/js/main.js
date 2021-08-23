const keys = document.querySelectorAll('.drums-key')
const drums = document.querySelector('.drums-content')
const page = document.querySelector('.page')
const themeBtn = document.querySelector('.theme-button')

themeBtn.onclick = () => {
  page.classList.toggle('dark-theme')
}

const playing = (src) => {
  const audio = new Audio()
  audio.src = src
  audio.currentTime = 0
  audio.play()
}

const startSoundD = (event) => {
  const name = event.target.dataset.name
  const src = `assets/sounds/${name}.wav`
  playing(src)
  event.target.classList.add('drums-key--active')
}
const stopSoundD = (event) => {
  event.target.classList.remove('drums-key--active')
}
const startMouseD = (event) => {
  if (event.target.classList.contains('drums-key')) {
    startSoundD(event)
  }
  keys.forEach((key) => {
    key.addEventListener('mouseover', startSoundD)
    key.addEventListener('mouseout', stopSoundD)
  })
}
const stopMouseD = () => {
  keys.forEach((key) => {
    key.classList.remove('drums-key--active')
    key.removeEventListener('mouseover', startSoundD)
    key.removeEventListener('mouseout', stopSoundD)
  })
}
const handleKeyDown = (event) => {
  if (event.repeat) return
  const pressedKey = event.code.slice(-1)
  keys.forEach((key) => {
    if (key.dataset.letter === pressedKey) {
      key.classList.add('drums-key--active')
      const name = key.dataset.name
      const src = `assets/sounds/${name}.wav`
      playing(src)
    }
  })
}

const handleKeyUp = (event) => {
  keys.forEach((key) => {
    key.classList.remove('drums-key--active')
  })
}

document.addEventListener('mousedown', startMouseD)
document.addEventListener('mouseup', stopMouseD)
window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keyup', handleKeyUp)
