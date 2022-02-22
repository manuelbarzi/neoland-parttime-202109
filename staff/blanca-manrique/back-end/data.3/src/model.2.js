const { loadDocsFromJson, saveDocsToJson } = require('./helpers')

const cache = {}

class Model {
    constructor(doc) {
        this._doc = doc
    }

    save() {
        const docs = cache[this.constructor.jsonFile()]
        const index = docs.findIndex(doc => doc.id === this._doc.id)

        if (index === -1)
            docs.push(this._doc)
        else
            docs.splice(index, 1, this._doc)

        return saveDocsToJson(docs, this.constructor.jsonFile())

    }

    static jsonFile() {
        return `${this.name.toLowerCase()}s.json`
    }

    static cache() {
        return loadDocsFromJson(this.jsonFile())
            .then(docs => cache[this.jsonFile()] = docs)
    }

}

module.exports = Model