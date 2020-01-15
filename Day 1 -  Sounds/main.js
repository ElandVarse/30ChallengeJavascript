const som = document.getElementById('sound');

function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewing to the start
    audio.play();
    key.classList.add('playing');
    console.log(key);
}

function removeTransition(e){
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playsound);

function stop(){
    som.pause();
}
