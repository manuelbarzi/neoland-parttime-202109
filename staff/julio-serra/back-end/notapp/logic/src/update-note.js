const { models: { Note } } = require('../../data')

function updateNote(id, noteId, color, public, text) {
    return Note.updateOne({ user: id, _id: noteId }, { color, public, text })
    .then(result => {
        const { matchedCount } = result

        if (matchedCount === 0) throw new Error(`note with id ${id} and user id ${id} not found`)
    })
}

module.exports = updateNote