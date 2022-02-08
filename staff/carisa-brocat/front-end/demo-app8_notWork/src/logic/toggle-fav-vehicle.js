import { validateToken, validateId } from './helpers/validators'

function toggleFavVehicle(token, id) {
    validateToken(token)
    validateId(id)

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
            if (status === 200)
                return response.json()
        })
        .then(user => {
            const { favs = [] } = user

            const index = favs.indexOf(id)

            if (index < 0)
                favs.push(id)
            else
                favs.splice(index, 1)

            fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ favs })
            })
                .then(res => {
                    const { status } = res
                    if (status === 204)
                        return res.json()
                    else if (status === 400 || status === 401 || status === 409)
                        return res.json()
                            .then(payload => { throw new Error(payload.error) })
                })
        })
}
export default toggleFavVehicle