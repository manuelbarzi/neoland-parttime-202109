var users = [
    { name: 'Manu', username: 'manuelbarzi', password: '123123123' }
]

var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
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
}