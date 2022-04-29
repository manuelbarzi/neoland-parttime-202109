function retrieveFavsVehicles(token, callback) {
    validateToken(token)
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

            const { favs = [] } = user

            favs.map(id => {
                const xhr = new XMLHttpRequest

                xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

                xhr.onload = function () {
                    if (this.status === 200) {
                        var vehicle = JSON.parse(this.responseText)
                        callback(null, vehicle)
                    } else {
                        var error = res.error

                        callback(new Error(error))
                    }
                }
                xhr.send()
            }

            )
            logger.debug(favs)

            callback(null, favs)
        }

    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()

}