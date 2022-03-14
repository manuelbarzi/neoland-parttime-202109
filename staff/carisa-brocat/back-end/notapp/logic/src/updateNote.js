const { models: { Note } } = require('data')

function updateNote(userId, noteId, text, color, public) {
    return Note.updateOne({ user: userId, _id: noteId }, { text, color, public })
        .then(result => {
            const { matcheCount } = result

            if (matcheCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = updateNote