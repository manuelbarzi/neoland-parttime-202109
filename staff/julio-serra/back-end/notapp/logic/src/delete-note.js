const { models: { User } } = require('../../data')
const { models: { Note } } = require('../../data')
const { validators: { validateId } } = require('../../commons')

function deleteNote(id, noteId) {
    validateId(id)
    return Note.deleteOne({ user: id, _id: noteId })

        .then(result => {
            const { matchedCount } = result
            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user ${id} not found`)
        })
}

module.exports = deleteNote 