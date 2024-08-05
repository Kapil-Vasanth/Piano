const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('mousedown', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})
document.addEventListener('keyup', (e) => {
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
  
    if (whiteKeyIndex > -1) removeActive(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) removeActive(blackKeys[blackKeyIndex])
})
document.addEventListener('mouseup', (e) => {
    console.log("mouseUp")
    console.log(e.target.dataset.note)
    if(e.target.dataset.note){
        console.log(e.target.classList)
        e.target.classList.remove('active')
    }
})

function removeActive(key){
    key.classList.remove('active')
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
}

console.log(document.querySelector('[data-music]'))