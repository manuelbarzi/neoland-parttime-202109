function retrieveVehiclesFromCart(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = () => {
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

            const { cart = [], favs = [] } = payload  //recupero cart y favs, para mantener si es fav o no

            if (cart.length) { //si en el cart hay cosas
                let count = 0
                const vehicles = []

                cart.forEach((item, index) => {  //item (objeto con propiedad id y qty)
                    const { id, qty } = item  //extraigo las propiedades

                    const xhr = new XMLHttpRequest

                    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)  //llamo al detalle de ese vehiculo

                    xhr.addEventListener('load', () => {
                        const { status } = xhr

                        count++  //caundo recupero respuesta, contaba tantos coches como tenga en el carro

                        if (status >= 400 && status < 500) {
                            callback(new Error('client error'))
                        } else if (status >= 500) {
                            callback(new Error('server error'))
                        } else if (status === 200) {
                            const { responseText: json } = xhr

                            const vehicle = JSON.parse(json)

                            vehicle.qty = qty  //le pongo la propiedad qty (quantity)  a cada vehiculo
                            vehicle.isFav = favs.includes(id)  

                            vehicles[index] = vehicle

                            if (count === cart.length) //longitus del carrito 
                                callback(null, vehicles) //termino devolviendo los vehiculos que hay en el carrito si es fav o no y la quantity
                        }
                    })

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