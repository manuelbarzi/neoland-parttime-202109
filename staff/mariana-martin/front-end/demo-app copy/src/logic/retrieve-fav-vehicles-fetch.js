import { validateToken } from './helpers/validators'

function retrieveFavVehicles(token) {
    validateToken(token)
  

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {

     headers: {
        Authorization: `Bearer ${token}`
    }
    })   //nos devuelve la respuesta en el then:
        .then(res => {
            const { status } = res

            if (status >= 400 && status < 500) {
                const res = JSON.parse(xhr.responseText)
    
                const error = res.error

                    //aquí en vez de reject porque ya estamos dentro de un then
            throw new Error(error)
       
        } else if (status >= 500) {
            throw new Error('server error')
        } else if (status === 200) {  //si es un 200, 

        }
    })


    return new Promise((resolve, reject ) => {

    

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.onload = function () {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)

            const error = res.error

            reject(new Error(error))
        } else if (this.status >= 400 && this.status < 500) {
            reject(new Error('client error'))
        } else if (this.status >= 500) {
            reject(new Error('server error'))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            const { favs = [] } = user

            if (favs.length) {
                let count = 0
                const vehicles = []

                favs.forEach((id, index) => {
                    const xhr = new XMLHttpRequest
        
                    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + id)
        
                    xhr.onload = function () {
                        count++

                        if (this.status >= 400 && this.status < 500) {
                            reject(new Error('client error'))
                        } else if (this.status >= 500) {
                            reject(new Error('server error'))
                        } else if (this.status === 200) {
                            const vehicle = JSON.parse(this.responseText)
        
                            vehicle.isFav = true

                            vehicles[index] = vehicle
        
                            if (count === favs.length)
                                resolve(vehicles)
                        }
                    }
        
                    xhr.send()
                })
            } else {
                resolve([])
            }

        }
    }

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
})
}

export default retrieveFavVehicles