//var users = [{name: 'Yoana', username: 'ycph92', password:'123123123'}]


var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var gamePanel = document.querySelector('.game')


var signupSigninButton = signupPanel.querySelector('.signup__signin')

signupSigninButton.addEventListener('click', function(){
    signupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

var signinSignupButton = signinPanel.querySelector('.signin__signup')

signinSignupButton.addEventListener('click', function(){
    signinPanel.classList.add('off')
    signupPanel.classList.remove('off')
})

var signupForm = signupPanel.querySelector('form')

signupForm.addEventListener('submit', function(event){
    event.preventDefault()

    var nameInput = signupForm.name
    var usernameInput = signupForm.username
    var passwordInput = signupForm.password

    var name = nameInput.value
    var username = usernameInput.value
    var password = passwordInput.value

    registerUser(name, username, password, function (error) {
        if (error) {
            alert(error.message)

            return
        }

        signupPanel.classList.add('off')
        postSignupPanel.classList.remove('off')
    })
})

var postSignupSigninButton = postSignupPanel.querySelector('button')

postSignupSigninButton.addEventListener('click', function(){
    postSignupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})


var signinForm = signinPanel.querySelector('form')

signinForm.addEventListener('submit', function(event){
    event.preventDefault()

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    authenticateUser(username, password, function (error, token) {
        if (error) {
            var siginFeedback = signinPanel.querySelector('.signin__feedback')

            siginFeedback.innerText = error.message

            siginFeedback.classList.remove('off')
        } else {
            retrieveUser(token, function (error, user) {
                if (error) {
                    var siginFeedback = signinPanel.querySelector('.signin__feedback')
        
                    siginFeedback.innerText = error.message
        
                    siginFeedback.classList.remove('off')

                    return 
                }

                _token = token

                var gameUser = gamePanel.querySelector('.game__user')

                gameUser.innerText = 'Hello, ' + user.name + '!'

                signinPanel.classList.add('off')
                gamePanel.classList.remove('off')

                start()
            })
        }
    })

})

//------------> Aqui se edita el juego.... 

function start(){

var step= 50, margin = 0, points = 0

var asteroid = {
    x: 0,
    y: 0,
    width: 100,
    height: 100 / 423 * 369 //~87
}

var ship = {
    x: 0,
    y: 0,
    width: 100,
    height: 100 *792 / 514 //~154
}


var shipImage = document.querySelector('.spaceship')

shipImage.style.transform = translate(ship.x, ship.y)

var asteroidImage = document.querySelector('.asteroid')

asteroid.x = 500
asteroid.y = 100

asteroidImage.style.transform = translate(asteroid.x, asteroid.y)

document.addEventListener('keydown', function (event){
    if (event.key === 'ArrowRight')
    ship.x += step // ship.x = ship.x + step
    if (event.key === 'ArrowLeft')
    ship.x -= step
    if (event.key === 'ArrowDown')
    ship.y += step
    if (event.key === 'ArrowUp')
    ship.y -= step

    shipImage.style.transform = translate (ship.x, ship.y)

    if (ship.x + ship.width / 2 >= asteroid.x + asteroid.width * margin
        && ship.x + ship.width / 2 <= asteroid.x + asteroid.width * (1 - margin)
        && ship.y >= asteroid.y + asteroid.height * margin
        && ship.y <= asteroid.y + asteroid.height * (1 - margin))

        points++

        console.log('collision! you have ' + points + ' points')
})


var direction = 1

setInterval(function () {
    if (asteroid.x > 800)
        direction = -1

    if (asteroid.x < 200)
        direction = 1

    asteroid.x += direction * step

    asteroidImage.style.transform = translate(asteroid.x, asteroid.y)
}, 500);


//utils


function translate (x, y){
    return ' translate(' + x + 'px, ' + y + 'px)'
}

}