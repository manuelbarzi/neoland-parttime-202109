import {validateToken, validateCallback} from './helpers/validators'

function addToCart(id, token, callback) {

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)
    validateCallback(callback)

    let xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload= () => {
        const { status } = xhr

        if (status === 401) {
            const { responseText: json } = xhr
            const payload = JSON.parse(json)
            const { error } = payload
            callback(new Error(error))

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

            xhr.onload=() => {
                const { status } = xhr

                if (status === 400 || status === 401 || status === 409) {
                    const { responseText: json } = xhr
                    const payload = JSON.parse(json)
                    const { error } = payload
                    callback(new Error(error))
                    
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr.setRequestHeader('Content-type', 'application/json')

            payload = { cart }

            json = JSON.stringify(payload)

            xhr.send(json)
        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()

}
export default addToCart