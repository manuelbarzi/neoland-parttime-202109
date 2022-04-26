// Esta versión  cache es propiedad de Model


const { loadDocsFromJson, saveDocsToJson } = require('./helpers')


class Model {
    constructor(doc) {
        this._doc = doc
        
    }

    save() {

        const docs = this.constructor._cache[this.constructor.jsonFile()]
        const index = docs.findIndex(doc => doc.id === this._doc.id)

        if (index === -1)
            docs.push(this._doc)

        else
            docs.splice(index, 1, this._doc)

        return saveDocsToJson(docs, this.constructor.jsonFile())
    }

    static _cache = {}  //ahora es propiedad de Model, se guarda la cache del (product ,user, etc)


    //método estático de la clase, caché que guarde en memoria (si son base de datos pequeñas)
    static jsonFile() {
        return `${this.name.toLowerCase()}s.json`   //this es la clase (user o product) //esto da el nombre del fichero que debo de buscar
    }

    static cache() {

        return loadDocsFromJson(this.jsonFile())  //readfile
            .then(docs => this._cache[this.jsonFile()] = docs)   //docs ya cargados los cacheo en memoria
    }

}



module.exports = Model