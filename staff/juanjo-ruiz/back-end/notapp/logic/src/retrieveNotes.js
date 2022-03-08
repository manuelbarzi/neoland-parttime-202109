const { models: { Note } } = require('data')
const { user } = require('data/src/schemas')

function retrieveNotes(userId, ownerId) {
    if (userId === ownerId) {
        return Note.find({ user: userId })
            .then(notes => notes)
    } else {
        return Note.find({ user: ownerId, public: true })
            .then(notes => notes)
    }
}

module.exports = retrieveNotes