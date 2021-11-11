function modifyUser(token, data, callback) {

var xhr = new XMLHttpRequest
xhr.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

xhr.addEventListener('load',function(){
    if(this.status === 401){
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
    // { "colors": ['red', 'green', 'blue' ], "score": 1000 }

    modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MThjMTdlZmRhMTY3MzAwMTc5YmM1Y2YiLCJpYXQiOjE2MzY2NTc1NjYsImV4cCI6MTYzNjY2MTE2Nn0.1XHdYHvPDTf0Rs_EB72o20WTmdZ0WPfmJzdt5OSaeGg',{ "colors": ['red', 'green', 'blue' ], "score": 1000 },function(error){
        if(error){
            return error}
        alert('somos los putos amos')})