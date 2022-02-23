//6ta versión: agregando cache

const  Model = require ('./model')

class User extends Model {
    constructor (doc)  {    // (id, name, email, password)

        super(doc)  //llamamos al construcotr padre, superior

        
    }

    static findByEmail(email) {    
        const docs = this._cache[this.jsonFile()]
        let doc = docs.find(doc => doc.email === email)

           return doc? new User(doc) : null  //envuelvo en un objeto new User (en un usuario en un manejador) , los doc guardan objs planos
    }
}


module.exports = User