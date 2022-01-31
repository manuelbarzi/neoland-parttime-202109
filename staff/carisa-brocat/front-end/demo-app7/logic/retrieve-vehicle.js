function retrieveVehicle(token, id, callback) {
    validateToken(token)
    validateId(id)
    validateCallback(callback)

    let xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const { status } = xhr
        if (status === 401) {
            const { responseText: json } = xhr
            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else if (status >= 500) {
            callback(new Error('server error'))
        } else if (status === 200) {
            let { responseText: json } = xhr
            let payload = JSON.parse(json)

            const { favs = [] } = payload

            xhr = new XMLHttpRequest

            xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)

            xhr.addEventListener('load', () => {
                const { status } = xhr
                if (status >= 400 && status < 500) {
                    callback(new Error('client error'))
                } else if (status >= 500) {
                    callback(new Error('server error'))
                } else if (status === 200) {
                    const { responseText: json } = xhr

                    const vehicle = JSON.parse(json)

                    vehicle.isFav = favs.includes(vehicle.id)

                    callback(null, vehicle)
                }
            })
            xhr.send()
        }
    })
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}