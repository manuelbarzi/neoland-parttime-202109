/*const { User } = require("data/src/models")

//function retrieveUser(id){

//      return  User.findById(id)
//    .then(doc => doc)

//}

function retrieveUser(userId) {
        return User.findById(userId)
                .then(user => {
                        const doc = user._doc
//para que lo "pinte" en nuestra api de forma bonita se quita el _ del id el _v password
//tostring : devuelve un string que representa un objeto 
                        doc.id = doc._id.toString()

                        delete doc._id

                        delete doc.password

                        delete doc._v

                        return doc
                })
}

module.exports = retrieveUser*/

const { models: { User } } = require('data')

function retrieveUser(userId) {
    // validate arguments

    return User.findById(userId).lean()
        .then(user =>  {
            // sanitize
            user.id = user._id.toString()
            delete user._id

            delete user.__v

            delete user.password

            return user
        })
}

module.exports = retrieveUser