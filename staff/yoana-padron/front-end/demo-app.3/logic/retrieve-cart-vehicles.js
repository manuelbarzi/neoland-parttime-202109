function retrieveCartVehicles(token, callback) {
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

            const { added = [] } = user

            if (added.length) {
                let count = 0
                const vehicles = []

                added.forEach((id, index) => {
                    const xhr = new XMLHttpRequest
        
                    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)
        
                    xhr.onload = function () {
                        count++

                        if (this.status >= 400 && this.status < 500) {
                            callback(new Error('client error'))
                        } else if (this.status >= 500) {
                            callback(new Error('server error'))
                        } else if (this.status === 200) {
                            const vehicle = JSON.parse(this.responseText)
        
                            vehicle.isAdded = true

                            vehicles[index] = vehicle
        
                            if (count === added.length)
                                callback(null, vehicles)
                        }
                    }
        
                    xhr.send()
                })
            } else {
                callback(null, [])
            }

        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}