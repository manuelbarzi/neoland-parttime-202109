const { Note } = require('data/src/models')

function retrieveNote (userId, noteId){
    return Note.find({ user : userId, _id: noteId })
        .then(note => note)
}
module.exports = retrieveNote

