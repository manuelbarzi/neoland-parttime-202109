const { Note } = require('../../data/src/models')

function updateNote(noteId, data, color, public, text) {
    return Note.updateOne({ _id: noteId }, { data, color, public, text})
}

module.exports = updateNote