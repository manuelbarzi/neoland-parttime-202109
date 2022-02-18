const { loadDocsFromJson } = require('./helpers')
const Model = require('./model')

class User extends Model {
    constructor(doc) {
        super(doc)
    }

    static findByEmail(email) {
        return loadDocsFromJson(this._jsonFile)
            .then(docs => docs.find(doc => doc.email === email))
            .then(doc => doc? new User(doc) : null)
    }
}

module.exports = User
