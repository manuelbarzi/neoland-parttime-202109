// Clase Padre que extenderá a Product y User:

//esta versión no funciona en la base de datos, porque todos los datos se pelean por guardarse
//porque no se sincronizan los datos en memoria y uno reescribe a otro:


const { loadDocsFromJson, saveDocsToJson} = require('./helpers')


class Model {
    constructor(doc, jsonFile) {
        this._doc = doc
        this._jsonFile = jsonFile
    }

    save() {
        return loadDocsFromJson(this._jsonFile)
            .then(docs => {
  
                const index = docs.findIndex(doc => doc.id === this._doc.id)
                if(index === -1 )
                  docs.push(this._doc)

                else 
                  docs.splice(index, 1, this._doc)
  
                return saveDocsToJson(docs, this._jsonFile) 
            })
    }

    //método de la clase caché que guarde en memoria (si son base de datos pequeñas)
}



module.exports = Model