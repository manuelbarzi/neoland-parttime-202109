var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var homePanel = document.querySelector('.home')
var gamePanel = document.querySelector('.game')
var profilePanel = document.querySelector('.profile')
var changeUsernamePanel = document.querySelector('.change-username')
var changePasswordPanel = document.querySelector('.change-password')
var spinner = document.querySelector('.spinner')

var _token

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

    spinner.classList.remove('off')

    var nameInput = signupForm.name
    var usernameInput = signupForm.username
    var passwordInput = signupForm.password

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    try {
        registerUser(name, username, password, function (error) {
            if (error) {
                spinner.classList.add('off')

                var signupFeedback = signupPanel.querySelector('.feedback')

                signupFeedback.classList.remove('feedback--warning')
                signupFeedback.classList.add('feedback--error')

                signupFeedback.innerText = error.message

                signupFeedback.classList.remove('off')

                return
            }

            spinner.classList.add('off')

            signupPanel.classList.add('off')
            postSignupPanel.classList.remove('off')
        })
    } catch (error) {
        spinner.classList.add('off')

        var signupFeedback = signupPanel.querySelector('.feedback')

        signupFeedback.classList.remove('feedback--error')
        signupFeedback.classList.add('feedback--warning')

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

signInUsernameInput.onfocus = function() {
    var signinFeedback = signinPanel.querySelector('.feedback')

    signinFeedback.classList.add('off')
}

var signInPasswordInput = signinForm.password

signInPasswordInput.onfocus = function() {
    var signinFeedback = signinPanel.querySelector('.feedback')

    signinFeedback.classList.add('off')
}

signinForm.addEventListener('submit', function (event) {
    event.preventDefault()

    spinner.classList.remove('off')

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        authenticateUser(username, password, function (error, token) {
            if (error) {
                spinner.classList.add('off')

                var signinFeedback = signinPanel.querySelector('.feedback')

                signinFeedback.innerText = error.message
                signinFeedback.classList.remove('feedback--warning')
                signinFeedback.classList.add('feedback--error')

                signinFeedback.classList.remove('off')

                return
            }

            retrieveUser(token, function (error, user) {
                if (error) {
                    spinner.classList.add('off')

                    var signinFeedback = signinPanel.querySelector('.signin__feedback')

                    signinFeedback.innerText = error.message

                    signinFeedback.classList.remove('off')

                    return
                }

                spinner.classList.add('off')

                _token = token

                var homeUser = homePanel.querySelector('.home__user')

                homeUser.innerText = 'Hello, ' + user.name + '!'

                signinPanel.classList.add('off')
                homePanel.classList.remove('off')

                //start()
            })
        })
    } catch (error) {
        spinner.classList.add('off')

        var signinFeedback = signinPanel.querySelector('.feedback')

        signinFeedback.innerText = error.message
        signinFeedback.classList.remove('feedback--error')
        signinFeedback.classList.add('feedback--warning')

        signinFeedback.classList.remove('off')
    }
})

var homeGameButton = homePanel.querySelector('.home__game')

homeGameButton.onclick = function () {
    profilePanel.classList.add('off')
    gamePanel.classList.remove('off')
}

var homeProfileButton = homePanel.querySelector('.home__profile')

//homeProfileButton.addEventListener('click', function() {})
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

changeUsernameUsernameInput.onfocus = function() {
    var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')

    changeUsernameFeedback.classList.add('off')
}

//changeUsernameForm.addEventListener('submit', function() {})
changeUsernameForm.onsubmit = function (event) {
    event.preventDefault()

    //var usernameInput = changeUsernameForm.username
    //var usernameInput = event.target.username
    var usernameInput = this.username

    var username = usernameInput.value

    var data = { username: username }

    try {
        modifyUser(_token, data, function (error) {
            var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')
            
            if (error) {
                changeUsernameFeedback.innerText = error.message
                changeUsernameFeedback.classList.remove('feedback--success')
                changeUsernameFeedback.classList.add('feedback--error')

                changeUsernameFeedback.classList.remove('off')

                return
            }

            changeUsernameFeedback.innerText = 'Username correctly updated'
            changeUsernameFeedback.classList.add('feedback--success')

            changeUsernameFeedback.classList.remove('off')
        })
    } catch (error) {
        var changeUsernameFeedback = changeUsernamePanel.querySelector('.feedback')

        changeUsernameFeedback.innerText = error.message
        changeUsernameFeedback.classList.remove('feedback--success')
        changeUsernameFeedback.classList.add('feedback--error')

        changeUsernameFeedback.classList.remove('off')
    }
}

function start() {
    var step = 10, margin = 0, points = 0

    var bird = {
        x: 0,
        y: 0,
        width: 100,
        height: 100 * 369 / 423
    }

    var pipe = {
        x: 0,
        y: 0,
        width: 100,
        height: 100 * 792 / 514// 100 * 792 / 514 // ~154
    }

    var pipeImage = document.querySelector('.pipe')

    pipeImage.style.transform = translate(pipe.x, pipe.y)

    var birdImage = document.querySelector('.bird')

    bird.x = 500
    bird.y = 100

    birdImage.style.transform = translate(bird.x, bird.y)

    //document.onkeydown = function (event) {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight')
            pipe.x += step // ship.x = ship.x + step

        if (event.key === 'ArrowLeft')
            pipe.x -= step

        if (event.key === 'ArrowDown')
            pipe.y += step

        if (event.key === 'ArrowUp')
            pipe.y -= step

        pipeImage.style.transform = translate(pipe.x, pipe.y)

        if (pipe.x + pipe.width / 2 >= bird.x + bird.width * margin
            && pipe.x + pipe.width / 2 <= bird.x + bird.width * (1 - margin)
            && pipe.y >= bird.y + bird.height * margin
            && pipe.y <= bird.y + bird.height * (1 - margin)) {

            points++

            console.log('collision! you have ' + points + ' points')
        }
        // }
    })

    var direction = 1

    setInterval(function () {
        if (bird.x > 800)
            direction = -1

        if (bird.x < 200)
            direction = 1

        bird.x += direction * step

        birdImage.style.transform = translate(bird.x, bird.y)
    }, 500)

    // utils

    function translate(x, y) {
        return 'translate(' + x + 'px, ' + y + 'px)'
    }
}