import {ValidateToken} from "./helpers/validators"

function retrieveFavVehicles(token) {

    ValidateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
    headers: {
        Authorization: `Bearer ${token}`

    }
    })

    .then(res => {
        const { status } = res

        if (status >= 400 && status < 500) {
            return res.json()
                .then(payload => { throw new Error(payload.error) })
        } else if (status >= 500) {
            throw new Error('server error')
        } else if (status === 200) {
            return res.json()
        }
    })
    .then(user => {
        const { favs = [] } = user

        if (favs.length) {
            const fetches = favs.map(id =>
                fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
                    .then(res => {
                        const { status } = res

                        if (status >= 400 && status < 500) {
                            return res.json()
                                .then(payload => { throw new Error(payload.error) })
                        } else if (status >= 500) {
                            throw new Error('server error')
                        } else if (status === 200) {
                            return res.json()
                                .then(vehicle => {
                                    vehicle.isFav = true

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

export default retrieveFavVehicles