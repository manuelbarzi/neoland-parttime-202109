const { models: { Note } } = require('data')
const { validators: { validateId, validateText, validateBoolean } } = require('commons')

function updateNote(userId, noteId, text, color, public) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateText(text, 'text')
    validateText(color, 'color')
    validateBoolean(public, 'public')

    return Note.updateOne({ user: userId, _id: noteId }, { text, color, public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) {
                throw new Error(`note with id ${noteId} and user with id ${userId} not found`)
            }
        })

}
module.exports = updateNote