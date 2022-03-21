const {models : { Note } } = require('data')

function retrieveNote (userId, noteId){
    return Note.find({ user : userId, _id: noteId })
        .then(note => note)
}
module.exports = retrieveNote