const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')
// metodo findByID

// User.findById(id,(err, docs) => {
//     if (err) console.error(err)
//     else return docs
// })


function retrieveUser(id) {
    validateId(id)

    return User.findById(id).lean()
        .then(user => {
           
            user.id = user._id.toString()

            delete user._id // borramos del doc la propiedad _id, la guardamos anteriormente en id
            delete user.__v // borramos del doc la propiedad __v
            delete user.password // borramos del doc la propiedad password ya que no nos interesa saberla

            return user // devolvemos el doc con todas las propiedades correctas y ordenadas
        })
}

module.exports = retrieveUser