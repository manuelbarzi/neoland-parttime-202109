import { validateToken,validateId, validateCallback} from './helpers/validators'

function toggleFavVehicle(token, id, callback) {
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
        } else if (status === 200) {
            let {responseText: json} = xhr
            let payload = JSON.parse(json)

            const favs = payload.favs || []

            const index = favs.indexOf(id)

            if (index < 0)
                favs.push(id)
            else
                favs.splice(index, 1)

            xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', () => {
                const {status} = xhr

                if (status === 400 || status === 401 || status === 409) {
                    const {responseText: json} = xhr
                    const payload = JSON.parse(json)

                    const error = payload.error

                    callback(new Error(error))
                } else if (status === 204) {
                    callback(null)
                }
            })

            xhr.setRequestHeader('Authorization', `Bearer ${token}`)

            xhr.setRequestHeader('Content-type', 'application/json')

            payload = { favs }

            json = JSON.stringify(payload)

            xhr.send(json)
        }

    })

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default toggleFavVehicle