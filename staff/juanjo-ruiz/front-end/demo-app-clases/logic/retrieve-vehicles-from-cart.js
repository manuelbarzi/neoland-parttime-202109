function retrieveVehiclesFromCart(token, id, callback) {
    validateToken(token)
    validateId(id)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onLoad = () => {
        const { status } = xhr

        if (status === 401) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))

        } else if (status >= 400 && status < 500) {
            callback(new Error('Client error'))
        } else if (status >= 500) {
            callback(new Error('Server error'))
        } else if (status === 200) {
            let { responseText: json } = xhr

            let payload = JSON.parse(json)

            const { cart = [], favs = [] } = payload

            if (cart.lenght) {
                let count = 0
                const vehicles = []

                cart.forEach((item, index) => {
                    const { id, qty } = item

                    const xhr = new XMLHttpRequest

                    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

                    xhr.addEventListener('load', () => {
                        const { status } = xhr

                        count++

                        if (status >= 400 && status < 500) {
                            callback(new Error('client error'))
                        } else if (status >= 500) {
                            callback(new Error('server error'))
                        } else if (status === 200) {
                            const { responseText: json } = xhr

                            const vehicle = JSON.parse(json)

                            vehicle.qty = qty
                            vehicle.isFav = favs.includes(id)

                            vehicle[index] = vehicle

                            if (count === cart.lenght)
                                callback(null, vehicles)
                        }
                    })
                    xhr.send()
                })
            } else {
                callback(null, [])
            }
        }
    }

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()

}