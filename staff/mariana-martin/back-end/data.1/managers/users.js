//CRUD : Create, Retrieve, Update, Delete
//manager de datos:
// este es un manejador de usuriario: crearlos, buscarlos, borrarlos...en este caso los guardermos en dicsco, en el archivo de json

//Hago una función que lea del archivo json

const { readFile, writeFile } = require('fs').promises
const path = require('path')
const {validateUser, validateEmail } =require('../helpers/validators')

//Lee
function read() {
    const file = path.join(__dirname, './users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))

}
//Escribe
function write(users) {
    const file = path.join(__dirname, './users.json')
    const json = JSON.stringify(users, null, 4)


    return writeFile(file, json)
}

//Guarda
function save(user) {
    validateUser(user)

        return read() 
            .then(users => {
                users.push(user)

                return write(users)
            })
}

//Encuentra x email
function findByEmail(email) {
    validateEmail(email)

    return read()
    .then (users => users.find(user => user.email === email))
}

const users = {
    save, 
    findByEmail
}

module.exports = users
