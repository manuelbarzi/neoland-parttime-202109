import { validateName, validateCity, validateUsername, validatePassword, validateCallback } from './helpers/validators'

function registerUser(name, city, username, password, callback) {
    validateName(name)
    validateCity(city)
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400 || this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    var data = { name: name, city: city, username: username, password: password }

    var json = JSON.stringify(data)

    xhr.send(json)
}

export default registerUser