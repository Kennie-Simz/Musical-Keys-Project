window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops function from running altogether
    audio.currentTime = 0; //rewinds audio to the beginning 
    audio.play();
});