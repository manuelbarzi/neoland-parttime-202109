
const { Note, User } = require('data/src/models')

function retrievePublicNotes (userId){
  return  User.findById(userId)
        .then( doc  => {
            if (!doc) throw new Error ('User not logged. Please log in to continue')
            else return Note.find({public: true})
                .then(notes => notes)
        
        })
}
module.exports = retrievePublicNotes