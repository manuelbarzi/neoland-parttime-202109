const { models: { User } } = require('../../data/')
const { validators: { validateId } } = require('../../commons')
// metodo findByID

// User.findById(id,(err, docs) => {
//     if (err) console.error(err)
//     else return docs
// })


function retrieveUser(id) {
    validateId(id)

    return User.findById(id)
        .then(user => {
            const doc = user._doc // pasamos el usuario de _doc a doc

            doc.id = doc._id.toString() // el id del usuario lo convertimos a string y lo guardamos en doc.id
            delete doc._id // borramos del doc la propiedad _id, la guardamos anteriormente en id
            delete doc.__v // borramos del doc la propiedad __v
            delete doc.password // borramos del doc la propiedad password ya que no nos interesa saberla

            return doc // devolvemos el doc con todas las propiedades correctas y ordenadas
        })
}

module.exports = retrieveUser