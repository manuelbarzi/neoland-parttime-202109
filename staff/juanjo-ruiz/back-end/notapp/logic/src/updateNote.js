const { models: { Note } } = require('data')

function updateNote(userId, noteId, text, color, public) {

    return Note.updateOne({ user: userId, _id: noteId }, { text: text, color: color, public: public })
        .then(result => {
            const { matchedCount } = result

            if (matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })
}

module.exports = updateNote