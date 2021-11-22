//stringify para convertir a string un objeto

function updateUser(token, data, callback) {

    var xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //lanzamos el callback

    xhr.addEventListener('load', function() {

        if (this.status === 400 || this.status === 401) {
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))
        } else if (this.status === 204) {
            // var res = JSON.parse(this.responseText)
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'Application/json')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    // var data = {}

    // data.city = 'Andorra'


    var json = JSON.stringify(data)

    xhr.send(json)

}