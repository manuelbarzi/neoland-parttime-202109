import { validateToken, validatePassword, validateCallback } from './helpers/validators'

function unregisterUser(token, password, callback) {

    validateToken(token)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // lanzamos el callback

    xhr.addEventListener('load', function() {

        if (this.state === 400 || this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error

            callback(new Error(error))



        } else if (this.state === 204) {
            callback(null)
        }

    })

    xhr.setRequestHeader('Content-type', 'Application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    const data = {}

    data.password = password

    const json = JSON.stringify(data)

    xhr.send(json)
}

export default unregisterUser