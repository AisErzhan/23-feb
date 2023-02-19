
let audio = new Audio('./src/bg/bg-song.mp3');
audio.loop = true;
let playButton = document.getElementById('playButton');
playButton.addEventListener('click', function() {
    if (audio.paused){
        audio.play();
        localStorage.setItem('music', 'on')
    }else{
        localStorage.setItem('music', 'off')
    }
});

window.addEventListener('load', function(){
    let music = this.localStorage.getItem('music');
    if (music === 'on'){
        audio.play();
    }else{
        audio.pause();
    }
})