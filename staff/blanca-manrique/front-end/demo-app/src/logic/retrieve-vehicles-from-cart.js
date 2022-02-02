import { validateToken } from './helpers/validators'

function retrieveVehiclesFromCart(token) {
    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
            else if (status >= 400 && status < 500)
                return response.json().then(payload => { throw new Error(payload.error) })
            else if (status >= 500)
                throw new Error('server error')
        })
        .then(user => {
            const { cart = [], favs = [] } = user
            if (cart.length) {
                // const { id, qty } = item
                const fetches = cart.map(({id,qty}) => //DESTRUCTURAMOS {id, qty}
                    fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
                        .then(response => {
                            const { status } = response

                            if (status >= 400 && status < 500) {
                                return response.json().then(payload => { throw new Error(payload.error) })
                            } else if (status >= 500) {
                                throw new Error('server error')
                            } else if (status === 200) {
                                return response.json()
                                    .then(vehicle => {
                                        vehicle.qty = qty
                                        vehicle.isFav = favs.includes(id)

                                        // console.log(vehicle)
                                        return vehicle
                                    })
                            }
                        })
                )
                return Promise.all(fetches)
            }

            return []
        })
}
export default retrieveVehiclesFromCart
