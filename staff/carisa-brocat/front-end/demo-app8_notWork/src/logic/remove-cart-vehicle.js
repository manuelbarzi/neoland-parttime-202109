import { validateToken, validateId } from './helpers/validators'

function removeCartVehicle(token, id) {
    validateToken(token)
    validateId(id)

    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest

        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

        xhr.onload = function () {
            if (this.status === 401) {
                const res = JSON.parse(this.responseText)

                const error = res.error

                reject(new Error(error))
            } else if (this.status === 200) {
                const user = JSON.parse(this.responseText)

                const cart = user.cart

                const index = cart.indexOf(id)

                cart.splice(index, 1)

                const xhr = new XMLHttpRequest

                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                xhr.onload = function () {
                    if (this.status === 400 || this.status === 401 || this.status === 409) {
                        const res = JSON.parse(this.responseText)

                        const error = res.error

                        reject(new Error(error))
                    } else if (this.status === 204) {
                        resolve(null)
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
    })
}

export default removeCartVehicle