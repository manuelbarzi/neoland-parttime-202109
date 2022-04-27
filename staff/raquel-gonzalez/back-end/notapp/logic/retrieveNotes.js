/*const { Note } = require("data/src/models")

function retrieveNotes (userId, ownerId){

    if ( userId === ownerId){
        return  Note.find({user : userId})
            .then(notes => notes)
    }
    else {
        return  Note.find({user : ownerId, public: true})
        .then(notes => notes)
    }

}
module.exports = retrieveNotes */

const { models: { User, Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retrieveNotes(userId) {
    validateId(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Note.find({ user: userId }).lean()
        })
        .then(notes => {
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v

                const { comments } = note

                comments.forEach(comment => {
                    comment.id = comment._id.toString()
    
                    delete comment._id
                    delete comment.__v
                })
            })

            return notes
        })
}

module.exports = retrieveNotes