function unregisterUser(token, password, callback) {

    if (typeof token !== 'string') throw new TypeError('El token no es un string')
    if (!token.trim()) throw new Error('El token no puede estar vacío')
    //el token siempre esta separado por 2 puntos, hacemos un split del token completo
    if (token.split('.').length !== 3) throw new Error('El token no es el correcto o está corrupto')

    if (!password.trim().length < 8) throw new Error('El password tiene que tener más de 8 caracteres')
    //propiedad trim para que quite los espacios
    if (typeof password !== 'string') throw new TypeError('El password no es un string')
    if (!password.trim()) throw new Error('El campo de password no puede estar vacío, ingresa tu contraseña')

    if(typeof callback !== 'function') throw new TypeError ('El ' + callback + ' no es una función')

    var xhr = new XMLHttpRequest

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // lanzamos el callback

    xhr.addEventListener('load', function () {

        if (this.state === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error))



        } else if (this.state === 204) {
            var res = JSON.parse(this.responseText)
            callback(null)
        }

    })

    xhr.setRequestHeader('Content-type', 'Application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var data = {}

    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json)


}