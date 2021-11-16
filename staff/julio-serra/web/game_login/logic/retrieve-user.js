function retrieveUser(token, callback) {

    if(token !== 'string') throw new TypeError('El token no es un string')
    if(token.trim()) throw new Error ('El token no puede estar vacío')
    //el token siempre esta separado por 2 puntos, hacemos un split del token completo
    if(token.split('.').length !== 3) throw new Error ('El token no es el correcto o está corrupto')
    if(callback !== 'function') throw new TypeError ('El ' + callback + ' no es una función')

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // lanzamos el callback

    xhr.addEventListener('load', function() {
        if (this.state === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))
        } else if (this.state === 200) {
            var res = JSON.parse(this.responseText)

            callback(null, user)
        }
    })

    // xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()

}