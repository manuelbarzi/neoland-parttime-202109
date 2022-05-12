const { models: { User, Note }} = require('data')
const { validators: { validateId }, errors: { AuthError }} = require('commons')

function deleteNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(userId), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user.toString() !== userId) throw new AuthError(`note with id ${noteId} does not belong to user with id ${userId}`)  
            
            return Note.deleteOne({ _id: noteId })
        })
        .then(() => {})
}

module.exports = deleteNote