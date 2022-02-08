import { validateToken, validateId, validateCallback} from './helpers/validators'

function addVehicleToCart(token, id, callback) {
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

            const { cart = [] } = payload

            let item = cart.find(item => item.id === id)

            if (item)
                item.qty++;
            else {
                item = { id, qty: 1 }

                cart.push(item)
            }

            xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', () => {
                const { status } = xhr

                if (status === 401) {
                    const { responseText: json } = xhr

                    const res = JSON.parse(json)

                    const error = res.error

                    callback(new Error(error))

                } else if (status >= 400 && status < 500) {
                    callback(new Error('Client error'))
                } else if (status >= 500) {
                    callback(new Error('Server error'))
                } else if (status === 204) {
                    callback(null)
                }
            })

            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.setRequestHeader('Content-type', 'aplication/json')

            payload = { cart }

            json = JSON.stringify(payload)

            xhr.send(json)
        }
    }

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
} 

export default addVehicleToCart