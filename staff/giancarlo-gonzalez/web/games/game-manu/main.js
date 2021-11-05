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

document.onkeydown = function (event) {
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
}

var direction = 1

setInterval(function () {
    if (aster.x > 800)
        direction = -1

    if (aster.x < 200)
        direction = 1

    aster.x += direction * step

    asterImage.style.transform = translate(aster.x, aster.y)
}, 500);

// utils

function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}