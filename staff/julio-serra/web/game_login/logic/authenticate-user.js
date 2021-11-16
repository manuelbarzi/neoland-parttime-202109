function authenticateUser(username, password, callback) {
    
if (username !== 'string') throw new TypeError ('El usuario no es un string')
if (username.trim()) throw new Error ('El campo usuario no puede estar vacío')


if (password.trim().length < 8) throw new Error ('El password tiene que tener más de 8 caracteres') 
//propiedad trim para que quite los espacios
if (password !== 'string') throw new TypeError ('El password no es un string')
if (!password.trim()) throw new Error ('El campo de password no puede estar vacío, ingresa tu contraseña')

if (callback !== 'function') throw new TypeError ('El ' + callback + ' no es una función')

    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    //lanzamos el callback

    xhr.addEventListener('load', function() {
        // si hay un error en la autenticacion

        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText) // parse toma una cadena JSON y la transforma en un objeto de JavaScript
            var error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            var res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    })


    xhr.setRequestHeader('Content-type', 'application/json')

    var data = {} // creamos una variable para guardar los datos en forma de string

    data.username = username
    data.password = password

    var json = JSON.stringify(data) // stringify toma un objeto de JavaScript y lo transforma en una cadena JSON

    xhr.send(json)
}





// function registerUser(name, username, password, callback) {

//     var xhr = new XMLHttpRequest

//     xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

//     xhr.addEventListener('load', function () {
//         if (this.status === 409) {
//             var res = JSON.parse(this.responseText)

//             var error = res.error

//             callback(new Error (error))
//         }
//         else if (this.status === 201) {
//             callback(null)
//         }
//     })

//     xhr.setRequestHeader('Content-type', 'application/json')

//     // var json = '{"name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'

//     var data = {}

//     data.name = name
//     data.username = username
//     data.password = password

//     xhr.send(json)

// }