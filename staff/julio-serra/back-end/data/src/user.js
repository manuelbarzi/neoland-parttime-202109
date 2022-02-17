const { loadDocsFromJson } = require('./helpers')
const Model = require('./model')

class User extends Model { // save la heredan de model
    constructor(doc) {
        // this._doc = doc // _doc para decir que es un documento interno de la instancia
        // this._jsonFile = 'users.json'
        super(doc)
    }

    // encontrar usuario por email
    static findByEmail(email) { // static metodo que va asociado a la clase
        return loadDocsFromJson(this._jsonFile) // Promesa de lectura, leeme todos los usuarios
            .then(docs => docs.find(doc => doc.email === email)) // busca los usuarios que tenga el mismo email que este ultimo
            .then(doc => doc ? new User(doc) : null)
    }
}

module.exports = User