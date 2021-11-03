var step = 50, margin = 0, points = 0

var aster = {
    x: 0,
    y: 0,
    width: 100,
    height: 100 * 369 / 423 // ~87
}

var ship = {
    x: 0,
    y: 0,
    width: 100,
    height: 100 * 792 / 514 // ~154
}

var shipImage = document.querySelector('.spaceship')

shipImage.style.transform = translate(ship.x, ship.y)

var asterImage = document.querySelector('.asteroid')

aster.x = 500
aster.y = 100

asterImage.style.transform = translate(aster.x, aster.y)

//document.onkeydown = function (event) {
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight')
        ship.x += step // ship.x = ship.x + step

    if (event.key === 'ArrowLeft')
        ship.x -= step

    if (event.key === 'ArrowDown')
        ship.y += step

    if (event.key === 'ArrowUp')
        ship.y -= step

    shipImage.style.transform = translate(ship.x, ship.y)

    if (ship.x + ship.width / 2 >= aster.x + aster.width * margin
        && ship.x + ship.width / 2 <= aster.x + aster.width * (1 - margin)
        && ship.y >= aster.y + aster.height * margin
        && ship.y <= aster.y + aster.height * (1 - margin)) {

        points++

        console.log('collision! you have ' + points + ' points')
    }
    // }
})

var direction = 1

setInterval(function () {
    if (aster.x > 800)
        direction = -1

    if (aster.x < 200)
        direction = 1

    aster.x += direction * step

    asterImage.style.transform = translate(aster.x, aster.y)
}, 500)

// utils

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}

// canvas

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

    if (smile.x + smile.width / 2 >= aster.x + aster.width * margin
        && smile.x + smile.width / 2 <= aster.x + aster.width * (1 - margin)
        && smile.y >= aster.y + aster.height * margin
        && smile.y <= aster.y + aster.height * (1 - margin)) {

        points++

        console.log('collision! you have ' + points + ' points')
    }
})

var smileImage = document.querySelector('.smile')

smileImage.addEventListener('click', function () {
    var audio =  new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
    
    audio.play()
})