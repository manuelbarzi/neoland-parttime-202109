function authenticateUser(username, password, callback) {
    
    var xhr = new XMLHttpRequest //llamada a un servidor para enviar datos

    xhr.open ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth');

    xhr.addEventListener('load', function() {

        var res

        if (this.status === 401) {
            res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))

        } else if (this.status === 200) {
            res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')
    
    var data = {}
    
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json)
}