function retrieveFavsVehicles(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', ()=>{
        const {status} = xhr
        if (status === 401) {
            const {responseText: json} = xhr
            
            const payload = JSON.parse(json)

            const error = payload.error

            callback(new Error(error))
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else if (status >= 500) {
            callback(new Error('server error'))
        } else if (status === 200) {
            let {responseText: json} = xhr
            
            let payload = JSON.parse(json)

            const { favs = [] } = payload

            if (favs.length) {
                let count = 0
                const favsVehicles = []

                favs.forEach(favId => {
                    const xhr = new XMLHttpRequest
                    
                    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + favId)
                    
                    xhr.addEventListener('load',() => {
                        count++

                        const {status} = xhr

                        if (status >= 400 && status < 500) {
                            callback(new Error('client error'))
                        } else if (status >= 500) {
                            callback(new Error('server error'))
                        } else if (status === 200) {
                            const {responseText : json} = xhr
                            const vehicle = JSON.parse(json)

                            vehicle.isFav = true

                            favsVehicles.push(vehicle)

                            if (count === favs.length)
                                callback(null, favsVehicles)
                        }
                    })
                    xhr.send()
                })
            }
            else{
                callback(null, [])
            }
        }
    })
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}