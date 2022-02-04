import { validateToken } from './helpers/validators'

function searchVehicles(token, query) {
    validateToken(token)

    if (typeof query !== 'string') throw new TypeError('query is not string')
    if (!query.trim()) throw new Error('query is empty or blank')

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
            else
                throw new Error('unknown error')

        })
        .then(user => {
            const { favs = [] } = user

            return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
                .then(response => {
                    const { status } = response

                    if (status === 200)
                        return response.json()
                    else if (status >= 400 && status < 500)
                        return response.json().then(payload => { throw new Error(payload.error) })
                    else if (status >= 500)
                        throw new Error('server error')
                    else
                        throw new Error('unknown error')

                })
                .then(vehicles => {
                    vehicles.forEach(vehicle =>
                        vehicle.isFav = favs.includes(vehicle.id)
                    )

                    return vehicles
                })
        })
}

export default searchVehicles