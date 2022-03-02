//3er VERSIÓN:
//actualiza datos en base de datos

const { loadDocsFromJson, saveDocsToJson} = require('./helpers')


class User {
    constructor (doc )  {    // (id, name, email, password)

        this._doc = doc    
        this._jsonFile= 'user.json'
    }

    save() {
        return loadDocsFromJson(this._jsonFile)
            .then(docs => {

                const index = docs.findIndex(doc => doc.id === this._doc.id)
                if(index === -1 )
                  docs.push(this._doc)
                else 
                  docs.splice(index, 1, this._doc)

                return saveDocsToJson(docs, this._jsonFile) 
            })
    }
 

    static findByEmail(email) {    //static, porque nos referimos a la clase sin hacer instancia, (instancia sería new USer, )
        return loadDocsFromJson()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)  //envuelvo en un objeto new User (en un usuario en un manejador) , los doc guardan objs planos
    }
}


module.exports = User