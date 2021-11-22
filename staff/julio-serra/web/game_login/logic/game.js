var offDecka = document.querySelector('.dnone')
var textoDecka = document.querySelector('.text')
var panelContenedor = document.querySelector('.container')
var profileButton = document.querySelector('.profile__button')
var panelContainerProfile = document.querySelector('.main__profile')
var panelMainChanges = document.querySelector('.main__changes')
var panelMainUsername = document.querySelector('.main__username')
var panelMainUsernameButton = document.querySelector('.main__username-button')



profileButton.onclick = function() {
    panelContenedor.classList.add('off')
    panelMainUsername.classList.add('off')
    panelContainerProfile.classList.remove('off')
        // panelInicioSesion.classList.remove('off')
}

panelMainUsernameButton.onclick = function() {
    panelContainerProfile.classList.add('off')
    panelMainUsername.classList.remove('off')
}


var deckaElement = document.querySelector('.decka')
deckaElement.draggable = true

deckaElement.addEventListener('dragstart', function(event) {

    event.dataTransfer.setData('id', 'decka-box')

})

var deckbElement = document.querySelector('.deckb')
deckbElement.draggable = true

deckbElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('id', 'deckb-box')
})

var mixerElement = document.querySelector('.mixer')

mixerElement.addEventListener('dragover', function(event) {
    event.preventDefault() //para que no recargue la pagina
})


var audioMixer = new Audio('https://geo-samples.beatport.com/track/fdb7ddaa-edcc-4fb2-927d-4c2fd5d467cb.LOFI.mp3')

deckaElement.addEventListener('click', function(event) {
    textoDecka.classList.add('text')
    offDecka.classList.remove('dnone')
    if (audioMixer.paused)
        audioMixer.play()
    else
        audioMixer.pause()
})

var audioMixerB = new Audio('https://geo-samples.beatport.com/track/85574d81-0475-43f1-b99a-55cd92aea480.LOFI.mp3')

deckbElement.addEventListener('click', function() {
    if (audioMixerB.paused)
        audioMixerB.play()
    else
        audioMixerB.pause()
})

mixerElement.addEventListener('drop', function(event) {
    var id = event.dataTransfer.getData('id')
    if (id === 'decka-box')
        mixerElement.append(deckaElement)

    if (id === 'deckb-box')
        mixerElement.append(deckbElement)
})