const { models: { User } } = require('data')

function retrieveUser(userId) {
    // validate arguments

    return User.findById(userId)
        .then(user =>  {
            const doc = user._doc

            // sanitize doc
            
            doc.id = doc._id.toString()
            delete doc._id

            delete doc.__v

            delete doc.password

            return doc
        })
}

module.exports = retrieveUser