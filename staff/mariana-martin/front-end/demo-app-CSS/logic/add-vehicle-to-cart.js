function addVehicleToCart(token, id, callback) {
     //callback(error | null)
     validateToken(token)
     validateId(id)
     validateCallback(callback)

     //primero recupero datos del usuario:
     const xhr = new XMLHttpRequest

     xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

     xhr.addEventListener('load', function () {
          if (this.status === 401) {
               const res = JSON.parse(this.responseText)

               const error = res.error

               callback(new Error(error))
          } else if (this.status === 200) {
               const user = JSON.parse(this.responseText)

               const shoppingcart = user.shoppingcart || []  //creo una propiedad de carrito de compra que será un array vacío

               const index = shoppingcart.indexOf(id)

               if(index < 0)
                   shoppingcart.push(id)
               else
               shoppingcart.splice(index, 1)

               //segunda llamada: para modificar/actualizar
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

               xhr.setRequestHeader('Authorization', 'Bearer ' + token)
               xhr.setRequestHeader('Content-type', 'application/json')

               const data = { shoppingcart: shoppingcart }

               const json = JSON.stringify(data)

               xhr.send(json)

          }
     })

     xhr.setRequestHeader('Authorization', 'Bearer ' + token)

     xhr.send()

}