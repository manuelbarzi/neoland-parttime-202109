function unregisterUser(token, password, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.'.length !== 3)) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(password + 'is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password lenght is smaller than 8 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    var xhr = new XMLHttpRequest
    
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            res = JSON.parse(this.responseText)
            error = res.error
            callback(Error(error))
        } else if (this.status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send(password)

}