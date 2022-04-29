function modifyUser(token, data, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    //data--es un objeto, pero exigimos que no esté vacío. Para ello podemos usar .keys(), que nos dice cuántas propiedades tiene un objeto. si el objeto que estamos mandando tiene 0 propiedades es que está vacío
    if (typeof data !== 'object') throw new TypeError(data + ' is not an object')
    if (Object.keys(data).length === 0) throw new Error('data object is empty')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400||this.status === 401 || this.status === 409) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(Error(error))

        } else if (this.status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json ')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var json = JSON.stringify(data)

    xhr.send(json)
}