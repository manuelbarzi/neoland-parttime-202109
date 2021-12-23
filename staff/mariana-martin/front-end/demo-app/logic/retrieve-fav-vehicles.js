function retrieveFavVehicles(token, callback) {
    // TODO validate arguments
    // TODO call users api to get favs
    // TODO for each fav id, call vehicles api to get car details
    // TODO once all vehicles (details) have been retrieved, then send them to the callback
    validateToken(token)
    validateCallback(callback)

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

            const { favs } = user   //user.fav (destructuring)

            favs.map(favId => { //fav sólo está guardando el ID
               
               const xhr =  new XMLHttpRequest

                xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + favId)

                xhr.onload = function(){ 

                if (this.status >= 400 && this.status < 500) {
                    callback(new Error('client error'))
                } else if (this.status >= 500) {
                    callback(new Error('server error'))
                } else if (this.status === 200) {
                    const vehicle = JSON.parse(this.responseText)

                    return vehicle //pendiente
                    
                }}
                xhr.send()
                
            });

          
        }
    }
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()
}