//Declarar variables
var squareS = 30 // Lados cuadrado--medidas lado
var squareX, squareY // coordenadas cuadrado
var speedX, speedY // Velocidades
var fps = 30 // fragmeworks per second

//Cargar canvas
var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')

//Establecer el intervalo
setInterval(update, 300 / fps)

//Ball starting position
squareX = canvas.width / 2 //300
squareY = canvas.height / 2 //250

//Random ball starting speed
speedX = Math.floor(Math.random() * 76 + 25) / fps
speedY = Math.floor(Math.random() * 76 + 25) / fps

//Random ball direction: tal y como lo teníamos sólo iba hacia la derecha-abajo. Ahora vamos a incluir el resto de direcciones
if(Math.floor(Math.random()*2)==0){
    speedX = - speedX
}
if(Math.floor(Math.random()*2)==0){
    speedY = - speedY
}

//Update function
function update() {
    //Move the ball: trasladamos la posición del cuadrado
    squareX += speedX
    squareY += speedY

    //Bounce the ball off each wall
    if(squareX - squareS /2 < 0 && speedX < 0){
        speedX = - speedX
    }
    if(squareX + squareS /2 > canvas.width && speedX > 0){
        speedX = - speedX
    }
    if(squareY - squareS /2 < 0 && speedY < 0){
        speedY = - speedY
    }
    if(squareY + squareS /2 > canvas.height && speedY > 0){
        speedY = - speedY
    }

    //Draw background and ball
    ctx.fillStyle = 'pink'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'orange'
    ctx.fillRect(squareX - squareS /2, squareY - squareS /2, squareS, squareS)
}
