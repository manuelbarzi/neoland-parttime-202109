function retrieveVehiclesFromCart(token, callback){
    // callback,(error | null, array vehicles) el callback se llama con un dato u otro

    validateToken(token)
    validateCallback(callback)

    //primera llamada, recupero datos de usuario con token:
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

            const { shoppingcart = [] } = user //creo una propiedad de carrito de compra que será un array vacío

            if (shoppingcart.length) {
                let count = 0
                const vehicles = []

                shoppingcart.forEach((id, index) => {
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
        
                            vehicle.isCart = true //creo una porpiedad que será isCart

                            vehicles[index] = vehicle
        
                            if (count === shoppingcart.length)
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