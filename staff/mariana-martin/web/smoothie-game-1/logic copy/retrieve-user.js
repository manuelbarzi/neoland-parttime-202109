function retrieveUser(token, callback) {

    var xhr = new XMLHttpRequest //llamada a 
    
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


