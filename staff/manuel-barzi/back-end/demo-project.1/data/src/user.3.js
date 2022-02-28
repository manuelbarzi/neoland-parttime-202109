const { loadDocsFromJson, saveDocsToJson } = require('./helpers')

class User {
    constructor(doc) {
        this._doc = doc
        this._jsonFile = 'users.json'
    }

    save() {
        return loadDocsFromJson(this._jsonFile)
            .then(docs => {
                const index = docs.findIndex(doc => doc.id === this._doc.id)

                if (index === -1)
                    docs.push(this._doc)
                else
                    docs.splice(index, 1, this._doc)

                return saveDocsToJson(docs, this._jsonFile)
            })
    }

    static findByEmail(email) {
        return loadDocsFromJson(this._jsonFile)
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)
    }
}

module.exports = User