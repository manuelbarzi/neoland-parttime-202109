const { models : { Note }} = require('data')

//Recupero todas las notas mías: las devuelvo
//Si recupero nota de alguién más: necesito miId y el Id del usuario , so:
//o si hacemos click en un usuario veremos todas sus notas

function retrieveNotes(userId, ownerId){

    if(userId === ownerId){

        return Note.find({ user: userId })
            .then(notes => notes)
    }
         else {
        return Note.find({ user: ownerId, public: true })
            .then(notes => notes)
    }
}

module.exports =retrieveNotes
