var step = 60, margin = 0, vida = 100

var asteroide = {
    x: 0,
    y: 0,
    width: 150,
    height: 100 * 400 / 400
}

var cohete = {
    x: 500,
    y: 0,
    with: 200,
    height: 100 * 800 / 500
}

var imagenCohete = document.querySelector('.cohete')
imagenCohete.style.transform = translate(cohete.x, cohete.y)


var imagenAsteroide = document.querySelector('.asteroide')
asteroide.x = 500
asteroide.y = 200
imagenAsteroide.style.transform = translate(asteroide.x, asteroide.y)

document.onkeydown = function(event) {
    if (event.key === 'd')
        cohete.x += step
    if (event.key === 'a')
        cohete.x -= step
    if (event.key === 's')
    cohete.y += step
    if (event.key === 'w')
    cohete.y -= step


imagenCohete.style.transform = translate(cohete.x, cohete.y)

if (cohete.x + cohete.with / 2 >= asteroide.x + asteroide.width * margin
    && cohete.x + cohete.with / 2 <= asteroide.x + asteroide.width * (1 - margin)
    && cohete.y >= asteroide.y + asteroide.height * margin
    && cohete.y <= asteroide.y + asteroide.height * (1 - margin)) {
        vida--
        console.log('Has impactado canelo! Te voy a ir restando vida mientras te vayas estampando te quedan ' + vida + ' de vida')
    }   
    if (vida === 99) {
       imagenCohete.style.transform = "rotate(180deg)" 
        
    }
}

var direccion = 1

setInterval(function () {
    if (asteroide.x > 800)
    direccion = -1

    if (asteroide.x < 200)
    direccion = 1

    asteroide.x += direccion * step

    imagenAsteroide.style.transform = translate(asteroide.x, asteroide.y)
}, 500)




    function translate(x, y) {
        return 'translate(' + x + 'px, ' + y + 'px)'
    }


