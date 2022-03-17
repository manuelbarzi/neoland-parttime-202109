const { models: { Note } } = require('../../data')
const { validators: {validateId}} = require('../../commons')

function updateNote(id, noteId, color, public, text) {
    validateId(id)

    return Note.updateOne({ user: id, _id: noteId }, { color, public, text })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0) throw new Error(`note with id ${id} and user id ${id} not found`)
    })
}

module.exports = updateNote