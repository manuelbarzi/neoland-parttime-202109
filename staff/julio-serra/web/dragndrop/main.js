
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

deckaElement.addEventListener('click', function(){

    var audioMixer = new Audio('https://geo-samples.beatport.com/track/fdb7ddaa-edcc-4fb2-927d-4c2fd5d467cb.LOFI.mp3')
    audioMixer.play()
   
})

deckbElement.addEventListener('click', function(){
    var audioMixerB = new Audio('https://geo-samples.beatport.com/track/85574d81-0475-43f1-b99a-55cd92aea480.LOFI.mp3')
    audioMixerB.play()
})

mixerElement.addEventListener('drop', function(event){
    var id = event.dataTransfer.getData('id')
    if (id === 'decka-box')
    mixerElement.append(deckaElement)

    if (id === 'deckb-box')
    mixerElement.append(deckbElement)
})

