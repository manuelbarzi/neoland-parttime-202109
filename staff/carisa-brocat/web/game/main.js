//defining variables
var landingView = document.querySelector('.landing')
var signInView = document.querySelector('.signIn')
var signUpView = document.querySelector('.signUp')
var postSignUpView = document.querySelector('.post-signUp')
var startingView = document.querySelector('.starting')
var headerPerform = document.querySelector('.header')
var changeProfile = document.querySelector('.profile')
var changeProfileName = document.querySelector('.profile__change-name')
var changeProfilePassword = document.querySelector('.profile__change-password')

var _token

//landing view
var landingSignInButton = landingView.querySelector('.landing__signIn')

landingSignInButton.addEventListener('click', function () {
    landingView.classList.add('off')
    signInView.classList.remove('off')
})

var landingSignUpButton = landingView.querySelector('.landing__signUp')

landingSignUpButton.addEventListener('click', function () {
    landingView.classList.add('off')
    signUpView.classList.remove('off')
})

//sign in button in sign up view
var signUpSignInButton = signUpView.querySelector('.signUp__signIn')

signUpSignInButton.addEventListener('click', function () {
    signUpView.classList.add('off')
    signInView.classList.remove('off')
})

//sign up button in sign in view
var signInSignUpButton = signInView.querySelector('.signIn__signUp')

signInSignUpButton.addEventListener('click', function () {
    signInView.classList.add('off')
    signUpView.classList.remove('off')
})

//sign up form
var signUpForm = signUpView.querySelector('form')

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var nameInput = signUpForm.name
    var emailInput = signUpForm.email
    var passwordInput = signUpForm.password

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    try {
        registerUser(name, email, password, function (error) {

            if (error) {
                var signUpFeedback = signUpView.querySelector('.signUp__feedback')

                signUpFeedback.innerText = error.message

                signUpFeedback.classList.remove('off')

                return
            }

            signUpView.classList.add('off')
            postSignUpView.classList.remove('off')
        })
    } catch (error) {
        var signUpFeedback = signUpView.querySelector('.signUp__feedback')

        signUpFeedback.innerText = error.message

        signUpFeedback.classList.remove('off')
    }

})

//post sign up view
var postsignUpSignInButton = postSignUpView.querySelector('.post-signUp__signIn')

postsignUpSignInButton.addEventListener('click', function () {
    postSignUpView.classList.add('off')
    signInView.classList.remove('off')
})

//sign in form
var signInForm = signInView.querySelector('form')

signInForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var emailInput = signInForm.email
    var passwordInput = signInForm.password

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                var signInFeedback = signInView.querySelector('.signIn__feedback')

                signInFeedback.innerText = error.message

                signInFeedback.classList.remove('off')

                return
            } else {
                retrieveUser(token, function (error, user) {
                    if (error) {
                        var signInFeedback = signInView.querySelector('.signIn__feedback')

                        signInFeedback.innerText = error.message

                        signInFeedback.classList.remove('off')

                        return
                    }
                    _token = token

                    //starting view on
                    var startingTextGame = startingView.querySelector('.starting__text')

                    startingTextGame.innerText = 'Wellcome ' + user.name + '!Are you ready?'

                    signInView.classList.add('off')
                    startingView.classList.remove('off')

                })
            }

        })
    } catch (error) {
        var signInFeedback = signInView.querySelector('.signIn__feedback')

        signInFeedback.innerText = error.message

        signInFeedback.classList.remove('off')
    }
})


//game start
var startingStartButton = startingView.querySelector('.starting__start')
var headerprofileButton = headerPerform.querySelector('.profile-button')
var changeProfileNameButton = changeProfile.querySelector('.button__changes--name')
var changeProfilePasswordButton = changeProfile.querySelector('.button__changes--password')
var changeProfileNameForm = changeProfileName.querySelector('form')

startingStartButton.addEventListener('click', function (event) {
    event.preventDefault

    startingView.classList.add('off')
    headerPerform.classList.add('container--hztal')
    headerprofileButton.classList.remove('off')


    headerprofileButton.addEventListener('click', function () {
        changeProfile.classList.remove('off')
    })

    changeProfileNameButton.addEventListener('click', function () {
        changeProfile.classList.add('off')
        changeProfileName.classList.remove('off')
    })

    changeProfileNameForm.addEventListener('submit', function (event) {
        event.preventDefault()

        var newNameInput = changeProfileNameForm.newName

        var data = { name: newNameInput }

        try {
            modifyUser(_token, data, function (error) {
                if (error) {

                    if (error.includes('invalid token')) {

                        signInView.classList.remove('off')
                        headerPerform.classList.remove('container--hztal')
                        headerprofileButton.classList.add('off')
                    }

                    var changeProfileNameFeedback = changeProfileName.querySelector('.change-name__feedback')

                    changeProfileNameFeedback.innerText = error.message

                    changeProfileNameFeedback.classList.remove('off')

                    return
                })

        } catch (error) {
            var changeProfileNameFeedback = changeProfileName.querySelector('.change-name__feedback')

            changeProfileNameFeedback.innerText = error.message

            changeProfileNameFeedback.classList.remove('off')
        }

    })

    changeProfilePasswordButton.addEventListener('click', function () {
        changeProfile.classList.add('off')
        changeProfilePassword.classList.remove('off')
    })




    var gameBody = document.querySelector('body')
    gameBody.classList.add('change-background')


    var gameBird = document.querySelector('.bird')
    gameBird.classList.remove('off')


    var gamePerson = document.querySelector('.person')
    gamePerson.classList.remove('off')







})