var users = [
    { name: 'julio', username: 'julio', password: '123' }
]

var _token

var panelRegistro = document.querySelector('.registro')
var panelInicioSesion = document.querySelector('.inicio')
var botonRegistroInicio = panelRegistro.querySelector('.registro__inicio')
var panelRegistrado = document.querySelector('.panel-registrado')
var gamePanel = document.querySelector('.game')


botonRegistroInicio.addEventListener('click', function() {
    panelRegistro.classList.add('off') // añade al panel de registro la clase off (lo oculta, display: none)
    panelInicioSesion.classList.remove('off') // elimina la clase display none, por lo que muestra el panel de inicio de sesión
})

var botonInicioRegistro = panelInicioSesion.querySelector('.inicio__registro')

botonInicioRegistro.addEventListener('click', function() {
    panelInicioSesion.classList.add('off')
    panelRegistro.classList.remove('off')
})


var formRegistro = panelRegistro.querySelector('form')

formRegistro.addEventListener('submit', function(event) {
    event.preventDefault() // para que no recargue la pagina

    var inputNombre = formRegistro.name
    var inputUsername = formRegistro.username
    var inputPassword = formRegistro.password

    var name = inputNombre.value
    var username = inputUsername.value
    var password = inputPassword.value

    var user = {}
    user.name = name
    user.username = username
    user.password = password

    // users.push(user)
    registerUser(name, username, password, function(error) {

        if (error) {
            alert(error.message)

            return
        }
        panelRegistro.classList.add('off')
        panelRegistrado.classList.remove('off')
    })

})

var botonPanelRegistroInicio = panelRegistrado.querySelector('button')

botonPanelRegistroInicio.addEventListener('click', function() {
    panelRegistrado.classList.add('off')
    panelInicioSesion.classList.remove('off')
})


var formInicioSesion = panelInicioSesion.querySelector('form')

formInicioSesion.addEventListener('submit', function(event) {
    event.preventDefault()

    var inputUsername = formInicioSesion.username
    var inputPassword = formInicioSesion.password

    var username = inputUsername.value
    var password = inputPassword.value

    // var user = users.find(function(user) {
    //     return user.username === username && user.password === password
    // })

    authenticateUser(username, password, function(error, token) {
        if (error) {
            var siginFeedback = signinPanel.querySelector('.feedback__inicio')

            siginFeedback.innerText = error.message

            siginFeedback.classList.remove('off')
        } else {
            retrieveUser(token, function(error, user) {

                if (error) {
                    var siginFeedback = panelInicioSesion.querySelector('.feedback__inicio')
                    siginFeedback.innerText = error.message
                    siginFeedback.classList.remove('off')

                    return
                }

                _token = token
                var gameUser = gamePanel.querySelector('.game__user')

                window.setTimeout(function() { // funcion setTimeout para añadir unos segs antes de mostrarse la URL

                    window.location.href = '../dragndrop/index.html'

                }, 3000);

                gameUser.innerText = 'Aquí comienza tu aventura, ' + user.name + '!'

                panelInicioSesion.classList.add('off')
                gamePanel.classList.remove('off')
            })

        }
    })

})