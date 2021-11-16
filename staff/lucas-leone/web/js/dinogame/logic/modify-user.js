function modifyUser(token, data, callback) {

var xhr = new XMLHttpRequest
xhr.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.addEventListener('load',function(){
    if(this.status === 401||this.status===400){
        res = JSON.parse(this.responseText)
        error = res.error
        callback(Error(error))
    }else if(this.status === 204){
        callback(null)
    }
})
xhr.setRequestHeader('Content-type', 'application/json')
xhr.setRequestHeader('Authorization','Bearer '+ token)

xhr.send(data)
   
}
