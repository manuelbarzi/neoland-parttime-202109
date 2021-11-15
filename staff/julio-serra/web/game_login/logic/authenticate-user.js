
function authenticateUser (username, password, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    //lanzamos el callback

    xhr.addEventListener('load', function (){
        // si hay un error en la autenticacion

        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText) // hacemos el parse para que cambie a STRING el OBJETO ?
            var error = res.error

            callback(new Error (error))
        }
        else if (this.status === 200) {
            var res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    })


xhr.setRequestHeader('Content-type', 'application/json')

    var data = {} // creamos una variable para guardar los datos en forma de string

    data.username = username
    data.password = password

    var json = JSON.stringify(data)

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