function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
// add clickability
const keysClick = Array.from(document.querySelectorAll('.key'));
keysClick.forEach(key => key.addEventListener("click", playSoundClick));

function playSoundClick() {
    const audioClick = document.querySelector(`audio[data-key="${this.id}"]`);
    const keyClick = document.querySelector(`div[data-key="${this.id}"]`);
    if (!audioClick) return;
    keyClick.classList.add('playing');
    audioClick.currentTime = 0;
    audioClick.play();
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));