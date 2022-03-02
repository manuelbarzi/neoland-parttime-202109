//FUSIÓN DE MANAGERS Y MODELO


const { readFile, writeFile } = require('fs').promises
const path = require('path')


//READ
function loadDocsFromJson() {
    const file = path.join(__dirname, 'users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))

}
//WRITE
function saveDocsToJson(users) {
    const file = path.join(__dirname, 'users.json')
    const json = JSON.stringify(users, null, 4)


    return writeFile(file, json)
}


//este es el modelo y manejador:
//si creamos un new User, y el doc sería los datos dentro, el User es el manejador:

class User {
    constructor (doc )  {    // (id, name, email, password)

        this._doc = doc    //guión bajo indica que es algo interno
    
    }

    //User tiene un método que el mismo se podrá guardar:

    save() {
        return loadDocsFromJson()
            .then(docs => {
                docs.push(this._doc)

                return saveDocsToJson(docs) //array de obj de docs
            })
    }
    //User tiene otro método que busca email:

    static findByEmail(email) {    //static, porque nos referimos a la clase sin hacer instancia, (instancia sería new USer, )
        return loadDocsFromJson()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)  //envuelvo en un objeto new User (en un usuario en un manejador) , los doc guardan objs planos
    }
}


module.exports = User