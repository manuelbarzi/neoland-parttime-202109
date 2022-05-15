import { validateToken, validateCallback } from './helpers/validators'

function retrieveUser(token, callback) {
    
validateToken(token)
validateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // lanzamos el callback

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error))

        } else if (this.status === 200) {
            var user = JSON.parse(this.responseText)

            callback(null, user)
        }
    })

    // xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()

}

export default retrieveUser