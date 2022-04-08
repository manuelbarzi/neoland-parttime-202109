const { models: { User, Note }} = require('data')
const { validators: { validateId } } = require('commons')

function deleteNote(userId, noteId) {
    validateId(userId, 'user id')
    validateId(noteId, 'note id')
    
    return User.findById(userId) 
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            return Note.findById(noteId)
        })
        .then(note => {
            if (!note) throw new Error(`note with id ${noteId} not found`)

            if (note.user.toString() !== userId) throw new Error(`note with id ${noteId} does not correspond to user with id ${userId}`)

            return Note.deleteOne({ _id: noteId })
        })
        .then(result => {})
}

module.exports = deleteNote