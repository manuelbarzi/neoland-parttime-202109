import { validateToken, validateId, validateCallback } from './helpers/validators'

function addVehicleToCart(token, id) {
    validateToken(token)
    validateId(id)

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest

        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

        xhr.addEventListener('load', () => {
            const { status } = xhr

            if (status === 401) {
                const { responseText: json } = xhr

                const payload = JSON.parse(json)

                const { error } = payload

                reject(new Error(error))
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

                    if (status === 400 || status === 401 || status === 409) {
                        const { responseText: json } = xhr

                        const payload = JSON.parse(json)

                        const { error } = payload

                        reject(new Error(error))
                    } else if (status === 204) {
                        resolve(null)
                    }
                })

                xhr.setRequestHeader('Authorization', `Bearer ${token}`)
                xhr.setRequestHeader('Content-type', 'application/json')

                payload = { cart }

                json = JSON.stringify(payload)

                xhr.send(json)
            }
        })

        xhr.setRequestHeader('Authorization', 'Bearer ' + token)

        xhr.send()
    })
}

export default addVehicleToCart