function registerUser(name, username, password, callback) {
    var xhr = new XMLHttpRequest //crea objeto en memoria para comunicar con servidor
    
    //con q maquina tiene q abrirlo
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //decir q hacer luego q cargue
    xhr.addEventListener('load', function () {
        if (this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback (new Error(error))
        } else if (this.status === 201) {
            callback (null)
        }
    })

    //envia objeto a servidor

    xhr.setRequestHeader('Content-type', 'application/json')

    //convertir objeto a json
    // var json = '{"name": "' + name + '", "username":' + username + '", "password":' + password + '"}'
    // xhr.send(json)

    //otra manera de convertir a JSON
    var data = {}

    data.name = name
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json)
}
