const { models: { Note }} = require('data')

function deleteNote(userId, noteId) {
    // TODO validate input arguments

    return Note.deleteOne({ user: userId, _id: noteId })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = deleteNote