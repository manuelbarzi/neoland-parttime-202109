
var gamePanel = document.querySelector('.game')
var board = document.querySelector('.board')
var speedX, speedY // Velocidades
var fps = 30
var points = 0

//Posicionando las cartas
var four = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var queen = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var king = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var jack = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 2900 / 2000, //72,5
}

var chips = {
    x: 0,
    y: 0,
    width: 40,
    height: 40 * 1149 / 1431, //~32
}
var chipsImage = board.querySelector('.chips')
chipsImage.style.transform = translate(chips.x, chips.y)

var fourImage = board.querySelector('.four')
four.x = 500
four.y = 100
fourImage.style.transform = translate(four.x, four.y)

var queenImage = board.querySelector('.queen')
queen.x = 200
queen.y = 130
queenImage.style.transform = translate(queen.x, queen.y)

var kingImage = board.querySelector('.king')
king.x = 300
king.y = 220
kingImage.style.transform = translate(king.x, king.y)

var jackImage = board.querySelector('.jack')
jack.x = 600
jack.y = 250
jackImage.style.transform = translate(jack.x, jack.y)


function translate(x, y) {
    return 'translate(' + x + 'px,' + y + 'px)'
}
//Establecer el intervalo
setInterval(update, 300 / fps)

//Velocidad random para iniciar
speedX = Math.floor(Math.random() * 76 + 25) / fps
speedY = Math.floor(Math.random() * 76 + 25) / fps

//Random ball direction: tal y como lo teníamos sólo iba hacia la derecha-abajo. Ahora vamos a incluir el resto de direcciones
if(Math.floor(Math.random()*2)==0){
    speedX = - speedX
}
if(Math.floor(Math.random()*2)==0){
    speedY = - speedY
}

function update(){
    //Move the ball: trasladamos la posición
    squareX += speedX
    squareY += speedY

    //Bounce the ball off each wall

    if(four.x + four.width > board.width && speedX > 0){
        speedX = - speedX
    }


    
    // four.x += direction * step
    //fourImage.style.transform = translate(four.x, four.y)

}
