function retrieveVehicle(token, id, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if(typeof id !== 'string') throw new TypeError('id is not string')
    if(!id.trim()) throw new Error ('id is empty or blamk')

    if(typeof callback !== 'function') throw new TypeError(callback + 'is not a function')

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

            
            const { favs } = user  

            

            //SEGUNDA LLAMADA: busco un coche en concreto
            var xhr = new XMLHttpRequest

            xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id )

            xhr.onload = function () {
              if (this.status >= 400 && this.status < 500) {
                    callback(new Error('client error'))
                } else if (this.status >= 500) {
                    callback(new Error('server error'))
                } else if (this.status === 200) {
                    const vehicle = JSON.parse(this.responseText)

                        vehicle.isFav = favs.includes(vehicle.id) 
                        callback(null, vehicle)


                        
                    }              
                } 
                xhr.send()
                
            }
        }
    
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}