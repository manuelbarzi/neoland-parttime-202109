const { readFile, writeFile } = require('fs').promises
const path = require('path')
const { fileURLToPath } = require('url')
const { validateUser, validateEmail } = require('../helpers/validators')
// const { User } = require('../models') 

// leo todos los usuarios
function read() {
    // al ser una cadena de promesas devolvemos un return 
    const file = path.join(__dirname, './users.json')

    return readFile(file, 'utf8')
        // si va bien ".then"
        .then(json => JSON.parse(json)) // pasamos el json(array) a objeto
}

function write(users) {
    // al ser una cadena de promesas devolvemos un return
    const file = path.join(__dirname, './users.json')
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}

// recibir un usuario y guardarlo en users.json
// convertimos el user de objeto a JSON con stringfly
function save(user) {
    // al ser una cadena de promesas devolvemos un return
    validateUser(user)

    return read()
        .then(users => {
            users.push(user) // añadimos el usuario a users

            return write(users)
        })
}

// encontrar usuario por email
function findByEmail(email) {
    validateEmail(email)

    return read() // Promesa de lectura, leeme todos los usuarios
        .then(users => users.find(user => user.email === email)) // busca los usuarios que tenga el mismo email que este ultimo
}


module.exports = {
    save,
    findByEmail
}

// demo
// const jules = new User('USER-20220211164100000', 'Jules copy', 'julescopy@jules.com', '123123123', 'admin')

// save(jules)
// .then(() => console.log('Todo correcto'))
// .catch(error => console.log(error))