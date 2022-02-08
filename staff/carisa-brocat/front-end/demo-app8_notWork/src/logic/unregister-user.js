import {validateToken, validatePassword, validateCallback} from './helpers/validators'

function unregisterUser(token, password, callback) {
    validateToken(token)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const {status} = xhr
        if (status === 400 || status === 401) {
            const {responseText: json} = xhr
            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    payload = { password }

    json = JSON.stringify(payload)

    xhr.send(json)
}

export default unregisterUser