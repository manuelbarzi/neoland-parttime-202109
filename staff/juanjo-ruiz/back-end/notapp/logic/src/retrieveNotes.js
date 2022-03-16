const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNotes(userId, ownerId) {
    validateId(userId, 'user id')
    validateId(ownerId, 'owner id')

    if (userId === ownerId) {
        return Note.find({ user: userId })
            .then(notes => notes)
    } else {
        return Note.find({ user: ownerId, public: true })
            .then(notes => notes)
    }
}

module.exports = retrieveNotes