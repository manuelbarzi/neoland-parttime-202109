function unregisterUser(token, password, callback) {
    validateToken(token)

    validatePassword(password)

    validateCallback(callback)
    var xhr = new XMLHttpRequest

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-type', 'application/json')

    var data = { password: password }

    var json = JSON.stringify(data)

    xhr.send(json)
}