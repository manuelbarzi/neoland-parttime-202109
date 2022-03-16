//versión  con más pasos: buscando id de user -> buscando id de note -> y borrarla
//sólo que sería más consultas a base de datos, pero también está ok (3 consultas)

const { models: { User, Note }} = require('data') 

function deleteNote(userId, noteId) {

    return User.findById(userId)
        .then(user => {
            if(!user) throw new Error(`user with id ${userId} not found`)

            return Note.findById(noteId)
        })
        .then(note => {
            if(!note) throw new Error(`note with id ${noteId} not found`)

                    //object id lo convierto a string
            if(note.user.toString() !== userId) throw new Error(`note with id ${noteId} does not correspond to user id ${userId}`)
            return Note.deleteOne({ _id: noteId})
        })
        .then(result => {})

}

module.exports = deleteNote
