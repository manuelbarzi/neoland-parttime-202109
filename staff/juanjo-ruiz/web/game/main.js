//index

var signinPanel = document.querySelector('.signin')
var postSignupPanel = document.querySelector('.post-signup')
var signupPanel = document.querySelector('.signup')
var homePanel = document.querySelector('.home')
var gamePanel = document.querySelector('.game')
var profilePanel = document.querySelector('.profile')
var changeUsernamePanel = document.querySelector('.change-username')
var changePasswordPanel = document.querySelector('.change-password')

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

    try {
        registreUser(name, username, password, function (error) {
            if (error) {

                var signupFeedback = signupPanel.querySelector('.feedback')

                signupFeedback.classList.remove('.feedback--alert')
                signupFeedback.classList.add('.feedback--error')

                signupFeedback.innerText = error.message

                signupFeedback.classList.remove('off')

                return
            }

            signupPanel.classList.add('off')
            postSignupPanel.classList.remove('off')

        })
    } catch (error) {
        var signupFeedback = signupPanel.querySelector('.feedback')

        signupFeedback.classList.remove('.feedback--error')
        signupFeedback.classList.add('.feedback--alert')

        signupFeedback.innerText = error.message

        signupFeedback.classList.remove('off')
    }
})

var postSignupSigninButton = postSignupPanel.querySelector('button')

postSignupSigninButton.addEventListener('click', function () {
    postSignupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

var signinForm = signinPanel.querySelector('form')

var signInUsernameInput = signinForm.username

signInUsernameInput.onfocus = function () {
    var signinFeedback = signinPanel.querySelector('.feedback')

    signinFeedback.classList.add('off')

}

var singinPasswordInput = singinForm.password

siginInPasswordInput.onfocus = function () {
    var signinFeedback = signinPanel.querySelector('.feedback')

    signinFeedback.classList.add('off')
}

signinForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        authenticateUser(username, password, function (error, token) {
            if (error) {
                var signinError = signinPanel.querySelector('.feedback')

                signinFeedback.innerText = error.message
                signinFeedback.classList.remove('feedback--ok')
                signinFeedback.classList.add('feedback--error')

                signinError.classList.remove('off')

                return

            }

            retrieverUser(token, function (error, user) {
                if (error) {
                    var signinFeedback = signinPanel.querySelector('.signin__feedback')

                    signinFeedback.innerText = error.message

                    signinFeedback.classList.remove('off')

                    return
                }

                _token = token

                var homeUser = homePanel.querySelector('.home__user')

                homeUser.innerText = 'Hello, ' + user.name + '!'

                signinPanel.classList.add('off')
                homePanel.classList.remove('off')
            })
        })
    } catch (error) {
        var signinFeedback = signinPanel.querySelector('.feedback')

        signinFeedback.innerText = error.message
        signinFeedback.classList.remove('feedback--error')
        signinFeedback.classList.add('feedback--ok')

        signinFeedback.classList.remove('off')
    }
})
//edit
var homeGameButton = homePanel.querySelector('.home__game')

homeGameButton.onclick = function () {
    profilePanel.classList.add('off')
    gamePanel.classList.remove('off')
}

var homeProfileButton = homePanel.querySelector('.home__profile')

homeProfileButton.onclick = function () {
    gamePanel.classList.add('off')
    changeUsernamePanel.classList.add('off')
    changePasswordPanel.classList.add('off')
    profilePanel.classList.remove('off')
}


var profileChangeUsernameButton = profilePanel.querySelector('.profile__change-username')

profileChangeUsernameButton.onclick = function () {
    profilePanel.classList.add('off')
    changeUsernamePanel.classList.remove('off')
}

var profileChangePasswordButton = profilePanel.querySelector('.profile__change-password')

profileChangePasswordButton.onclick = function () {
    profilePanel.classList.add('off')
    changePasswordPanel.classList.remove('off')
}

var changeUsernameForm = changeUsernamePanel.querySelector('form')

var changeUsernameUsernameInput = changeUsernameForm.username

changeUsernameUsernameInput.onfocus = function () {
    var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')

    changeUsernameFeedback.classList.add('off')
}

//changeUsernameForm.addEventListener('submit', function() {})
changeUsernameForm.onsubmit = function (event) {
    event.preventDefault()

    //var usernameInput = changeUsernameForm.username  Opcion 1
    //var usernameInput = event.target.username - Opcion 2
    var usernameInput = this.username // - Opcion 3

    var username = usernameInput.value

    var data = { username: username }

    try {
        modifyUser(_token, data, function (error) {
            var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')

            if (error) {
                changeUsernameFeedback.innerText = error.message
                changeUsernameFeedback.classList.remove('feedback--ok')
                changeUsernameFeedback.classList.add('feedback--error')

                changeUsernameFeedback.classList.remove('off')

                return
            }

            changeUsernameFeedback.innerText = 'Usuario enviado correctamente'
            changeUsernameFeedback.classList.add('feedback--ok')

            changeUsernameFeedback.classList.remove('off')
        })
    } catch (error) {
        var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')

        changeUsernameFeedback.innerText = error.message
        changeUsernameFeedback.classList.remove('feedback--ok')
        changeUsernameFeedback.classList.add('feedback--error')

        changeUsernameFeedback.classList.remove('off')
    }
}

// Game

function start() {
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
}