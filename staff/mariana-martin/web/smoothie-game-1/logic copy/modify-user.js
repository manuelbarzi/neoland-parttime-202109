function modifyUser(token, data, callback) {
   

    var xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400 || this.status === 401) { //el error 401: es que enviaste mal el token y el 400: 
            var res = JSON.parse(this.responseText)
            var error = res.error
            callback(new Error(error))

        } else if (this.status === 204) { //204 que en envió correcto, y no hay respuesta
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token) //aquí estamos indicando que enviar permiso que es el token
    xhr.setRequestHeader('Content-type', 'application/json') //aquí estamos avisando que enviaremos un json

    var json = JSON.stringify(data) //agarramos el data de entrada, el queestá como parámetro

    xhr.send(json)
}