const { User } = require('data/src/models')
const { Note } = require('data/src/models')

function deleteNote(noteId, userId){

return Note.deleteOne({ _id: noteId, user: userId })
          .then(result => {
              const { deletedCount } = result
  
              if (deletedCount === 0)
                  throw new Error(`user with id ${userId} not found or wrong credentials`)
          })
  }



module.exports = deleteNote