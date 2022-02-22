const { loadDocsFromJson, saveDocsToJson } = require('./helpers')

class Model {
    constructor(doc, jsonFile) {
        this._doc = doc
        this._jsonFile = jsonFile
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
}

module.exports = Model