const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Note.find({ user: userId, _id: noteId })
        .then(note => note)
}

module.exports = retrieveNote