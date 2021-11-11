var landingView = document.querySelector('.landing')
var signInView = document.querySelector('.signIn')
var signUpView = document.querySelector('.signUp')
var postSignUpView = document.querySelector('.post-signUp')
var startingView = document.querySelector('.starting')

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

var signUpSignInButton = signUpView.querySelector('.signUp__signIn')

signUpSignInButton.addEventListener('click', function () {
    signUpView.classList.add('off')
    signInView.classList.remove('off')
})

var signInSignUpButton = signInView.querySelector('.signIn__signUp')

signInSignUpButton.addEventListener('click', function () {
    signInView.classList.add('off')
    signUpView.classList.remove('off')
})

var signUpForm = signUpView.querySelector('form')

var users = [{
    name: 'Carisa', email: 'krisa@gmail.com', password: '1234'
}]

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var nameInput = signUpForm.name
    var emailInput = signUpForm.email
    var passwordInput = signUpForm.password

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    var user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)

    signUpView.classList.add('off')
    postSignUpView.classList.remove('off')
})

var postsignUpSignInButton = postSignUpView.querySelector('.post-signUp__signIn')

postsignUpSignInButton.addEventListener('click', function () {
    postSignUpView.classList.add('off')
    signInView.classList.remove('off')
})

var signInForm = signInView.querySelector('form')

signInForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var nameInput = signInForm.name
    var passwordInput = signInForm.password

    var name = nameInput.value
    var password = passwordInput.value

    var user = users.find(function (user) {
        return user.name === name && user.password === password
    })

    if (!user) {
        var signInFeedback = signInView.querySelector('.signIn__feedback')

        signInFeedback.innerText = 'User name or password Incorrect'

        signInFeedback.classList.remove('off')
    } else {

        var startingTextGame = startingView.querySelector('.starting__text')

        startingTextGame.innerText = 'Wellcome ' + user.name + '!Are you ready?'

        signInView.classList.add('off')
        startingView.classList.remove('off')

    }

    var startingStartButton = startingView.querySelector('.starting__start')

    startingStartButton.addEventListener('click', function (event) {
        event.preventDefault

        startingView.classList.add('off')

        var gameBody = document.querySelector('body')

        gameBody.classList.add('change-background')

        
        var gameBird = document.querySelector('.bird')

        gameBird.classList.remove('off')


        var gamePerson = document.querySelector('.person')

        gamePerson.classList.remove('off')


        var person={
            x:0,
            y:0
        }

        person.y = 300

        gamePerson.style.transform = translate(person.x, person.y)

//         setInterval(function(){
// if()
//         }, 500)


function translate(x,y){
    return 'translate(' + x + 'px, ' + y + 'px)'
}

    })


})