//stringify para convertir a string un objeto

function updateUser(token, data, callback) {

    if (typeof token !== 'string') throw new TypeError('El token no es un string')
    if (!token.trim()) throw new Error('El token no puede estar vacío')
    //el token siempre esta separado por 2 puntos, hacemos un split del token completo
    if (token.split('.').length !== 3) throw new Error('El token no es el correcto o está corrupto')

    if (typeof data !== 'string') throw new TypeError (data + ' no es un string')
    if (!data.trim()) throw new Error(data + ' no puede estar vacío')

    if(typeof callback !== 'function') throw new TypeError ('El ' + callback + ' no es una función')



    var xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //lanzamos el callback

    xhr.addEventListener('load', function() {

        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))
        } else if (this.status === 204) {
            // var res = JSON.parse(this.responseText)
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'Application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    // var data = {}

    // data.city = 'Andorra'


    var json = JSON.stringify(data)

    xhr.send(json)

}