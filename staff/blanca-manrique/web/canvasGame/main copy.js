var users = [
    { name: 'Blanca', username: 'blancamanrique', password: '121212' }
]

var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var levelPanel = document.querySelector('.level')
var gamePanel = document.querySelector('.game')

var signupSigninButton = signupPanel.querySelector('.signup__signin')

signupSigninButton.addEventListener('click', function () {
    signupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

var signinSignupButton = signinPanel.querySelector('.signin__signup')
signinSignupButton.addEventListener('click', function () {
    signinPanel.classList.add('off')
    signupPanel.classList.remove('off')
})

var signupForm = signupPanel.querySelector('form')

signupForm.addEventListener('submit', function (event) {
    event.preventDefault() //Para evitar que se recarge y perdamos lo que tenemos en memoria

    var nameInput = signupForm.name
    var usernameInput = signupForm.username
    var passwordInput = signupForm.password

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    var user = {}

    user.name = name
    user.username = username
    user.password = password

    users.push(user)

    signupPanel.classList.add('off')
    postSignupPanel.classList.remove('off')
})

var postSignupSigninButton = postSignupPanel.querySelector('button')

postSignupSigninButton.addEventListener('click', function () {
    postSignupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

var signinForm = signinPanel.querySelector('form')

signinForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })
    if (!user) {
        var signinFeedback = signinPanel.querySelector('.signin__feedback')
        signinFeedback.innerText = 'wrong credentials'
        signinFeedback.classList.remove('off')
    } else {
        var levelUser = levelPanel.querySelector('.level__user')

        levelUser.innerText = 'Welcome ' + user.name + '!'

        signinPanel.classList.add('off')
        levelPanel.classList.remove('off')
    }
})

var levelOneButton = levelPanel.querySelector('.level--one')
levelOneButton.addEventListener('click', function () {
    levelPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

//Game

//Variables
var squareS = 60 // Medida lado cuadrado
var orangeX, orangeY, blueX, blueY, brownX, brownY, playerX, playerY// coordenadas cuadrados
var orangeSpeedX, orangeSpeedY, blueSpeedX, blueSpeedY, brownSpeedX, brownSpeedY // Velocidades
var fps = 20
var step = 50
var points = 0
var gameOver = false

//Cargar canvas
var canvas = document.querySelector('.canvas')
var ctx = canvas.getContext('2d')

//Establecer el intervalo
setInterval(update, 300 / fps)

//Square starting position
orangeX = canvas.width / 2 //300
orangeY = canvas.height / 2 //250

blueX = canvas.width / 3
blueY = canvas.height / 3

brownX = canvas.width / 5
brownY = canvas.width / 5

playerX = 100
playerY = 100

//Random square starting speed
//Math.floor(Math.random() * (max - min + 1) + min)
//(min=25, max=100)
orangeSpeedX = Math.floor(Math.random() * 76 + 25) / fps
orangeSpeedY = Math.floor(Math.random() * 76 + 25) / fps
//(min=20, max=105)
blueSpeedX = Math.floor(Math.random() * 86 + 20) / fps
blueSpeedY = Math.floor(Math.random() * 86 + 20) / fps
//(min=30, max=51)
brownSpeedX = Math.floor(Math.random() * 51 + 30) / fps
brownSpeedY = Math.floor(Math.random() * 51 + 30) / fps

//Random square direction: tal y como lo teníamos sólo iba hacia la derecha-abajo. Ahora vamos a incluir el resto de direcciones
if (Math.floor(Math.random() * 2) == 0) {
    orangeSpeedX = - orangeSpeedX
}
if (Math.floor(Math.random() * 2) == 0) {
    orangeSpeedY = - orangeSpeedY
}

if (Math.floor(Math.random() * 3) == 0) {
    blueSpeedX = - blueSpeedX
}
if (Math.floor(Math.random() * 3) == 0) {
    blueSpeedY = - blueSpeedY
}

if (Math.floor(Math.random() * 5) == 0) {
    brownSpeedX = - brownSpeedX
}
if (Math.floor(Math.random() * 5) == 0) {
    brownSpeedY = - brownSpeedY
}
//Update function
function update() {
    //Move the square: trasladamos la posición del cuadrado
    orangeX += orangeSpeedX
    orangeY += orangeSpeedY

    blueX += blueSpeedX
    blueY += blueSpeedY

    brownX += brownSpeedX
    brownY += brownSpeedY

    //Bounce the square off each wall--ORANGE
    if (orangeX - squareS / 2 < 0 && orangeSpeedX < 0) {
        orangeSpeedX = - orangeSpeedX
    }
    if (orangeX + squareS / 2 > canvas.width && orangeSpeedX > 0) {
        orangeSpeedX = - orangeSpeedX
    }
    if (orangeY - squareS / 2 < 0 && orangeSpeedY < 0) {
        orangeSpeedY = - orangeSpeedY
    }
    if (orangeY + squareS / 2 > canvas.height && orangeSpeedY > 0) {
        orangeSpeedY = - orangeSpeedY
    }
    //--BLUE
    if (blueX - squareS / 2 < 0 && blueSpeedX < 0) {
        blueSpeedX = - blueSpeedX
    }
    if (blueX + squareS / 2 > canvas.width && blueSpeedX > 0) {
        blueSpeedX = - blueSpeedX
    }
    if (blueY - squareS / 2 < 0 && blueSpeedY < 0) {
        blueSpeedY = - blueSpeedY
    }
    if (blueY + squareS / 2 > canvas.height && blueSpeedY > 0) {
        blueSpeedY = - blueSpeedY
    }
    //--BROWN
    if (brownX - squareS / 2 < 0 && brownSpeedX < 0) {
        brownSpeedX = - brownSpeedX
    }
    if (brownX + squareS / 2 > canvas.width && brownSpeedX > 0) {
        brownSpeedX = - brownSpeedX
    }
    if (brownY - squareS / 2 < 0 && brownSpeedY < 0) {
        brownSpeedY = - brownSpeedY
    }
    if (brownY + squareS / 2 > canvas.height && brownSpeedY > 0) {
        brownSpeedY = - brownSpeedY
    }

    //Draw board and squares
    ctx.fillStyle = 'pink'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'orange'
    ctx.fillRect(orangeX - squareS / 2, orangeY - squareS / 2, squareS, squareS)
    ctx.fillStyle = 'blue'
    ctx.fillRect(blueX - squareS / 2, blueY - squareS / 2, squareS, squareS)
    ctx.fillStyle = 'brown'
    ctx.fillRect(brownX - squareS / 2, brownY - squareS / 2, squareS, squareS)
    ctx.fillStyle = 'white'
    ctx.fillRect(playerX - squareS / 2, playerY - squareS / 2, squareS, squareS)
    text('Points: ' + points, '40px Share Tech Mono', 290, 40, 'black') //Score 
    if (gameOver) {
        //si points = -1, que me salga el texto:GAME OVER, que la puntuación = 0 y squares//player se queden en sus posiciones iniciales y sin velocidad
        text('GAME OVER', '120px Share Tech Mono', 100, 350, 'red')
        //Squares: vuelven a sus coordenadas iniciales
        orangeX = canvas.width / 2
        orangeY = canvas.height / 2
        blueX = canvas.width / 3
        blueY = canvas.height / 3
        brownX = canvas.width / 5
        brownY = canvas.width / 5
        playerX = 100
        playerY = 100
        points = 0
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight')
        playerX += step
    if (event.key === 'ArrowLeft')
        playerX -= step
    if (event.key === 'ArrowDown')
        playerY += step
    if (event.key === 'ArrowUp')
        playerY -= step

    //Collision detection
    if (playerX + squareS >= orangeX
        && playerX <= orangeX + squareS
        && playerY + squareS >= orangeY
        && playerY <= orangeY + squareS) {
        points++
        if (points == -1) {
            return gameOver = true
        }
        //console.log('Congratulations!! You have ' + points + ' points')
    }
    if (playerX + squareS >= blueX
        && playerX <= blueX + squareS
        && playerY + squareS >= blueY
        && playerY <= blueY + squareS) {
        points--
        if (points == -1) {
            return gameOver = true
        }
        //console.log('Sorry, you have ' + points + ' points')
    }
    if (playerX + squareS >= brownX
        && playerX <= brownX + squareS
        && playerY + squareS >= brownY
        && playerY <= brownY + squareS) {
        points--
        if (points == -1) {
            return gameOver = true
        }
        //console.log('Sorry, you have ' + points + ' points')
    }
})


//Score and game over
function text(txt, fnt, x, y, c) {
    ctx.fillStyle = c
    ctx.font = fnt
    ctx.fillText(txt, x, y)
}
//FIN DEL JUEGO


//Más paneles
var auxiliarBar = gamePanel.querySelector('.auxiliar')

var changeButton = auxiliarBar.querySelector('.auxiliar__change')
changeButton.addEventListener('click', function () {
    gamePanel.classList.add('off')
    levelPanel.classList.remove('off')
})

var exitButton = auxiliarBar.querySelector('.auxiliar__exit')
var lastExitPanel = document.querySelector('.exit')
exitButton.addEventListener('click', function () {
    gamePanel.classList.add('off')
    lastExitPanel.classList.remove('off')
})

var backGameButton = lastExitPanel.querySelector('.button--back')
backGameButton.addEventListener('click', function () {
    lastExitPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

var lastExitButton = lastExitPanel.querySelector('.button--exit')
lastExitButton.addEventListener('click', function () {
    lastExitPanel.classList.add('off')
    signupPanel.classList.remove('off')
})


