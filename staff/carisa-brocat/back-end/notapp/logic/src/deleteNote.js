const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function deleteNote(userId, noteId) {
    validateId(userId)
    validateId(noteId)

    return Note.deleteOne({ user: userId, _id: noteId })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = deleteNote