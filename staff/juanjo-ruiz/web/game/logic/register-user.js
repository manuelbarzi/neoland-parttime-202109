function registreUser(name, username, password, callback) {
    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 409 || this.status === 400) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 204) {
            callback(null)
        }

    })

    xhr.setRequestHeader('Content-type', 'application/json')

    var data = {}

    data.name = name
    data.username = username
    data.password = password

    var json = JSON.stringify(data)
    
    xhr.send(json)
}