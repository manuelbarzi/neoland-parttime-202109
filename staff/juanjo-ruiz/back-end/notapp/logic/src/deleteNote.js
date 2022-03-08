const { models: { Note, User } } = require('data')

function deleteNote(userId, noteId) {

    return Note.findById(noteId)
        .then(note => {
            if (note.user === userId)
                console.log(`${note} borrada`)

            else
                console.log(note.user)
        })
}

module.exports = deleteNote