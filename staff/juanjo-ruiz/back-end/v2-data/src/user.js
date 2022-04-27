const Model = require('./model')

class User extends Model {
    constructor(doc) {
        super(doc)
    }

    set id(id) {
        this._doc.id = id
    }

    get id() {
        return this._doc.id
    }

    set name(name) {
        this._doc.name = name
    }

    get name() {
        return this._doc.name
    }

    set email(email) {
        this._doc.email = email
    }

    get email() {
        return this._doc.email
    }

    set password(password) {
        this._doc.password = password
    }

    get password() {
        return this._doc.password
    }


    static findByEmail(email) {
        const docs = this._cache[this.jsonFile()]

        let doc = docs.find(doc => doc.email === email)

        return doc? new User(doc) : null
    }
}

module.exports = User