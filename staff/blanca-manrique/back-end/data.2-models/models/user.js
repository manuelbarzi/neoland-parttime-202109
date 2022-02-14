const { readFile, writeFile } = require('fs').promises
const path = require('path')

function read() {
    return readFile(path.join(__dirname, './users.json'), 'utf8')
        .then(json => JSON.parse(json))
}

function write(users) {
    const json = JSON.stringify(users, null, 4)

    return writeFile(path.join(__dirname, './users.json'), json)
}

class User {
    constructor(doc) {
        this._doc = doc
    }
    save() {
        return read()
            .then(docs => {
                docs.push(this._doc)

                return write(docs)
            })
    }
    static findByEmail(email) { //static: método asociado a clases, no a instancias 
        return read()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) :null)
    } //docs es un array de objetos planos
}

module.exports = User

