const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Note.deleteOne({ user: userId, _id: noteId })
        .then(result => {
            const { deletedCount } = result

            if (deletedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = deleteNote