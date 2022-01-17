function addToCard(id, token, callback) {

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)
    validateCallback(callback)

    //Primera llamada a la API para recuperar los datos del usuario (retrieveUser) 
    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload= function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error
            callback(new Error(error))

        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)
            const cart = user.cart || []
            const index = cart.indexOf(id) //Si encuentra el id te muestra el indice en el que se encuentra

            if (index) {cart.push(id) }
            
            
            const xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', function () {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)
                    const error = res.error
                    callback(new Error(error))

                } else if (this.status === 204) {
                    callback(null) 
                }
            })

            xhr.setRequestHeader('Authorization', 'Bearer ' + token) // le digo a la API que le voy a mandar un token
            xhr.setRequestHeader('Content-type', 'application/json') // le digo a la API que le voy a mandar un json

            const data = { cart: cart } 
            const json = JSON.stringify(data) // convierto data que es un objeto en json

            xhr.send(json)
        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}