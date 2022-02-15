const { readFile, writeFile } = require('fs').promises
const path = require('path')

function loadDocsFromJson(jsonFile) {
    const file = path.join(__dirname, jsonFile)

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))
}

function saveDocsToJson(users, jsonFile) {
    const file = path.join(__dirname, jsonFile)
    
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}

class User {
    constructor(doc) {
        this._doc = doc
    }

    save() {
        return loadDocsFromJson('users.json')
            .then(docs => {
                docs.push(this._doc)

                return saveDocsToJson(docs, 'users.json')
            })
    }

    static findByEmail(email) {
        return loadDocsFromJson('users.json')
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)
    }
}

module.exports = User