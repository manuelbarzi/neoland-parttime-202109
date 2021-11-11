function registerUser(name, username,password,callback){
    var xhr = new XMLHttpRequest

    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function(){
        debugger
    })

xhr.setRequestHeader('Content-type','application/json')
var json = '{"name";"'+name+'","username":  "'+ username + '","password":"'+password+'"}'

xhr.send(json)
}