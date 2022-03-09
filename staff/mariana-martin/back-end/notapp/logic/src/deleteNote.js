const { models: { User, Note }} = require('data') 

function deleteNote(userId, noteId) {

    return Note.findById(noteId)
        .then(note => {

            if(note.user === userId ) console.log(note + 'eliminada')
            else console.log(note.user)
        })
}

module.exports = deleteNote
