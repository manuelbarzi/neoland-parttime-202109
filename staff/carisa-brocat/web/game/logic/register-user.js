function registerUser(name, username, password, callback) {
    if(typeof name!== 'string') throw new TypeError(name + 'is not string')
    if(!name.trim()) throw new Error('name is empty or blank')

    if(typeof username !== 'string') throw new TypeError(username + 'is not string')
    if(!username.trim()) throw new Error('username is empty or blank')
    
    if(typeof password !== 'string') throw new TypeError(password + 'is not string')
    if(!password.trim()) throw new Error ('password is empty or blank')
    if(password.trim().length < 8) throw new Error ('password length is smaller than 8 characters')

    if(typeof callback !== 'function') throw new TypeError(callback + 'is not a function')


    var xhr = new XMLHttpRequest //crea objeto en memoria para comunicar con servidor
    
    //con q maquina tiene q abrirlo
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //decir q hacer luego q cargue
    xhr.addEventListener('load', function () {
        if (this.status === 409 || this.status === 400) {
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
