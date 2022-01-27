import { validateToken, validateQuery, validateCallback} from './helpers/validators'

function searchVehicles(token, query, callback) {

    validateToken(token)
    validateQuery(query)
    validateCallback(callback)



    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    // lanzamos el callback

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error
            callback(new Error(error.message))

        } else if (this.status >= 400 && this.status < 500) {
            callback(new Error('client error'))
        }
        else if (this.status >= 500) {
            callback(new Error('server error'))
        }
        else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            const { favs } = user // creamos una constante fav que es igual a los favs del usuario ES6 // const favs = user.favs


            const xhr = new XMLHttpRequest

            xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)

            // lanzamos el callback

            xhr.addEventListener('load', function () {
                if (this.status === 401) {
                    const res = JSON.parse(this.responseText)
                    const error = res.error
                    callback(new Error(error.message))

                } else if (this.status >= 400 && this.status < 500) {
                    callback(new Error('client error'))
                }
                else if (this.status >= 500) {
                    callback(new Error('server error'))

                } else if (this.status === 200) {
                    const vehicles = JSON.parse(this.responseText)

                    // recorrer cada vehiculo
                    vehicles.forEach(vehicle => 
                       vehicle.isFav = favs.includes(vehicle.id) //es un array de primitivos. incluye este string este vehiculo, lo que devuelva, si es true o false lo pone en isFav          
                    )
                    callback(null, vehicles)
                } 
            })

            xhr.send()


        }

    })

    // xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()


}

export default searchVehicles