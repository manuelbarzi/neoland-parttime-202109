const { models: { Note }} = require('data')

function updateNote(userId, noteId, text, color, public) {
    // TODO validate input arguments

    return Note.updateOne({ user: userId, _id: noteId }, { text, color, public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = updateNote