const { Note } = require('data/src/models')

//Necesito el id del usuario y el id de la nota, porque si la nota es publica dejaremos ver y si no no, si no son sus propias notas.

function retrieveNote(userId, noteId){
    
    return Note.find({ user: userId, _id:noteId})
        .then(note => note )
}

module.exports = retrieveNote