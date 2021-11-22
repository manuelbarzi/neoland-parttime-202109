function modifyUser(token, data, callback) {

    if (typeof token !== 'string') throw new TypeError (token + ' is not a string') 
    if (!token.trim()) throw new Error ('name is empty or blank')
    if (token.split('.').length !== 3) throw new ERror ('invalid token')

    if (typeof data !== 'object') throw new Error (data + ' is not an object')


    if(typeof callback!== 'function') throw new Error(callback + ' is not a function')

    var xhr = new XMLHttpRequest
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

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

    var json = JSON.stringify(data)

    xhr.send(data)
    
}