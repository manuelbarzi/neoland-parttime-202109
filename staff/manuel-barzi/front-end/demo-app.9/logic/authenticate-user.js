function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.onload = function () {
        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            var res = JSON.parse(this.responseText)

            var token = res.token

            callback(null, token)
        }
    }

    xhr.setRequestHeader('Content-type', 'application/json')

    var data = {
        username: username,
        password: password
    }

    var json = JSON.stringify(data)

    xhr.send(json)
}