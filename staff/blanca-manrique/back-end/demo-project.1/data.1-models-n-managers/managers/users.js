const { readFile, writeFile } = require('fs').promises
const path = require('path')
const {validateUser, validateEmail} = require('../helpers/validators')

//función para leer el fichero json [1]
function read(){
    return readFile(path.join(__dirname, './users.json'), 'utf8')
        .then(json => JSON.parse(json))
}

//función para escribir en la base de datos (json) [3]
function write(users) {
    const json = JSON.stringify(users, null, 4)

    return writeFile(path.join(__dirname, './users.json'), json)
}

//función para crear usuarios [2]
function save(user) {
    validateUser(user)

    return read()
        .then(users => {
            users.push(user)

            return write(users) //el array de users tiene que guardase en la base de datos
        })
}

function findByEmail(email){
    validateEmail(email)
    return read()
        .then(users => users.find(user => user.email === email))
}

const users = {
    save,
    findByEmail
}

module.exports = users

// const blan = new User('USER-2022021317540000', 'Blan Mt', 'blanmt@gmail.com', '121212', 'admin' )

// save(blan)
//     .then(() => console.log('okeeeey'))
//     .catch(error => console.log(error))