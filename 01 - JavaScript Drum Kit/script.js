const playSound = event => {
  if (event.key.length !== 1) {
    return;
  }
  const keyCode = event.key.toUpperCase().charCodeAt(0);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!key) {
    return;
  }
  key.classList.add('playing');
};

const removeTransition = event => {
  if (event.propertyName !== 'transform') {
    return;
  }
  event.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
