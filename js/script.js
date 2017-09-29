// ======================================= //
// ============| Variables |============== //
// ======================================= //
const keys = document.querySelectorAll('.key')


// ======================================= //
// ========| Remove Transitions |========= //
// ======================================= //
function removeTransition(e) {
  // Skip if not a transform
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

// ======================================= //
// ============| Play Sound |============= //
// ======================================= //
function playSound (e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return       // return if no audio found
  audio.currentTime = 0   // rewind audio if already playing
  audio.play()
  key.classList.add('playing')
}

// ======================================= //
// =============| Listeners |============= //
// ======================================= //
window.addEventListener('keydown', playSound )
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
