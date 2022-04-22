
const { Note, User } = require('data/src/models')

function retrievePublicNotes (userId){


  return User.findById(userId)
      .then(user => {
          if (!user) throw new Error(`user with id ${userId} not found`)

          return Note.find({ public: true }).lean().populate('user').sort('-date')
          .then(notes => {
            
            notes.forEach(note => {
              
              note.id = note._id.toString()
  
              delete note._id
              delete note.__v
  
              note.userId = note.user._id.toString()
              note.userName = note.user.name
  
              delete note.user

            
  
            })
  
            return notes
  })
      })
     

}
module.exports = retrievePublicNotes
