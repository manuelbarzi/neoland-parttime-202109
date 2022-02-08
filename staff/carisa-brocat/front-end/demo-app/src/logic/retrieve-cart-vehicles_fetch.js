import { validateToken } from './helpers/validators'

function retrieveCartVehicles(token) {
    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const { status } = response

            if (status === 401)
               return response.json()
                .then(payload => { throw new Error(payload.error) })
            else if (status >= 400 && status < 500)
                throw new Error('client error')
            else if (status >= 500)
                throw new Error('server error')
            else if (status === 200)
                return response.json()
        })
        .then(user => {
            const { cart = [] } = user //destructuring

            if (cart.length) {
                let count = 0

                const fetches = cart.map(cartId =>
                    fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/ ${cartId}`)
                        .then(res => {

                            const { status } = res

                            if (status >= 400 && status < 500)
                                throw new Error('client error')
                            else if (status >= 500)
                                throw new Error('server error')
                            else if (status === 200)
                                return res.json()
                        })

                )
                return Promise.all(fetches)
            }
            return []
        })
}

export default retrieveCartVehicles

    // let xhr = new XMLHttpRequest

    // xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // xhr.onload = function () {
    //     if (this.status === 401) {
    //         const res = JSON.parse(this.responseText)

    //         const error = res.error

    //         callback(new Error(error))
    //     } else if (this.status >= 400 && this.sttatus < 500) {
    //         callback(new Error('client error'))
    //     } else if (this.status >= 500) {
    //         callback(new Error('server error'))
    //     } else if (this.status === 200) {
    //         const user = JSON.parse(this.responseText)

    //         const { cart = [] } = user //destructuring

    //         if (cart.length) {
    //             let count = 0
    //             const cartVehicles = []

    //             cart.forEach(cartId => {
    //                 xhr = new XMLHttpRequest

    //                 xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + cartId)

    //                 xhr.onload = function () {
    //                     count++

    //                     if (this.status >= 400 && this.status < 500) {
    //                         callback(new Error('client error'))
    //                     } else if (this.status >= 500) {
    //                         callback(new Error('server error'))
    //                     } else if (this.status === 200) {
    //                         const vehicle = JSON.parse(this.responseText)

    //                         cartVehicles.push(vehicle)

    //                         if (count === cart.length)
    //                             callback(null, cartVehicles)
    //                     }
    //                 }
    //                 xhr.send()
    //             })
    //         }
    //         else{
    //             callback(null, [])
    //         }
    //     }
    // }
    // xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    // xhr.send()


