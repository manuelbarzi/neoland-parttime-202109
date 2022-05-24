//Tamaño de pasos del Lander y Asteroide
var step = 50, margin = 0, shield = 100

var aster = {
    //Inicio del Asteroide
    x: 50,
    y: 20,
    //Su área de colision
    width: 100,
    height: 100 * 369 / 423
}

var aster2 = {
    //Inicio del Asteroide
    x: 800,
    y: 200,
    //Su área de colision
    width: 100,
    height: 100 * 369 / 423
}

var aster3 = {
    //Inicio del Asteroide
    x: 400,
    y: 400,
    //Su área de colision
    width: 100,
    height: 100 * 369 / 423
}

var lander = {
    //Inicio del Lander
    x: 450,
    y: -8
    0,
    //Su área de colision
    width: 100,
    height: 100 * 263 / 360
}

// var explo = {
//     x: 450,
//     y: 20,
//     width: 100,
//     height: 100 * 420 / 512
// }


var landerImage = document.querySelector('.lander')

var asterImage = document.querySelector('.asteroid')
var aster2Image = document.querySelector('.asteroid2')
var aster3Image = document.querySelector('.asteroid3')

//var exploImage = document.querySelector('.explo')

landerImage.style.transform = translate(lander.x, lander.y)

asterImage.style.transform = translate(aster.x, aster.y)
aster2Image.style.transform = translate(aster2.x, aster2.y)
aster3Image.style.transform = translate(aster3.x, aster3.y)

// do {
//     lander.y += step
//   } while (lander.y < 800);

document.onkeydown = function (vector) {
    if (vector.key === 'd')
        lander.x += step
    if (vector.key === 'a')
        lander.x -= step
    // if (vector.key === 's')
    //     lander.y += step
    // if (vector.key === 'w')
    //     lander.y -= step

    landerImage.style.transform = translate(lander.x, lander.y)

    if (lander.x + lander.width / 2 >= aster.x + aster.width * margin
        && lander.x + lander.width / 2 <= aster.x + aster.width * (1 - margin)
        && lander.y >= aster.y + aster.height * margin
        && lander.y <= aster.y + aster.height * (1 - margin)) {

        shield = shield - 5

        console.log('COLLISION! your shield is ' + shield + '%')
    }

    if (lander.x + lander.width / 2 >= aster2.x + aster2.width * margin
        && lander.x + lander.width / 2 <= aster2.x + aster2.width * (1 - margin)
        && lander.y >= aster2.y + aster2.height * margin
        && lander.y <= aster2.y + aster2.height * (1 - margin)) {

        shield = shield - 5

        console.log('COLLISION! your shield is ' + shield + '%')
    }

    if (lander.x + lander.width / 2 >= aster3.x + aster3.width * margin
        && lander.x + lander.width / 2 <= aster3.x + aster3.width * (1 - margin)
        && lander.y >= aster3.y + aster3.height * margin
        && lander.y <= aster3.y + aster3.height * (1 - margin)) {

        shield = shield - 5

        console.log('COLLISION! your shield is ' + shield + '%')
    }
    // if (shield === 0)
    //     landerImage = document.querySelector('.explo')
}

var direction = 1

setInterval(function () {

    if (aster.x > 500)
        direction = -1
    if (aster.x < 200)
        direction = 1

    if (aster2.x > 500)
        direction = -1
    if (aster2.x < 200)
        direction = 1

    if (aster3.x > 500)
        direction = -1
    if (aster3.x < 200)
        direction = 1

    aster.x += direction * step
    aster2.x += direction * step
    aster3.x += direction * step

    asterImage.style.transform = translate(aster.x, aster.y)
    aster2Image.style.transform = translate(aster2.x, aster2.y)
    aster3Image.style.transform = translate(aster3.x, aster3.y)
}, 300);


function translate(x, y) {
    return 'translate(' + x + 'px, ' + y + 'px)'
}

