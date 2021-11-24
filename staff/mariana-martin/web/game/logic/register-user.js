function registerUser(name, username, password, callback){
    
    var xhr = new XMLHttpRequest  //función constructora que nos permite hacer llamadas, (para crear peticiones, nomralemnte se llama xhr)
                                  //creamos una instancia , un objeto en memoria que nos permite comuncanors con el servidor
  
    
    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users') //(decirle al xhr con qué máquina debe abrir esto POST porque vamos a registrar un usuario)

//configurar cuando haya respuesta de la API:

            //con el this acccedes al xhr  this.status te permite ver el status el numero de error o bueno este caso 409
             //y this.respondeText el json de respuesta del xhr, si ese usuaio ya existe o no. 
            //Hay una funcion que se llama JSON.parse (metodo parse) hace un json a un objeto y lo guardo en una variable
    
    xhr.addEventListener('load', function(){          //cuando haya respuesta  se dispara  el evento'load' 
        if(this.status === 401 || this.status === 409){                        //si el status del this (xhr) es igual a 409 (que es el error cuando ya existe el usurio)
            var res = JSON.parse(this.responseText)       // vaciar la respuesta del json.parte this.response a la var res
            var error = res.error                         //guardo ese error (el mesnaje del error) en la var error
            callback(new Error(error))                  // constructor de error, es una funcion constructora para crear errores, new Error ('hola mundo'), y ese seria un error 'hola mundo'
        } else if(this.status === 201) {            //en caso que no haya error, será un 201,siginifca que lo creado
            callback(null)                              //llamamos al callback y le decimos que no hay error, nada más que informar, y termina el circuito
        }
    })
    
    xhr.setRequestHeader('Content-type', 'application/json') //en la app insomnia la hace auto, pero nosotoros tenemos que decrle que estmaos enviando, el content type es una applcation

    //var json = '{ "name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'      //aqui construyes el jason
    // esto de arriba se puede simplificar usando el stringify, haciendo una variable con sus .valores:

    var data = {}    

    data.name = name;
    data.username = username;
    data.password = password;

    var json = JSON.stringify(data) //(qué datos vamos a enviar)

    xhr.send(json) //enviar ese jason 



}