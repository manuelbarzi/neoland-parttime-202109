const { User } = require('../../data/src/models')
const { Note } = require('../../data/src/models')

function deleteNote(userId, noteId) {

    return Note.findById(noteId)

        .then(note => {
            if (note.user === userId) console.log(note + 'eliminated')
            // console.log(`${note} borrada`)

            else
                console.log(note.user)
        })
}

module.exports = deleteNote 