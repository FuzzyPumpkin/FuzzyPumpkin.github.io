window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //rewind to start so it can play quickly
    audio.play();
    key.classList.add("playing");
    setTimeout(function() {
        key.classList.remove("playing");
    }, 70);
});
