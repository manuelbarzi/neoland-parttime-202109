import { validateToken, validateId, validateCallback } from './helpers/validators'

function addCartVehicle(token, id, callback) {
    validateToken(token)
    validateId(id)
    validateCallback(callback)

    let xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            const cart = user.cart || []

            cart.push(id)

            const xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.onload = function () {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)

                    const error = res.error

                    callback(new Error(error))
                } else if (this.status === 204) {
                    callback(null)
                }
            }

            xhr.setRequestHeader('Authorization', 'Bearer ' + token)

            xhr.setRequestHeader('Content-type', 'application/json')

            const data = { cart: cart }

            const json = JSON.stringify(data)

            xhr.send(json)
        }

    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

export default addCartVehicle
