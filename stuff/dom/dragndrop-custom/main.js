var redBox = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    dragging: false
}

var blueBox = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    dragging: false
}

var redBoxElem = document.querySelector('.box')
var blueBoxElem = document.querySelector('.box--blue')

redBoxElem.addEventListener('mousedown', function (event) {
    redBox.dragging = true

    redBoxElem.style.zIndex = 1
    blueBoxElem.style.zIndex = 0
})

blueBoxElem.addEventListener('mousedown', function (event) {
    blueBox.dragging = true

    blueBoxElem.style.zIndex = 1
    redBoxElem.style.zIndex = 0
})

document.addEventListener('mousemove', function (event) {
    if (redBox.dragging) {
        redBox.x = event.clientX
        redBox.y = event.clientY

        redBoxElem.style.transform = translate(redBox.x - redBox.width / 2, redBox.y - redBox.height / 2)
    }

    if (blueBox.dragging) {
        blueBox.x = event.clientX
        blueBox.y = event.clientY

        blueBoxElem.style.transform = translate(blueBox.x - blueBox.width / 2, blueBox.y - blueBox.height / 2)
    }
})

redBoxElem.addEventListener('mouseup', function (event) {
    redBox.dragging = false
})

blueBoxElem.addEventListener('mouseup', function (event) {
    blueBox.dragging = false
})

// utils

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}