let div = document.querySelectorAll('.div'),
    sound = document.querySelector('.audio')


div.forEach(d => {
    d.onclick = function(){
        d.classList.toggle('HandleShedow')
        sound.currentTime = 0;
        sound.play();
    }
})