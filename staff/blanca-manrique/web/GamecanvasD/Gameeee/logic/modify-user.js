function modifyUser(token, data, callback) {
    var xhr = new XMLHttpRequest
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(Error(error))
        } else if (this.status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json ')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send(data)
}
    // { colors: ["red", "pink", "green"] , score: 1970, "cart": [{"id":"P1234", "qty":3}, {"id":"P1554", "qty":4}] }
    // TODO



// modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThlYzE5ZmUzZjU2ZTAwMTc5MTBjMTEiLCJpYXQiOjE2MzY3NDU2MzYsImV4cCI6MTYzNjc0OTIzNn0.2sCVOWX0-xlR1gqSdIKLSP03eeT_Xsb9AusUaO3N7Ho', { "colors": ["red", "pink", "green"], "score": 1970 }, function (error, token) {
//     if (error) {
//         alert(error.message)
//         return
//     }
//     alert('todo OK')
// })
