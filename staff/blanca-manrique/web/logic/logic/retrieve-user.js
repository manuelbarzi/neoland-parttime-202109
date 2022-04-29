function retrieveUser(token, callback) {
    var xhr = new XMLHttpRequest
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.addEventListener('load', function () {
        if(this.status === 401){
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error (error))
        }else if(this.status === 200){
            var res = JSON.parse(this.responseText)
            callback(null, res)
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


