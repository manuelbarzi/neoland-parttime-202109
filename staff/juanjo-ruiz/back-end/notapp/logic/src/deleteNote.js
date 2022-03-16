const { models: { Note, User } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Note.findById(noteId)
        .then(note => {
            if (note.user === userId)
                console.log(`${note} borrada`)

            else
                console.log(note.user)
        })
}

module.exports = deleteNote