function retrieveUser(token, callback) {
    //Sabemos que el token es un string, que está compuesto por 3 partes separadas por 2 puntos--split nos devuelve un array cada vez que encuentra un punto, por ello le decimos que la longitud tiene que ser igual a 3 = tiene que devolverme 3 arrays
    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    var xhr = new XMLHttpRequest
    
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
    xhr.addEventListener('load', function () {
        if(this.status === 401){
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error (error))

        }else if(this.status === 200){
            var user = JSON.parse(this.responseText)
            callback(null, user)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer '+ token)

    xhr.send()
}

// retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThlOTgwZWUzZjU2ZTAwMTc5MTBjMGEiLCJpYXQiOjE2MzY3MzUwMjUsImV4cCI6MTYzNjczODYyNX0.0hR1yKDrjsA9lKyb2vRJINgmBi4k8cIv-PPKVoB9aoc', function (error) {
//         debugger
//         if (error) {
//             alert(error.message)
//            return
//         }
//          alert('todo OK')
//     })


