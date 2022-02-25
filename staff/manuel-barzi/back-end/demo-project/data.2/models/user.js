const { readFile, writeFile } = require('fs').promises
const path = require('path')

function read() {
    const file = path.join(__dirname, './users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))
}

function write(users) {
    const file = path.join(__dirname, './users.json')
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
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

    static findByEmail(email) {
        return read()
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)
    }
}

module.exports = User