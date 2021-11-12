function registerUser(name, username,password,callback){
    var xhr = new XMLHttpRequest

    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function(){
        if(this.status === 409|| this.status===400){
            res = JSON.parse(this.responseText)
            error = res.error
            callback(Error(error))
        }else if(this.status === 204){
            callback(null)
        }
    })

xhr.setRequestHeader('Content-type','application/json')

var data = {}

data.name = name
data.username = username
data.password = password

var json = JSON.stringify(data)

xhr.send(json)
}