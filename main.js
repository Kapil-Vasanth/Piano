const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm',',','.','/','Shift']
const BLACK_KEYS = ['s', 'd','f', 'g', 'h', 'j','k','l',';',"'"]

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const playSongBtn = document.querySelector('.playSong');

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
  console.log(e.key)
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
  
    if (whiteKeyIndex > -1) removeActive(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) removeActive(blackKeys[blackKeyIndex])
})
document.addEventListener('click', (e) => {
    if(e.target.dataset.note){
        console.log(e.target.classList)
        e.target.classList.remove('active')
    }
})

function removeActive(key){
    key.classList.remove('active')
}

function playNote(key) {
  console.log(key)
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
}

function playSong(duration){

  let speed  = 0.5
  playKey('n',1000,1000 * speed)
  playKey('/',1000,2000 * speed)
  playKey('n',500,4000 * speed)
  playKey('/',1000,5000 * speed)

  playKey('m',500,7000 * speed)
  playKey('/',1000,8000 * speed)
  playKey('m',500,10000 * speed)
  playKey('/',1000,11000 * speed)

  playKey(',',500,13000 * speed)
  playKey('/',1000,14000 * speed)
  playKey(',',500,16000 * speed)
  playKey('/',1000,17000 * speed)

  playKey('.',500,19000 * speed)
  playKey('/',1000,20000 * speed)
  playKey('.',500,22000 * speed)
  playKey('/',1000,23000 * speed)
  
  
  
}



function playKey(key,duration,playAfter=0){
  return new Promise((res,rej) => {
    res()
    setTimeout(() => {
      playNote(whiteKeys[WHITE_KEYS.indexOf(key)])
      setTimeout(() => {
        removeActive(whiteKeys[WHITE_KEYS.indexOf(key)])
        
      },duration)
    },playAfter)
  })
}

playSongBtn.addEventListener('click',() => {
  playSongBtn.setAttribute('disabled',true);
  
  playSong()
  console.log("finished")
  playSongBtn.removeAttribute('disabled');
})

console.log(document.querySelector('[data-music]'))
