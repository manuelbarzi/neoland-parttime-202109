function unregisterUser(token, password, callback) {
var xhr = new XMLHttpRequest
xhr.open('DELETE','https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.addEventListener('load', function(){
    if(this.status === 401||this.status === 400 ){
        var res = JSON.parse(this.responseText)
        var error = res.error
        callback(new Error(error))
    } else if (this.status === 204){
        callback(null)
    }
})
xhr.setRequestHeader('Content-type', 'application/json')
xhr.setRequestHeader('Authorization', 'Bearer ' + token)

var data = {password: password}
var json = JSON.stringify(data)
xhr.send(json)
}

//var data = {}
// data.password = '121212'
// var json = JSON.stringify(data)


// unregisterUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThlYTM0MGUzZjU2ZTAwMTc5MTBjMGQiLCJpYXQiOjE2MzY3Mzc4NjIsImV4cCI6MTYzNjc0MTQ2Mn0.knHPhtzBgmyyvuv1NUhULKGqOp_rMHwZ__OqkmDC9ho', json, function (error) {
//     debugger
//     if (error) {
//         alert(error.message)
//          return
//     }else{alert('todo OK')}
// })
