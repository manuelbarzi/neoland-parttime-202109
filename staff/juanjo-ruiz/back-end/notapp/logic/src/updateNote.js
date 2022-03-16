const { models: { Note } } = require('data')
const { validators: { validateId, validateText, validateColor, validatePublic } } = require('commons')

function updateNote(userId, noteId, text, color, public) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    validateText(text)
    validateColor(color)
    validatePublic(public)

    return Note.updateOne({ user: userId, _id: noteId }, { text: text, color: color, public: public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = updateNote