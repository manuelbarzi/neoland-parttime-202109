//Recupero todas las notas mías: las devuelvo

const { models : { User, Note }} = require('data')
const { validators: { validateId }} =require('commons')



function retrieveNotes(userId){
    validateId(userId, 'user id') //'user id' como 2do paramentro para los validators (explain)
  
    return User.findById(userId)
        .then(user => {
            if(!user) throw new Error(`user with id ${userId} not found`)

            return Note.find({ user: userId}).lean().populate('user').sort('-date')
        })
        .then(notes => {
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v

                note.userId = note.user._id.toString()
                note.userName = note.user.name

                delete note.user

                 const { comments } = note
                
                 if(comments){
                comments.forEach(comment => {
                 comment.id = comment._id.toString()

                 delete comment._id
                 delete comment.__v
                 })
                }
            })
            return notes
        })

}

module.exports = retrieveNotes
