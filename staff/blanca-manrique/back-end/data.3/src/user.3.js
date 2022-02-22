const { loadDocsFromJson} = require('./helpers')
const Model = require('./model')

class User extends Model {
    constructor(doc) {
        super(doc)
    }

    static findByEmail(email) { //static: método asociado a clases, no a instancias 
        return loadDocsFromJson(this._jsonFile)
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) :null)
    } //docs es un array de objetos planos
}

module.exports = User

