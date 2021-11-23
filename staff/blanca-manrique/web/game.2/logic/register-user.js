function registerUser(name, username, password, callback) {
   //Comprobaciones antes de llamar a la API
   if (typeof name !== 'string') throw new TypeError(name + ' is not string')
    if (!name.trim()) throw new Error('name is empty or blank')

    if (typeof username !== 'string') throw new TypeError(username + ' is not string')
    if (!username.trim()) throw new Error('username is empty or blank')

    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 5) throw new Error('password length is smaller than 5 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
   
    var xhr = new XMLHttpRequest

   xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

   xhr.addEventListener('load', function () {
      if (this.status === 401 || this.status === 409) {
         var res = JSON.parse(this.responseText) 
         var error = res.error
         callback(new Error(error))

      } else if(this.status === 201){
         callback(null)
      }
   })

   xhr.setRequestHeader('Content-type', 'application/json')

   var data = {name: name, username: username, password: password}
 
   var json = JSON.stringify(data)

   xhr.send(json)
}

// registerUser('Blanca Manrique', 'blancamanrique13', '121212', function(error) {
//    debugger
//    if (error) {
//        alert(error.message)
//        return
//    }
//    alert('user successfully registered')
// })