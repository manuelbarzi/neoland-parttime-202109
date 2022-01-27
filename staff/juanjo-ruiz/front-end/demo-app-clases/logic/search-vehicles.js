function searchVehicles(token, query, callback) {
    validateToken(token)
    validateQuery(query)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))

        } else if (this.status >= 400 && this.status < 500) {
            callback(new Error('Client error'))
        } else if (this.status >= 500) {
            callback(new Error('Server error'))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            // const favs = user.favs

            const { favs = [] } = user // jv6

            const xhr = new XMLHttpRequest

            xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

            xhr.onload = function () {
                if (this.status >= 400 && this.status < 500) {
                    callback(new Error('Client error'))
                } else if (this.status >= 500) {
                    callback(new Error('Server error'))
                } else if (this.status === 200) {
                    var vehicles = JSON.parse(this.responseText)

                    vehicles.forEach(vehicle =>
                        vehicle.isFav = favs.includes(vehicle.id))

                    callback(null, vehicles)
                }
            }
            xhr.send()
        }

    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}