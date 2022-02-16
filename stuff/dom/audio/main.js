var smileImage = document.querySelector('.smile')

smileImage.addEventListener('click', function () {
    var audio =  new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')

    audio.play()
})