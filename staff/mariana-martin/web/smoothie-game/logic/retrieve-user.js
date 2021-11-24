function retrieveUser(token, callback) {

    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token') //los token se diviiden en 3 partes eparadas por puntitos

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')


    var xhr = new XMLHttpRequest 
    
    xhr.open ('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')


    xhr.addEventListener('load', function(){
        // es lo mismo xhr.onload

        if (this.status === 401){
            res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))

        } else if (this.status === 200){
            var user =JSON.parse(this.responseText)
            callback(null, user)
        }

    
    })
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()

}


//leer addEventListener or online...


