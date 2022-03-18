const { Note, User } = require('data/src/models')
function findPublicNotes(UserId){

  return  User.findById(UserId)
    .then(user => {
        if (user){
            return  Note.find({public: true})
            .then(notes => 
                notes.map(note=>{
                    const doc = note._doc

                    doc.id = doc._id.toString()
                    delete doc._id
        
                    delete doc.__v
        
        
                    return doc
                })
                )

        }
        else throw new Error ('please, sign up')
    })
}
module.exports = findPublicNotes