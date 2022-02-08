import { validateToken } from './helpers/validators'

function retrieveCartVehicles(token) {
    validateToken(token)

    new Promise((resolve, rejected) => {

        let xhr = new XMLHttpRequest
    
        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
        
        xhr.onload = function () {
            if (this.status === 401) {
                const res = JSON.parse(this.responseText)
                
                const error = res.error
                
                rejected(new Error(error))
            } else if (this.status >= 400 && this.sttatus < 500) {
                rejected(new Error('client error'))
            } else if (this.status >= 500) {
               rejected(new Error('server error'))
            } else if (this.status === 200) {
                const user = JSON.parse(this.responseText)
                
                const { cart = [] } = user //destructuring
                
                if (cart.length) {
                    let count = 0
                    const cartVehicles = []
                    
                    cart.forEach(cartId => {
                        xhr = new XMLHttpRequest
                        
                        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/' + cartId)
                        
                        xhr.onload = function () {
                            count++
                            
                            if (this.status >= 400 && this.status < 500) {
                                rejected(new Error('client error'))
                            } else if (this.status >= 500) {
                                rejected(new Error('server error'))
                            } else if (this.status === 200) {
                                const vehicle = JSON.parse(this.responseText)
                                
                                cartVehicles.push(vehicle)
                                
                                if (count === cart.length)
                                resolve(cartVehicles)
                            }
                        }
                        xhr.send()
                    })
                }
                else{
                    resolve([])
                }
            }
        }
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        
        xhr.send()     

    })
    
}
    
    export default retrieveCartVehicles