function retrieveCartVehicles(token, callback) {
    validateToken(token)

    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', () => {
        const { status } = xhr

        if (status === 401) {
            const res = JSON.parse(responseText)

            const error = res.error

            callback(new Error(error))
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else if (status >= 500) {
            callback(new Error('server error'))
        } else if (status === 200) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { cart = [], favs = [] } = payload //destructuring

            if (cart.length) {
                let count = 0
                const vehicles = []

                cart.forEach((item, index) => {
                    const { id, qty } = item

                    const xhr = new XMLHttpRequest

                    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/ ${id}`)

                    xhr.addEventListener('load', ()=> {
                        const {status} = xhr

                        count++

                        if (status >= 400 && status < 500) {
                            callback(new Error('client error'))
                        } else if (status >= 500) {
                            callback(new Error('server error'))
                        } else if (status === 200) {
                            const {responseText: json} = xhr

                            const vehicle = JSON.parse(json)

                            vehicle.qty = qty
                            vehicle.isFav = favs.includes(id)

                            vehicles[index] = vehicle

                            if (count === cart.length)
                                callback(null, vehicles)
                        }
                    })
                    xhr.send()
                })
            }
            else {
                callback(null, [])
            }
        }
    })
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}