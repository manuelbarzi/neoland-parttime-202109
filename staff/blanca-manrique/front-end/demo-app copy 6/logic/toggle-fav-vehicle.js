function toggleFavVehicle(id, token, callback) {
    
    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    validateToken(token)
    validateCallback(callback)

    //Primera llamada a la API para recuperar los favoritos del usuario (retrieveUser) 

    //OBJETIVO: si todo ha ido bien (200), quiero que me recuperar el array de favoritos-- mirar si el coche está o no-- si no lo encuentra en el array, lo añado(push)-- si lo encuentra en el array, lo quito(splice)
    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error
            callback(new Error(error))

        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)
            const favs = user.favs || []
            const index = favs.indexOf(id) //Si encuentra el id te muestra el indice en el que se encuentra

            if (index < 0) //Si no lo encuentra
                favs.push(id) //te pushea el -1
            else // si lo encuentra
                favs.splice(index, 1) //te quita 1 valor del array a partir del index...me eliminas ese id del array


            //Segunda llamada a la API para actualizar modifyUser (quiero modificar las propiedades del usuario)
            const xhr = new XMLHttpRequest

            xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', function () {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)

                    const error = res.error

                    callback(new Error(error))
                } else if (this.status === 204) {
                    callback(null) //los callback son para mostrar el error, en este caso como no tenemos error pues nuestro callback es null
                }
            })

            //Estos dos son la cabecera
            xhr.setRequestHeader('Authorization', 'Bearer ' + token) // le digo a la API que le voy a mandar un token
            xhr.setRequestHeader('Content-type', 'application/json') // le digo a la API que le voy a mandar un json

            const data = { favs: favs } //el segundo favs es un array que guarda el id del vehiculo
            //estoy construyendo un objeto nuevo con las llaves
            //que tiene una propiedad favs que apunta al array de favoritos
            //el nuevo objeto se referencia en data
            const json = JSON.stringify(data) // convierto data que es un objeto en json

            xhr.send(json)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}