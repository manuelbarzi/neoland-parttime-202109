const { readFile, writeFile } = require('fs').promises
const path = require('path')
const { fileURLToPath } = require('url')
const { User } = require('../models') 

// leo todos los usuarios
function read() {
    // al ser una cadena de promesas devolvemos un return
    return readFile(path.join(__dirname, '../jsons/users.json'), 'utf8')
    // si va bien ".then"
    .then(json => JSON.parse(json)) // pasamos el array a objeto
}

function write(users) {
    // al ser una cadena de promesas devolvemos un return
    const json = JSON.stringify(users, null, 4)
    return writeFile(path.join(__dirname, '../jsons/users.json'), json)
}

// recibir un usuario y guardarlo en users.json
// convertimos el user de objeto a JSON con stringfly
function save(user) { 
    // al ser una cadena de promesas devolvemos un return
 
    return read()
    .then(users => {
        users.push(user) // añadimos el usuario a users
        return write(users)
    }) 
}


// demo

const jules = new User('USER-20220211164100000', 'Jules copy', 'julescopy@jules.com', '123123123', 'admin')

save(jules)
.then(() => console.log('Todo correcto'))
.catch(error => console.log(error))