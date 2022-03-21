const { models: {User} } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveUser(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            const doc = user._doc

            doc.id = doc._id.toString()
            delete doc._id

            delete doc.__v

            delete doc.password

            return doc
        })
}

module.exports = retrieveUser