function retrieveChartVehicles(token, callback) {
    // TODO call users api to get favs
    // TODO for each fav id, call vehicles api to get car details
    // TODO once all vehicles (details) have been retrieved, then send them to the callback

    ValidateToken(token)
    ValidateCallback(callback)

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

            const { chart = [] } = user

            if (chart.length) {
                let count = 0
                let total = 0
                const vehicles = []

                chart.forEach((id, index) => {
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
                            total=total + vehicle.price
                            vehicle.inChart = true

                            vehicles[index] = vehicle
        
                            if (count === chart.length)
                                callback(null, vehicles, total)
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