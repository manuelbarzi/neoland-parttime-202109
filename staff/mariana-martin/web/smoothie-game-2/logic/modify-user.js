function modifyUser(token, data, callback) {
    // { colors: ['red', 'green', 'blue' ], score: 1000 }  convertir a json   JASON.stringify( {name: 'Peter', age:20 })
    // TODO

    var xhr = new XMLHttpRequest

    xhr.open ('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users');

    xhr.addEventListener('load', function(){
        if (this.status === 401) {
            res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))

        } else if (this.status ===  204) {
            res = JSON.parse(this.responseText)
            var token = res.token
            
        }



    })

    var data = ["red", "green", "yellow", "purple"]

    xhr.setRequestHeader('Content-type', 'application/json')

}