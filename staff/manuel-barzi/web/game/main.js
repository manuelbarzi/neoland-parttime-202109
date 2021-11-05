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
    }
})