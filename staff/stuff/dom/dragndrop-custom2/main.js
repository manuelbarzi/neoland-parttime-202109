var box = {
    x: 0,
    y: 0,
    width: 100,
    height: 100
}

var boxElem = document.querySelector('.box')

// boxElem.draggable = true

var dragging = false

boxElem.addEventListener('mousedown', function (event) {
    dragging = true
})

document.addEventListener('mousemove', function (event) {
    if (dragging) {
        box.x = event.clientX
        box.y = event.clientY

        boxElem.style.transform = translate(box.x - box.width / 2, box.y - box.height / 2)
    }
})

boxElem.addEventListener('mouseup', function (event) {
    dragging = false
})

// utils

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}