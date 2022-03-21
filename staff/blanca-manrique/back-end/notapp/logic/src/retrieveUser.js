const { models: { User } } = require('data')
const {validators: {validateId}} = require('commons')

function retrieveUser(userId) {
    validateId(userId, 'user id')
    
    return User.findById(userId)
        .then(user => {
            const doc = user._doc

            //sanitize
            doc.id = doc._id.toString()
            delete doc._id

            delete doc.password

            delete doc.__v

            return doc
        })
}

module.exports = retrieveUser