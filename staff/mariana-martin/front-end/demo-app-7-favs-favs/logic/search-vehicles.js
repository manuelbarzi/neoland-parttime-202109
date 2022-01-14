function searchVehicles(token, query, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof query !== 'string') throw new TypeError(query + 'is not string')
    if (!query.trim()) throw new Error('query is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback  is not a function')


    //1.Recupero usuario
    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            callback(new Error(error))
        } else if (this.status >= 400 && this.status < 500) {
            callback(new Error('client error'))
        } else if (this.status >= 500) {
            callback(new Error('server error'))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            //2. Extraer los favoritos del usuario
            //const favs = user.favs   //destructuring:
            const { favs = [] } = user  //id de los coches que me gustan. 
                                        //al inicio puede ser que el user no tenga favs(undefined) en caso que no tenga propiedades fav, por default será un array vacío

            //SEGUNDA LLAMADA: pido a la Api de coches los coches que estoy buscando
            var xhr = new XMLHttpRequest

            xhr.open('GET', "https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=" + query)

            xhr.onload = function () {
                if (this.status >= 400 && this.status < 500) {
                    callback(new Error('client error'))
                } else if (this.status >= 500) {
                    callback(new Error('server error'))
                } else if (this.status === 200) {
                    const vehicles = JSON.parse(this.responseText)

                    //antes de devolver los vehiculos, al callback
                    //quiero marcar mis coches con isFav true or false , si es favorito o no
                    vehicles.forEach(vehicle => {  //para c/vehiculo revsar si está dentro de favs con el includes para ver si ese id está dentro de ese array
                        vehicle.isFav = favs.includes(vehicle.id) //lo que devuelva el includes true or false lo pone en isFav
                    })

                    callback(null, vehicles)

                }
            }


            xhr.send()
        }

    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()

}



