//FUSIÓN DE MANAGERS Y MODELO


const { readFile, writeFile } = require('fs').promises
const path = require('path')


//READ
function loadDocsFromJson(jsonFile) {
    const file = path.join(__dirname, 'users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))

}
//WRITE
function saveDocsToJson(users, jsonFile) {
    const file = path.join(__dirname, 'users.json')
    const json = JSON.stringify(users, null, 4)


    return writeFile(file, json)
}




class User {
    constructor (doc )  {    // (id, name, email, password)

        this._doc = doc    
    
    }

 

    save() {
        return loadDocsFromJson('user.jason')
            .then(docs => {
                docs.push(this._doc)

                return saveDocsToJson(docs, 'user.jason') 
            })
    }
 

    static findByEmail(email) {    //static, porque nos referimos a la clase sin hacer instancia, (instancia sería new USer, )
        return loadDocsFromJson()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)  //envuelvo en un objeto new User (en un usuario en un manejador) , los doc guardan objs planos
    }
}


module.exports = User