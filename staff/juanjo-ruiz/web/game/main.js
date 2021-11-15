//index

var user = []

var signinPanel = document.querySelector('.signin')
var postSignupPanel = document.querySelector('.post-signup')
var signupPanel = document.querySelector('.signup')

var _token

var signinSignupButton = signinPanel.querySelector('.signin__signup')

signinSignupButton.addEventListener('click', function () {
    signinPanel.classList.add('off')
    signupPanel.classList.remove('off')
})

var signupSigninButton = signupPanel.querySelector('.signup__signin')

signupSigninButton.addEventListener('click', function () {
    signupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

var signupForm = signupPanel.querySelector('form')

signupForm.addEventListener('submint', function (event) {
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

    signunPanel.classList.add('off')
    signinPanel.classList.remove('off')
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
        var signinError = signinPanel.querySelector('.signin__error')

        signinError.innerText = 'Error en usuario o contraseña'

        signinError.classList.remove('off')
    } else {
        var gameUser = gamePanel.querySelector('.game__user')

        gameUser.innerText = 'Hola, ' + user.name + '!'

        signinPanel.classList.add('off')
        gamePanel.classList.remove('off')

        start()
    }
})

// Game

var step = 50, margin = 0, point = 0

var ship = {
    x: 0,
    y: 0,
    width: 100,
    height: 100 * 854 / 522
}

var shipImage = document.querySelector('.spaceship')

shipImage.style.transform = translate(ship.x, ship.y)

document.addEventListener('keydown', function (event) {
    if (event.key === 'd')
        ship.x += step

    if (event.key === 'a')
        ship.x -= step

    if (event.key === 's')
        ship.y += step

    if (event.key === 'w')
        ship.y -= step
})

shipImage.style.transform = translate(ship.x, ship.y)
