function retrieveUser(token, callback) {

    if (typeof token !== 'string') throw new TypeError (token + ' is not a string') 
    if (!token.trim()) throw new Error ('name is empty or blank')
    if (token.split('.').length !== 3) throw new ERror ('invalid token')


    if(typeof callback!== 'function') throw new Error(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open ('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function(){

        if (this.status === 401){
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))
        } else if (this.status === 200){
            var user = JSON.parse(this.responseText)
            callback(null,user)
        }

    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}

//retrieveUSer('token', console.log)