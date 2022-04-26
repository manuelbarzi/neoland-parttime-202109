// Esta versión guarda en memoria base de datos, para que no se empalmen los productos  (hacer cache de datos en memoria)


const { loadDocsFromJson, saveDocsToJson } = require('./helpers')
const cache = {} //Important: cache en memoria y tener todo precargado

class Model {
    constructor(doc) {
        this._doc = doc
       // this._jsonFile = jsonFile
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


    //método estático de la clase, caché que guarde en memoria (si son base de datos pequeñas)
    static jsonFile() {
        return `${this.name.toLowerCase()}s.json`   //this es la clase (user o product) //esto da el nombre del fichero que debo de buscar
    }

    static cache() {

        return loadDocsFromJson(this.jsonFile())  //readfile
            .then(docs => cache[this.jsonFile()] = docs)   //docs ya cargados los cacheo en memoria
    }

}



module.exports = Model