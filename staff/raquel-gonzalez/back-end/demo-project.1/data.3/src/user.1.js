const { readFile, writeFile } = require('fs').promises
const path = require('path')

function loadDocsFromJson() {
    const file = path.join(__dirname, 'users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))
}

function saveDocsToJson(users) {
    const file = path.join(__dirname, 'users.json')
    
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}

class User {
    constructor(doc) {
        this._doc = doc
    }

    save() {
        return loadDocsFromJson()
            .then(docs => {
                docs.push(this._doc)

                return saveDocsToJson(docs)
            })
    }

    static findByEmail(email) {
        return loadDocsFromJson()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)
    }
}

module.exports = User