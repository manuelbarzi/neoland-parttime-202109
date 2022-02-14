const { readFile, writeFile } = require('fs').promises
const path = require('path')
const { fileURLToPath } = require('url')

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

class User {
    constructor(doc) {
        this._doc = doc // _doc para decir que es un documento interno de la instancia
    }

    // recibir un usuario y guardarlo en users.json
    // convertimos el user de objeto a JSON con stringfly
    save() {
        // al ser una cadena de promesas devolvemos un return
        return read()
            .then(docs => {
                docs.push(this._doc) // añadimos el usuario en la bbdd (que es el documento)

                return write(docs)
            })
    }

    // encontrar usuario por email
    static findByEmail(email) {
        return read() // Promesa de lectura, leeme todos los usuarios
            .then(docs => docs.find(doc => doc.email === email)) // busca los usuarios que tenga el mismo email que este ultimo
            .then(doc => doc ? new User(doc) : null)
    }
}

module.exports = User