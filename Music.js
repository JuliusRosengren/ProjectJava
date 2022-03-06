function stop() {
    var audio = document.getElementById('Persona3Music');
    if (audio.play) {
        audio.currentTime = 0;
        audio.pause();
    }
}