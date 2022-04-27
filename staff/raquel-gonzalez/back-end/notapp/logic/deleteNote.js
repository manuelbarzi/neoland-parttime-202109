/*const { User } = require('data/src/models')
const { Note } = require('data/src/models')

function deleteNote(userId, noteId){
 
    return User.findById (userId)
    .then (user => {
        if (!user ) throw new Error (`user with id ${userId} not found`)

        return Note.findById (noteId)
    })
        
    .then (note=>{
        if (!note) throw new Error ( `note with is ${noteId} not found`)

        if (note.user.toString () !==userId) throw new Error ( `note with id ${noteId} does not correspond to user with id ${userId}`)
    
        return Note.deleteOne ({_id: noteId})
    })
    .then (result => {})
}


module.exports = deleteNote */

const { models: {  Note }} = require('data')

function deleteNote (userId, noteId) {
// para borrar una nota, necesitas el id de la nota y del usuario.
//utilizas el deleteOne pasando comp parametro el id de la nota y del usuario.
    return Note.deleteOne ({ user: userId, _id: noteId })

    // con matchedCount nos devuelve el numero de notas borradas.
    //si el numero es 0, no se borro ninguna nota. no se encuentro el id de la nota
    .then (result =>{
        const { matchedCount } = result

        if (matchedCount === 0) throw new Error (`note with id ${noteId} not found`)
    }
    )
}

module.exports = deleteNote