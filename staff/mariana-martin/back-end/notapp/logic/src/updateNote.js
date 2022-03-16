const { Note } = require('data/src/models')

function updateNote(userId, noteId, text, color, public) {
                            //filtro                       //campo
    return Note.updateOne({user: userId, _id: noteId}, { text, color, public })
        .then(result => {

            const { matchedCount } = result  //destructuro propiedad matchedCount de result

            if(matchedCount === 0) throw new Error(`note with id ${noteId} and user id ${userId} not found`)
        })

}

module.exports = updateNote