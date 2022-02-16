var step = 50

var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')

ctx.fillStyle = 'transparent'
ctx.fillRect(0, 0, canvas.width, canvas.height)

function paintHappySmile() {
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI)
    ctx.fillStyle = 'yellow'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width / 3, canvas.height / 2, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width * 2 / 3, canvas.height / 2, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height * 3 / 5, 10, 0, Math.PI)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5
    ctx.stroke();
}

function paintUnhappySmile() {
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI)
    ctx.fillStyle = 'yellow'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width / 3, canvas.height / 2, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width * 2 / 3, canvas.height / 2, 5, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height * 2 / 3, 10, Math.PI, 0)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5
    ctx.stroke();
}

paintHappySmile()

var happy = true

setInterval(function () {
    if (happy)
        paintUnhappySmile()
    else
        paintHappySmile()

    happy = !happy

}, 1000)

var smile = {
    x: 0,
    y: 0,
    width: 100,
    height: 100
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'd')
        smile.x += step // smile.x = smile.x + step

    if (event.key === 'a')
        smile.x -= step

    if (event.key === 's')
        smile.y += step

    if (event.key === 'w')
        smile.y -= step

    canvas.style.transform = translate(smile.x, smile.y)
})

// utils

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}