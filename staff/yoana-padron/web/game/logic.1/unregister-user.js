function unregisterUser(token, password, callback) {

    var xhr = new XMLHttpRequest
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function(){
        if (this.status === 400 || this.status === 401){
            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error))
        } else if  (this.status === 204){
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type','application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var data = { password: password }

    var json = JSON.stringify(data)

    xhr.send(data)
    
}