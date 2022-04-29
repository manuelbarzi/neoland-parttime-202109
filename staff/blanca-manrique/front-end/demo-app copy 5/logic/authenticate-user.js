function authenticateUser(username, password, callback) {
    if (typeof username !== 'string') throw new TypeError(username + ' is not string')
    if (!username.trim()) throw new Error('username is empty or blank')
 
    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 5) throw new Error('password length is smaller than 5 characters')
 
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
 
  var xhr = new XMLHttpRequest

  xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth')
  xhr.addEventListener('load', function(){
      if(this.status === 400 || this.status === 401){
         var res = JSON.parse(this.responseText)
         var error = res.error
         callback(new Error(error)) 

      }else if( this.status === 200){
         var res = JSON.parse(this.responseText)
         var token = res.token
         callback(null, token)
      }
  })
     xhr.setRequestHeader('Content-type', 'application/json')
 
     var data = {username: username, password: password}
 
     var json = JSON.stringify(data)
 
     xhr.send(json)
 }