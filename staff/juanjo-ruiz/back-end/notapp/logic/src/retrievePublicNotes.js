const { models: { User, Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrievePublicNotes(userId) {
    validateId(userId, 'user id')
    
    return User.findById(userId)
        .then(doc => {
            if (!doc) throw new Error('User not logged. Please log in to continue')

            else
                return Note.find({ public: true })
                    .then(notes => notes)
        })
}

module.exports = retrievePublicNotes