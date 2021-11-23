function registerUser(name, username, password, callback) {
   var xhr = new XMLHttpRequest

   xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
   //Configuarar qué va a hacer cuando haya respuesta de la API
   //'load' se dispara cuando hay respuesta de la API
   xhr.addEventListener('load', function () {
      if (this.status === 401 || this.status === 409) {
         var res = JSON.parse(this.responseText) // me va a sacar un objeto

         var error = res.error
         callback(new Error(error)) //le ponemos dentro el mensaje de error
      } else if(this.status === 201){
         callback(null)
         //Si todo va bien (201) no nos devuelve nada, como en Insomnia
      }
   })

   //Le indico que le voy a enviar un json
   xhr.setRequestHeader('Content-type', 'application/json')

   //Construyo un json
   //var json = '{"name": "' + name + '", "username": "' + username + '", "password": "' + password + '"}'
   var data = {}

   data.name = name
   data.username = username
   data.password = password

   var json = JSON.stringify(data)
   
   // Envio el json
   xhr.send(json)
}

// authenticateUser('blancamanrique13', '121212', function(error, token) {
//    debugger
//    if (error) {
//        alert(error.message)
//        return
//    }
//    alert('user successfully registered')
// })