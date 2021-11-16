function unregisterUser (token, password, callback) {

var xhr = new XMLHttpRequest

xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

// lanzamos el callback

xhr.addEventListener('load', function(){

if(this.state === 400 || this.status === 401) {
var res = JSON.parse(this.responseText)
var error = res.error

callback(new Error(error))



} else if(this.state === 204){
    var res = JSON.parse(this.responseText)
    callback(null)
}

})

xhr.setRequestHeader('Content-type', 'Application/json')
xhr.setRequestHeader('Authorization', 'Bearer ' + token)

var data = {}

data.password = password

var json = JSON.stringify(data)

xhr.send(json)


}