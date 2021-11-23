var redBoxElem = document.querySelector('.box')
redBoxElem.draggable = true

redBoxElem.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('id', 'red-box')
})

var blueBoxElem = document.querySelector('.box--blue')
blueBoxElem.draggable = true


//blueBoxElem.ondragstart ...
blueBoxElem.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('id', 'blue-box')
})

var yellowBoxElem = document.querySelector('.box--yellow')

yellowBoxElem.addEventListener('dragover', function(event) {
    event.preventDefault()
})

yellowBoxElem.addEventListener('drop', function (event) {
    var id = event.dataTransfer.getData('id')

    if (id === 'red-box')
        yellowBoxElem.append(redBoxElem)

    if (id === 'blue-box')
        yellowBoxElem.append(blueBoxElem)
})