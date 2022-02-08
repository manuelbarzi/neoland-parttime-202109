function removeVehicleFromCart(token, id, callback) {
     validateToken(token)
     validateId(id)
     validateCallback(callback)

     let xhr = new XMLHttpRequest

     xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

     xhr.addEventListener('load', () => {
          const { status } = xhr

          if (status === 401) {
               const { responseText: json } = xhr

               const payload = JSON.parse(json)

               const { error } = payload

               callback(new Error(error))

          } else if (status === 200) {
               let { responseText: json } = xhr

               let payload = JSON.parse(json)

               let { cart = [] } = payload

               let item = cart.find(item => item.id === id)  //busco si encuentro el id en el id que me pasan por parametro

               if (item) {
                    item.qty--; //si el item lo encuentro resto 1 , si despues de restar ya no hay:

                    if (item.qty === 0) { //si el item qty es un cero eliminaremos el item de array
                         cart = cart.filter(vehicle => vehicle.id !== id) //filtrar todos los que items  menos que no tienen ese id que nos estan pasando porque ese queremos quitar
                    }
               } else {
                    return callback(new Error(`cannot remove vehicle with id ${id}, not present in cart`)) //enviamos error ,porque no puedes quitar un carro que no existe
               }

               xhr = new XMLHttpRequest

               xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

               xhr.addEventListener('load', () => {
                    const { status } = xhr

                    if (status === 400 || status === 401 || status === 409) {
                         const { responseText: json } = xhr

                         const payload = JSON.parse(json)

                         const { error } = payload

                         callback(new Error(error))
                    } else if (status === 204) {
                         callback(null)
                    }
               })

               xhr.setRequestHeader('Authorization', `Bearer ${token}`)
               xhr.setRequestHeader('Content-type', 'application/json')

               payload = { cart }

               json = JSON.stringify(payload)

               xhr.send(json)
          }
     })

     xhr.setRequestHeader('Authorization', 'Bearer ' + token)

     xhr.send()
}