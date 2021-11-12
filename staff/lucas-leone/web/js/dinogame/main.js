//USUARIO
var users = [
    { name: 'Lucas', username: 'lucasmleone', password: '1111' }
]

var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var gamePanel = document.querySelector('.game')

var signupSigninButton = signupPanel.querySelector('.signup__signin')

var dino3Image=document.querySelector('.dino3')
var rot=false

InterR=setInterval(function(){
if(!rot){
dino3Image.classList.add('mirror')
rot=true
}else{
    dino3Image.classList.remove('mirror')
    rot=false
}},2000)

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
    event.preventDefault()

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

var postSignupSigninButton = postSignupPanel.querySelector('.button')

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
        var siginFeedback = signinPanel.querySelector('.signin__feedback')

        siginFeedback.innerText = 'wrong credentials'

        siginFeedback.classList.remove('off')
    } else {
        var gameUser = gamePanel.querySelector('.game__user')

        gameUser.innerText = 'Hello, ' + user.name + '!'

        signinPanel.classList.add('off')
        gamePanel.classList.remove('off')

        start()
    }
})

function start() {
    //GAME
    var step = 10
    var stepc = 10
    var cicle = 0
    var direction = -1
    var i = 80
    //DINO
    var dino = {
        x: 10,
        y: 250,
        h: 60,
        w: 60
    }

    var dinoImage1 = document.querySelector('.dino1')
    dinoImage1.style.transform = translate(dino.x, dino.y)
    var dinoImage2 = document.querySelector('.dino2')
    dinoImage2.style.transform = translate(dino.x, dino.y)

    var din = true
    var inter4 = setInterval(function () {
        if (din) {
            var dinoImage = dinoImage2
            dinoImage2.classList.remove('off')
            dinoImage1.classList.add('off')

            din = !din
        }
        else {
            var dinoImage = dinoImage1
            dinoImage1.classList.remove('off')
            dinoImage2.classList.add('off')


            din = !din
        }
    }, 70)



    //CACTUS1
    var cactus1Image = document.querySelector('.cactus1')
    var cactus1 = {
        x: 1550,
        y: 254,
        h: 60,
        w: 30
    }

    cactus1Image.style.transform = translate(cactus1.x, cactus1.y)

    // cloud 1
    var cloud1Image = document.querySelector('.cloud1')
    var cloud1 = {
        x: 1500,
        y: 120,
        h: 60,
        w: 30
    }

    cloud1Image.style.transform = translate(cloud1.x, cloud1.y)

    //CACTUS2
    var cactus2Image = document.querySelector('.cactus2')
    var cactus2 = {
        x: 1800,
        y: 262,
        h: 50,
        w: 30
    }

    cactus2Image.style.transform = translate(cactus2.x, cactus2.y)

    function translate(x, y) {
        return 'translate(' + x + 'px, ' + y + 'px)'
    }
    //cloud2
    var cloud2Image = document.querySelector('.cloud2')
    var cloud2 = {
        x: 1900,
        y: 120,
        h: 50,
        w: 30
    }

    cloud2Image.style.transform = translate(cloud2.x, cloud2.y)

    function translate(x, y) {
        return 'translate(' + x + 'px, ' + y + 'px)'
    }

    // DINO TECLADO 

    document.addEventListener('keydown', function (event) {
        if (event.key === ' ') {

            var inter1 = setInterval(function () {
                cicle++
                if (dino.y >= 250)
                    direction = -1

                if (dino.y <= 100)
                    direction = 1
                if (cicle === 30) {
                    clearInterval(inter1)
                    cicle = 0
                }
                dino.y += direction * step
                dinoImage1.style.transform = translate(dino.x, dino.y)
                dinoImage2.style.transform = translate(dino.x, dino.y)
            }, 20)
        }


        dinoImage.style.transform = translate(dino.x, dino.y)
    })
    // MOVIMIENTO CACTUS
    var inter2 = setInterval(function () {
        cactus1.x = cactus1.x - stepc
        cactus2.x = cactus2.x - stepc
        if (cactus1.x < 0) {
            cactus1.x = 1550
        }
        if (cactus2.x < 0) {
            cactus2.x = 1900
        }
        if (cactus1.x - cactus1.w / 2 < dino.x + dino.w / 2 && cactus1.y - cactus1.h / 2 <= dino.y + dino.h / 2) {
            clearInterval(inter2)
        }
        if (cactus2.x - cactus2.w / 2 < dino.x + dino.w / 2 && cactus2.y - cactus2.h / 2 <= dino.y + dino.h / 2) {
            clearInterval(inter2)
        }
        cactus1Image.style.transform = translate(cactus1.x, cactus1.y)
        cactus2Image.style.transform = translate(cactus2.x, cactus2.y)
    }, 20)
    //MOVIMIENTO CLOUD
    var inter2c = setInterval(function () {
        cloud1.x = cloud1.x - stepc - 3
        cloud2.x = cloud2.x - stepc - 3
        if (cloud1.x < 0) {
            cloud1.x = 1550
        }
        if (cloud2.x < 0) {
            cloud2.x = 1900
        }
        cloud1Image.style.transform = translate(cloud1.x, cloud1.y)
        cloud2Image.style.transform = translate(cloud2.x, cloud2.y)
    }, 40)


    //PANTALLA FINAL
    var value = document.querySelector('.value')
    var score = 0
    var points = 0
    var scoreText = document.querySelector('.score')
    var pressText = document.querySelector('.final__press')
    var loseText = document.querySelector('.final__lose')


//SCORE
    var inter3 = setInterval(function () {
        points += 1
        score = "Score: " + points
        
        scoreText.innerText = score
        if (points === 1000) {
            stepc = stepc * 1.2
        } else if (points === 2000) {
            stepc = stepc * 1.25
        }
        var ps = true

        if (cactus1.x - cactus1.w / 2 < dino.x + dino.w / 2 && cactus1.y - cactus1.h / 2 <= dino.y + dino.h / 2) {
            clearInterval(inter3)
            loseText.classList.remove('off')
            var inter4 = setInterval(function () {



                if (ps) {
                    pressText.innerText = 'Press enter'
                    pressText.classList.remove('off')
                    ps = !ps
                }
                else {

                    pressText.classList.add('off')

                    ps = !ps
                }
            }, 500)

        }
        // GAME OVER INTERVALO
        if (cactus2.x - cactus2.w / 2 < dino.x + dino.w / 2 && cactus2.y - cactus2.h / 2 <= dino.y + dino.h / 2) {
            clearInterval(inter3)
            loseText.classList.remove('off')
            var inter4 = setInterval(function () {



                if (ps) {
                    pressText.innerText = 'Press enter'
                    pressText.classList.remove('off')
                    ps = !ps
                }
                else {

                    pressText.classList.add('off')

                    ps = !ps
                }
            }, 500)
        }
    })

    var canvas1 = document.getElementById("canvas1");
    var ctx = canvas1.getContext("2d");

    ctx.moveTo(1, 268);
    ctx.lineTo(1400, 268);
    ctx.lineWidth = 5
    ctx.strokeStyle = "black";
    ctx.stroke();

    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    ctx2.moveTo(1, 275);
    ctx2.lineTo(1400, 275);
    ctx2.lineWidth = 3
    ctx2.strokeStyle = "black";
    ctx2.stroke();




    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {

            location.reload()
        }
    })

}
