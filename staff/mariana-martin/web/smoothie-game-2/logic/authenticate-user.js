function authenticateUser(username, password, callback) {
    
    var xhr = new XMLHttpRequest //llamada a un servidor para enviar datos //conector

    xhr.open ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'); //con qué metodo abro?


    //xhr.addEventListener('load', function() { es lo mismo que onload.
        xhr.onload = function() {
        

        if (this.status === 401) {              //siempre coviene contemplar los casos de error
            var res = JSON.parse(this.responseText) 
            var error = res.error
            callback(new Error(error))  

        } else if (this.status === 200) {
            res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    }

    xhr.setRequestHeader('Content-type', 'application/json')
    
    var data = {}
    
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json) //cuando hay respuesta se carga el load, por eso estamos configurando el load antes, arriba..
}