import { validateToken, validateCallback } from './helpers/validators'

function searchVehicles(token, query, callback) {
    validateToken(token)

    if (typeof query !== 'string') throw new TypeError('query is not string')
    if (!query.trim()) throw new Error('query is empty or blank')

    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))
        } else if (this.status >= 400 && this.status < 500) {
            callback(new Error('client error'))
        } else if (this.status >= 500) {
            callback(new Error('server error'))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            //const favs = user.favs
            const { favs = [] } = user // es6++

            const xhr = new XMLHttpRequest

            xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

            xhr.onload = function () {
                if (this.status >= 400 && this.status < 500) {
                    callback(new Error('client error'))
                } else if (this.status >= 500) {
                    callback(new Error('server error'))
                } else if (this.status === 200) {
                    const vehicles = JSON.parse(this.responseText)

                    vehicles.forEach(vehicle =>
                        vehicle.isFav = favs.includes(vehicle.id)
                    )

                    callback(null, vehicles)
                }
            }

            xhr.send()
        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

export default searchVehicles