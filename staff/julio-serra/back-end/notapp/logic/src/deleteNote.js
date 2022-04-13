const { models: { User, Note }} = require('../../data')
const { validators: { validateId }, errors: { AuthError, NotFoundError }} = require('../../commons')

function deleteNote(id, noteId) {
    validateId(id, 'user id')
    validateId(noteId, 'note id')

    return Promise.all([User.findById(id), Note.findById(noteId)])
        .then(([user, note]) => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (!note) throw new NotFoundError(`note with id ${noteId} not found`)

            if (note.user.toString() !== id) throw new AuthError(`note with id ${noteId} does not belong to user with id ${id}`)  
            
            return Note.deleteOne({ _id: noteId })
        })
        .then(() => {})
}

module.exports = deleteNote