var users = [
    { name: 'Mariana', username: 'mariana', password: '123456' }
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
    //**** Frutas ****

    //pera
    var pear = document.querySelector('.pear')
    pear.draggable = true  //se selecciona el elemento y se hace draggable

    pear.addEventListener('dragstart', function (event) {  //se agrega un evento a la variable pera con dragstart
        event.dataTransfer.setData('id', 'pear')            //al evento se agrega método setData 
    })

    //cerezas
    var cherries = document.querySelector('.cherries')
    cherries.draggable = true

    cherries.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'cherries')
    })

    //coco
    var coco = document.querySelector('.coco')
    coco.draggable = true

    coco.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'coco')
    })

    //piña
    var pineapple = document.querySelector('.pineapple')
    pineapple.draggable = true

    pineapple.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'pineapple')
    })

    //naranja
    var orange = document.querySelector('.orange')
    orange.draggable = true

    orange.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'orange')
    })

    //manzana
    var apple = document.querySelector('.apple')
    apple.draggable = true

    apple.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'apple')
    })

    //durazno
    var peach = document.querySelector('.peach')
    peach.draggable = true

    peach.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('id', 'peach')
    })


    //**** Licuadora ****
    var blender = document.querySelector('.blender');

    blender.addEventListener('dragover', function (event) {
        event.preventDefault()
    })

    blender.addEventListener('drop', function (event) {
        var id = event.dataTransfer.getData('id')

        //drop de frutas

        if (id === 'pear')
            blender.append(pear)

        if (id === 'cherries')
            blender.append(cherries)

        if (id === 'coco')
            blender.append(coco)

        if (id === 'pineapple')
            blender.append(pineapple)

        if (id === 'orange')
            blender.append(orange)

        if (id === 'apple')
            blender.append(apple)

        if (id === 'peach')
            blender.append(peach)

    })

    var smoothie = document.querySelector('.blender-smoothie-off');
    
   

    blender.addEventListener('click', function () {
        document.querySelector('.title').style.color = '#FA8072'
        document.querySelector('.title').innerHTML = 'Ready to Drink!!!!!';
        smoothie.style.display = 'inline'
        blender.style.display = 'none'

    })


}