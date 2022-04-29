function unregisterUser(token, password, callback) {

    if (typeof token !== 'string') throw new TypeError(token + ' is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 8) throw new Error('password length is smaller than 8 characters')


    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var xhr = new XMLHttpRequest

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))
        } else if (this.status === 204) {
            callback(null)
        }
    })
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    var data = { password: password }

    var json = JSON.stringify(data)

    xhr.send(json)
}

// unregisterUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThlYTM0MGUzZjU2ZTAwMTc5MTBjMGQiLCJpYXQiOjE2MzY3Mzc4NjIsImV4cCI6MTYzNjc0MTQ2Mn0.knHPhtzBgmyyvuv1NUhULKGqOp_rMHwZ__OqkmDC9ho', '121212', function (error) {
//     debugger
//     if (error) {
//         alert(error.message)
//          return
//     }else{alert('todo OK')}
// })

// modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThlYzE5ZmUzZjU2ZTAwMTc5MTBjMTEiLCJpYXQiOjE2MzY3NDU2MzYsImV4cCI6MTYzNjc0OTIzNn0.2sCVOWX0-xlR1gqSdIKLSP03eeT_Xsb9AusUaO3N7Ho', { "colors": ["red", "pink", "green"], "score": 1970 }, function (error, token) {
//     if (error) {
//         alert(error.message)
//         return
//     }
//     alert('todo OK')
// })