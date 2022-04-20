const { loadDocsFromJson, saveDocsFromJson } = require('./helpers')


class Model {
    constructor(doc, jsonFile) {
        this._doc = doc
        this._jsonFile = jsonFile
        //precargar em memoria datos, cache de datos en memoria
    }
    // recibir un usuario y guardarlo en users.json
    // convertimos el user de objeto a JSON con stringfly
    save() {
        // al ser una cadena de promesas devolvemos un return
        return loadDocsFromJson(this._jsonFile)
            .then(docs => {
                const index = docs.findIndex(doc => doc.id === this._doc.id) //encuentra el id del documento si es igual el id de este documento

                if (index === -1)
                    docs.push(this._doc) // añadimos el usuario en la bbdd (que es el documento)
                else
                    docs.splice(index, 1, this._doc)

                return saveDocsFromJson(docs, this._jsonFile)
            })
    }
}


module.exports = Model