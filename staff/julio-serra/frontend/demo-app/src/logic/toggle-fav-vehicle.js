import { validateToken, validateId, validateCallback } from './helpers/validators'

function toggleFavVehicle(token, id, callback) {

    validateToken(token)
    validateId(id)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users') // obtiene la info del usuario, id, name, price...

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText) // recogemos los datos del usuario. Se convierte de JSON a objeto

            const favs = user.favs || [] // mostramos los favoritos que tiene el usuario y los guardamos en favs OR si no tiene pasamos un array vacio

            const index = favs.indexOf(id) // indexOf busca el valor en el array si lo encuentra te devuelve el ID dentro del array, y si no -1

            if (index < 0) // si el indice es menor que 0 te lo pushea (añade)
                favs.push(id)

            else
                favs.splice(index, 1) // modifica el array, empieza con el index y elimina según el indice que haya

            const xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users') // modifica el usuario, si ha añadido o quitado favs

            xhr.addEventListener('load', function () {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)

                    const error = res.error

                    callback(new Error(error))

                } else if (this.status === 204) {
                    callback(null)
                }
            })

            xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            xhr.setRequestHeader('Content-type', 'application/json')

            const data = { favs: favs }

            const json = JSON.stringify(data) // convertimos en formato texto la data, lo referenciamos en la constante json

            xhr.send(json)

        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

export default toggleFavVehicle