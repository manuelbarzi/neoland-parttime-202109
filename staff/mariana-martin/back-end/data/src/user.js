//5ta versión: agregando cache

const { loadDocsFromJson } = require('./helpers')
const  Model = require ('./model')

class User extends Model {
    constructor (doc)  {    // (id, name, email, password)

        super(doc)  //llamamos al construcotr padre, superior

        
    }

    static findByEmail(email) {    //static, porque nos referimos a la clase sin hacer instancia, (instancia sería new USer, )
        return loadDocsFromJson()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)  //envuelvo en un objeto new User (en un usuario en un manejador) , los doc guardan objs planos
    }
}


module.exports = User