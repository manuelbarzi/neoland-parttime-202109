const { loadDocsFromJson, saveDocsFromJson } = require('./helpers')
//precargar em memoria datos, cache de datos en memoria
const cache = {}

class Model {
    constructor(doc, jsonFile) {
        this._doc = doc
        this._jsonFile = jsonFile
    }

    save() { // el this apunta a la instancia
        const docs = cache[this.constructor.jsonFile()]
        const index = docs.findIndex(doc => doc.id === this._doc.id) //encuentra el id del documento si es igual el id de este documento

        if (index === -1)
            docs.push(this._doc) // añadimos el usuario en la bbdd (que es el documento)
        else
            docs.splice(index, 1, this._doc)

        return saveDocsFromJson(docs, this.constructor.jsonFile())

    }

    static jsonFile() {
        return `${this.name.toLowerCase()}s.json`
    }

    static cache() { // el this apunta a la clase, cuando es un metodo estatico
        return loadDocsFromJson(this.jsonFile())
            .then(docs => cache[this.jsonFile()] = docs)
    }

}


module.exports = Model