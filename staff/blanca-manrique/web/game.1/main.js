var users = [
    { name: 'Blanca', username: 'blancamanrique', password: '121212' }
]

var signupPanel = document.querySelector('.signup')
var postSignupPanel = document.querySelector('.post-signup')
var signinPanel = document.querySelector('.signin')
var levelPanel = document.querySelector('.level')
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
    event.preventDefault() //Para evitar que se recarge y perdamos lo que tenemos en memoria

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
        var signinFeedback = signinPanel.querySelector('.signin__feedback')
        signinFeedback.innerText = 'wrong credentials'
        signinFeedback.classList.remove('off')
    } else {
        var levelUser = levelPanel.querySelector('.level__user')

        levelUser.innerText = 'Welcome ' + user.name + '!'

        signinPanel.classList.add('off')
        levelPanel.classList.remove('off')
    }
})

var levelOneButton = levelPanel.querySelector('.level--one')
levelOneButton.addEventListener('click', function () {
    levelPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

var levelTwoButton = levelPanel.querySelector('.level--two')
levelTwoButton.addEventListener('click', function () {
    levelPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

var levelThreeButton = levelPanel.querySelector('.level--three')
levelThreeButton.addEventListener('click', function () {
    levelPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

var levelFourButton = levelPanel.querySelector('.level--four')
levelFourButton.addEventListener('click', function () {
    levelPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

//Game--board
var board = document.querySelector('.board')

//Game--cards
var step = 50, points = 0

var four = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var queen = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var king = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 800 / 573, //~70
}

var jack = {
    x: 0,
    y: 0,
    width: 50,
    height: 50 * 2900 / 2000, //72,5
}

var chips = {
    x: 0,
    y: 0,
    width: 40,
    height: 40 * 1149 / 1431, //~32
}
var chipsImage = board.querySelector('.chips')
chipsImage.style.transform = translate(chips.x, chips.y)

var fourImage = board.querySelector('.four')
four.x = 500
four.y = 100
fourImage.style.transform = translate(four.x, four.y)

var queenImage = board.querySelector('.queen')
queen.x = 200
queen.y = 130
queenImage.style.transform = translate(queen.x, queen.y)

var kingImage = board.querySelector('.king')
king.x = 300
king.y = 220
kingImage.style.transform = translate(king.x, king.y)

var jackImage = board.querySelector('.jack')
jack.x = 600
jack.y = 250
jackImage.style.transform = translate(jack.x, jack.y)


function translate(x, y) {
    return 'translate(' + x + 'px,' + y + 'px)'
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight')
        chips.x += step
    if (event.key === 'ArrowLeft')
        chips.x -= step
    if (event.key === 'ArrowDown')
        chips.y += step
    if (event.key === 'ArrowUp')
        chips.y -= step

    chipsImage.style.transform = translate(chips.x, chips.y)

    if (chips.x + chips.width / 2 >= king.x
        && chips.x + chips.width / 2 <= king.x + king.width
        && chips.y + chips.height / 2 >= king.y
        && chips.y + chips.height / 2 <= king.y + king.height) {
        points++
        console.log('Congratulations!! You have ' + points + ' points')
    }
    if (chips.x + chips.width / 2 >= four.x
        && chips.x + chips.width / 2 <= four.x + four.width
        && chips.y + chips.height / 2 >= four.y
        && chips.y + chips.height / 2 <= four.y + four.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }
    if (chips.x + chips.width / 2 >= queen.x
        && chips.x + chips.width / 2 <= queen.x + queen.width
        && chips.y + chips.height / 2 >= queen.y
        && chips.y + chips.height / 2 <= queen.y + queen.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }
    if (chips.x + chips.width / 2 >= jack.x
        && chips.x + chips.width / 2 <= jack.x + jack.width
        && chips.y + chips.height / 2 >= jack.y
        && chips.y + chips.height / 2 <= jack.y + jack.height) {
        points--
        console.log('Sorry, you have ' + points + ' points')
    }

})

//Trayectorias cartas 
var direction = 1
setInterval(function () {
    if (four.x > 600 || queen.x > 400)
        direction = -1
    if (four.x < 20 || queen.x < 50)
        direction = 1

    four.x += direction * step
    fourImage.style.transform = translate(four.x, four.y)

    queen.x += direction * step
    queenImage.style.transform = translate(queen.x, queen.y)
}, 100);

// setInterval(function () {
//     if (four.x > 600 && queen.x > 400 && jack.x > 700 && jack.y > 700 && king.y > 800)
//         direction = -1
//     if (four.x < 20 && queen.x < 50 && jack.x < 30 && jack.y < 30 && king.y < 35)
//         direction = 1

//     four.x += direction * step
//     fourImage.style.transform = translate(four.x, four.y)

//     queen.y += direction * step
//     queenImage.style.transform = translate(queen.x, queen.y)

//     jack.y += direction * step
//     jack.x += direction * step
//     jackImage.style.transform = translate(jack.x, jack.y)

//     king.y += direction * step
//     kingImage.style.transform = translate(king.x, king.y)
// }, 100);

var auxiliarBar = gamePanel.querySelector('.auxiliar')

var changeButton = auxiliarBar.querySelector('.auxiliar__change')
changeButton.addEventListener('click',function(){
    gamePanel.classList.add('off')
    levelPanel.classList.remove('off')
})

var exitButton = auxiliarBar.querySelector('.auxiliar__exit')
var lastExitPanel = document.querySelector('.exit')
exitButton.addEventListener('click',function(){
    gamePanel.classList.add('off')
    lastExitPanel.classList.remove('off')
})

var backGameButton = lastExitPanel.querySelector('.button--back')
backGameButton.addEventListener('click', function(){
    lastExitPanel.classList.add('off')
    gamePanel.classList.remove('off')
})

var lastExitButton = lastExitPanel.querySelector('.button--exit')
lastExitButton.addEventListener('click', function(){
    lastExitPanel.classList.add('off')
    signupPanel.classList.remove('off')
})




