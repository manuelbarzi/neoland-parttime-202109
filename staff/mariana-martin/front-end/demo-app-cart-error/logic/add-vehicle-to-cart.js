function addVehicleToCart(token, id, callback) {
     validateToken(token)
     validateId(id)
     validateCallback(callback)
 
     let xhr = new XMLHttpRequest
 
     xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
 
     xhr.addEventListener('load', () => {
         const { status } = xhr
 
         if (status === 401) {
             const { responseText: json } = xhr
 
             const payload = JSON.parse(json) //payload en vez de user
 
             const { error } = payload
 
             callback(new Error(error))
         } else if (status === 200) {
             let { responseText: json } = xhr
 
             let payload = JSON.parse(json)
 
             const { cart = [] } = payload
 
             let item = cart.find(item => item.id === id)  //buscar algún item(objeto) que tenga el id (item.id) y lo busca con el id que viene por arriba (el parametro que se envía al llamar esta lógica)
 
             if (item) //si el item esta ahí, incrementa uno más
                 item.qty++;
             else {
                 item = { id, qty: 1 } //si no encuentra es que no lo tenía, entonces se crea y empiezo en cantidad 1
 
                 cart.push(item) //y lo agrego al array cart
             }


 //segunda llamada: para actualizar el carrito
             xhr = new XMLHttpRequest
 
             xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
 
             xhr.addEventListener('load', () => {
                 const { status } = xhr
 
                 if (status === 400 || status === 401 || status === 409) {
                     const { responseText: json } = xhr  //variable json guardo respuesta
                                                   //se le dice payload, data que se envía y se recibe
                     const payload = JSON.parse(json)  //en la variable json lo parseo en payload
 
                     const { error } = payload  //creo una variable 
 
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