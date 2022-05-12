const Model = require('./model')

class User extends Model {
    constructor(doc) {
        super(doc)
    }

    static findByEmail(email) {
        const docs = this._cache[this.jsonFile()]

        let doc = docs.find(doc => doc.email === email)

        return doc? new User(doc) : null
    }
}

module.exports = User