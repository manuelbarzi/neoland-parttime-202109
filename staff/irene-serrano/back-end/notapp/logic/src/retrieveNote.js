const { Note, User } = require('data/src/models')
const { validators: { validateId }, errors: { NotFoundError, AuthError } } = require('commons')


module.exports = (userId, noteId)=> {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(userId).lean(), Note.findById(note).lean().populate('user')])
        .then(([user,note]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user._id.toString() !== userId && !note.public)
                throw new AuthError(`user with id ${userId} cannot retrieve non-public note with id ${noteId}`)

            note.id = note._id.toString()

            delete note._id
            delete note.__v

            note.userId = note.user._id.toString()
            note.userName = note.user.name

            delete note.user

            return note

        })

}
/* 
function retrieveNote (userId, noteId){
    return Note.find({ user : userId, _id: noteId })
        .then(note => note)
}
module.exports = retrieveNote */