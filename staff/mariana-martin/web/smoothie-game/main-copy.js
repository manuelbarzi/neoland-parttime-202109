var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var homePanel = document.querySelector('.home')
var gamePanel = document.querySelector('.game')
var profilePanel = document.querySelector('.profile')
var changeUsernamePanel = document.querySelector('.change-username')
var changePasswordPanel = document.querySelector('.change-password')

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

    var nameInput = signupForm.name
    var usernameInput = signupForm.username
    var passwordInput = signupForm.password

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    try {
        registerUser(name, username, password, function (error) {
            if (error) {
                var signupFeedback = signupPanel.querySelector('.signup__feedback')

                signupFeedback.innerText = error.message

                signupFeedback.classList.remove('off')

                return
            }

            signupPanel.classList.add('off')
            postSignupPanel.classList.remove('off')
        })
    } catch (error) {
        var signupFeedback = signupPanel.querySelector('.signup__feedback')

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

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        authenticateUser(username, password, function (error, token) {
            if (error) {
                var signinFeedback = signinPanel.querySelector('.feedback')

                signinFeedback.innerText = error.message
                signinFeedback.classList.remove('feedback--warning')
                signinFeedback.classList.add('feedback--error')

                signinFeedback.classList.remove('off')

                return
            }

            retrieveUser(token, function (error, user) {
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

                //start()
            })
        })
    } catch (error) {
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
