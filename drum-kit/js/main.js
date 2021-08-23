const keys = document.querySelectorAll('.drums-key')
const drums = document.querySelector('.drums-content')
const page = document.querySelector('.page')
const themeBtn = document.querySelector('.theme-button')
const drumsBtn = document.querySelector('.drums-btn')
const funBtn = document.querySelector('.fun-btn')
const fun = document.querySelector('.fun-content')
const funKeys = document.querySelectorAll('.fun-key')

themeBtn.onclick = () => {
  page.classList.toggle('dark-theme')
}
const setDrums = () => {
  fun.classList.add('hidden')
  drums.classList.remove('hidden')
  drumsBtn.classList.add('setting-btn--active')
  funBtn.classList.remove('setting-btn--active')
}
const setFun = () => {
  drums.classList.add('hidden')
  fun.classList.remove('hidden')
  funBtn.classList.add('setting-btn--active')
  drumsBtn.classList.remove('setting-btn--active')
}

drumsBtn.addEventListener('click', setDrums)
funBtn.addEventListener('click', setFun)

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

const startSoundFun = (event) => {
  const letter = event.target.dataset.letter
  const src = `assets/sounds/${letter}.mp3`
  playing(src)
  event.target.classList.add('fun-key--active')
}
const stopSoundFun = (event) => {
  event.target.classList.remove('fun-key--active')
}
const startMouseFun = (event) => {
  if (event.target.classList.contains('fun-key')) {
    startSoundFun(event)
  }
  funKeys.forEach((key) => {
    key.addEventListener('mouseover', startSoundFun)
    key.addEventListener('mouseout', stopSoundFun)
  })
}
const stopMouseFun = () => {
  funKeys.forEach((key) => {
    key.classList.remove('fun-key--active')
    key.removeEventListener('mouseover', startSoundFun)
    key.removeEventListener('mouseout', stopSoundFun)
  })
}
const handleKeyDownFun = (event) => {
  if (event.repeat) return
  const pressedKeyFun = event.code.slice(-1)
  funKeys.forEach((key) => {
    if (key.dataset.letter === pressedKeyFun) {
      key.classList.add('fun-key--active')
      const letter = key.dataset.letter
      const src = `assets/sounds/${letter}.mp3`
      playing(src)
    }
  })
}
const handleKeyUpFun = (event) => {
  funKeys.forEach((key) => {
    key.classList.remove('fun-key--active')
  })
}

document.addEventListener('mousedown', startMouseFun)
document.addEventListener('mouseup', stopMouseFun)
window.addEventListener('keydown', handleKeyDownFun)
window.addEventListener('keyup', handleKeyUpFun)







